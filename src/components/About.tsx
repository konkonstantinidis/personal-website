import { Linkedin, Mail, User, MapPin, Phone } from 'lucide-react'
import { AnimatedBackground } from './AnimatedBackground'

export interface AboutProps {
  name?: string
  title?: string
  location?: string
  bio?: string
  email?: string
  linkedinUrl?: string
  avatarUrl?: string
}

export function About({
  name = "Your Name",
  title = "Frontend Developer",
  location = "San Francisco, CA",
  bio = "I'm a passionate frontend developer with expertise in React, TypeScript, and modern web technologies. I love creating beautiful, accessible, and performant user experiences that make a difference.",
  email = "your@email.com",
  linkedinUrl = "https://linkedin.com/in/yourusername",
  avatarUrl
}: AboutProps) {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: linkedinUrl || 'https://linkedin.com/in/konstantinos-konstantinidis',
      icon: Linkedin,
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
      description: 'Connect with me on LinkedIn'
    },
    {
      name: 'Email',
      url: `mailto:${email}`,
      icon: Mail,
      color: 'hover:text-green-600 dark:hover:text-green-400',
      description: 'Send me an email'
    },
    {
      name: 'Phone',
      url: 'tel:+306940277271',
      icon: Phone,
      color: 'hover:text-blue-500 dark:hover:text-blue-300',
      description: 'Call me'
    }
  ]

  return (
    <section 
      id="about" 
      className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <AnimatedBackground />
      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 
            id="about-heading"
            className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
          >
            About Me
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Profile Section */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              {/* Avatar */}
              <div className="mb-8 flex justify-center">
                <div className="group relative">
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 blur-lg transition-all duration-500 group-hover:opacity-100 group-hover:blur-xl"></div>
                  <div className="relative h-48 w-48 overflow-hidden rounded-full bg-white p-2 dark:bg-gray-800 hover:scale-105 transition-transform duration-300">
                    {avatarUrl ? (
                      <img
                        src={avatarUrl}
                        alt={`${name} - ${title}`}
                        className="h-full w-full rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                        <User className="h-24 w-24 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Basic Info */}
              <div className="text-center">
                <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                  {name}
                </h1>
                <p className="mb-4 text-xl font-medium text-blue-600 dark:text-blue-400">
                  {title}
                </p>
                <div className="mb-6 flex items-center justify-center text-gray-600 dark:text-gray-300">
                  <MapPin className="mr-2 h-4 w-4" aria-hidden="true" />
                  <span>{location}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex justify-center">
                <a 
                  href="#contact"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-5 text-sm font-medium text-white transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:scale-105"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-3">
            {/* Bio */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                Hello there! 👋
              </h3>
              <div className="prose prose-lg text-gray-600 dark:text-gray-300">
                <p className="mb-4 leading-relaxed">
                  {bio}
                </p>
                <p className="leading-relaxed">
                  When I'm not architecting cloud solutions, you can find me exploring new DevOps technologies, 
                  automating complex infrastructure deployments, or sharing my expertise with the engineering community. 
                  I believe in building resilient, scalable, and secure infrastructure that enables teams to deliver 
                  exceptional products efficiently.
                </p>
              </div>
            </div>

            {/* Skills/Interests */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                What I Love Working With
              </h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'GitOps', 'Prometheus', 'Ansible'].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 hover:scale-110 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                Education
              </h3>
              <div className="space-y-6">
                <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        MSc in Advanced Computer Science - Cloud Computing
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400">University of Leeds, School of Computing</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Leeds, United Kingdom</p>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        Grade: 6.20/10.0 • Head of School Scholarship recipient
                      </p>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Dissertation: "Energy Efficiency Driven Resource Scalability for Big Data on the Cloud" (Distinction - 76.0/100.0)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        BSc in Computer Science
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400">Alexander Technological Education Institute</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Thessaloniki, Greece</p>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        Grade: 7.01/10.0
                      </p>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Thesis: "Lab as a Service (Image Distribution as a Cloud Service)" (Grade: 10.0/10.0)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Certifications */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                Professional Certifications
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { name: 'AWS Certified Solutions Architect – Professional', date: 'November 2022' },
                  { name: 'AWS Certified DevOps Engineer – Professional', date: 'September 2021' },
                  { name: 'AWS Developer Associate Certification', date: 'June 2018' },
                  { name: 'AWS SysOps Administrator Associate', date: 'September 2018' },
                  { name: 'Azure Fundamentals (AZ-900) Certified', date: 'September 2020' },
                  { name: 'Google Cloud Platform - Certified Associate', date: 'July 2020' }
                ].map((cert) => (
                  <div key={cert.name} className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
                    <h4 className="font-medium text-gray-900 dark:text-white">{cert.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                Let's Connect
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target={link.name !== 'Email' ? '_blank' : undefined}
                      rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                      className={`group flex flex-col items-center rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 dark:bg-gray-800 dark:hover:bg-gray-700 ${link.color}`}
                      aria-label={link.description}
                    >
                      <div className="group-hover:rotate-360 transition-transform duration-600">
                        <IconComponent 
                          className="mb-3 h-8 w-8 transition-transform duration-300 group-hover:scale-110" 
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {link.name}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}