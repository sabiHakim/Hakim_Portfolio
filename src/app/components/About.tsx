// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function About() {
//   const containerRef = useRef(null);
//   const titleRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         titleRef.current,
//         { y: 100, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top 80%",
//           },
//         }
//       );

//       gsap.fromTo(
//         textRef.current,
//         { y: 80, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           delay: 0.3,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top 80%",
//           },
//         }
//       );
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section id="apropos" ref={containerRef} className="min-h-screen flex items-center px-8 py-32">
//       <div className="max-w-5xl mx-auto">
//         <h2
//           ref={titleRef}
//           className="text-7xl md:text-9xl font-bold tracking-tighter mb-16 overflow-hidden"
//         >
//           À propos
//         </h2>
//         <div ref={textRef} className="space-y-6 text-xl md:text-2xl text-gray-300 leading-relaxed">
//           <p>
//             Je suis un <span className="text-white font-semibold">développeur créatif</span> et designer basé en France.
//           </p>
//           <p>
//             J’aime transformer des idées en expériences digitales uniques, fluides et mémorables.
//           </p>
//           <p>
//             Spécialisé en <span className="text-white font-semibold">Next.js, GSAP, Three.js</span> et tout ce qui rend le web beau et rapide.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Ta stack avec logos officiels (SVG/PNG en blanc ou transparent)
  const stack = [
    { name: "Java", logo: "https://cdn.worldvectorlogo.com/logos/java-4.svg" },
    {
      name: "PHP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    },
    {
      name: "Next.js",
      logo: "https://assets.vercel.com/image/upload/front/assets/design/nextjs-white-logo.svg",
    },
    {
      name: "React",
      logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    },
    {
      name: "Tailwind",
      logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    },
    { name: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    {
      name: "Docker",
      logo: "https://cdn.worldvectorlogo.com/logos/docker-4.svg",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: containerRef.current, start: "top 70%" },
      });
      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.6, ease: "power4.out" }
      );

      if (titleRef.current) {
        titleRef.current.innerHTML = titleRef.current.textContent!.replace(
          /\S/g,
          "<span class='inline-block'>$&</span>"
        );
        tl.fromTo(
          titleRef.current.querySelectorAll("span"),
          { y: 300, rotationX: -100, opacity: 0 },
          {
            y: 0,
            rotationX: 0,
            opacity: 1,
            duration: 1.6,
            ease: "power4.out",
            stagger: 0.06,
          },
          "-=1.2"
        );
      }

      tl.fromTo(
        textRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, ease: "power3.out" },
        "-=1"
      );

      // MARQUEE INFINI AVEC LOGOS
      const marquee = marqueeRef.current;
      if (!marquee) return;

      const items = marquee.innerHTML;
      marquee.innerHTML = items + items + items; // duplication x3

      const totalWidth = marquee.scrollWidth / 3;

      gsap.to(marquee, {
        x: -totalWidth,
        duration: 50,
        ease: "none",
        repeat: -1,
      });

      // Pause douce + petit glow violet au hover
      marquee.addEventListener("mouseenter", () => {
        gsap.to(marquee, { timeScale: 0.15, ease: "power2.out" });
        gsap.to(marquee.querySelectorAll("img"), {
          filter: "brightness(1) drop-shadow(0 0 20px rgba(168, 85, 247, 0.6))",
          duration: 0.6,
        });
      });
      marquee.addEventListener("mouseleave", () => {
        gsap.to(marquee, { timeScale: 1, ease: "power2.out" });
        gsap.to(marquee.querySelectorAll("img"), {
          filter: "brightness(0.9)",
          duration: 0.8,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="apropos"
      ref={containerRef}
      className="bg-black text-white py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="w-full max-w-sm mb-12 md:mb-20">
          <div ref={lineRef} className="h-px bg-white/20 origin-left" />
        </div>

        <h2
          ref={titleRef}
          className="text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter leading-none mb-16 select-none"
          style={{ perspective: 1200 }}
        >
          À propos
        </h2>

        <div
          ref={textRef}
          className="space-y-8 text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-4xl"
        >
          <p>
            Je suis{" "}
            <span className="text-white font-bold">
              RAKOTOALIMANANA Ny Harijaona Hakim Sabi
            </span>
            ,<br />
            développeur{" "}
            <span className="text-white font-bold">fullstack créatif</span> basé
            à Madagascar.
          </p>
          <p>
            Passionné par le code propre, les performances extrêmes et les
            interfaces qui marquent les esprits.
          </p>
          <p className="mt-16 text-4xl font-bold text-white/80">
            Mes stacks techniques :
          </p>
        </div>

        {/* MARQUEE INFINI AVEC LOGOS BLANC/NOIR + GLOW VIOLET AU HOVER */}
        <div className="mt-20 overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex items-center gap-20 md:gap-32 py-12 whitespace-nowrap"
          >
            {stack.map((tech, i) => (
              <div key={i} className="flex-shrink-0">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={140}
                  height={140}
                  className="h-24 md:h-32 lg:h-40 w-auto object-contain brightness-90 transition-all duration-500"
                  priority={i < 8}
                />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-32 text-2xl text-gray-500 italic text-center">
          Disponible immédiatement · Freelance ou CDI · Contacte-moi
        </p>
      </div>
    </section>
  );
}
