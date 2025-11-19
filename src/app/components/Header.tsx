"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
  }, [isOpen, lenis]);

  const sections = [
    { name: "Projets", id: "projets" },
    { name: "À propos", id: "apropos" },
    { name: "Contact", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      lenis?.scrollTo(id, {
        offset: -80, // ← réduit pour mobile
        duration: 1.6,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }, 450);
  };

  return (
    <>
      {/* --- HEADER TOP BAR --- */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 py-5 bg-black/70 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* TITLE LOGO */}
          <div className="flex flex-col leading-tight">
            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold tracking-tighter text-white">
              RAKOTOALIMANANA
            </h1>
            <p className="text-xs md:text-base lg:text-lg text-gray-300 -mt-1">
              Ny Harijaona Hakim Sabi
            </p>
          </div>

          {/* BURGER BUTTON (MOBILE) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-9 h-9 md:hidden z-50 flex items-center justify-center"
            aria-label="Menu"
          >
            <span
              className={`block absolute h-0.5 w-7 bg-white transform transition-all duration-300 
                ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}`}
            />
            <span
              className={`block absolute h-0.5 w-7 bg-white transition-all duration-300 
                ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`block absolute h-0.5 w-7 bg-white transform transition-all duration-300 
                ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}`}
            />
          </button>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex gap-10 lg:gap-14 text-lg text-white">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(`#${s.id}`)}
                className="hover:text-gray-300 transition"
              >
                {s.name}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* --- MOBILE SLIDE NAVIGATION --- */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.45, ease: "easeInOut" }}
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex items-center justify-center"
      >
        <div className="flex flex-col gap-10 text-4xl sm:text-5xl font-light text-center tracking-tight">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(`#${s.id}`)}
              className="text-white hover:text-gray-400 transition duration-300"
            >
              {s.name}
            </button>
          ))}
        </div>
      </motion.div>
    </>
  );
}
