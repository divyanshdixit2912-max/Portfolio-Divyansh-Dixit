import portfolioData from "@/data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 mt-12 border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">{portfolioData.personal.name} — {portfolioData.personal.title}</div>
        <div className="text-sm text-slate-400">© {year} {portfolioData.personal.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
