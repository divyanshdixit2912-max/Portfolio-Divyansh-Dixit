"use client";
import Link from "next/link";
import { useState } from "react";
import portfolioData from "@/data/portfolioData";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-40 backdrop-blur-sm py-3"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          {portfolioData.personal.name}
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((n) => (
            <a key={n.label} href={n.href} className="text-sm text-slate-300 hover:text-white">
              {n.label}
            </a>
          ))}
          <a href={portfolioData.personal.resumeUrl} className="btn btn-sm">
            Resume
          </a>
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md bg-white/5"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-3">
          <div className="bg-[var(--card)] p-4 rounded-lg card container mx-auto px-4">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="block py-2">
                {n.label}
              </a>
            ))}
            <a href={portfolioData.personal.resumeUrl} className="block mt-2">
              Download Resume
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
