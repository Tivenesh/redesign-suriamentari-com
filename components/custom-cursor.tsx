"use client"

import { useState, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Use MotionValues for smooth, performant tracking without re-renders
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Apply a spring for a smoother, slightly delayed follow effect
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      // Update the motion values directly, this does not trigger a React render
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      // Check the element under the cursor for the dark-mode attribute
      const element = document.elementFromPoint(e.clientX, e.clientY)
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

    window.addEventListener("mousemove", updatePosition)

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [cursorX, cursorY]) // Dependencies are the motion values themselves

  return (
    <motion.div
      className="fixed pointer-events-none z-[99] rounded-full"
      style={{
        translateX: springX,
        translateY: springY,
        // Center the cursor dot
        left: "-0.25rem",
        top: "-0.25rem",
      }}
      // Animate the scale and border properties
      animate={{
        width: isHovering ? "2.5rem" : "0.5rem",
        height: isHovering ? "2.5rem" : "0.5rem",
        borderWidth: isHovering ? "1px" : "0px",
        backgroundColor: isDark
          ? (isHovering ? "rgba(0, 0, 0, 0.2)" : "rgb(0, 0, 0)")
          : (isHovering ? "rgba(255, 255, 255, 0.2)" : "rgb(255, 255, 255)"),
        borderColor: isDark ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.3)",
      }}
      transition={{
        width: { duration: 0.3, ease: "easeOut" },
        height: { duration: 0.3, ease: "easeOut" },
      }}
    />
  )
}