import portfolioData from "@/data/portfolioData";
import { motion } from "framer-motion";

export default function About() {
  const { personal, stats } = portfolioData;
  return (
    <section id="about" className="py-12">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 card p-6">
            <p className="text-slate-200">{personal.longBio}</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.id} className="p-4 bg-white/2 rounded-lg">
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-sm text-slate-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Contact</h3>
            <p className="text-slate-300 mt-2">{personal.email}</p>
            <p className="text-slate-300">{personal.location}</p>
            <div className="mt-4 space-y-2">
              {portfolioData.socialLinks.map((s) => (
                <a key={s.label} href={s.url} className="block text-slate-300">{s.label}</a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
