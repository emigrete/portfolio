import { motion } from 'framer-motion';
import { Terminal, GraduationCap, Award, BookOpen, Globe } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const educationItems = [
    {
      title: "Ing. en Informática",
      subtitle: "Universidad de Palermo",
      status: "En curso (3º Año)",
      icon: BookOpen,
      color: "text-cyan-400",
      bg: "bg-cyan-400/10"
    },
    {
      title: "DevOps Engineer",
      subtitle: "Digital House",
      status: "2025",
      icon: Terminal,
      color: "text-violet-400",
      bg: "bg-violet-400/10"
    },
    {
      title: "Full Stack Development",
      subtitle: "Digital House",
      status: "2024",
      icon: GraduationCap,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10"
    },
    {
      title: "First Certificate (B2)",
      subtitle: "Cambridge English",
      status: "Acreditado",
      icon: Globe,
      color: "text-pink-400",
      bg: "bg-pink-400/10"
    }
  ];

  return (
    <section id="about" className="py-24 max-w-6xl mx-auto">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
      >
        {/* Luces de fondo dinámicas */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-violet-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-zinc-100 mb-12 flex items-center gap-4 relative z-10">
          <span className="text-violet-400 font-mono text-xl">01.</span> Quién soy
        </motion.h3>
        
        <div className="grid lg:grid-cols-12 gap-12 relative z-10">
          
          {/* Columna Izquierda: Bio estilo Terminal */}
          <motion.div variants={itemVariants} className="lg:col-span-7 h-full">
            <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-2xl h-full flex flex-col overflow-hidden shadow-2xl">
              {/* Header de la Terminal */}
              <div className="bg-zinc-900/50 px-4 py-3 border-b border-zinc-800 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-4 text-xs font-mono text-zinc-500">teodoro@ubuntu:~ /about</span>
              </div>
              
              {/* Contenido de la Bio */}
              <div className="p-6 md:p-8 space-y-6 text-zinc-300 font-light leading-relaxed">
                <p>
                  Tengo 21 años y actualmente curso el 3º año de <span className="text-cyan-400 font-medium">Ingeniería en Informática</span>. Mi viaje tecnológico empezó creando interfaces en la web, pero mi verdadera vocación despertó al descubrir la complejidad de los servidores y el diseño de arquitecturas robustas.
                </p>
                <p>
                  Me destaco por mi rápida adaptabilidad. Mientras mantengo un ritmo académico fuerte adelantando materias en la universidad, dedico gran parte de mi tiempo a explorar e implementar soluciones en infraestructuras Cloud.
                </p>
                <p>
                  Mi objetivo es aportar valor en equipos que abracen las <span className="text-violet-400 font-medium">metodologías ágiles</span> y la automatización continua para llevar software a producción sin fricciones.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Tarjetas de Educación */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-cyan-400" size={24} />
              <h4 className="text-xl font-bold text-zinc-100">Trayectoria Académica</h4>
            </div>
            
            <div className="space-y-4 flex-grow">
              {educationItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group bg-zinc-900/40 border border-zinc-800 hover:border-violet-500/30 rounded-xl p-4 flex items-center gap-4 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className={`p-3 rounded-lg ${item.bg} border border-transparent group-hover:border-current transition-colors ${item.color}`}>
                      <Icon size={20} />
                    </div>
                    <div className="flex-grow">
                      <h5 className="font-bold text-zinc-200 text-sm group-hover:text-zinc-100 transition-colors">{item.title}</h5>
                      <p className="text-xs text-zinc-500 font-mono mt-1">{item.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-zinc-400 bg-zinc-950 px-2 py-1 rounded border border-zinc-800">
                        {item.status}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}