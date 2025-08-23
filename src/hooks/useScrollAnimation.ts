import { useInView } from 'framer-motion'
import { useRef, useMemo } from 'react'
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
 * Hook for a fixed set of staggered scroll animations (up to 10 elements)
 * This version ensures consistent hook calls while supporting most common use cases
 */
export function useStaggeredScrollAnimation(
  count: number,
  options: ScrollAnimationOptions = {}
) {
  const maxElements = 10
  if (count > maxElements) {
    throw new Error(`useStaggeredScrollAnimation supports a maximum of ${maxElements} elements. Use individual useScrollAnimation hooks for more elements.`)
  }
  
  const inViewOptions = {
    amount: options.threshold || 0.1,
    margin: options.rootMargin || '-50px',
    once: options.triggerOnce !== false
  }
  
  // Always create the same number of hooks to ensure consistency
  const ref0 = useRef(null)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)
  const ref7 = useRef(null)
  const ref8 = useRef(null)
  const ref9 = useRef(null)
  
  const inView0 = useInView(ref0, inViewOptions)
  const inView1 = useInView(ref1, inViewOptions)
  const inView2 = useInView(ref2, inViewOptions)
  const inView3 = useInView(ref3, inViewOptions)
  const inView4 = useInView(ref4, inViewOptions)
  const inView5 = useInView(ref5, inViewOptions)
  const inView6 = useInView(ref6, inViewOptions)
  const inView7 = useInView(ref7, inViewOptions)
  const inView8 = useInView(ref8, inViewOptions)
  const inView9 = useInView(ref9, inViewOptions)
  
  // Return only the requested number of refs and states
  const refs = useMemo(() => {
    const allRefs = [ref0, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9]
    return allRefs.slice(0, count)
  }, [count, ref0, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9])
  
  const inViewStates = useMemo(() => {
    const allInViewStates = [inView0, inView1, inView2, inView3, inView4, inView5, inView6, inView7, inView8, inView9]
    return allInViewStates.slice(0, count)
  }, [count, inView0, inView1, inView2, inView3, inView4, inView5, inView6, inView7, inView8, inView9])
  
  return { refs, inViewStates }
}