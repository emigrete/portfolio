import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-zinc-950/70 backdrop-blur-md border-b border-zinc-800/50"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-mono font-bold text-xl tracking-tighter">
          {'<TW />'}
        </span>
        <div className="hidden md:flex gap-8 text-sm font-mono text-zinc-400">
          <a href="#about" className="hover:text-violet-400 transition-colors">01. Sobre mí</a>
          <a href="#timeline" className="hover:text-violet-400 transition-colors">02. Recorrido</a>
          <a href="#skills" className="hover:text-violet-400 transition-colors">03. Arsenal</a>
          <a href="#projects" className="hover:text-violet-400 transition-colors">04. Proyectos</a>
        </div>
        <a href="mailto:teodorowelyczko@gmail.com" className="px-5 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-lg text-sm hover:border-violet-500 hover:text-violet-400 transition-all font-mono">
          Contacto
        </a>
      </div>
    </motion.nav>
  );
}