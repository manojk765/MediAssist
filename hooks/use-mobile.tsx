"use client"

import { useState, useEffect } from "react"

const MOBILE_BREAKPOINT = 1100

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Initial check
    checkIsMobile()

    // Add event listener
    window.addEventListener("resize", checkIsMobile)

    // Clean up
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  return !!isMobile
}
