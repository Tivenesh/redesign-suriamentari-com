"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function FeaturedServicesSection() {
  const services = [
    {
      title: "Home Care Services",
      description: "Comprehensive residential cleaning and maintenance solutions for modern homes.",
      image: "/modern-office-cleaning-team.png",
    },
    {
      title: "Build Care Services",
      description: "Complete building maintenance and facility management services.",
      image: "/modern-glass-office.png",
    },
    {
      title: "Carpet Care",
      description: "Specialized carpet cleaning and maintenance services using advanced technology.",
      image: "/quality-control-certification-badges.jpg",
    },
    {
      title: "Trans Care Services",
      description: "Professional transportation maintenance and cleaning services for vehicles and logistics.",
      image: "/modern-office-interior-with-plants.jpg",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <motion.section
      className="py-32 px-6 bg-gray-900/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">Featured Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive range of professional maintenance and cleaning solutions
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} className="group cursor-pointer" variants={itemVariants}>
              <div className="relative overflow-hidden mb-6 aspect-square rounded-lg">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>

              <h3 className="text-xl font-light mb-3 group-hover:text-gray-300 transition-colors">{service.title}</h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-500 px-8 py-4 text-sm tracking-wider"
            >
              VIEW ALL SERVICES
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  )
}