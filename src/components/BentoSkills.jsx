import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Server, Database, Cloud, Code2, MapPin, Terminal, Cpu, Braces } from 'lucide-react';
import { MouseEvent } from 'react';

// Componente para el efecto de luz que sigue al mouse
function MouseGlowCard({ children, className }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      whileHover={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      className={`relative group overflow-hidden ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </motion.div>
  );
}

export default function BentoSkills() {
  // Variantes para la animación en cascada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto">
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-3xl md:text-4xl font-bold text-zinc-100 mb-12 flex items-center gap-4"
      >
        <span className="text-violet-400 font-mono text-xl">03.</span> Arsenal Técnico
      </motion.h3>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]"
      >
        
        {/* Tarjeta DevOps (Con efecto Mouse Glow) */}
        <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 h-full">
          <MouseGlowCard className="glass-card rounded-3xl p-8 flex flex-col justify-between h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -mr-20 -mt-20 transition-all group-hover:bg-violet-500/20" />
            <Cloud size={40} className="text-violet-400 mb-4" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-3 text-zinc-100">Cloud & DevOps</h3>
              <p className="text-zinc-400 text-sm mb-8 leading-relaxed font-light">Infraestructura como código y automatización continua. Diseño pipelines robustos para despliegues sin interrupciones.</p>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Ansible', 'CI/CD Pipelines', 'Linux'].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-zinc-900/80 border border-zinc-800 rounded-lg text-xs font-mono text-zinc-300 shadow-sm backdrop-blur-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </MouseGlowCard>
        </motion.div>

        {/* Tarjeta Backend */}
        <motion.div variants={itemVariants} className="h-full md:col-span-2">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="glass-card rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group h-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl transition-all group-hover:bg-cyan-500/20" />
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <Server size={28} className="text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-100">Backend Arq.</h3>
            </div>
            <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6 relative z-10">Arquitectura en capas (DAO, Servicios), microservicios y APIs RESTful de alta disponibilidad.</p>
            <div className="flex gap-2 relative z-10">
              <span className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-mono text-zinc-300 flex items-center gap-2"><Terminal size={12}/> Java</span>
              <span className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-mono text-zinc-300 flex items-center gap-2"><Terminal size={12}/> Python</span>
              <span className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-mono text-zinc-300 flex items-center gap-2"><Terminal size={12}/> Node.js</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Tarjeta Data */}
        <motion.div variants={itemVariants} className="h-full">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="glass-card rounded-3xl p-6 flex flex-col justify-between group h-full relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-3 bg-emerald-500/10 w-fit rounded-xl border border-emerald-500/20 mb-4">
              <Database size={24} className="text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="font-bold mb-2 text-zinc-100 text-lg">Bases de Datos</h3>
              <div className="flex flex-col gap-1">
                <p className="text-xs text-zinc-400 font-mono flex items-center gap-2"><Cpu size={12}/> Relacionales (SQL)</p>
                <p className="text-xs text-zinc-400 font-mono flex items-center gap-2"><Cpu size={12}/> NoSQL (MongoDB)</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tarjeta Frontend */}
        <motion.div variants={itemVariants} className="h-full">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="glass-card rounded-3xl p-6 flex flex-col justify-between group h-full relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-3 bg-pink-500/10 w-fit rounded-xl border border-pink-500/20 mb-4">
              <Code2 size={24} className="text-pink-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="font-bold mb-2 text-zinc-100 text-lg">Frontend</h3>
              <div className="flex flex-col gap-1">
                <p className="text-xs text-zinc-400 font-mono flex items-center gap-2"><Braces size={12}/> React</p>
                <p className="text-xs text-zinc-400 font-mono flex items-center gap-2"><Braces size={12}/> Tailwind CSS</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tarjeta Ubicación */}
        <motion.div variants={itemVariants} className="md:col-span-4 h-full">
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="glass-card rounded-3xl p-6 flex items-center justify-between border-violet-500/20 overflow-hidden relative h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-cyan-500/5 opacity-50" />
            <div className="flex items-center gap-5 relative z-10">
              <div className="p-4 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-inner">
                <MapPin size={24} className="text-violet-400" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-100 text-lg">Base de Operaciones</h3>
                <p className="text-sm text-zinc-400 font-mono mt-1">Don Torcuato, Buenos Aires, AR</p>
              </div>
            </div>
            <div className="flex items-center gap-3 relative z-10 mr-4">
               <span className="text-xs font-mono text-cyan-400/80 hidden sm:block">ESTADO: ONLINE</span>
               <div className="h-3 w-3 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.6)]"></div>
            </div>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}