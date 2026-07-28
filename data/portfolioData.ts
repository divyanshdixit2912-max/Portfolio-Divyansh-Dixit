import type { PortfolioData } from "@/types/portfolio";

const portfolioData: PortfolioData = {
  siteMetadata: {
    title: "Your Name — Product Designer & Engineer",
    description: "A modern, minimal portfolio template built with Next.js, TypeScript, Tailwind and Framer Motion.",
    keywords: ["portfolio", "developer", "designer", "nextjs", "typescript"],
    url: "https://example.com",
    ogImage: "/og-image.png",
    twitterCard: "summary_large_image",
    favicon: "/favicon.ico"
  },
  personal: {
    name: "Your Name",
    title: "Product Designer & Frontend Engineer",
    tagline: "Building delightful digital experiences",
    shortBio: "I design and build accessible, high-performance web experiences.",
    longBio:
      "Long bio placeholder. Talk about your mission, approach, and what you bring to teams and clients. This section is intentionally long to demonstrate layout.",
    email: "hello@example.com",
    phone: "+1 (555) 555-5555",
    location: "City, Country",
    resumeUrl: "/resume.pdf",
    profileImage: "/profile.jpg",
    coverImage: "/cover.jpg"
  },
  socialLinks: [
    { label: "GitHub", url: "https://github.com/yourname" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourname" },
    { label: "Twitter", url: "https://twitter.com/yourname" }
  ],
  stats: [
    { id: "projects", label: "Projects Completed", value: 28 },
    { id: "clients", label: "Clients Served", value: 12 },
    { id: "years", label: "Years Experience", value: 6 },
    { id: "awards", label: "Awards", value: 4 }
  ],
  skills: [
    { name: "TypeScript", category: "Programming Languages", level: 92 },
    { name: "React", category: "Frontend", level: 95 },
    { name: "Next.js", category: "Frontend", level: 90 },
    { name: "Node.js", category: "Backend", level: 82 },
    { name: "Tailwind CSS", category: "Design", level: 90 },
    { name: "Framer Motion", category: "Design", level: 85 },
    { name: "Python", category: "Programming Languages", level: 70 }
  ],
  services: [
    { id: "uiux", title: "UI/UX Design", description: "User-first product & visual design." },
    { id: "webdev", title: "Web Development", description: "Frontend & full-stack development." }
  ],
  experience: [
    {
      id: "exp-1",
      company: "Acme Inc",
      position: "Senior Frontend Engineer",
      startDate: "2021-08",
      endDate: "Present",
      description: "Led frontend architecture and component library, worked across design and engineering to ship several high-impact products.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
      achievements: ["Reduced bundle size by 30%", "Launched design system"]
    },
    {
      id: "exp-2",
      company: "Innovate Labs",
      position: "Product Engineer",
      startDate: "2019-06",
      endDate: "2021-07",
      description: "Built features end-to-end and coordinated with product teams.",
      technologies: ["Node.js", "Postgres", "Docker"]
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "State University",
      degree: "B.Sc. Computer Science",
      field: "Computer Science",
      startDate: "2014",
      endDate: "2018",
      grade: "3.8 GPA",
      description: "Focused on software engineering and human-computer interaction."
    }
  ],
  projects: [
    {
      id: "proj-1",
      slug: "project-alpha",
      name: "Project Alpha",
      category: "Web Development",
      description: "A high-performance dashboard for tracking product metrics.",
      features: ["Real-time charts", "Custom dashboards", "Exportable reports"],
      technologies: ["Next.js", "React", "D3"],
      images: [
        "https://placehold.co/800x600.png",
        "https://placehold.co/800x600.png"
      ],
      video: "",
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/yourname/project-alpha",
      status: "Completed",
      completionDate: "2024-06-01",
      featured: true,
      tags: ["web", "dashboard"]
    },
    {
      id: "proj-2",
      slug: "ai-assistant",
      name: "AI Assistant",
      category: "AI",
      description: "An assistant that helps writers accelerate content creation.",
      technologies: ["Python", "FastAPI", "OpenAI"],
      images: ["https://placehold.co/800x600.png"],
      status: "In Progress",
      completionDate: "2025-01-15",
      tags: ["ai", "automation"]
    }
  ],
  testimonials: [
    {
      id: "t-1",
      name: "Jane Smith",
      position: "Product Manager",
      company: "Acme Inc",
      review: "An exceptional teammate — delivered on time with excellent quality.",
      rating: 5,
      photo: "https://placehold.co/100x100"
    }
  ],
  certifications: [
    {
      id: "c-1",
      name: "Certified Web Developer",
      issuer: "Cert Authority",
      date: "2022-10",
      credentialId: "ABC-123",
      url: "",
      image: ""
    }
  ],
  gallery: [
    { id: "g1", src: "https://placehold.co/800x600", title: "Design sample", category: "Design" }
  ],
  blogPosts: [
    {
      id: "b-1",
      title: "Designing for Performance",
      slug: "designing-for-performance",
      excerpt: "How performance-first thinking makes better products.",
      date: "2024-05-02",
      cover: "https://placehold.co/1200x630",
      readTime: "6 min",
      category: "Design"
    }
  ]
};

export default portfolioData;
