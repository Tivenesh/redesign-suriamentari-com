"use client"

import { useState, useEffect } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isDark, setIsDark] = useState(false) // New state to track color

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      // Check the element under the cursor
      const element = document.elementFromPoint(e.clientX, e.clientY)
      // Check if that element or its parent has the data-cursor="dark" attribute
      if (element?.closest('[data-cursor="dark"]')) {
        setIsDark(true)
      } else {
        setIsDark(false)
      }
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select')

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mouseleave", () => setIsVisible(false))

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <div
      className={`fixed pointer-events-none z-[99] transition-all duration-200 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Conditionally apply colors based on isDark and isHovering states */}
      <div
        className={`rounded-full transition-all duration-300 ease-out ${
          isHovering
            ? `w-12 h-12 border ${isDark ? 'bg-black/20 border-black/30' : 'bg-white/20 border-white/30'}`
            : `w-2 h-2 ${isDark ? 'bg-black' : 'bg-white'}`
        }`}
      />
    </div>
  )
}