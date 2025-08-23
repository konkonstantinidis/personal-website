import { useState } from 'react'
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  Building2,
} from 'lucide-react'
import { Experience } from '../data/experience'

export interface ExperienceProps {
  experiences: Experience[]
}

export function ExperienceComponent({ experiences }: ExperienceProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

  const formatDate = (dateStr: string) => {
    if (dateStr === 'Present') return 'Present'
    const date = new Date(dateStr + '-01')
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  }

  const calculateDuration = (start: string, end: string | 'Present') => {
    const startDate = new Date(start + '-01')
    const endDate = end === 'Present' ? new Date() : new Date(end + '-01')
    const months = Math.round(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30)
    )
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12

    if (years === 0)
      return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
    if (remainingMonths === 0) return `${years} year${years !== 1 ? 's' : ''}`
    return `${years} year${years !== 1 ? 's' : ''}, ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
  }

  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            id="experience-heading"
            className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
          >
            Professional Experience
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 md:left-1/2 md:-translate-x-0.5" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 md:left-1/2 md:-translate-x-1.5 z-10">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse opacity-75" />
                </div>

                {/* Experience card */}
                <div
                  className={`flex-1 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    {/* Company and Role */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {experience.role}
                          </h3>
                          <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                            <Building2 className="w-4 h-4 mr-2" />
                            {experience.company}
                          </div>
                        </div>
                        {experience.logoUrl && (
                          <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-gray-700 rounded-lg p-2 border border-gray-200 dark:border-gray-600">
                            <img
                              src={experience.logoUrl}
                              alt={`${experience.company} logo`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                      </div>

                      {/* Date and Location */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(experience.startDate)} -{' '}
                          {formatDate(experience.endDate)}
                          <span className="ml-2 text-gray-500">
                            (
                            {calculateDuration(
                              experience.startDate,
                              experience.endDate
                            )}
                            )
                          </span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map(tech => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full hover:scale-110 transition-transform"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements (expandable) */}
                    {experience.achievements.length > 0 && (
                      <div>
                        <button
                          onClick={() => toggleExpanded(experience.id)}
                          className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          {expandedItems.has(experience.id) ? (
                            <>
                              <ChevronUp className="w-4 h-4" />
                              Hide Details
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4" />
                              Key Achievements ({experience.achievements.length}
                              )
                            </>
                          )}
                        </button>

                        {expandedItems.has(experience.id) && (
                          <div className="mt-4 space-y-2 animate-in slide-in-from-top-2 duration-300">
                            <h4 className="font-medium text-gray-900 dark:text-white">
                              Key Achievements:
                            </h4>
                            <ul className="space-y-2">
                              {experience.achievements.map(
                                (achievement, achievementIndex) => (
                                  <li
                                    key={achievementIndex}
                                    className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300"
                                  >
                                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                                    {achievement}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {experiences.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Companies
            </div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {Math.round(
                (new Date().getTime() - new Date('2019-01-01').getTime()) /
                  (1000 * 60 * 60 * 24 * 365)
              )}
              +
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Years
            </div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {
                Array.from(
                  new Set(experiences.flatMap(exp => exp.technologies))
                ).length
              }
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Technologies
            </div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              {experiences.reduce(
                (total, exp) => total + exp.achievements.length,
                0
              )}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Achievements
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
