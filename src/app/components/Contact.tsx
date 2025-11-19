// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Linkedin, Github, Facebook, Instagram } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// export default function Contact() {
//   const titleRef = useRef(null);
//   const formRef = useRef(null);
//   const socialRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       titleRef.current,
//       { y: 100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: "top 80%",
//         },
//       }
//     );

//     gsap.fromTo(
//       formRef.current,
//       { y: 120, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1.2,
//         delay: 0.3,
//         ease: "power3.out",
//         scrollTrigger: {
//           start: "top 85%",
//           trigger: formRef.current,
//         },
//       }
//     );

//     gsap.fromTo(
//       socialRef.current,
//       { y: 100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1.2,
//         delay: 0.6,
//         ease: "power3.out",
//         scrollTrigger: {
//           start: "top 90%",
//           trigger: socialRef.current,
//         },
//       }
//     );
//   }, []);

//   return (
//     <section id="contact" className="min-h-screen flex items-center px-8 py-32 bg-black text-white">
//       <div className="max-w-4xl mx-auto w-full">
//         <h2
//           ref={titleRef}
//           className="text-7xl md:text-9xl font-bold tracking-tighter mb-20"
//         >
//           Contact
//         </h2>

//         {/* FORMULAIRE */}
//         <form
//           ref={formRef}
//           className="space-y-12"
//           action="https://formspree.io/f/ton-id"
//           method="POST"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Nom"
//             required
//             className="w-full bg-transparent border-b border-gray-600 text-2xl py-4  focus:border-white outline-none transition-colors"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             required
//             className="w-full bg-transparent border-b border-gray-600 text-2xl py-4  focus:border-white outline-none transition-colors"
//           />

//           <textarea
//             name="message"
//             rows={4}
//             placeholder="Message"
//             required
//             className="w-full bg-transparent border-b border-gray-600 text-2xl py-4 focus:border-white outline-none transition-colors resize-none"
//           />

//           <button
//             type="submit"
//             className="text-2xl border border-white px-12 py-6 hover:bg-white hover:text-black transition-all duration-500"
//           >
//             Envoyer
//           </button>
//         </form>

//         {/* SOCIAL ICONS */}
//         <div
//           ref={socialRef}
//           className="flex items-center gap-8 mt-20 text-4xl"
//         >
//           <a
//             href="https://www.linkedin.com/in/sabi-rakotoalimanana-7326a0312"
//             target="_blank"
//             className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
//           >
//             <Linkedin size={40} />
//           </a>

//           <a
//             href="https://github.com/sabiHakim"
//             target="_blank"
//             className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
//           >
//             <Github size={40} />
//           </a>

//           <a
//             href="https://www.facebook.com/hakimsabi.rakotoalimanana/"
//             target="_blank"
//             className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
//           >
//             <Facebook size={40} />
//           </a>

//           <a
//             href="https://www.instagram.com/sabi__hakim?igsh=MXFjN3RxMnU2eGV5NQ%3D%3D&utm_source=qr"
//             target="_blank"
//             className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
//           >
//             <Instagram size={40} />
//           </a>
//         </div>

//         <p className="mt-12 text-gray-500 text-lg">
//           Ou directement : srakotoalimanana@gmail.com
//         </p>
//       </div>
//     </section>
//   );
// }
// Petite version boostée de ton composant Contact (à copier-coller)

"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Github, Mail, Send, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const titleRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const socialRef = useRef(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // Gestion de l'envoi + message de confirmation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000); // disparaît après 5s
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: titleRef.current, start: "top 80%" },
    });

    tl.from(titleRef.current, { y: 120, opacity: 0, duration: 1.2, ease: "power4.out" })
      .from(formRef.current, { y: 100, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.8")
      .from(socialRef.current, { y: 80, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.6");
  }, []);

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-8 py-32 bg-black text-white">
      <div className="max-w-2xl mx-auto w-full">
        <h2 ref={titleRef} className="text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter mb-24 text-center">
          Contact
        </h2>

        {/* FORMULAIRE QUI MARCHE VRAIMENT */}
        <form
          ref={formRef}
          action="https://formspree.io/f/meonarjp"  
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-12 relative"
        >
          <input type="text" name="name" placeholder="Ton nom" required className="w-full bg-transparent border-b-2 border-gray-700 text-3xl py-5 focus:border-white outline-none transition-all duration-500" />
          <input type="email" name="email" placeholder="Ton email" required className="w-full bg-transparent border-b-2 border-gray-700 text-3xl py-5 focus:border-white outline-none transition-all duration-500" />
          <textarea name="message" rows={5} placeholder="Ton message…" required className="w-full bg-transparent border-b-2 border-gray-700 text-3xl py-5 focus:border-white outline-none transition-all duration-500 resize-none"></textarea>

          <button
            type="submit"
            disabled={status === "sending"}
            className="group flex items-center gap-4 text-2xl border-2 border-white px-12 py-6 hover:bg-white hover:text-black disabled:opacity-60 transition-all duration-500 font-medium"
          >
            {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
            <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>

          {/* Messages de confirmation */}
          {status === "success" && (
            <div className="absolute -bottom-16 left-0 flex items-center gap-3 text-green-400 text-xl animate-pulse">
              <CheckCircle /> Message envoyé ! Je te réponds très vite.
            </div>
          )}
          {status === "error" && (
            <div className="absolute -bottom-16 left-0 text-red-400 text-xl">
              Erreur d’envoi, réessaie ou écris-moi directement 🙂
            </div>
          )}
        </form>

        {/* Réseaux sociaux */}
        <div ref={socialRef} className="flex justify-center gap-12 mt-32 text-5xl">
          <a href="https://www.linkedin.com/in/sabi-rakotoalimanana-7326a0312" target="_blank" className="hover:text-purple-400 transition-all hover:scale-110"><Linkedin /></a>
          <a href="https://github.com/sabiHakim" target="_blank" className="hover:text-purple-400 transition-all hover:scale-110"><Github /></a>
          <a href="mailto:srakotoalimanana@gmail.com" className="hover:text-purple-400 transition-all hover:scale-110"><Mail /></a>
        </div>

        <p className="text-center mt-12 text-gray-500 text-lg">
          Ou directement → <a href="mailto:srakotoalimanana@gmail.com" className="underline underline-offset-4 hover:text-white">srakotoalimanana@gmail.com</a>
        </p>
      </div>
    </section>
  );
}