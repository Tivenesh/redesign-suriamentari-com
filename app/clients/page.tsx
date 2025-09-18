import { AnimatedHeroText } from "@/components/animated-hero-text"
import { EnhancedNavigation } from "@/components/enhanced-navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function ClientsPage() {
  const clients = [
    {
      title: "Corporate Client A",
      category: "Commercial Office Complex",
      image: "/modern-glass-office.png",
    },
    {
      title: "Residential Project B",
      category: "Luxury Residential Tower",
      image: "/luxury-residential-tower.jpg",
    },
    {
      title: "Public Sector Partner C",
      category: "Government Facility",
      image: "/modern-office-interior-with-plants.jpg",
    },
    {
      title: "Healthcare Facility D",
      category: "Medical Center",
      image: "/quality-control-certification-badges.jpg",
    },
    {
      title: "Educational Institution E",
      category: "University Campus",
      image: "/modern-office-with-people-in-business-attire--prof.jpg",
    },
    {
      title: "Retail Complex F",
      category: "Shopping Center",
      image: "/modern-office-cleaning-team.png",
    },
  ]

  // Updated array with your new logo filenames
  const trustedClients = [
    { name: "Trio Tech", logo: "/triotech.png" },
    { name: "Omron", logo: "/OMRON_Logo.svg.png" }, // Assuming download.jpeg is Omron
    { name: "Air Asia Academy", logo: "/logo_aaacademy.png" },
    { name: "GRIEF", logo: "/logo_grief.png" },
    { name: "Globetronics", logo: "/globetronics-logo.png" },
    { name: "LAFARGE", logo: "/Lafarge_(Unternehmen)_logo.svg.png" },
    { name: "Mitsui Outlet Park", logo: "/logo@3x_org_mitsui.png" },
    { name: "CPT", logo: "/placeholder-logo.svg" }, // Placeholder as CPT logo was not provided
  ]

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
        <AnimatedHeroText subtitle="CLIENTS" title="Who We Work With" />
      </section>

      {/* Clients Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 aspect-[4/3]">
                  <img
                    src={client.image || "/placeholder.svg"}
                    alt={client.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-xs tracking-wider text-white/80 uppercase block mb-2">
                        {client.category}
                      </span>
                      <h3 className="text-xl font-light text-white">{client.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 px-6 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-8">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-16">
            We pride ourselves on building long-term partnerships with clients across various sectors, delivering
            consistent excellence in every project.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {trustedClients.map((client) => (
              <div key={client.name} className="flex justify-center items-center h-20">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={60}
                  className="h-12 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}