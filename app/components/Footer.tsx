export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3.5 border-t border-line px-[5vw] py-9 text-[13px] text-muted">
      <div>© 2026 Andargachew Ewawey — Full-Stack Developer</div>
      <div className="flex items-center gap-2.5">
        <span>Addis Ababa, Ethiopia</span>
        <span>·</span>
        <a href="#" className="transition-colors duration-300 hover:text-ink">
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}
