// components/SmoothScroll.tsx
"use client";
import { ReactLenis } from "lenis/react";
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.07,                 // Fluidité parfaite (exactement comme Olivier Larose)
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,         // Mets 0 si tu veux désactiver le smooth sur mobile
        // normalizeWheel, smoothTouch, smooth, direction → supprimés définitivement
        // CORRECTION FINALE DE prevent (plus de boolean !)
        prevent: (node: HTMLElement) => {
          // Désactive le smooth seulement sur les éléments avec data-lenis-prevent
          return !!node.closest("[data-lenis-prevent]");
          // ou simplement : return false;   // si tu ne veux jamais désactiver
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}