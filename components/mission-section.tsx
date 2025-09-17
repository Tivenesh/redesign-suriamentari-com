"use client"

import { motion } from "framer-motion"

export function MissionSection() {
  return (
    <motion.section 
      className="py-32 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-balance">Our Mission</h2>
        {/* I've added the font-sans class here */}
        <p className="text-xl md:text-2xl font-sans font-light leading-relaxed text-gray-300">
          To meet the growing demand of the maintenance and cleaning industry with the latest technology to satisfy
          customer requirements.
        </p>
      </div>
    </motion.section>
  )
}