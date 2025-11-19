"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 top-0 z-50 mix-blend-difference"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
        }}
      >
        <div className="h-8 w-8 rounded-full bg-white" />
      </div>
    </>
  );
}