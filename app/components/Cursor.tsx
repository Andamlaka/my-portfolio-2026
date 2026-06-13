"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on devices with a real mouse (skip touch/phones).
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.style.cursor = "none";
    dot.style.opacity = "1";
    ring.style.opacity = "1";

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0,
      scale = 1,
      targetScale = 1;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    };

    let raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.2;
      ry += (my - ry) * 0.2;
      scale += (targetScale - scale) * 0.2;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    const enter = () => {
      targetScale = 1.8;
      dot.style.opacity = "0";
      ring.style.borderColor = "var(--color-lime)";
    };
    const leave = () => {
      targetScale = 1;
      dot.style.opacity = "1";
      ring.style.borderColor = "rgba(255,255,255,0.4)";
    };

    const els = Array.from(
      document.querySelectorAll("a, button, [data-cursor]")
    );
    els.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.body.style.cursor = "";
      els.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 rounded-full bg-lime opacity-0 transition-opacity duration-200"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 rounded-full border opacity-0"
        style={{ borderColor: "rgba(255,255,255,0.4)" }}
      />
    </>
  );
}
