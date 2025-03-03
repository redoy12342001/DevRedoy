"use client";

import { useEffect, useRef } from "react";

const StickyCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: 0, y: 0 }); // Cursor position
  const target = useRef({ x: 0, y: 0 }); // Target position
  const speed = 0.1; // Smoothness factor (higher = smoother, lower = more responsive)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      target.current = { x: e.clientX - 12, y: e.clientY - 12 }; // Center the cursor
    };

    const updatePosition = () => {
      pos.current.x += (target.current.x - pos.current.x) * speed;
      pos.current.y += (target.current.y - pos.current.y) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      requestAnimationFrame(updatePosition);
    };

    document.addEventListener("mousemove", moveCursor);
    updatePosition(); // Start the animation loop

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 bg-primary rounded-full pointer-events-none mix-blend-difference z-[999999] hidden lg:flex"
      style={{ willChange: "transform" }}
    />
  );
};

export default StickyCursor;
