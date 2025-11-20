// // components/Projects.tsx ou app/projets/page.tsx
// import Image from "next/image";
// import Link from "next/link";
// import { ExternalLink } from "lucide-react";

// const projects = [
//   {
//     title: "Times261",
//     tech: "Laravel · PHP · React",
//     descri: "Gestion d'un site de journal  de Madagascar",
//     image: "/ordi.jfif",
//     liveUrl: "https://times261.com",
//   },
//   {
//     title: "Rental System",
//     tech: "Next.js · SpringBoot · Java",
//     descri: "Platforme pour la gestion de réservation et location de voiture",
//     image: "/ordi.jfif",
//     liveUrl: "https://rental.mg-transp.com",
//   },
//   {
//     title: "C.A.R Platform",
//     tech: "Next.js · TypeScript · Tailwind",
//     descri: "Développement du site web de l'entreprise",
//     image: "/ordi.jfif",
//     liveUrl: "https://cartaxaudit.com",
//   },
//   {
//     title: "ERP C.A.R",
//     tech: "React · SpringBoot · Java",
//     descri: "Plateforme pour la gestion d'entreprise",
//     image: "/ordi.jfif",
//     liveUrl: "https://erp.cartaxaudit.com",
//   },
//   {
//     title: "Pointage RH",
//     tech: "Laravel · PHP",
//     descri: "Gestion de pointage d'employer par empreinte digitale",
//     image: "/ordi.jfif",
//     soon: true,
//   },
// ];

// export default function Projects() {
//   return (
//     <section className="min-h-screen bg-black py-32 px-6 md:px-12">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter text-center mb-32 text-white/90">
//           Projets
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
//           {projects.map((project, i) => (
//             <div
//               key={i}
//               className="group relative h-[560px] rounded-3xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 
//                          transition-all duration-700 hover:border-white/30 hover:shadow-2xl hover:shadow-purple-500/30"
//             >
//               {/* Image avec zoom */}
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover transition-transform duration-1200 ease-out group-hover:scale-110"
//                 sizes="(max-width: 768px) 100vw, 50vw"
//               />

//               {/* Overlay sombre au hover */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

//               {/* Titre + Badge (toujours visible en haut) */}
//               <div className="absolute top-10 left-10 right-10 flex justify-between items-start z-10">
//                 <h3 className="text-xl md:text-3xl font-black tracking-tight text-purple">
//                   {project.title}
//                 </h3>

//                 <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
//                   {project.liveUrl ? (
//                     <div className="flex items-center gap-2 bg-purple-600/90 backdrop-blur px-5 py-2.5 rounded-full text-xs font-bold tracking-wider">
//                       <span className="relative flex h-2 w-2">
//                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                         <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
//                       </span>
//                       LIVE
//                     </div>
//                   ) : (
//                     <div className="bg-white/10 backdrop-blur px-6 py-2.5 rounded-full text-xs font-medium">
//                       Bientôt
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Description + Lien qui monte depuis le bas au hover */}
//               <div className="absolute bottom-0 left-0 right-0 p-10 md:p-14 text-white translate-y-32 group-hover:translate-y-0 transition-transform duration-800 ease-out">
//                 <p
//                   className="text-xl md:text-2xl text-gray-300 font-medium mb-8 leading-relaxed 
//                               opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"
//                 >
//                   {project.tech}
//                   <br />
//                   {project.descri}
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Mollitia rem minima fugiat et, eius amet facilis possimus
//                   deserunt atque! Dicta fugit cumque cupiditate. Ab, mollitia?
//                   Sint sunt assumenda eaque pariatur.
//                 </p>

//                 {project.liveUrl && (
//                   <Link
//                     href={project.liveUrl}
//                     target="_blank"
//                     className="inline-flex items-center gap-3 text-purple-400 font-medium text-lg
//                                opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 
//                                transition-all duration-700 delay-200 hover:text-white"
//                   >
//                     Voir le projet <ExternalLink className="w-6 h-6" />
//                   </Link>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// app/projets/page.tsx ou components/Projects.tsx
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Times261",
    tech: "Laravel · PHP · React",
    descri: "Gestion d'un site de journal de Madagascar",
    image: "/ordi.jfif",
    liveUrl: "https://times261.com",
  },
  {
    title: "Rental System",
    tech: "Next.js · SpringBoot · Java",
    descri: "Plateforme pour la gestion de réservation et location de voiture",
    image: "/ordi.jfif",
    liveUrl: "https://rental.mg-transp.com",
  },
  {
    title: "C.A.R Platform",
    tech: "Next.js · TypeScript · Tailwind",
    descri: "Développement du site web de l'entreprise",
    image: "/ordi.jfif",
    liveUrl: "https://cartaxaudit.com",
  },
  {
    title: "ERP C.A.R",
    tech: "React · SpringBoot · Java",
    descri: "Plateforme pour la gestion d'entreprise",
    image: "/ordi.jfif",
    liveUrl: "https://erp.cartaxaudit.com",
  },
  {
    title: "Pointage RH",
    tech: "Laravel · PHP",
    descri: "Gestion de pointage d'employés par empreinte digitale",
    image: "/ordi.jfif",
    soon: true,
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-black py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter text-center mb-32 text-white/90">
          Projets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative h-[560px] rounded-3xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 
                         transition-all duration-700 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Image + zoom */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1200 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay global sombre */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Titre toujours visible en haut */}
              <div className="absolute top-10 left-10 z-20">
                <h3 className="text-  xl md:text-2xl font-black tracking-tight text-purple-500">
                  {project.title}
                </h3>
              </div>

              {/* Badge LIVE / Bientôt (apparaît au hover) */}
              <div className="absolute top-10 right-10 z-20 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-600 delay-100">
                {project.liveUrl ? (
                  <div className="flex items-center gap-2 bg-purple-600/90 backdrop-blur px-5 py-2.5 rounded-full text-xs font-bold tracking-wider">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                    </span>
                    LIVE
                  </div>
                ) : (
                  <div className="bg-white/10 backdrop-blur px-6 py-2.5 rounded-full text-xs font-medium text-gray-300">
                    Bientôt
                  </div>
                )}
              </div>

              {/* === PLAQUE DE FOND + CONTENU QUI MONTE === */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-48 group-hover:translate-y-0 transition-transform duration-900 ease-out">
                <div className="mx-8 md:mx-12 mb-8 md:mb-12 p-10 md:p-12 rounded-3xl 
                                bg-gradient-to-t from-purple-900/50 via-purple-900/20 to-transparent 
                                backdrop-blur-xl border border-purple-500/30 
                                shadow-2xl shadow-purple-600/30">
                  <div className="space-y-6">
                    {/* Tech stack */}
                    <p className="text-lg md:text-xl text-purple-200 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                      {project.tech}
                    </p>

                    {/* Description longue */}
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                      {project.descri}
                    </p>

                    {/* Lien */}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="inline-flex items-center gap-3 text-purple-400 font-semibold text-lg
                                   opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 
                                   transition-all duration-700 delay-500 hover:text-purple-300"
                      >
                        Voir le projet
                        <ExternalLink className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}