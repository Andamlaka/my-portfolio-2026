import ProjectCard, { type Project } from "@/app/components/ProjectCard";
import Reveal from "@/app/components/Reveal";

const projects: Project[] = [
  {
    num: "01",
    tag: "Multilingual News · Full-Stack",
    title: "The Pitch Feed",
    desc: "A news platform that delivers every story in the reader's own language — pick any language and get the same news tailored to it, served through a fast Fastify API on Supabase.",
    stack: ["React", "Fastify", "Node", "Supabase"],
    href: "https://thepitchfeed.com/",
    accent: "#7c5cff",
    featured: true,
  },
  {
    num: "02",
    tag: "Sports Media · Full-Stack",
    title: "Fodbold iTV",
    desc: "A football TV guide for Scandinavian fans in Danish, Swedish and Norwegian — aggregating fixtures and broadcast schedules so they always know where to watch each match.",
    stack: ["React", "Node", "Turso"],
    href: "https://fodbolditv.dk/",
    accent: "#3ad6ff",
  },
  {
    num: "03",
    tag: "Fintech · Backend",
    title: "IM-AAM",
    desc: "Backend and automation for an AI-powered stock-analysis platform — Python scrapers, scheduled data pipelines and Google API integrations feeding live market insights.",
    stack: ["Python", "Django", "Scraping", "Google API"],
    href: "https://im-aam.com/",
    accent: "#c6ff3a",
  },
  {
    num: "04",
    tag: "Rental Platform · Full-Stack",
    title: "Lejerkit",
    desc: "A rental marketplace for listing and booking gear, with Stripe handling payments and Supabase powering auth, storage and data.",
    stack: ["React", "Stripe", "Supabase"],
    href: "http://lejerkit.dk/",
    accent: "#ff6a4d",
  },
  {
    num: "05",
    tag: "E-commerce · Personal",
    title: "Amazon Clone",
    desc: "A self-built storefront recreating Amazon's shopping flow — product browsing, cart and Stripe checkout — built to sharpen my React fundamentals.",
    stack: ["React", "Stripe"],
    href: "https://amazon-clone-ande.vercel.app/",
    accent: "#7c5cff",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative px-[5vw] py-[140px]">
      <Reveal className="mb-[60px] flex flex-wrap items-baseline justify-between gap-4">
        <h2 className="text-[clamp(32px,5vw,64px)] font-bold tracking-[-0.03em]">
          Selected Work
        </h2>
        <div className="font-serif text-[22px] italic text-lime">
          / 01 — projects
        </div>
      </Reveal>

      <Reveal delay={120} className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.num} project={project} />
        ))}
      </Reveal>
    </section>
  );
}
