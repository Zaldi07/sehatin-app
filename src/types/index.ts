export interface NavItem {
  label: string
  path: string
}

export interface ServiceItem {
  id: string
  title: string
  category: string
  description: string
  features: string[]
  iconName?: string
  image?: string
}

export interface PortfolioItem {
  id: string
  title: string
  category: string
  description: string
  image: string
  location?: string
  year?: string
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
