export interface NavItem {
  label: string
  path: string
}

export interface ServiceItem {
  id: string
  title: string
  category: string
  tag?: string
  description: string
  features: string[]
  deliverables?: string[]
  duration?: string
  idealFor?: string
  popular?: boolean
  iconName?: string
  image?: string
  gallery?: string[]
}

export interface ProcessStep {
  number: string
  title: string
  subtitle: string
  description: string
  duration: string
  deliverables: string[]
}

export interface FaqItem {
  question: string
  answer: string
  category?: string
}

export interface ContactFormData {
  fullName: string
  email: string
  phone: string
  serviceId: string
  projectScale: string
  location: string
  budgetRange: string
  message: string
}

export interface PortfolioColor {
  name: string
  hex: string
}

export interface PortfolioItem {
  id: string
  title: string
  category: string
  description: string
  image: string
  location?: string
  year?: string
  client?: string
  area?: string
  duration?: string
  concept?: string
  challenge?: string
  solution?: string
  gallery?: string[]
  materials?: string[]
  colorPalette?: PortfolioColor[]
  features?: string[]
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export interface StatItem {
  value: string
  label: string
}

export interface TestimonialItem {
  id: string
  quote: string
  author: string
  role: string
  avatar: string
}
