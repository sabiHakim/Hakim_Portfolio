// components/ProjectCard.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Important : on enregistre ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface Project {
  image: string;
  title: string;
  tech: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-3xl bg-gray-900"
    >
      <img
        src={project.image || "/placeholder.jpg"}
        alt={project.title}
        className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
        <div>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
            {project.title}
          </h3>
          <p className="text-gray-300 mt-4 text-lg">{project.tech}</p>
        </div>
      </div>
    </div>
  );
}