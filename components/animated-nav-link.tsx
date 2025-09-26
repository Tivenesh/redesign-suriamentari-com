"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

interface AnimatedNavLinkProps {
  name: string
  href: string
  onClick: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
  className?: string
  style?: React.CSSProperties
}

export function AnimatedNavLink({
  name,
  href,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className,
  style,
}: AnimatedNavLinkProps) {
  const [isHovered, setIsHovered] = useState(false)

  const marqueeVariants = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5, // Made the scroll a bit faster
          ease: "linear",
        },
      },
    },
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => {
        onMouseEnter()
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        onMouseLeave()
        setIsHovered(false)
      }}
      className={`relative block overflow-hidden ${className}`}
      style={style}
    >
      <motion.div
        className="flex"
        initial={{ x: "0%" }}
        animate={isHovered ? "animate" : "initial"}
        variants={marqueeVariants}
      >
        {/* Render the text once by default */}
        <span className="whitespace-nowrap pr-16">{name}</span>

        {/* Conditionally render the second copy for the animation */}
        {isHovered && <span className="whitespace-nowrap pr-16">{name}</span>}
      </motion.div>
    </Link>
  )
}