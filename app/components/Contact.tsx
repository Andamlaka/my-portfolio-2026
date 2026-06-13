import Reveal from "@/app/components/Reveal";

const links = [
  { label: "GitHub", href: "https://github.com/Andamlaka/" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~01c478ba83759a044d" },
  { label: "Call", href: "tel:+251930202407" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-[5vw] py-[160px] text-center">
      <Reveal>
        <p className="mb-7 text-xs uppercase tracking-[3px] text-muted">
          Get in touch
        </p>
        <h2 className="text-[clamp(44px,9vw,140px)] font-bold leading-[0.95] tracking-[-0.04em]">
          Let&apos;s make{" "}
          <span className="font-serif italic text-coral">it</span> real.
        </h2>

        <a
          href="mailto:andargachweewawey@gmail.com"
          className="mt-10 inline-block border-b border-line pb-1.5 text-lg text-ink transition-colors duration-300 hover:border-lime hover:text-lime md:text-xl"
        >
          andargachweewawey@gmail.com
        </a>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-300 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
