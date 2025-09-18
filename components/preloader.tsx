"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [showFullName, setShowFullName] = useState(false)

  useEffect(() => {
    // Timer to switch from "SM" to "SURIAMENTARI"
    const expandTimer = setTimeout(() => {
      setShowFullName(true)
    }, 1500) // Start transition at 1.5 seconds

    // Timer to hide the preloader after all animations are complete
    const hideTimer = setTimeout(() => {
      setIsLoading(false)
    }, 8000) // Hide preloader after 8 seconds

    return () => {
      clearTimeout(expandTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  // Variants for the entire preloader container to slide up on exit
  const preloaderVariants = {
    initial: { y: 0 },
    exit: {
      y: "-100vh",
      transition: {
        duration: 1.2,
        ease: [0.87, 0, 0.13, 1], // A sharp ease-in-out for a smooth exit
      },
    },
  }

  // Variants for the initial "SM" text
  const smVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
    exit: { opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  }

  // Variants for the staggered "SURIAMENTARI" text
  const fullName = "SURIAMENTARI"
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.15, // Slower stagger for a more dramatic effect
      },
    },
  }

  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.8,
      },
    },
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={preloaderVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            {!showFullName ? (
              <motion.div
                key="sm"
                variants={smVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-4xl font-light tracking-widest text-white"
              >
                SM
              </motion.div>
            ) : (
              <motion.div
                key="suriamentari"
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0 }}
                className="text-4xl font-light tracking-widest text-white flex"
              >
                {fullName.split("").map((letter, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block">
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}