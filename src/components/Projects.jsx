import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity, Server, FolderGit2, Gitlab, TerminalSquare } from 'lucide-react';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // --- 1. PROYECTOS PRINCIPALES (Tus "Pesos Pesados" Backend/DevOps) ---
  const featuredProjects = [
    {
      title: "Desafío DevOps Jr",
      description: "Prueba técnica real para un rol DevOps. Consiste en la dockerización, automatización y orquestación completa de una aplicación con Frontend en Angular y Backend en Flask.",
      tech: ["Docker", "Kubernetes", "GitLab CI/CD", "Docker Compose"],
      repoLink: "https://gitlab.com/emigrete/desafio",
      repoIcon: Gitlab, // Usamos el ícono de GitLab
      icon: TerminalSquare,
      color: "emerald" // Color esmeralda para destacar
    },
    {
      title: "WelyAlerts",
      description: "Sistema de alertas y notificaciones en tiempo real para streamers. Integración directa con la API de Twitch para gestionar eventos en vivo de manera ágil y sin latencia.",
      tech: ["React", "Twitch API", "Node.js", "Tailwind"],
      repoLink: "https://github.com/emigrete/emigrete-alerts",
      repoIcon: Github,
      live: "https://github.com/emigrete/emigrete-alerts",
      icon: Activity,
      color: "violet"
    },
    {
      title: "Homebanking Enterprise Core",
      description: "Desarrollo académico enfocado en la robustez del backend. Diseñado utilizando arquitectura en capas estrictas (DAO, Servicios e Interfaces) simulando un entorno transaccional real.",
      tech: ["Java", "OOP", "Arquitectura en Capas", "SQL"],
      repoLink: "https://github.com/emigrete/Home-banking",
      repoIcon: Github,
      icon: Server,
      color: "cyan"
    }
  ];

  // --- 2. OTROS PROYECTOS (Full-Stack y Frontend) ---
  const otherProjects = [
    {
      title: "Plataforma Web Full-Stack",
      description: "Implementación de base de datos relacional, modelo MVC y servicios RESTful desde cero.",
      tech: ["React", "Node.js", "Sequelize"],
      github: "https://github.com/emigrete/DPFS_Teodoro_Welyczko-REACT"
    },
    {
      title: "Red Social (Clon Pajarito)",
      description: "Creación de la lógica y estructura DOM para simular las funcionalidades principales de una red social.",
      tech: ["JavaScript", "DOM", "CSS"],
      github: "https://github.com/emigrete/Red-social-pajarito"
    },
    {
      title: "React Custom Hooks",
      description: "Colección de hooks personalizados reutilizables desarrollados para optimizar y aislar la lógica.",
      tech: ["React", "JavaScript", "Hooks"],
      github: "https://github.com/emigrete/CustomHooks"
    }
  ];

  const getColorClasses = (color) => {
    const classes = {
      violet: { text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20", hoverBorder: "hover:border-violet-500/50", glow: "from-violet-500/5" },
      cyan: { text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", hoverBorder: "hover:border-cyan-500/50", glow: "from-cyan-500/5" },
      emerald: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", hoverBorder: "hover:border-emerald-500/50", glow: "from-emerald-500/5" }
    };
    return classes[color];
  };

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto">
      
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-3xl md:text-4xl font-bold text-zinc-100 mb-12 flex items-center gap-4"
      >
        <span className="text-violet-400 font-mono text-xl">04.</span> Proyectos Destacados
      </motion.h3>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
      >
        {featuredProjects.map((project, index) => {
          const Icon = project.icon;
          const RepoIcon = project.repoIcon;
          const colors = getColorClasses(project.color);

          return (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`glass-card rounded-3xl p-8 ${colors.hoverBorder} hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${colors.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl ${colors.bg} ${colors.border} border group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className={colors.text} />
                  </div>
                  
                  <div className="flex gap-3 text-zinc-400">
                    {project.repoLink && (
                      <a href={project.repoLink} target="_blank" rel="noreferrer" className={`hover:${colors.text} transition-colors p-2 hover:bg-zinc-800/50 rounded-xl`}>
                        <RepoIcon size={22} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className={`hover:${colors.text} transition-colors p-2 hover:bg-zinc-800/50 rounded-xl flex items-center gap-2`}>
                        {index === 1 && <span className="flex h-2.5 w-2.5 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500"></span>
                        </span>}
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h4 className={`text-xl font-bold text-zinc-100 mb-4 group-hover:${colors.text} transition-colors`}>
                  {project.title}
                </h4>
                <p className="text-zinc-400 text-sm mb-8 flex-grow leading-relaxed font-light">
                  {project.description}
                </p>
                
                <ul className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <li key={i} className="px-3 py-1.5 bg-zinc-900/80 border border-zinc-800/80 rounded-lg text-xs font-mono text-zinc-300 backdrop-blur-md">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* --- SECCIÓN: OTROS PROYECTOS --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12"
      >
        <h4 className="text-2xl font-bold text-zinc-100 mb-2">Otros Repositorios</h4>
        <p className="text-zinc-500 font-mono text-sm">Explorando tecnologías y resolviendo problemas</p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-3 gap-4"
      >
        {otherProjects.map((project, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-300 flex flex-col group"
          >
            <div className="flex justify-between items-center mb-4">
              <FolderGit2 size={24} className="text-zinc-500 group-hover:text-cyan-400 transition-colors" />
              <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors">
                <Github size={18} />
              </a>
            </div>
            <h5 className="text-lg font-bold text-zinc-200 mb-2 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h5>
            <p className="text-zinc-400 text-sm mb-6 flex-grow font-light leading-relaxed">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-x-3 gap-y-1 mt-auto font-mono text-[10px] text-zinc-500">
              {project.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 text-center">
        <a 
          href="https://github.com/emigrete" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-lg hover:border-violet-500 hover:text-violet-400 transition-colors font-mono text-sm"
        >
          Ver archivo completo en GitHub
        </a>
      </div>

    </section>
  );
}