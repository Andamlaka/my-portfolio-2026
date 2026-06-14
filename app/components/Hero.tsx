export default function Hero() {
  return (
    <header className="relative flex min-h-screen flex-col px-[5vw] pb-16 pt-28">
      {/* kicker — larger, brighter, near the nav */}
      <div className="flex items-center gap-3 text-[15px] font-medium uppercase tracking-[2px] text-ink/85">
        <span className="h-2.5 w-2.5 rounded-full bg-lime shadow-[0_0_16px_var(--color-lime)] animate-pulse" />
        Available for work — 2026
      </div>

      <div className="flex flex-1 flex-col items-center gap-14 md:flex-row md:items-center md:gap-16">
        {/* left — text */}
        <div className="md:flex-1">
          <h1 className="text-[clamp(40px,8.5vw,150px)] font-bold leading-[0.95] tracking-[-0.04em]">
            Full Stack
            <br />
            that{" "}
            <span className="bg-[linear-gradient(110deg,var(--color-violet),var(--color-cyan),var(--color-lime))] bg-clip-text font-serif italic text-transparent">
              feels alive.
            </span>
          </h1>

          <div className="mt-10 flex flex-wrap items-end gap-8">
            <p className="max-w-[440px] text-[18px] leading-[1.6] text-ink/75">
              I design and build end-to-end digital products — from
              pixel-perfect interfaces to the systems that power them. Fast,
              thoughtful, a little unexpected.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-[30px] py-[18px] text-[15px] font-semibold text-black transition-colors hover:bg-lime"
            >
              Let&apos;s build something
              <span className="transition-transform group-hover:translate-x-[5px]">
                →
              </span>
            </a>
          </div>
        </div>

        {/* right — decorative circular photo */}
        <div className="relative w-[300px] shrink-0 sm:w-[340px]">
          {/* slowly rotating dashed ring */}
          <div className="absolute left-1/2 top-1/2 z-0 h-[114%] w-[114%] -translate-x-1/2 -translate-y-1/2 animate-spin rounded-full border border-dashed border-white/15 [animation-duration:40s]" />
          {/* violet bloom */}
          <div className="absolute -inset-4 z-0 rounded-full bg-[radial-gradient(closest-side,rgba(124,92,255,0.40),transparent)] blur-2xl" />
          {/* gradient-border circular frame */}
          <div className="relative z-10 aspect-square rounded-full bg-[linear-gradient(135deg,var(--color-violet),var(--color-cyan),var(--color-lime))] p-[3px] shadow-2xl">
            <div className="h-full w-full overflow-hidden rounded-full bg-bg-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="Andargachew Ewawey"
                className="h-full w-full object-cover object-[50%_25%] grayscale transition duration-700 hover:grayscale-0"
              />
            </div>
          </div>
          {/* floating location badge */}
          <div className="absolute -bottom-2 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-bg-soft/90 px-4 py-2 text-xs text-ink backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-lime" />
            Addis Ababa, ET
          </div>
          {/* accent dot */}
          <div className="absolute right-4 top-4 z-20 h-3.5 w-3.5 rounded-full bg-cyan shadow-[0_0_18px_var(--color-cyan)]" />
        </div>
      </div>
    </header>
  );
}
