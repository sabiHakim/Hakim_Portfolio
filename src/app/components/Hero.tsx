// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Hero() {
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const lineRef = useRef<HTMLDivElement>(null);
//   const subtitleRef = useRef<HTMLParagraphElement>(null);

//   useEffect(() => {
//     const title = titleRef.current;
//     const line = lineRef.current;
//     const subtitle = subtitleRef.current;

//     if (!title || !line || !subtitle) return;
//     // Split les lettres
//     title.innerHTML = title.textContent!.replace(
//       /\S/g,
//       "<span class='inline-block'>$&</span>"
//     );

//     const letters = title.querySelectorAll("span");

//     const tl = gsap.timeline();
//     tl
//       // Ligne qui se dessine
//       .fromTo(
//         line,
//         { scaleX: 0, transformOrigin: "left" },
//         { scaleX: 1, duration: 1.2, ease: "power4.out" }
//       )
//       // Lettres qui arrivent en cascade
//       .fromTo(
//         letters,
//         { y: 400, rotationX: -90, opacity: 0 },
//         {
//           y: 0,
//           rotationX: 0,
//           opacity: 1,
//           duration: 1.4,
//           ease: "power4.out",
//           stagger: 0.04,
//         },
//         "-=0.8"
//       )
//       // Subtitle avec un petit parallax au scroll
//       .fromTo(
//         subtitle,
//         { y: 80, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1.4, ease: "power3.out" },
//         "-=1"
//       );

//     // Effet parallax léger sur le subtitle au scroll
//     gsap.to(subtitle, {
//       y: -100,
//       ease: "none",
//       scrollTrigger: {
//         trigger: subtitle,
//         start: "top top",
//         end: "bottom top",
//         scrub: 1,
//       },
//     });
//   }, []);

//   return (
//     <section className="h-screen flex items-center justify-center relative px-8 overflow-hidden">
//       <div className="max-w-7xl mx-auto text-center">
//         {/* Ligne animée */}
//         <div className="w-full max-w-md mx-auto mb-8 md:mb-12">
//           <div
//             ref={lineRef}
//             className="h-px bg-white/30 origin-left"
//           />
//         </div>

//         {/* Titre avec animation lettre par lettre */}
//         <h1
//           ref={titleRef}
//           className="text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tighter leading-none select-none"
//           style={{ perspective: 1000 }}
//         >
//          DÉVELOPPEUR
//         </h1>

//         {/* Subtitle */}
//         <p
//           ref={subtitleRef}
//           className="text-xl md:text-3xl lg:text-4xl mt-12 md:mt-20 text-gray-400 font-light tracking-wide"
//         >
//           Je conçois des expériences digitales uniques et mémorables
//         </p>

//         {/* Petite flèche scroll down stylée */}
//         {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
//           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const firstLineRef = useRef<HTMLHeadingElement>(null);
  const typewriterRef = useRef<HTMLHeadingElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Mots qui tournent en boucle
    const words = [
      "BACK-END",
      "FRONT-END",
      "FULLSTACK",
      "INNOVATEUR",
    ];
    let currentWordIndex = 0;

    const tl = gsap.timeline();

    // 1. Ligne qui se dessine
    tl.fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.4, ease: "power4.out" }
    );

    // 2. CRÉATIF → flip 3D (tu kiffes ça)
    if (firstLineRef.current) {
      const text = firstLineRef.current.textContent!;
      firstLineRef.current.innerHTML = text.replace(
        /\S/g,
        "<span class='inline-block'>$&</span>"
      );

      tl.fromTo(
        firstLineRef.current.querySelectorAll("span"),
        { y: 400, rotationX: -100, opacity: 0 },
        {
          y: 0,
          rotationX: 0,
          opacity: 1,
          duration: 1.6,
          ease: "power4.out",
          stagger: 0.05,
        },
        "-=1"
      );
    }

    // 3. Boucle Typewriter infinie
    const typeWord = () => {
      const word = words[currentWordIndex];
      let i = 0;

      // Écriture du mot
      const write = () => {
        if (i <= word.length) {
          typewriterRef.current!.innerHTML = word.substring(0, i);
          i++;
          gsap.delayedCall(0.08, write);
        } else {
          // Pause à la fin
          gsap.delayedCall(2, deleteWord);
        }
      };

      // Suppression du mot
      const deleteWord = () => {
        if (i >= 0) {
          typewriterRef.current!.innerHTML = word.substring(0, i);
          i--;
          gsap.delayedCall(0.05, deleteWord);
        } else {
          currentWordIndex = (currentWordIndex + 1) % words.length;
          gsap.delayedCall(0.5, typeWord);
        }
      };

      write();
    };

    // Démarre le typewriter après CRÉATIF
    gsap.delayedCall(1.8, typeWord);
    // Curseur clignotant permanent
    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.6,
      ease: "steps(1)",
    });

    // Subtitle
    tl.fromTo(
      subtitleRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // Parallax subtitle
    gsap.to(subtitleRef.current, {
      y: -120,
      ease: "none",
      scrollTrigger: { trigger: subtitleRef.current, scrub: 1 },
    });
  }, []);

  return (
    <section className="h-screen flex items-center justify-center relative px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Ligne */}
        <div className="w-full max-w-md mx-auto mb-8 md:mb-12">
          <div ref={lineRef} className="h-px bg-white/30 origin-left" />
        </div>

        {/* CRÉATIF fixe */}
        <h1
          ref={firstLineRef}
          className="text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tighter leading-none select-none"
          style={{ perspective: 1000 }}
        >
          DÉVELOPPEUR
        </h1>

        {/* Mot qui change en boucle + curseur */}
        <div className="flex justify-center items-center mt-4 md:mt-8">
          <h1
            ref={typewriterRef}
            className="text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tighter leading-none"
            style={{ perspective: 1000 }}
          />
          <span
            ref={cursorRef}
            className="inline-block w-2 h-32 md:h-44 bg-white ml-3 opacity-100"
          />
        </div>

        <p
          ref={subtitleRef}
          className="text-xl md:text-3xl lg:text-4xl mt-16 md:mt-24 text-gray-400 font-light tracking-wide max-w-4xl mx-auto"
        >
          Je transforme des idées en applications fonctionnelles, élégantes et performantes.
        </p>
      </div>
    </section>
  );
}
