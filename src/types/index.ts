export type Theme = 'light' | 'dark'

export interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

export interface NavLink {
  label: string
  href: string
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  benefits: string[]
  icon: 'refresh' | 'zap' | 'gitMerge' | 'brain'
}

export interface MethodStep {
  id: string
  title: string
  description: string
}

export interface ValueItem {
  id: string
  title: string
  description: string
  icon: 'search' | 'rocket' | 'users' | 'chart'
}

export interface StatItem {
  value: string
  label: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface TestimonialItem {
  id: string
  name: string
  company: string
  position: string
  quote: string
}
