import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Terminal, ChevronRight, Eye } from 'lucide-react';
import CVModal from './CVModal'; // <-- IMPORTAMOS EL COMPONENTE NUEVO

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      <section className="min-h-[95vh] flex flex-col justify-center items-center text-center relative pt-20 overflow-hidden">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-tr from-violet-500/10 to-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '4s' }} />

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
          
          <motion.div variants={itemVariants} className="flex items-center gap-2 bg-zinc-900/60 border border-zinc-800 text-zinc-300 px-5 py-2.5 rounded-full font-mono text-xs md:text-sm mb-8 backdrop-blur-md shadow-lg shadow-violet-500/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Terminal size={14} className="text-violet-400 ml-1" />
            <span>System.out.println("Status: Open to work");</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-zinc-100 leading-tight">
            Ingeniería & <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">
              Cultura DevOps.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-light leading-relaxed">
            Soy <span className="text-zinc-200 font-medium">Teodoro Welyczko</span>. Construyo arquitecturas backend robustas y automatizo infraestructuras escalables. Transformo código en sistemas de alto rendimiento.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
            
            <a href="#projects" className="group flex items-center justify-center gap-2 px-8 py-4 bg-zinc-100 text-zinc-950 font-bold rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              Ver Proyectos
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Este botón ahora abre nuestro componente React nativo */}
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900/80 border border-zinc-700 text-zinc-300 font-bold rounded-xl hover:border-violet-500 hover:text-violet-400 hover:bg-zinc-800 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto cursor-pointer"
            >
              <Eye size={18} className="group-hover:-translate-y-1 transition-transform" />
              Ver CV
            </button>

          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 mt-8">
            <a href="https://github.com/emigrete" target="_blank" rel="noreferrer" className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-violet-500 hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-300 backdrop-blur-sm text-zinc-400">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/teodoro-welyczko-809624270" target="_blank" rel="noreferrer" className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm text-zinc-400">
              <Linkedin size={22} />
            </a>
          </motion.div>

        </motion.div>
      </section>

      {/* Renderizamos el Modal Nativo pasándole el estado */}
      <CVModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}