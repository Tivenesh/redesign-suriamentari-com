"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { motion } from "framer-motion"

// Make the Next.js Link component animatable with Framer Motion
const MotionLink = motion(Link)

export function EnhancedNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const menuItems = [
    {
      name: "Home",
      href: "/",
      preview: "/modern-office-with-people-in-business-attire--prof.jpg",
    },
    {
      name: "Services",
      href: "/services",
      preview: "/quality-control-certification-badges.jpg",
    },
    {
      name: "Clients",
      href: "/clients",
      preview: "/luxury-residential-tower.jpg",
    },
    {
      name: "Quality Control",
      href: "/quality-control",
      preview: "/modern-glass-office.png",
    },
    {
      name: "Contact",
      href: "/contact",
      preview: "/modern-office-interior-with-plants.jpg",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animation variants for the menu container and individual links
  const navVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const linkVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-light tracking-widest text-white">
              SM
            </Link>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-center group"
            >
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-0.5" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
                  isOpen ? "-rotate-45 -translate-y-0.5" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Overlay Menu */}
      <motion.div
        className={`fixed inset-0 z-[60]`}
        initial={{ opacity: 0, visibility: "hidden" }}
        animate={{ opacity: isOpen ? 1 : 0, visibility: isOpen ? "visible" : "hidden" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Background Video/Texture */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-800/80" />
          <video autoPlay muted loop className="w-full h-full object-cover opacity-30">
            <source src="/placeholder.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 left-6 text-white hover:text-gray-300 z-20"
          aria-label="Close menu"
        >
          <X size={40} />
        </button>

        {/* Menu Content */}
        <div className="relative z-10 flex h-full">
          {/* Left Side - Menu Items */}
          <div className="flex-1 flex flex-col justify-center px-12">
            <motion.nav
              className="space-y-6"
              variants={navVariants}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
            >
              {menuItems.map((item) => (
                <div key={item.name} className="overflow-hidden">
                  <MotionLink
                    href={item.href}
                    variants={linkVariants}
                    whileHover={{ letterSpacing: "0.05em" }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="block text-6xl md:text-7xl font-serif font-light text-white"
                  >
                    {item.name}
                  </MotionLink>
                </div>
              ))}
            </motion.nav>
          </div>

          {/* Right Side - Preview Images */}
          <div className="flex-1 relative overflow-hidden">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  hoveredItem === item.name ? "opacity-100" : "opacity-0"
                }`}
              >
                <img src={item.preview || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}
