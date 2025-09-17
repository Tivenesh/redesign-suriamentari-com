"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "The Art of Meticulous Environments.",
      subtitle: "EXCELLENCE",
      cta: "EXPERIENCE A HIGHER STANDARD",
    },
    {
      title: "Precision in Every Detail, Excellence in Every Service.",
      subtitle: "PRECISION",
      cta: "DISCOVER OUR APPROACH",
    },
    {
      title: "Where Quality Meets Innovation in Facility Management.",
      subtitle: "INNOVATION",
      cta: "EXPLORE OUR SOLUTIONS",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])
  
  // Animation container variants to stagger children's animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Time delay between each child animating in
      },
    },
  }

  // Animation for individual text elements to fade in and slide up
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }


  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/placeholder.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Animated Content */}
      <motion.div
        key={currentSlide} // Re-trigger animation when slide changes
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-8" variants={itemVariants}>
          <span className="text-sm font-medium tracking-[0.3em] text-white/80 uppercase">
            {slides[currentSlide].subtitle}
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.9] mb-12 text-balance"
          variants={itemVariants}
        >
          {slides[currentSlide].title}
        </motion.h1>

        <motion.div variants={itemVariants}>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-500 px-8 py-4 text-sm tracking-wider"
          >
            {slides[currentSlide].cta}
          </Button>
        </motion.div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-16">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-0.5 transition-all duration-500 ${
                index === currentSlide ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-20 bg-white/30 relative">
          <div className="absolute top-0 w-px h-6 bg-white animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}