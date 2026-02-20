import { motion } from 'framer-motion';
import { GraduationCap, Award, Server, Code, Globe } from 'lucide-react';

export default function Timeline() {
  const uniMilestones = [
    {
      year: "2024 - Presente",
      title: "Ingeniería en Informática",
      institution: "Universidad de Palermo (UP)",
      description: "Estudiante de 3º año. Materias destacadas: Estructura de Datos y Algoritmos, Laboratorio I (Java), Laboratorio II (SQL y bases de datos).",
      progress: 41, // Acá seteamos tu porcentaje
      icon: GraduationCap,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    }
  ];

  const certMilestones = [
    {
      year: "2025",
      title: "DevOps Engineer",
      institution: "Digital House",
      description: "Prácticas de cultura DevOps. Uso de herramientas como Git, Linux/Debian, Docker, Kubernetes, Terraform, Ansible, AWS y CI/CD Pipelines.",
      icon: Server,
      color: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20"
    },
    {
      year: "2024",
      title: "Full Stack Development",
      institution: "Digital House",
      description: "Desarrollo web full-stack. Creación de proyectos utilizando React, Node.js (back-end) y Sequelize para bases de datos relacionales.",
      icon: Code,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      year: "2022",
      title: "First Certificate in English (B2)",
      institution: "Cambridge",
      description: "Certificación oficial de nivel intermedio-alto de inglés.",
      icon: Globe,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="timeline" className="py-24 max-w-6xl mx-auto">
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-3xl md:text-4xl font-bold text-zinc-100 mb-16 flex items-center gap-4"
      >
        <span className="text-violet-400 font-mono text-xl">02.</span> Educación y Certificados
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Columna Izquierda: Universidad */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <GraduationCap className="text-cyan-400" size={24} />
            </div>
            <h4 className="text-2xl font-bold text-zinc-100">Universidad</h4>
          </div>

          <div className="relative border-l border-zinc-800 ml-6 space-y-10">
            {uniMilestones.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="relative pl-8 group">
                  <div className={`absolute -left-[17px] top-1 h-8 w-8 rounded-full bg-zinc-950 border-2 ${item.border} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <div className={`h-2.5 w-2.5 rounded-full ${item.bg.replace('/10', '')}`}></div>
                  </div>
                  
                  <div className="glass-card p-6 rounded-2xl hover:border-cyan-500/30 transition-colors">
                    <span className="font-mono text-xs text-cyan-400/80 mb-2 block">{item.year}</span>
                    <h5 className="text-lg font-bold text-zinc-200 mb-1">{item.title}</h5>
                    <span className="text-sm font-semibold text-zinc-500 mb-3 block">{item.institution}</span>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light">
                      {item.description}
                    </p>

                    {/* BARRA DE PROGRESO ANIMADA */}
                    {item.progress && (
                      <div className="mt-6 pt-5 border-t border-zinc-800/50">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-mono text-zinc-400">Progreso de la carrera</span>
                          <span className="text-xs font-mono text-cyan-400 font-bold">{item.progress}%</span>
                        </div>
                        <div className="w-full bg-zinc-800/80 rounded-full h-1.5 overflow-hidden shadow-inner">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.progress}%` }}
                            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="bg-cyan-400 h-1.5 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Columna Derecha: Certificaciones */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20">
              <Award className="text-violet-400" size={24} />
            </div>
            <h4 className="text-2xl font-bold text-zinc-100">Certificados</h4>
          </div>

          <div className="relative border-l border-zinc-800 ml-6 space-y-10">
            {certMilestones.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="relative pl-8 group">
                  <div className={`absolute -left-[17px] top-1 h-8 w-8 rounded-full bg-zinc-950 border-2 ${item.border} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <div className={`h-2.5 w-2.5 rounded-full ${item.bg.replace('/10', '')}`}></div>
                  </div>
                  
                  <div className="glass-card p-6 rounded-2xl hover:border-violet-500/30 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-mono text-xs text-violet-400/80">{item.year}</span>
                      <Icon size={18} className={item.color} />
                    </div>
                    <h5 className="text-lg font-bold text-zinc-200 mb-1">{item.title}</h5>
                    <span className="text-sm font-semibold text-zinc-500 mb-3 block">{item.institution}</span>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}