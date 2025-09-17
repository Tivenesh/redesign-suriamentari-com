import { EnhancedNavigation } from "@/components/enhanced-navigation"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      title: "Carpet Care",
      description: "Specialized carpet cleaning and maintenance services using advanced technology.",
      image: "/quality-control-certification-badges.jpg",
    },
    {
      title: "Waste Disposal",
      description:
        "Efficient and environmentally-friendly waste management solutions for commercial and residential properties.",
      image: "/modern-office-cleaning-team.png",
    },
    {
      title: "Build Care Services",
      description: "Complete building maintenance and facility management services.",
      image: "/modern-glass-office.png",
    },
    {
      title: "Office Care Services",
      description: "Tailored cleaning solutions to maintain a professional and hygienic office environment.",
      image: "/modern-office-interior-with-plants.jpg",
    },
    {
      title: "Trans Care Services",
      description: "Professional transportation maintenance and cleaning services for vehicles and logistics.",
      image: "/luxury-residential-tower.jpg",
    },
    {
      title: "Home Care Services",
      description: "Comprehensive residential cleaning and maintenance solutions for modern homes.",
      image: "/modern-office-with-people-in-business-attire--prof.jpg",
    },
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

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-sm font-medium tracking-[0.3em] text-white/80 uppercase mb-8 block">SERVICES</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.9] text-balance">
            Our Expertise
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden mb-8 aspect-[4/3]">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                <h3 className="text-3xl md:text-4xl font-serif font-light mb-6 group-hover:text-gray-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-lg text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
