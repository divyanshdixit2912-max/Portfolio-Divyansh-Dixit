import portfolioData from "@/data/portfolioData";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="py-12">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-semibold mb-6">
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <motion.article key={p.id} whileHover={{ y: -6 }} className="card p-4">
            <div className="flex gap-4">
              <div className="w-36 h-24 relative rounded-lg overflow-hidden bg-slate-800">
                {p.images && p.images[0] ? (
                  <Image src={p.images[0]} alt={p.name} fill style={{ objectFit: "cover" }}/>
                ) : (
                  <div className="flex items-center justify-center text-slate-400">Image</div>
                )}
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.name}</h3>
                  {p.featured && <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded">Featured</span>}
                </div>
                <p className="text-slate-300 text-sm mt-2">{p.description}</p>
                <div className="mt-3 flex gap-2 flex-wrap text-xs">
                  {p.tags?.map((t) => (
                    <span key={t} className="px-2 py-1 bg-white/5 rounded">{t}</span>
                  ))}
                </div>
                <div className="mt-3 flex gap-2">
                  {p.liveUrl && (<a href={p.liveUrl} className="text-sm underline">Live</a>)}
                  {p.repoUrl && (<a href={p.repoUrl} className="text-sm underline">Code</a>)}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
