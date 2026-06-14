export default function Logo() {
  return (
    <a
      href="#"
      className="flex items-center gap-2.5"
      aria-label="Andargachew Ewawey — home"
    >
      <svg
        width="34"
        height="31"
        viewBox="0 0 88 80"
        fill="none"
        className="text-lime"
        aria-hidden="true"
      >
        <g
          stroke="currentColor"
          strokeWidth="13"
          strokeLinejoin="miter"
          strokeLinecap="square"
        >
          {/* A — diagonal up to the shared spine + crossbar */}
          <path d="M5 75 L36 5" />
          <path d="M36 5 L36 75" />
          <path d="M18 49 L36 49" />
          {/* E — three bars branching off the shared spine */}
          <path d="M36 5 L72 5" />
          <path d="M36 40 L66 40" />
          <path d="M36 75 L72 75" />
        </g>
      </svg>
      <span className="text-[22px] font-extrabold tracking-[-1px] [font-family:var(--font-syne)]">
        Andargachew<span className="text-lime">.</span>
      </span>
    </a>
  );
}
