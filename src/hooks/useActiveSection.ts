import { useState, useEffect } from 'react'
import { throttle } from '@/lib/utils'

/**
 * Hook to track which section is currently active based on scroll position
 */
export function useActiveSection(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY + offset

      // Find the section that is currently in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i])
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i])
            break
          }
        }
      }

      // If we're at the top of the page, set the first section as active
      if (window.scrollY < 100 && sectionIds.length > 0) {
        setActiveSection(sectionIds[0])
      }
    }, 100)

    // Set initial active section
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeSection
}
