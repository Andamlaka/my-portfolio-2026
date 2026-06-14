export default function Nav() {
  const linkClass =
    "relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-lime after:transition-[width] after:duration-300 hover:after:w-full";

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center py-6 px-[5vw] mix-blend-difference">
      <div className="font-bold text-xl tracking-[-0.5px]">
        andeee<span className="text-lime">.</span>dev
      </div>
      <div className="hidden gap-7 text-sm sm:flex">
        <a href="#work" className={linkClass}>Work</a>
        <a href="#about" className={linkClass}>About</a>
        <a href="#stack" className={linkClass}>Stack</a>
        <a href="#contact" className={linkClass}>Contact</a>
      </div>
    </nav>
  );
}
