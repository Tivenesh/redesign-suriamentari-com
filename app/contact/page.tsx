"use client"

import type React from "react"

import { useState } from "react"
import { EnhancedNavigation } from "@/components/enhanced-navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/placeholder.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-sm font-medium tracking-[0.3em] text-white/80 uppercase mb-8 block">CONTACT</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.9] text-balance">
            Get in Touch
          </h1>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-light mb-8">Start a Conversation</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder-white/60 focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder-white/60 focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/30 py-4 text-white focus:border-white focus:outline-none transition-colors"
                  >
                    <option value="" className="bg-black">
                      Service of Interest
                    </option>
                    <option value="home-care" className="bg-black">
                      Home Care Services
                    </option>
                    <option value="build-care" className="bg-black">
                      Build Care Services
                    </option>
                    <option value="carpet-care" className="bg-black">
                      Carpet Care
                    </option>
                    <option value="office-care" className="bg-black">
                      Office Care Services
                    </option>
                    <option value="trans-care" className="bg-black">
                      Trans Care Services
                    </option>
                    <option value="waste-disposal" className="bg-black">
                      Waste Disposal
                    </option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder-white/60 focus:border-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-white text-black hover:bg-gray-200 transition-colors px-8 py-4 text-sm tracking-wider"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-light mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-light mb-2 text-white/80">Office Address</h3>
                  <p className="text-gray-300">
                    123 Business District
                    <br />
                    Kuala Lumpur, Malaysia
                    <br />
                    50450
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-light mb-2 text-white/80">Phone</h3>
                  <p className="text-gray-300">+60 3-1234 5678</p>
                </div>

                <div>
                  <h3 className="text-lg font-light mb-2 text-white/80">Email</h3>
                  <p className="text-gray-300">info@suriamentari.com</p>
                </div>

                <div>
                  <h3 className="text-lg font-light mb-2 text-white/80">Business Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <img
                  src="/modern-office-interior-with-plants.jpg"
                  alt="Office Interior"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
