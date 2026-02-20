export default async function handler(req, res) {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  // Codificamos las credenciales en Base64 como pide Spotify
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
  const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

  try {
    // 1. Pedimos un Access Token nuevo y fresquito a Spotify usando tu Refresh Token eterno
    const tokenResponse = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    });

    const tokenData = await tokenResponse.json();
    const access_token = tokenData.access_token;

    // 2. Usamos el token fresquito para preguntar qué estás escuchando AHORA
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // Si estás en pausa o tenés Spotify cerrado
    if (response.status === 204 || response.status > 400) {
      return res.status(200).json({ isPlaying: false });
    }

    const song = await response.json();

    // Verificamos que sea una canción y esté reproduciéndose
    if (song.item === null || song.currently_playing_type !== 'track' || !song.is_playing) {
      return res.status(200).json({ isPlaying: false });
    }

    // Le devolvemos la info limpia a nuestro Frontend (React)
    return res.status(200).json({
      isPlaying: true,
      title: song.item.name,
      artist: song.item.artists.map((_artist) => _artist.name).join(', '),
      albumArt: song.item.album.images[0].url,
      link: song.item.external_urls.spotify,
    });
  } catch (error) {
    return res.status(500).json({ error: 'Hubo un error al conectar con Spotify' });
  }
}