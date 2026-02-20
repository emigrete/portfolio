export default function Skills() {
  const techStack = [
    "Java", "React", "Node.js", "Python", "SQL / MySQL", 
    "Docker", "Kubernetes", "AWS", "Terraform", "CI/CD Pipelines", "Git / GitHub Actions", "Linux"
  ];

  return (
    <section className="py-12">
      <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-4">
        <span className="text-sky-400 font-mono text-xl">02.</span> Tecnologías que manejo
      </h3>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <span key={tech} className="px-4 py-2 bg-slate-800 text-sky-300 rounded-full text-sm font-mono border border-slate-700 hover:border-sky-400 transition-colors cursor-default">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}