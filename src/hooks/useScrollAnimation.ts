import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ScrollAnimationOptions } from '@/types'

/**
 * Hook for scroll-triggered animations using Framer Motion's useInView
 */
export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: options.threshold || 0.1,
    margin: options.rootMargin || '-100px',
    once: options.triggerOnce !== false // Default to true
  })

  return { ref, isInView }
}

/**
 * Hook for staggered scroll animations
 */
export function useStaggeredScrollAnimation(
  count: number,
  options: ScrollAnimationOptions = {}
) {
  const refs = Array.from({ length: count }, () => useRef(null))
  const inViewStates = refs.map(ref =>
    useInView(ref, {
      amount: options.threshold || 0.1,
      margin: options.rootMargin || '-50px',
      once: options.triggerOnce !== false
    })
  )

  return { refs, inViewStates }
}