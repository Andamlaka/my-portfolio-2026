export default function Logo() {
  return (
    <a
      href="#"
      className="flex items-center gap-2.5"
      aria-label="Andargachew Ewawey — home"
    >
      <svg
        width="42"
        height="36"
        viewBox="0 0 112 96"
        fill="none"
        className="text-lime"
        aria-hidden="true"
      >
        <g
          transform="translate(18 4) skewX(-12)"
          stroke="currentColor"
          strokeWidth="14"
          strokeLinejoin="miter"
          strokeLinecap="square"
        >
          {/* A — bold chevron + crossbar */}
          <path d="M6 80 L30 8 L54 80" />
          <path d="M16 54 L44 54" />
          {/* E — tucked tight against the A */}
          <path d="M52 8 L52 80" />
          <path d="M52 8 L82 8" />
          <path d="M52 42 L78 42" />
          <path d="M52 80 L82 80" />
        </g>
      </svg>
      <span className="text-[22px] font-extrabold tracking-[-0.5px] [font-family:var(--font-syne)]">
        Andargachew<span className="text-lime">.</span>
      </span>
    </a>
  );
}
