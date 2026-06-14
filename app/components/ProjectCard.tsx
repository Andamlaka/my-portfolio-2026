import type { CSSProperties } from "react";

export type Project = {
  num: string;
  tag: string;
  title: string;
  desc: string;
  stack: string[];
  href: string;
  image: string;
  accent: string;
};

// tech name -> Simple Icons slug (light = render white so dark logos stay visible)
const ICONS: Record<string, { slug: string; light?: boolean }> = {
  React: { slug: "react" },
  "Next.js": { slug: "nextdotjs", light: true },
  Node: { slug: "nodedotjs" },
  "Node.js": { slug: "nodedotjs" },
  Express: { slug: "express", light: true },
  Fastify: { slug: "fastify", light: true },
  Supabase: { slug: "supabase" },
  Python: { slug: "python" },
  Django: { slug: "django", light: true },
  PostgreSQL: { slug: "postgresql" },
  Stripe: { slug: "stripe" },
  Turso: { slug: "turso" },
  TypeScript: { slug: "typescript" },
  JavaScript: { slug: "javascript" },
  Tailwind: { slug: "tailwindcss" },
  "Google API": { slug: "google" },
};

const customCls =
  "h-8 w-8 text-ink/70 transition-colors duration-300 group-hover:text-ink";

// concepts that have no brand logo — drawn as line icons
const CUSTOM: Record<string, React.ReactNode> = {
  "REST API": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={customCls}
    >
      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1" />
      <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1" />
    </svg>
  ),
  Scraping: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={customCls}
    >
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  ),
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      style={{ "--accent": project.accent } as CSSProperties}
      className="group relative grid overflow-hidden rounded-3xl border border-white/[0.08] bg-bg-soft transition-colors duration-300 hover:border-white/20 md:grid-cols-2"
    >
      {/* text side */}
      <div className="relative z-30 flex flex-col justify-center p-8 md:p-12">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[var(--accent)]">
            {project.tag}
          </span>
          <span className="font-serif text-2xl italic text-white/15">
            {project.num}
          </span>
        </div>

        <h3 className="mt-3 text-[clamp(26px,3vw,40px)] font-semibold leading-tight tracking-[-0.02em]">
          {project.title}
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
          {project.desc}
        </p>

        {/* stack as icons */}
        <div className="mt-7 flex flex-wrap items-center gap-4">
          {project.stack.map((tech) => {
            const icon = ICONS[tech];
            let node: React.ReactNode;
            if (icon) {
              node = (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`https://cdn.simpleicons.org/${icon.slug}${
                    icon.light ? "/ffffff" : ""
                  }`}
                  alt={tech}
                  className="h-8 w-8 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                />
              );
            } else if (CUSTOM[tech]) {
              node = CUSTOM[tech];
            } else {
              node = (
                <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[11px] font-medium text-ink/70">
                  {tech}
                </span>
              );
            }
            return (
              <span key={tech} className="group/ic relative flex items-center">
                {node}
                <span className="pointer-events-none absolute -top-9 left-1/2 z-40 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-bg px-2 py-1 text-[11px] font-medium text-ink opacity-0 shadow-lg transition-opacity duration-200 group-hover/ic:opacity-100">
                  {tech}
                </span>
              </span>
            );
          })}
        </div>

        <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
          Visit live
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>

      {/* image side */}
      <div className="relative min-h-[240px] overflow-hidden md:min-h-[360px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="absolute inset-0 z-10 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        {/* blend the image edge into the card */}
        <div className="absolute inset-0 z-20 bg-[linear-gradient(to_right,var(--color-bg-soft),transparent_30%)] md:bg-[linear-gradient(to_right,var(--color-bg-soft),transparent_22%)]" />
      </div>
    </a>
  );
}
