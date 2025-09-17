"use client"

import { useState } from "react"
import Image from "next/image"

export function PortfolioGrid() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "ONE PARK TOWER",
      subtitle: "NEW WORK",
      description: "Luxury residential development with cutting-edge design and premium amenities.",
      image: "/luxury-residential-tower.jpg",
      category: "real-estate",
      tags: ["Architecture", "Luxury", "Residential"],
    },
    {
      id: 2,
      title: "LECLERC",
      subtitle: "PARTNERSHIP",
      description: "Strategic partnership for digital transformation and brand evolution.",
      image: "/modern-retail-brand-design.jpg",
      category: "retail",
      tags: ["Branding", "Digital", "Retail"],
    },
    {
      id: 3,
      title: "RIVERSIDE",
      subtitle: "DEVELOPMENT",
      description: "Sustainable development project with innovative green technologies.",
      image: "/sustainable-building.png",
      category: "development",
      tags: ["Sustainability", "Innovation", "Development"],
    },
    {
      id: 4,
      title: "Z BY HP",
      subtitle: "CAMPAIGN",
      description: "Digital marketing campaign and brand positioning for tech innovation.",
      image: "/tech-product-campaign.jpg",
      category: "technology",
      tags: ["Technology", "Campaign", "Digital"],
    },
    {
      id: 5,
      title: "MACKAGE",
      subtitle: "FASHION",
      description: "Premium fashion brand development and digital experience design.",
      image: "/luxury-fashion-brand.png",
      category: "fashion",
      tags: ["Fashion", "Luxury", "Branding"],
    },
    {
      id: 6,
      title: "QUEENSHAM",
      subtitle: "REAL ESTATE",
      description: "Comprehensive marketing and development strategy for luxury properties.",
      image: "/luxury-real-estate-marketing.jpg",
      category: "real-estate",
      tags: ["Real Estate", "Marketing", "Luxury"],
    },
    {
      id: 7,
      title: "BOSTON CONSULTING GROUP",
      subtitle: "CONSULTING",
      description: "Digital transformation and strategic consulting solutions.",
      image: "/business-consulting-presentation.jpg",
      category: "consulting",
      tags: ["Consulting", "Strategy", "Business"],
    },
    {
      id: 8,
      title: "CARTIER",
      subtitle: "LUXURY",
      description: "Ongoing partnership across digital and content creation.",
      image: "/luxury-jewelry-brand.jpg",
      category: "luxury",
      tags: ["Luxury", "Jewelry", "Premium"],
    },
    {
      id: 9,
      title: "RUSSELL ATHLETIC",
      subtitle: "SPORTS",
      description: "Strategic brand refresh for a heritage athletic brand.",
      image: "/athletic-sports-brand.jpg",
      category: "sports",
      tags: ["Sports", "Athletic", "Heritage"],
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="work" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <div className="relative overflow-hidden bg-gray-900 aspect-square">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-medium tracking-widest text-gray-300 uppercase mb-2 block">
                    {project.subtitle}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-white/20 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Static Project Info */}
                <div className="absolute bottom-6 left-6 text-white group-hover:opacity-0 transition-opacity duration-300">
                  <span className="text-xs font-medium tracking-widest text-gray-300 uppercase mb-1 block">
                    {project.subtitle}
                  </span>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
