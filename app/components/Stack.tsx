import Reveal from "@/app/components/Reveal";

type Tool = { name: string; slug: string; light?: boolean };

const tools: Tool[] = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs", light: true },
  { name: "TypeScript", slug: "typescript" },
  { name: "JavaScript", slug: "javascript" },
  { name: "CSS", slug: "css" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "Bootstrap", slug: "bootstrap" },
  { name: "Three.js", slug: "threedotjs", light: true },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Express", slug: "express", light: true },
  { name: "Python", slug: "python" },
  { name: "Django", slug: "django", light: true },
  { name: "Fastify", slug: "fastify", light: true },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Prisma", slug: "prisma", light: true },
  { name: "Supabase", slug: "supabase" },
  { name: "Turso", slug: "turso" },
  { name: "Stripe", slug: "stripe" },
  { name: "GitHub", slug: "github", light: true },
  { name: "Vercel", slug: "vercel", light: true },
  { name: "Netlify", slug: "netlify" },
  { name: "Railway", slug: "railway", light: true },
];

export default function Stack() {
  return (
    <section id="stack" className="relative px-[5vw] py-[140px]">
      <Reveal className="mb-[60px] flex flex-wrap items-baseline justify-between gap-4">
        <h2 className="text-[clamp(32px,5vw,64px)] font-bold tracking-[-0.03em]">
          Toolkit
        </h2>
        <div className="font-serif text-[22px] italic text-lime">/ 02 — stack</div>
      </Reveal>

      <Reveal
        delay={120}
        className="grid grid-cols-3 gap-3.5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
      >
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="group relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-white/[0.07] bg-bg-soft py-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_18px_50px_-18px_rgba(0,0,0,0.7)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120px_circle_at_50%_30%,rgba(255,255,255,0.06),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://cdn.simpleicons.org/${tool.slug}${
                tool.light ? "/ffffff" : ""
              }`}
              alt={tool.name}
              className="relative h-10 w-10 opacity-90 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="relative text-xs font-medium text-muted transition-colors duration-300 group-hover:text-ink">
              {tool.name}
            </span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
