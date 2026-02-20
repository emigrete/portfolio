export default async function handler(req, res) {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send('Falta el code de autorización de Spotify.');
  }

  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirect_uri = `https://${req.headers.host}/api/callback`;

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  try {
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri,
      }),
    });

    const data = await tokenResponse.json();

    if (data.error) {
      return res.status(400).send(`Error de Spotify: ${data.error_description}`);
    }

    // Mostramos el refresh_token para copiarlo y ponerlo en las env vars
    return res.status(200).send(`
      <html>
        <body style="font-family: monospace; background: #111; color: #1DB954; padding: 2rem;">
          <h2>✅ Autorización exitosa</h2>
          <p>Copiá este <strong>refresh_token</strong> y pegalo en las variables de entorno de Vercel como <code>SPOTIFY_REFRESH_TOKEN</code>:</p>
          <textarea style="width: 100%; height: 120px; background: #222; color: #fff; padding: 1rem; font-size: 14px; border: 1px solid #1DB954;" readonly>${data.refresh_token}</textarea>
          <p style="color: #aaa; margin-top: 1rem;">Una vez que lo agregues a Vercel y hagas redeploy, este endpoint ya no es necesario.</p>
        </body>
      </html>
    `);
  } catch (error) {
    return res.status(500).send(`Error: ${error.message}`);
  }
}
