import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SpotifyWidget() {
  const [song, setSong] = useState(null);
  const [isTokenExpired, setIsTokenExpired] = useState(false);

  useEffect(() => {
    // Este token ya está vencido, pero lo dejamos de placeholder hasta hacer el backend
    const token = 'BQBlayl2U8OAIJdZWYETeymJHSK067m185UCkZva4WKmP0fze4WOX9Hl56KvDQ79U-uIpmaN_N6Mk5d7JG0VNREPhZZx-4oeP2R8X0KPmCK4n2IqwNcbb--qQJPPin5HY59SR-Dy8undb495TQ4Q9eHEmneI0UXyQqstK9H1B10H7_y_zP5gHENLnwTfVYHbGGed8acny4LulGjWE7yydOKjgdUbrnvM5F0Fqtv5-HHNc6aw2UVcrsvp8L5lRaLCH9810U8tS8LLbhVO24rkIXzKsRjsx-bccANcym92jlkQ0RIt1w';

    async function getNowPlaying() {
      if (isTokenExpired) return;

      try {
        const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        // Si el token se venció (401), frenamos todo para no spamear la consola
        if (res.status === 401) {
          setIsTokenExpired(true);
          setSong(null);
          return;
        }

        if (res.status === 204 || res.status > 400) {
          setSong(null);
          return;
        }

        const data = await res.json();

        if (data.item && data.currently_playing_type === 'track' && data.is_playing) {
          setSong({
            title: data.item.name,
            artist: data.item.artists.map(_artist => _artist.name).join(', '),
            albumArt: data.item.album.images[0].url,
            link: data.item.external_urls.spotify,
          });
        } else {
          setSong(null); 
        }
      } catch (error) {
        console.error("Error cargando Spotify:", error);
      }
    }

    getNowPlaying();
    
    // Si el token expiró, no creamos el intervalo
    if (isTokenExpired) return;

    const interval = setInterval(getNowPlaying, 10000);
    return () => clearInterval(interval);

  }, [isTokenExpired]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 p-3 rounded-2xl shadow-2xl max-w-[280px]"
    >
      {song && !isTokenExpired ? (
        // --- ESTADO ACTIVO ---
        <>
          <a href={song.link} target="_blank" rel="noreferrer" className="relative h-12 w-12 flex-shrink-0 rounded-full overflow-hidden border border-[#1DB954] group cursor-pointer">
            <motion.img 
              src={song.albumArt} 
              alt={song.title} 
              className="h-full w-full object-cover"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-900 rounded-full border border-zinc-800"></div>
          </a>
          <div className="flex flex-col flex-grow min-w-0">
            <div className="flex items-center gap-1.5 mb-1">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#1DB954]">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.66 12.9c.42.18.6.78.301 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              <span className="text-[10px] font-bold text-[#1DB954] tracking-wider uppercase">En Vivo</span>
              <div className="flex items-end gap-[2px] h-3 ml-auto">
                <motion.div animate={{ height: ["4px", "12px", "4px"] }} transition={{ repeat: Infinity, duration: 0.9 }} className="w-1 bg-[#1DB954] rounded-t-sm" />
                <motion.div animate={{ height: ["10px", "4px", "10px"] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1 bg-[#1DB954] rounded-t-sm" />
                <motion.div animate={{ height: ["6px", "10px", "6px"] }} transition={{ repeat: Infinity, duration: 0.7 }} className="w-1 bg-[#1DB954] rounded-t-sm" />
              </div>
            </div>
            <a href={song.link} target="_blank" rel="noreferrer" className="text-zinc-100 font-bold text-xs truncate w-[140px] hover:underline cursor-pointer">{song.title}</a>
            <p className="text-zinc-400 text-[10px] truncate w-[140px]">{song.artist}</p>
          </div>
        </>
      ) : (
        // --- ESTADO INACTIVO / PAUSADO ---
        <>
          <div className="relative h-10 w-10 flex-shrink-0 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
             <svg viewBox="0 0 24 24" className="w-5 h-5 fill-zinc-500">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.66 12.9c.42.18.6.78.301 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
             </svg>
          </div>
          <div className="flex flex-col flex-grow min-w-0 pr-4">
             <span className="text-[10px] font-bold text-zinc-500 tracking-wider uppercase">Spotify</span>
             <p className="text-zinc-400 text-xs">Pausado / Offline</p>
          </div>
        </>
      )}
    </motion.div>
  );
}