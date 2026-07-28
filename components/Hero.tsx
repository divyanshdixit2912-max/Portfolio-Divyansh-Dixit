import Image from "next/image";
import portfolioData from "@/data/portfolioData";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const { personal } = portfolioData;
  // Simple typewriter effect for tagline variants
  const phrases = [personal.tagline || "Crafting pixel-perfect interfaces", "Building with performance in mind", "Design + Code"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = phrases[index];
    let i = 0;
    let dir = 1;
    let tid = setInterval(() => {
      setText((t) => {
        if (i <= current.length) {
          const next = current.slice(0, i);
          i += 1;
          return next;
        } else {
          clearInterval(tid);
          setTimeout(() => {
            // erase
            let j = current.length;
            const eraser = setInterval(() => {
              j -= 1;
              setText(current.slice(0, j));
              if (j <= 0) {
                clearInterval(eraser);
                setIndex((s) => (s + 1) % phrases.length);
              }
            }, 40);
          }, 1200);
          return t;
        }
      });
    }, 40);
    return () => clearInterval(tid);
  }, [index]);

  return (
    <section id="home" className="pt-24 pb-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">{personal.name}</h1>
          <p className="text-xl text-slate-300 mt-2">{personal.title}</p>
          <p className="mt-6 text-slate-200 max-w-xl">
            {personal.shortBio}
          </p>

          <div className="mt-6 flex gap-3">
            <a href="#projects" className="rounded-md px-4 py-2 bg-[var(--accent)] text-black font-semibold">View Projects</a>
            <a href={personal.resumeUrl} className="rounded-md px-4 py-2 border border-white/10">Download Resume</a>
            <a href="#contact" className="rounded-md px-4 py-2 bg-white/5">Contact Me</a>
          </div>

          <div className="mt-6 text-slate-300">
            <span className="opacity-60">Now: </span>
            <span className="font-mono"> {text}</span>
            <span className="animate-pulse inline-block ml-1">|</span>
          </div>
        </motion.div>

        <motion.div className="relative flex justify-center" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <div className="w-64 h-64 rounded-xl overflow-hidden card flex items-center justify-center">
            {personal.profileImage ? (
              <Image src={personal.profileImage} alt={personal.name} width={300} height={300} className="object-cover"/>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center text-white">Profile</div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
