export default function Footer() {
  return (
    <footer className="text-center py-12 text-zinc-500 font-mono text-sm mt-12 border-t border-zinc-900/50">
      <p>
        Construido por <span className="text-violet-400 hover:text-cyan-400 transition-colors cursor-pointer">Teodoro Welyczko</span>
      </p>
      <p className="mt-2 text-xs opacity-60">© {new Date().getFullYear()} - Impulsado por React & Vite</p>
    </footer>
  );
}