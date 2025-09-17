"use client"

import { useState, useEffect } from "react"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [logoVisible, setLogoVisible] = useState(false)

  useEffect(() => {
    // Show logo after brief delay
    const logoTimer = setTimeout(() => {
      setLogoVisible(true)
    }, 300)

    // Hide preloader after animation completes
    const hideTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => {
      clearTimeout(logoTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      <div
        className={`text-4xl font-light tracking-widest text-white transition-opacity duration-1000 ${
          logoVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        SM
      </div>
    </div>
  )
}
