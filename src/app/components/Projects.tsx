// // src/app/components/Projects.tsx
// "use client";
// import ProjectCard from "./ProjectCard";

// export default function Projects() {
//   // Placeholder projets (tu les changes après)
//   const projects = [
//     {
//       id: 1,
//       title: "Times261",
//       tech: "Laravel + Php +React",
//       image:
//         "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=1200&h=800&fit=crop",
//     },
//     {
//       id: 2,
//       title: "Rental",
//       tech: "NextJS + SpringBoot + Java",
//       image:
//         "/ordi.jfif",
//     },
//     {
//       id: 3,
//       title: "C.A.R",
//       tech: "Next.js",
//       image:
//         "/ordi.jfif",
//     },
//     {
//       id: 4,
//       title: "ERP C.A.R",
//       tech: "React + SpringBoot + Java",
//       image:
//         "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=1200&h=800&fit=crop",
//     },
//     {
//       id: 5,
//       title: "Pointage",
//       tech: "Laravel + Php",
//       image:
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop",
//     },
//   ];

//   return (
//     <section id="projets" className="py-32 px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-7xl md:text-9xl font-bold tracking-tighter mb-20 overflow-hidden">
//           Projets
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
//           {projects.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// src/app/components/Projects.tsx
// src/app/components/Projects.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ProjectType {
  id: number;
  title: string;
  tech: string;
  image: string;
  liveUrl?: string;
}
export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const projects: ProjectType[] = [
    {
      id: 1,
      title: "Times261",
      tech: "Laravel · PHP · React",
      image: "/ordi.jfif",
      liveUrl: "https://times261.com",
    },
    {
      id: 2,
      title: "Rental System",
      tech: "Next.js · SpringBoot · Java",
      image: "/ordi.jfif",
      liveUrl: "https://rental.mg-transp.com",
    },
    {
      id: 3,
      title: "C.A.R Platform",
      tech: "Next.js · TypeScript · Tailwind",
      image: "/ordi.jfif",
      liveUrl: "https://cartaxaudit.com",
    },
    {
      id: 4,
      title: "ERP C.A.R",
      tech: "React · SpringBoot · Java",
      image: "/ordi.jfif",
      liveUrl: "https://erp.cartaxaudit.com",
    },
    { id: 5, title: "Pointage RH", tech: "Laravel · PHP", image: "/ordi.jfif" },
  ];

  useEffect(() => {
    // Nettoyage + redimensionnement du tableau de refs à chaque render
    cardsRef.current = cardsRef.current.slice(0, projects.length);

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.set(card, {
          opacity: 0,
          y: 180,
          rotationX: -50,
          scale: 0.82,
          filter: "blur(12px)",
          transformOrigin: "center bottom",
        });

        gsap.to(card, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.65,
          ease: "power4.out",
          delay: i * 0.06,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [projects.length]); // ← dépendance propre

  return (
    <section
      ref={sectionRef}
      id="projets"
      className="py-32 px-8 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tighter text-center mb-32 overflow-hidden">
          <span className="inline-block" style={{ perspective: 1600 }}>
            Projets
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {projects.map((project, i) => (
            <div
              key={project.id}
              // ← CORRIGÉ : plus d'erreur TypeScript
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 
                         transition-all duration-700 hover:bg-white/10 hover:border-white/30 
                         hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <ProjectCard project={project} hasLink />
                </a>
              ) : (
                <div className="cursor-default">
                  <ProjectCard project={project} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  hasLink = false,
}: {
  project: ProjectType;
  hasLink?: boolean;
}) {
  return (
    <>
      <div className="relative aspect-video overflow-hidden bg-zinc-950">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-2000 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

        {hasLink && (
          <div className="absolute top-6 right-6 flex items-center gap-2 bg-purple-600/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            LIVE
          </div>
        )}
        {!hasLink && (
          <div className="absolute top-6 right-6 bg-white/10 backdrop-blur px-5 py-2 rounded-full text-xs font-medium">
            Bientôt
          </div>
        )}
      </div>

      <div className="p-10 md:p-14 space-y-6">
        <div className="flex items-start justify-between">
          <h3 className="text-4xl md:text-5xl font-black tracking-tight group-hover:text-purple-100 transition-colors duration-700">
            {project.title}
          </h3>
          {hasLink && (
            <ExternalLink className="w-8 h-8 text-purple-400 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700" />
          )}
        </div>
        <p className="text-xl md:text-2xl text-gray-400 font-medium">
          {project.tech}
        </p>
      </div>
    </>
  );
}
