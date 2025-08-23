export interface SkillCategory {
  id: string
  name: string
  description?: string
  color: string
  icon: string
}

export interface Skill {
  id: string
  name: string
  level: number // 1-100 percentage
  categoryId: string
  icon?: string
  description?: string
  yearsOfExperience?: number
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'cloud',
    name: 'Cloud & Infrastructure',
    description: 'Cloud platforms and infrastructure management',
    color: 'from-blue-500 to-cyan-500',
    icon: 'Cloud'
  },
  {
    id: 'containers',
    name: 'Container Orchestration',
    description: 'Containerization and orchestration platforms',
    color: 'from-green-500 to-emerald-500',
    icon: 'Server'
  },
  {
    id: 'automation',
    name: 'Infrastructure as Code',
    description: 'Infrastructure automation and configuration',
    color: 'from-purple-500 to-violet-500',
    icon: 'Code'
  },
  {
    id: 'cicd',
    name: 'CI/CD & Automation',
    description: 'Continuous integration and deployment',
    color: 'from-orange-500 to-amber-500',
    icon: 'Settings'
  },
  {
    id: 'monitoring',
    name: 'Monitoring & Observability',
    description: 'System monitoring and observability tools',
    color: 'from-pink-500 to-rose-500',
    icon: 'Activity'
  },
  {
    id: 'security',
    name: 'Security & Best Practices',
    description: 'Security frameworks and best practices',
    color: 'from-red-500 to-pink-500',
    icon: 'Shield'
  }
]

export const skills: Skill[] = [
  // Cloud & Infrastructure
  {
    id: 'aws',
    name: 'AWS',
    level: 95,
    categoryId: 'cloud',
    yearsOfExperience: 6,
    description: 'AWS Solutions Architect Professional level expertise'
  },
  {
    id: 'azure',
    name: 'Azure',
    level: 80,
    categoryId: 'cloud',
    yearsOfExperience: 3,
    description: 'Azure cloud architecture and Kubernetes Service'
  },
  {
    id: 'gcp',
    name: 'Google Cloud Platform',
    level: 75,
    categoryId: 'cloud',
    yearsOfExperience: 2,
    description: 'GCP services and cloud architecture'
  },
  {
    id: 'hybrid-cloud',
    name: 'Hybrid Cloud Architecture',
    level: 85,
    categoryId: 'cloud',
    yearsOfExperience: 4,
    description: 'Multi-cloud and hybrid infrastructure design'
  },

  // Container Orchestration
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    level: 90,
    categoryId: 'containers',
    yearsOfExperience: 5,
    description: 'Production workload orchestration and management'
  },
  {
    id: 'docker',
    name: 'Docker',
    level: 95,
    categoryId: 'containers',
    yearsOfExperience: 6,
    description: 'Containerization and container lifecycle management'
  },
  {
    id: 'helm',
    name: 'Helm',
    level: 85,
    categoryId: 'containers',
    yearsOfExperience: 4,
    description: 'Kubernetes package management and templating'
  },
  {
    id: 'kustomize',
    name: 'Kustomize',
    level: 80,
    categoryId: 'containers',
    yearsOfExperience: 3,
    description: 'Kubernetes configuration management'
  },
  {
    id: 'argocd',
    name: 'GitOps (ArgoCD)',
    level: 85,
    categoryId: 'containers',
    yearsOfExperience: 3,
    description: 'GitOps workflows and continuous deployment'
  },

  // Infrastructure as Code
  {
    id: 'terraform',
    name: 'Terraform',
    level: 95,
    categoryId: 'automation',
    yearsOfExperience: 5,
    description: 'Infrastructure automation and state management'
  },
  {
    id: 'cloudformation',
    name: 'CloudFormation',
    level: 85,
    categoryId: 'automation',
    yearsOfExperience: 4,
    description: 'AWS infrastructure templates and stacks'
  },
  {
    id: 'ansible',
    name: 'Ansible',
    level: 80,
    categoryId: 'automation',
    yearsOfExperience: 3,
    description: 'Configuration management and automation'
  },

  // CI/CD & Automation
  {
    id: 'jenkins',
    name: 'Jenkins',
    level: 90,
    categoryId: 'cicd',
    yearsOfExperience: 5,
    description: 'CI/CD pipeline development and management'
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    level: 85,
    categoryId: 'cicd',
    yearsOfExperience: 3,
    description: 'Workflow automation and deployment pipelines'
  },
  {
    id: 'gitlab-ci',
    name: 'GitLab CI',
    level: 80,
    categoryId: 'cicd',
    yearsOfExperience: 3,
    description: 'GitLab continuous integration and deployment'
  },
  {
    id: 'bitbucket-pipelines',
    name: 'Bitbucket Pipelines',
    level: 75,
    categoryId: 'cicd',
    yearsOfExperience: 2,
    description: 'Atlassian CI/CD pipeline management'
  },
  {
    id: 'aws-cicd',
    name: 'AWS CI/CD Tools',
    level: 85,
    categoryId: 'cicd',
    yearsOfExperience: 4,
    description: 'CodePipeline, CodeBuild, and CodeDeploy'
  },

  // Monitoring & Observability
  {
    id: 'prometheus',
    name: 'Prometheus',
    level: 85,
    categoryId: 'monitoring',
    yearsOfExperience: 4,
    description: 'Metrics collection and alerting'
  },
  {
    id: 'grafana',
    name: 'Grafana',
    level: 85,
    categoryId: 'monitoring',
    yearsOfExperience: 4,
    description: 'Data visualization and dashboard creation'
  },
  {
    id: 'alertmanager',
    name: 'AlertManager',
    level: 80,
    categoryId: 'monitoring',
    yearsOfExperience: 3,
    description: 'Alert routing and notification management'
  },
  {
    id: 'elk-stack',
    name: 'ELK Stack',
    level: 80,
    categoryId: 'monitoring',
    yearsOfExperience: 3,
    description: 'Elasticsearch, Logstash, and Kibana'
  },
  {
    id: 'wavefront',
    name: 'Wavefront',
    level: 75,
    categoryId: 'monitoring',
    yearsOfExperience: 2,
    description: 'Application performance monitoring'
  },

  // Security & Best Practices
  {
    id: 'aws-security',
    name: 'AWS Well-Architected Framework',
    level: 90,
    categoryId: 'security',
    yearsOfExperience: 5,
    description: 'Security best practices and compliance'
  },
  {
    id: 'it-security',
    name: 'IT Security Best Practices',
    level: 85,
    categoryId: 'security',
    yearsOfExperience: 6,
    description: 'Infrastructure security and compliance'
  },
  {
    id: 'scripting',
    name: 'Multiple Scripting Languages',
    level: 90,
    categoryId: 'security',
    yearsOfExperience: 6,
    description: 'Bash, Python, PowerShell automation'
  },
  {
    id: 'distributed-systems',
    name: 'Large-scale Distributed Systems',
    level: 85,
    categoryId: 'security',
    yearsOfExperience: 5,
    description: '500+ microservices architecture and management'
  }
]

export const getSkillsByCategory = (categoryId: string) => {
  return skills.filter(skill => skill.categoryId === categoryId)
}

export const getSkillLevel = (level: number): string => {
  if (level >= 90) return 'Expert'
  if (level >= 75) return 'Advanced'
  if (level >= 60) return 'Intermediate'
  return 'Beginner'
}

export const getTotalExperience = () => {
  return Math.max(...skills.map(skill => skill.yearsOfExperience || 0))
}

export const getSkillStats = () => {
  return {
    totalSkills: skills.length,
    expertSkills: skills.filter(skill => skill.level >= 90).length,
    categories: skillCategories.length,
    averageLevel: Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length),
    totalExperience: getTotalExperience()
  }
}