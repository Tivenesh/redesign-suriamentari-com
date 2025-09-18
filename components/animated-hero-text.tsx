"use client"

import { motion } from "framer-motion"

interface AnimatedHeroTextProps {
  subtitle: string
  title: string
}

export function AnimatedHeroText({ subtitle, title }: AnimatedHeroTextProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.6, delayChildren: 0.3 * i }, // Increased stagger
    }),
  }

  const line = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      originX: 0,
      transition: {
        duration: 1.2, // Slower duration
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
  }

  const textFadeInUp = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }, // Slower duration
    },
  }

  return (
    <motion.div
      className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="mb-8">
        <motion.div variants={textFadeInUp}>
          <span className="text-sm font-medium tracking-[0.3em] text-white/80 uppercase block">
            {subtitle}
          </span>
        </motion.div>
        <motion.div className="w-16 h-px bg-white/50 mx-auto mt-4" variants={line} />
      </div>

      <motion.h1
        className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.9] text-balance"
        variants={textFadeInUp}
      >
        {title}
      </motion.h1>
    </motion.div>
  )
}