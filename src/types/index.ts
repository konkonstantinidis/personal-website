export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  description: string
  responsibilities: string[]
  technologies: string[]
  achievements?: string[]
  type: 'work' | 'education' | 'project'
  logo?: string
  website?: string
}

export interface Skill {
  id: string
  name: string
  category: SkillCategory
  level: SkillLevel
  icon?: string
  description?: string
  yearsOfExperience?: number
}

export type SkillCategory = 
  | 'frontend'
  | 'backend' 
  | 'database'
  | 'devops'
  | 'tools'
  | 'languages'
  | 'frameworks'
  | 'cloud'

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert'

export interface SocialLink {
  id: string
  name: string
  url: string
  icon: string
  username?: string
  color?: string
}

export interface NavigationItem {
  id: string
  label: string
  href: string
  icon?: string
}

export interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export interface AnimationVariants {
  hidden: Record<string, any>
  visible: Record<string, any>
}

export interface ContactInfo {
  email: string
  phone?: string
  location: string
  timezone?: string
  availability?: string
}

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  author: string
  url: string
  image?: string
  twitterHandle?: string
}

// Component Props Types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export interface SectionProps {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

// Error Boundary Types
export interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

// API Response Types
export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
  timestamp: string
}

export interface ApiError {
  message: string
  code: string
  status: number
  timestamp: string
}