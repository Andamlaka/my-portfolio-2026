import CountUp from "@/app/components/CountUp";
import Reveal from "@/app/components/Reveal";

const stats = [
  { value: 10, suffix: "+", label: "Projects shipped" },
  { value: 4, suffix: "", label: "Years building" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 8, suffix: "", label: "Happy clients" },
];

export default function About() {
  return (
    <section id="about" className="relative px-[5vw] py-[140px]">
      <Reveal className="grid items-center gap-[60px] md:grid-cols-[1.4fr_1fr]">
        <p className="text-[clamp(22px,2.6vw,34px)] leading-[1.35] tracking-[-0.01em]">
          I&apos;m a full-stack developer who cares about{" "}
          <em className="font-serif text-cyan">the whole stack</em> — and how it
          feels to use. I turn ideas into shipped products:{" "}
          <em className="font-serif text-cyan">fast APIs, clean interfaces,</em>{" "}
          and the automation that ties them together.
        </p>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="bg-[linear-gradient(120deg,var(--color-lime),var(--color-cyan))] bg-clip-text text-[clamp(40px,5vw,54px)] font-bold leading-none text-transparent">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
