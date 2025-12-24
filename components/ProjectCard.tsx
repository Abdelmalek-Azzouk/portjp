interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export default function ProjectCard({ number, title, description, tech, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      className="group block rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 p-8 bg-white/[0.02] hover:bg-white/[0.04] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      aria-label={title}
    >
      <div className="flex items-start gap-8">
        <div className="mono text-gray-500 text-sm pt-1 min-w-[60px]">{number}</div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-3 text-gray-100 group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl">
            {description}
          </p>
          <div className="flex flex-wrap gap-3">
            {tech.map((item, i) => (
              <span key={i} className="mono text-[11px] text-gray-400 border border-white/10 bg-white/[0.03] px-3 py-1 rounded-md">
                {item}
              </span>
            ))}
          </div>
        </div>
        
        <div className="text-gray-500 group-hover:text-gray-300 group-hover:translate-x-2 transition-all duration-300">
          →
        </div>
      </div>
    </a>
  );
}