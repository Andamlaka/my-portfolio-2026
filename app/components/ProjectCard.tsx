import type { CSSProperties } from "react";

export type Project = {
  num: string;
  tag: string;
  title: string;
  desc: string;
  stack: string[];
  href: string;
  accent: string;
  featured?: boolean;
};

function Chips({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-ink/75"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const accentVar = { "--accent": project.accent } as CSSProperties;

  if (project.featured) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        style={accentVar}
        className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-bg-soft transition-transform duration-300 hover:-translate-y-1 md:col-span-2"
      >
        <div className="grid md:grid-cols-5">
          <div className="relative z-10 p-9 md:col-span-3 md:p-12">
            <span className="text-[11px] font-semibold uppercase tracking-[2.5px] text-[var(--accent)]">
              Featured · {project.tag}
            </span>
            <h3 className="mt-4 text-[clamp(34px,5vw,54px)] font-semibold leading-[1.02] tracking-[-0.03em]">
              {project.title}
            </h3>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
              {project.desc}
            </p>
            <div className="mt-7">
              <Chips stack={project.stack} />
            </div>
            <span className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition-colors duration-300 group-hover:border-transparent group-hover:bg-[var(--accent)] group-hover:text-black">
              Visit live
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>

          <div className="relative min-h-[180px] md:col-span-2">
            <div
              className="absolute inset-0"
              style={{ background: `radial-gradient(120% 120% at 85% 15%, ${project.accent}40, transparent 60%)` }}
            />
            <span className="pointer-events-none absolute -bottom-6 right-4 font-serif text-[160px] italic leading-none text-white/[0.08]">
              {project.num}
            </span>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      style={accentVar}
      className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[28px] border border-white/[0.08] bg-bg-soft p-8 transition-transform duration-300 hover:-translate-y-1"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full opacity-30 blur-[80px] transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: project.accent }}
      />
      <span className="pointer-events-none absolute right-6 top-2 font-serif text-7xl italic leading-none text-white/[0.06]">
        {project.num}
      </span>

      <div className="relative">
        <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[var(--accent)]">
          {project.tag}
        </span>
        <h3 className="mt-3 text-[28px] font-semibold leading-tight tracking-[-0.02em]">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.desc}</p>
      </div>

      <div className="relative mt-auto pt-7">
        <Chips stack={project.stack} />
        <span className="mt-6 flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
          Visit live
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </a>
  );
}
