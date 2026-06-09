export default function  Hero(){
    return (
        <header className="min-h-screen flex flex-col justify-center px-[5vw]">

                  <div className="flex items-center gap-3 text-[13px] tracking-[3px] uppercase text-muted mb-7">
        <span className="w-2 h-2 rounded-full bg-lime shadow-[0_0_14px_var(--color-lime)] animate-pulse" />
        Available for work — 2026
      </div>

                  <h1 className="text-[clamp(48px,11vw,170px)] leading-[0.92] font-bold tracking-[-0.04em]">
        Full Stack
        <br />
        that{" "}
        <span className="font-serif italic font-normal bg-[linear-gradient(110deg,var(--color-violet),var(--color-cyan),var(--color-lime))] bg-clip-text text-transparent">
          feels alive.
        </span>
      </h1>
            <div className="flex gap-10 items-end flex-wrap mt-12">
        <p className="max-w-[380px] text-muted text-[17px] leading-[1.55]">
          I design and build end-to-end digital products — from pixel-perfect
          interfaces to the systems that power them. Fast, thoughtful, a little
          unexpected.
        </p>
        <a
          href="#contact"
          className="group inline-flex items-center gap-3 bg-ink text-black px-[30px] py-[18px] rounded-full font-semibold text-[15px] transition-colors hover:bg-lime"
        >
          Let&apos;s build something
          <span className="transition-transform group-hover:translate-x-[5px]">
            →
          </span>
        </a>
      </div>


        </header>
    );
}