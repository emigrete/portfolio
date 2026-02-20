import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Download, Github, Linkedin, User, GraduationCap, Award, FolderGit2, Code2, Terminal, Gitlab, ExternalLink } from 'lucide-react';

export default function CVModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-12 bg-zinc-950/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()} 
            className="bg-zinc-950 border border-zinc-800 rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden shadow-2xl shadow-violet-500/10"
          >
            {/* Header del Modal */}
            <div className="flex justify-between items-center p-4 md:px-8 bg-zinc-900/80 border-b border-zinc-800 backdrop-blur-md sticky top-0 z-10">
              <h3 className="text-zinc-200 font-mono font-bold flex items-center gap-2 text-sm">
                <Terminal size={16} className="text-violet-400"/>
                cv_teodoro_welyczko.jsx
              </h3>
              <div className="flex items-center gap-4">
                <a 
                  href="/Cv_Teodoro_Welyczko.pdf" 
                  download 
                  className="flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors text-sm font-mono"
                  title="Descargar PDF Original"
                >
                  <Download size={18} />
                  <span className="hidden sm:inline">PDF Clásico</span>
                </a>
                <button 
                  onClick={onClose} 
                  className="text-zinc-500 hover:text-red-400 transition-colors p-1 bg-zinc-800/50 hover:bg-red-400/10 rounded-lg"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Contenido scrolleable del CV */}
            <div className="flex-grow overflow-y-auto p-6 md:p-10 custom-scrollbar">
              
              {/* Encabezado del CV */}
              <div className="mb-12 border-b border-zinc-800 pb-8">
                <h1 className="text-4xl md:text-5xl font-black text-zinc-100 mb-2 tracking-tight">
                  Teodoro Welyczko
                </h1>
                <h2 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-bold mb-6">
                  Estudiante de Ingeniería en Informática (3º año)
                </h2>
                
                <div className="flex flex-wrap gap-4 text-sm text-zinc-400 font-mono">
                  <span className="flex items-center gap-2"><Mail size={16} className="text-zinc-500"/> teodorowelyczko@gmail.com</span>
                  <span className="flex items-center gap-2"><Phone size={16} className="text-zinc-500"/> +54 9 11 6427-3311</span>
                  <span className="flex items-center gap-2"><MapPin size={16} className="text-zinc-500"/> Don Torcuato, Buenos Aires</span>
                  <a href="https://linkedin.com/in/teodoro-welyczko-809624270" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors"><Linkedin size={16} className="text-zinc-500"/> LinkedIn</a>
                  <a href="https://github.com/emigrete" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-violet-400 transition-colors"><Github size={16} className="text-zinc-500"/> GitHub</a>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                
                {/* Columna Principal (Izquierda) */}
                <div className="md:col-span-2 space-y-12">
                  
                  {/* Perfil */}
                  <section>
                    <h3 className="text-xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
                      <User size={20} className="text-violet-400"/> Perfil
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-light">
                      21 años, estudiante en 3º año de Ingeniería en Informática (UP). Interés en desarrollo web, backend y metodologías ágiles. Gran disposición para aprender, trabajo en equipo y exploración de prácticas DevOps.
                    </p>
                  </section>

                  {/* Educación */}
                  <section>
                    <h3 className="text-xl font-bold text-zinc-100 mb-6 flex items-center gap-2">
                      <GraduationCap size={20} className="text-cyan-400"/> Educación
                    </h3>
                    <div className="space-y-6">
                      <div className="relative pl-4 border-l-2 border-zinc-800">
                        <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-zinc-950 border-2 border-cyan-500"></div>
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-lg font-bold text-zinc-200">Ingeniería en Informática</h4>
                          <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">2024 - Presente</span>
                        </div>
                        <p className="text-zinc-400 font-medium mb-2">Universidad de Palermo (UP) - Buenos Aires, AR</p>
                        <p className="text-sm text-zinc-500">Materias destacadas: Estructura de Datos y Algoritmos, Laboratorio I (Java), Laboratorio II (SQL y bases de datos).</p>
                      </div>
                      <div className="relative pl-4 border-l-2 border-zinc-800">
                        <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-zinc-950 border-2 border-zinc-700"></div>
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-lg font-bold text-zinc-200">Bachiller en Ciencias Naturales</h4>
                          <span className="text-xs font-mono text-zinc-500">2022</span>
                        </div>
                        <p className="text-zinc-400 font-medium">Colegio bilingüe San Felipe Apóstol - Buenos Aires, AR</p>
                      </div>
                    </div>
                  </section>

                  {/* --- PROYECTOS DESTACADOS MEJORADOS --- */}
                  <section>
                    <h3 className="text-xl font-bold text-zinc-100 mb-6 flex items-center gap-2">
                      <FolderGit2 size={20} className="text-emerald-400"/> Proyectos destacados
                    </h3>
                    
                    <div className="space-y-4">
                      
                      {/* Proyecto 1: Desafío DevOps */}
                      <div className="bg-zinc-900/40 p-5 rounded-xl border border-zinc-800/60 hover:border-emerald-500/40 transition-colors group">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">Desafío DevOps Jr</h4>
                          <a href="https://gitlab.com/emigrete/desafio" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-emerald-400 transition-colors p-1">
                            <Gitlab size={18} />
                          </a>
                        </div>
                        <p className="text-zinc-400 text-sm mb-4 font-light leading-relaxed">Prueba técnica real. Dockerización, automatización y orquestación completa de una aplicación con Frontend (Angular) y Backend (Flask).</p>
                        <div className="flex flex-wrap gap-2">
                          {['Docker', 'Kubernetes', 'GitLab CI/CD', 'Flask'].map(t => (
                            <span key={t} className="text-[10px] font-mono px-2 py-1 bg-zinc-950 border border-zinc-800 rounded text-zinc-400">{t}</span>
                          ))}
                        </div>
                      </div>

                      {/* Proyecto 2: WelyAlerts */}
                      <div className="bg-zinc-900/40 p-5 rounded-xl border border-zinc-800/60 hover:border-violet-500/40 transition-colors group">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-bold text-zinc-200 group-hover:text-violet-400 transition-colors">WelyAlerts</h4>
                          <div className="flex gap-2">
                            <a href="https://github.com/emigrete/emigrete-alerts" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-violet-400 transition-colors p-1"><Github size={18} /></a>
                            <a href="https://github.com/emigrete/emigrete-alerts" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-violet-400 transition-colors p-1"><ExternalLink size={18} /></a>
                          </div>
                        </div>
                        <p className="text-zinc-400 text-sm mb-4 font-light leading-relaxed">Sistema de alertas en tiempo real para streamers. Integración con la API de Twitch para gestionar eventos en vivo sin latencia.</p>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'Twitch API', 'Node.js', 'Tailwind'].map(t => (
                            <span key={t} className="text-[10px] font-mono px-2 py-1 bg-zinc-950 border border-zinc-800 rounded text-zinc-400">{t}</span>
                          ))}
                        </div>
                      </div>

                      {/* Proyecto 3: Homebanking Java */}
                      <div className="bg-zinc-900/40 p-5 rounded-xl border border-zinc-800/60 hover:border-cyan-500/40 transition-colors group">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-bold text-zinc-200 group-hover:text-cyan-400 transition-colors">Homebanking Enterprise Core</h4>
                          <a href="https://github.com/emigrete/Home-banking" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors p-1">
                            <Github size={18} />
                          </a>
                        </div>
                        <p className="text-zinc-400 text-sm mb-4 font-light leading-relaxed">Proyecto enfocado en la robustez del backend. Diseñado utilizando arquitectura en capas estrictas (DAO, Servicios e Interfaces).</p>
                        <div className="flex flex-wrap gap-2">
                          {['Java', 'OOP', 'Arquitectura MVC', 'SQL'].map(t => (
                            <span key={t} className="text-[10px] font-mono px-2 py-1 bg-zinc-950 border border-zinc-800 rounded text-zinc-400">{t}</span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </section>

                </div>

                {/* Columna Secundaria (Derecha) */}
                <div className="space-y-12">
                  
                  {/* Habilidades y Tecnologías */}
                  <section>
                    <h3 className="text-xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
                      <Code2 size={20} className="text-pink-400"/> Habilidades
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-bold text-zinc-300 mb-2">Lenguajes</h5>
                        <div className="flex flex-wrap gap-2">
                          {['Java', 'JavaScript', 'Python', 'C'].map(s => <span key={s} className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs font-mono text-zinc-400">{s}</span>)}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-bold text-zinc-300 mb-2">Frameworks/Librerías</h5>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'TailwindCSS', 'Sequelize'].map(s => <span key={s} className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs font-mono text-zinc-400">{s}</span>)}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-bold text-zinc-300 mb-2">Bases de datos</h5>
                        <div className="flex flex-wrap gap-2">
                          {['MySQL', 'SQL básico'].map(s => <span key={s} className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs font-mono text-zinc-400">{s}</span>)}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-bold text-zinc-300 mb-2">DevOps & Herramientas</h5>
                        <div className="flex flex-wrap gap-2">
                          {['Git', 'Linux/Debian', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'AWS', 'GitHub Actions', 'CI/CD Pipelines', 'IaC', 'Monitoreo'].map(s => <span key={s} className="px-2 py-1 bg-violet-500/10 border border-violet-500/20 rounded text-xs font-mono text-violet-300">{s}</span>)}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Certificados */}
                  <section>
                    <h3 className="text-xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
                      <Award size={20} className="text-yellow-400"/> Certificados
                    </h3>
                    <ul className="space-y-4 text-sm text-zinc-400">
                      <li className="flex justify-between items-center border-b border-zinc-800/50 pb-2">
                        <span><strong className="text-zinc-200">DevOps Engineer</strong> <br/>Digital House</span>
                        <span className="font-mono text-xs">2025</span>
                      </li>
                      <li className="flex justify-between items-center border-b border-zinc-800/50 pb-2">
                        <span><strong className="text-zinc-200">Full Stack Development</strong> <br/>Digital House</span>
                        <span className="font-mono text-xs">2024</span>
                      </li>
                      <li className="flex justify-between items-center pb-2">
                        <span><strong className="text-zinc-200">First Certificate (B2)</strong> <br/>Cambridge</span>
                        <span className="font-mono text-xs">2022</span>
                      </li>
                    </ul>
                  </section>

                  {/* Cualidades */}
                  <section>
                    <h3 className="text-xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
                      <Terminal size={20} className="text-zinc-400"/> Cualidades
                    </h3>
                    <ul className="space-y-2 text-sm text-zinc-400 font-light list-disc pl-4 marker:text-violet-500">
                      <li>Rápido aprendizaje y adaptabilidad.</li>
                      <li>Trabajo colaborativo y comunicación efectiva.</li>
                      <li>Interés en metodologías ágiles, cultura DevOps y mejora continua.</li>
                      <li>Español (nativo), Inglés (B2 First Certificate).</li>
                    </ul>
                  </section>

                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}