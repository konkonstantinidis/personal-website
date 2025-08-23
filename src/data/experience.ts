export interface Experience {
  id: string
  company: string
  role: string
  startDate: string
  endDate: string | 'Present'
  location: string
  description: string
  achievements: string[]
  technologies: string[]
  logoUrl?: string
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Orbital',
    role: 'DevOps Lead',
    startDate: '2023-10',
    endDate: 'Present',
    location: 'Remote',
    description: 'Lead and manage DevOps team operations, driving infrastructure strategy and implementation for scalable cloud solutions.',
    achievements: [
      'Lead and manage DevOps team operations, driving infrastructure strategy and implementation',
      'Architect and maintain scalable cloud infrastructure using Terraform and serverless technologies',
      'Design and implement comprehensive CI/CD pipelines using GitHub Actions',
      'Manage containerized workloads and database infrastructure (Atlas MongoDB)',
      'Collaborate with development teams to integrate advanced solutions into production systems'
    ],
    technologies: ['AWS', 'Terraform', 'GitHub Actions', 'Kubernetes', 'Docker', 'MongoDB Atlas', 'Serverless']
  },
  {
    id: '2',
    company: 'Cloudvisor',
    role: 'Senior DevOps Engineer',
    startDate: '2022-07',
    endDate: '2023-07',
    location: 'Remote',
    description: 'Delivered end-to-end SaaS solutions for startup clients migrating to AWS cloud infrastructure.',
    achievements: [
      'Delivered end-to-end SaaS solutions for startup clients migrating to AWS',
      'Led AWS Well-Architected Framework Reviews, ensuring security and operational excellence',
      'Designed scalable and fault-tolerant cloud architectures using Terraform',
      'Implemented complex CI/CD pipelines across multiple platforms (GitLab CI, Bitbucket)',
      'Orchestrated production workloads using Kubernetes, Docker, and Helm'
    ],
    technologies: ['AWS', 'Terraform', 'Kubernetes', 'Docker', 'Helm', 'GitLab CI', 'Bitbucket Pipelines']
  },
  {
    id: '3',
    company: 'Groupon',
    role: 'AWS Cloud Engineer',
    startDate: '2021-11',
    endDate: '2022-07',
    location: 'Remote',
    description: 'Key member of cloud migration team, successfully migrated 500+ microservices from on-premise to AWS.',
    achievements: [
      'Key member of cloud migration team, successfully migrated 500+ microservices from on-premise to AWS',
      'Deployed and managed Kubernetes production workloads in cloud environments',
      'Automated deployment processes using Docker and Helm for containerized applications',
      'Maintained monitoring and observability systems using Wavefront and ELK stack',
      'Ensured high availability and performance of distributed systems'
    ],
    technologies: ['AWS', 'Kubernetes', 'Docker', 'Helm', 'Wavefront', 'ELK Stack', 'Microservices']
  },
  {
    id: '4',
    company: 'Pfizer',
    role: 'Manager-Developer',
    startDate: '2021-02',
    endDate: '2021-11',
    location: 'Remote',
    description: 'Served as DevOps Engineer in Agile development team, ensuring product and infrastructure availability.',
    achievements: [
      'Served as DevOps Engineer in Agile development team, ensuring product and infrastructure availability',
      'Technical Subject Matter Expert for Application Lifecycle Management approvals',
      'Developed and deployed production Kubernetes workloads using Docker and Ansible',
      'Implemented infrastructure automation and configuration management practices'
    ],
    technologies: ['Kubernetes', 'Docker', 'Ansible', 'Jenkins', 'Application Lifecycle Management']
  },
  {
    id: '5',
    company: 'Deloitte Greece',
    role: 'Senior Consultant, Cloud Engineering',
    startDate: '2019-09',
    endDate: '2021-01',
    location: 'Thessaloniki, Greece',
    description: 'Created comprehensive AWS CloudFormation templates for enterprise cloud deployments and Azure solutions.',
    achievements: [
      'Created comprehensive AWS CloudFormation templates for enterprise cloud deployments',
      'Designed Azure Cloud Architecture solutions with Azure Kubernetes Service',
      'Delivered DevOps training and consulting services to enterprise clients',
      'Architected hybrid cloud solutions across multiple platforms'
    ],
    technologies: ['AWS', 'Azure', 'CloudFormation', 'Azure Kubernetes Service', 'Hybrid Cloud']
  },
  {
    id: '6',
    company: 'Deloitte Greece',
    role: 'Consultant, Cloud Engineering',
    startDate: '2018-01',
    endDate: '2019-09',
    location: 'Thessaloniki, Greece',
    description: 'Developed and maintained AWS CI/CD DevOps solutions for enterprise clients.',
    achievements: [
      'Developed and maintained AWS CI/CD DevOps solutions for enterprise clients',
      'Designed serverless architecture solutions and provided cloud consulting services',
      'Implemented containerized solutions using Docker and Kubernetes',
      'Built scalable cloud architectures following AWS best practices'
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Serverless', 'CI/CD', 'DevOps']
  }
]