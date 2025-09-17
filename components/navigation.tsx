"use client"

import { useState } from "react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight">
            SURIAMENTARI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#work" className="text-sm font-medium hover:text-gray-300 transition-colors">
              Work
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-gray-300 transition-colors">
              Services
            </Link>
            <Link href="#clients" className="text-sm font-medium hover:text-gray-300 transition-colors">
              Clients
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col space-y-1">
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="#work" className="text-sm font-medium hover:text-gray-300 transition-colors">
                Work
              </Link>
              <Link href="#about" className="text-sm font-medium hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link href="#services" className="text-sm font-medium hover:text-gray-300 transition-colors">
                Services
              </Link>
              <Link href="#clients" className="text-sm font-medium hover:text-gray-300 transition-colors">
                Clients
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
