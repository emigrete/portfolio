export default function Footer() {
  return (
    <footer className="mt-12 border-t border-zinc-900/50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-zinc-300 font-bold">Teodoro Welyczko</p>
          <p className="text-zinc-500 font-mono text-xs mt-1">Ing. en Informática · DevOps · Buenos Aires, AR</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:teodorowelyczko@gmail.com" className="text-zinc-500 hover:text-violet-400 font-mono text-xs transition-colors">
            teodorowelyczko@gmail.com
          </a>
          <span className="text-zinc-800">·</span>
          <a href="https://github.com/emigrete" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-300 font-mono text-xs transition-colors">
            GitHub
          </a>
          <span className="text-zinc-800">·</span>
          <a href="https://linkedin.com/in/teodoro-welyczko-809624270" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cyan-400 font-mono text-xs transition-colors">
            LinkedIn
          </a>
        </div>
        <p className="text-zinc-700 font-mono text-xs">© {new Date().getFullYear()} · React & Vite</p>
      </div>
    </footer>
  );
}