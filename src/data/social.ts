import { SocialLink, NavigationItem, ContactInfo, SEOData } from '@/types'

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/konstantinos-konstantinidis',
    icon: 'Linkedin',
    username: 'Konstantinos Konstantinidis',
    color: '#0077B5',
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:kkonstancc@gmail.com',
    icon: 'Mail',
    username: 'kkonstancc@gmail.com',
    color: '#EA4335',
  },
  {
    id: 'phone',
    name: 'Phone',
    url: 'tel:+306940277271',
    icon: 'Phone',
    username: '+30 694 027 7271',
    color: '#4CAF50',
  },
]

export const navigationItems: NavigationItem[] = [
  {
    id: 'about',
    label: 'About',
    href: '#about',
    icon: 'User',
  },
  {
    id: 'experience',
    label: 'Experience',
    href: '#experience',
    icon: 'Briefcase',
  },
  {
    id: 'skills',
    label: 'Skills',
    href: '#skills',
    icon: 'Code',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
    icon: 'MessageCircle',
  },
]

export const contactInfo: ContactInfo = {
  email: 'kkonstancc@gmail.com',
  phone: '+30 694 027 7271',
  location: 'Thessaloniki, Greece',
  timezone: 'EET (UTC+2)',
  availability: 'Open to opportunities',
}

export const seoData: SEOData = {
  title: 'Konstantinos Konstantinidis - DevOps & Infrastructure Engineer',
  description:
    'Experienced DevOps & Infrastructure Engineer with 6+ years of expertise in AWS, Kubernetes, Terraform, and scalable cloud architectures.',
  keywords: [
    'devops engineer',
    'aws solutions architect',
    'kubernetes',
    'terraform',
    'cloud engineering',
    'infrastructure automation',
    'ci/cd',
    'containerization',
    'docker',
    'cloud migration',
  ],
  author: 'Konstantinos Konstantinidis',
  url: 'https://konstantinos.dev',
  image: '/og-image.jpg',
  twitterHandle: '',
}
