export type SocialLink = {
  label: string
  url: string
  icon?: string // optional icon name / SVG path reference
}

export type Stat = {
  id: string
  label: string
  value: string | number
  icon?: string
}

export type Skill = {
  name: string
  category?: string
  icon?: string
  level: number // 0-100
}

export type ExperienceItem = {
  id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  description: string
  technologies: string[]
  achievements?: string[]
}

export type EducationItem = {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  grade?: string
  description?: string
}

export type Project = {
  id: string
  slug: string
  name: string
  category: string
  description: string
  features?: string[]
  technologies: string[]
  images?: string[]
  video?: string
  liveUrl?: string
  repoUrl?: string
  status?: 'Completed' | 'In Progress' | 'Prototype' | string
  completionDate?: string
  featured?: boolean
  tags?: string[]
}

export type Testimonial = {
  id: string
  name: string
  position?: string
  company?: string
  review: string
  photo?: string
  rating?: number
}

export type Certification = {
  id: string
  name: string
  issuer: string
  date: string
  credentialId?: string
  url?: string
  image?: string
}

export type PortfolioData = {
  siteMetadata: {
    title: string
    description: string
    keywords: string[]
    url?: string
    ogImage?: string
    twitterCard?: string
    favicon?: string
  }
  personal: {
    name: string
    title: string
    tagline?: string
    shortBio?: string
    longBio?: string
    email?: string
    phone?: string
    location?: string
    resumeUrl?: string
    profileImage?: string
    coverImage?: string
  }
  socialLinks: SocialLink[]
  stats: Stat[]
  skills: Skill[]
  services?: { id: string; title: string; description: string; icon?: string }[]
  experience: ExperienceItem[]
  education: EducationItem[]
  projects: Project[]
  testimonials: Testimonial[]
  certifications: Certification[]
  gallery?: { id: string; src: string; title?: string; category?: string }[]
  blogPosts?: { id: string; title: string; slug: string; excerpt: string; date: string; cover?: string; readTime?: string; category?: string }[]
}
