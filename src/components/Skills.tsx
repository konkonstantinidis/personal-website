import { useState } from 'react'
import {
  Code,
  Server,
  Settings,
  Activity,
  Shield,
  Cloud,
  Filter,
} from 'lucide-react'
import {
  skillCategories,
  skills,
  getSkillsByCategory,
  getSkillLevel,
  getSkillStats,
} from '../data/skills'

const iconMap = {
  Cloud: Cloud,
  Server: Server,
  Code: Code,
  Settings: Settings,
  Activity: Activity,
  Shield: Shield,
}

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const stats = getSkillStats()

  const filteredSkills =
    selectedCategory === 'all' ? skills : getSkillsByCategory(selectedCategory)

  const getProgressBarColor = (categoryId: string) => {
    const category = skillCategories.find(cat => cat.id === categoryId)
    return category?.color || 'from-gray-400 to-gray-600'
  }

  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            id="skills-heading"
            className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
          >
            Skills & Expertise
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </div>

        {/* Skills Overview Stats */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-5">
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {stats.totalSkills}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-300">
              Total Skills
            </div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {stats.expertSkills}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-300">
              Expert Level
            </div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {stats.categories}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-300">
              Categories
            </div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              {stats.averageLevel}%
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-300">
              Avg Level
            </div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-xl">
            <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">
              {stats.totalExperience}+
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-300">
              Years Exp
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <Filter className="w-4 h-4" />
            All Skills ({skills.length})
          </button>
          {skillCategories.map(category => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap]
            const categorySkillCount = getSkillsByCategory(category.id).length

            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {category.name} ({categorySkillCount})
              </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map(skill => {
            const category = skillCategories.find(
              cat => cat.id === skill.categoryId
            )
            const skillLevel = getSkillLevel(skill.level)

            return (
              <div
                key={skill.id}
                className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {/* Skill Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${category?.color} text-white`}
                      >
                        {category?.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skillLevel}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      {skill.level}%
                    </div>
                    {skill.yearsOfExperience && (
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.yearsOfExperience}yr
                        {skill.yearsOfExperience !== 1 ? 's' : ''}
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${getProgressBarColor(skill.categoryId)} transition-all duration-1000 group-hover:shadow-md`}
                      style={{ width: '0%' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.width = `${skill.level}%`
                      }}
                    />
                  </div>
                </div>

                {/* Description */}
                {skill.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {skill.description}
                  </p>
                )}

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            )
          })}
        </div>

        {/* Category Summary when filtered */}
        {selectedCategory !== 'all' && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl px-6 py-4">
              {(() => {
                const category = skillCategories.find(
                  cat => cat.id === selectedCategory
                )
                const IconComponent = category
                  ? iconMap[category.icon as keyof typeof iconMap]
                  : Filter
                return (
                  <>
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${category?.color}`}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {category?.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {category?.description}
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {filteredSkills.length}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Skills
                      </div>
                    </div>
                  </>
                )
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
