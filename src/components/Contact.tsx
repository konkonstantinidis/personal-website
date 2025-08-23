import { Mail, Calendar, Linkedin, MapPin, Clock, Send } from 'lucide-react'
import { motion } from 'framer-motion'

export interface ContactProps {
  email?: string
  linkedinUrl?: string
  calendlyUrl?: string
  location?: string
}

export function Contact({
  email = 'kkonstancc@gmail.com',
  linkedinUrl = 'https://linkedin.com/in/konstantinos-konstantinidis',
  calendlyUrl = 'https://calendly.com/your-username', // You'll need to set up Calendly
  location = 'Thessaloniki, Greece',
}: ContactProps) {
  const contactMethods = [
    {
      id: 'email',
      title: 'Email Me',
      subtitle: 'Send me a message',
      description: 'I typically respond within 24 hours',
      icon: Mail,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      action: {
        href: `mailto:${email}?subject=Hello from your portfolio&body=Hi Konstantinos,%0D%0A%0D%0AI'd like to get in touch with you regarding...%0D%0A%0D%0ABest regards`,
        label: 'Send Email',
        icon: Send,
      },
    },
    {
      id: 'calendly',
      title: 'Schedule a Call',
      subtitle: 'Book a meeting',
      description: 'Available for 30-min calls',
      icon: Calendar,
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      action: {
        href: calendlyUrl,
        label: 'Book Meeting',
        icon: Clock,
        external: true,
      },
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      subtitle: 'Professional network',
      description: 'Connect and message on LinkedIn',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800',
      action: {
        href: linkedinUrl,
        label: 'Connect',
        icon: Linkedin,
        external: true,
      },
    },
  ]

  return (
    <section
      id="contact"
      className="relative bg-gray-50 dark:bg-gray-900 py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2
                id="contact-heading"
                className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
              >
                Let's Connect
              </h2>
              <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6" />
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Ready to discuss your next DevOps project or explore
                collaboration opportunities? I'd love to hear from you. Choose
                your preferred way to connect.
              </p>
            </motion.div>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              const ActionIcon = method.action.icon

              return (
                <motion.div
                  key={method.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="h-full bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r ${method.color} mb-6 text-white transform transition-transform group-hover:scale-110`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {method.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                        {method.subtitle}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {method.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <a
                      href={method.action.href}
                      target={method.action.external ? '_blank' : undefined}
                      rel={
                        method.action.external
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r ${method.color} ${method.hoverColor} text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-md`}
                    >
                      <ActionIcon className="w-4 h-4" />
                      {method.action.label}
                    </a>

                    {/* Hover gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300 pointer-events-none`}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Clock className="w-5 h-5 text-green-500" />
                <span>EET (UTC+2) Timezone</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5 text-purple-500" />
                <span>{email}</span>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Looking for a DevOps engineer to help scale your infrastructure?
            </p>
            <a
              href={`mailto:${email}?subject=DevOps Opportunity&body=Hi Konstantinos,%0D%0A%0D%0AWe have an exciting DevOps opportunity and would like to discuss it with you.%0D%0A%0D%0AProject details:%0D%0A-%0D%0A-%0D%0A%0D%0ABest regards`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg"
            >
              <Send className="w-5 h-5" />
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
