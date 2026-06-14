import ProjectCard, { type Project } from "@/app/components/ProjectCard";
import Reveal from "@/app/components/Reveal";

const projects: Project[] = [
  {
    num: "01",
    tag: "Multilingual News · Full-Stack",
    title: "The Pitch Feed",
    desc: "A news platform that delivers every story in the reader's own language — pick any language and get the same news tailored to it, served through a fast Fastify API on Supabase.",
    stack: ["React", "Fastify", "Node", "Supabase", "REST API"],
    href: "https://thepitchfeed.com/",
    image: "/thepitchfeed.jpg",
    accent: "#7c5cff",
  },
  {
    num: "02",
    tag: "Fintech · Backend",
    title: "IM-AAM",
    desc: "Backend and automation for an AI-powered stock-analysis platform — Python scrapers, scheduled data pipelines and Google API integrations feeding live market insights.",
    stack: ["Python", "Django", "Scraping", "Google API"],
    href: "https://im-aam.com/",
    image: "/imm.jpg",
    accent: "#c6ff3a",
  },
  {
    num: "03",
    tag: "E-commerce · Personal",
    title: "Amazon Clone",
    desc: "A self-built storefront recreating Amazon's shopping flow — product browsing, cart and Stripe checkout — built to sharpen my React fundamentals.",
    stack: ["React", "Stripe", "REST API"],
    href: "https://amazon-clone-ande.vercel.app/",
    image: "/amazon.jpg",
    accent: "#7c5cff",
  },
  {
    num: "04",
    tag: "Sports SaaS · Full-Stack",
    title: "ScoreWidget",
    desc: "An embeddable football widget platform — site owners customize live scores, fixtures and standings, then drop them into any site with a simple embed.",
    stack: ["React", "Node", "Express", "Supabase", "REST API"],
    href: "https://scorewidget.net/",
    image: "/scoreweight.jpg",
    accent: "#ff6a4d",
  },
  {
    num: "05",
    tag: "Sports Media · Full-Stack",
    title: "Fodbold iTV",
    desc: "A football TV guide for Scandinavian fans in Danish, Swedish and Norwegian — aggregating fixtures and broadcast schedules so they always know where to watch each match.",
    stack: ["React", "Node", "Express", "Turso", "REST API"],
    href: "https://fodbolditv.dk/",
    image: "/fodbolditv.jpg",
    accent: "#3ad6ff",
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

      <Reveal delay={120} className="flex flex-col gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.num} project={project} />
        ))}
      </Reveal>
    </section>
  );
}
