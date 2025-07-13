"use client"

import { useEffect, useRef } from "react"
import { useInView, useAnimation } from "framer-motion"

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return { ref, controls }
}
