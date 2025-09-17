import Image from "next/image"

export function AboutSection() {
  const services = [
    {
      title: "QUALITY CONTROL",
      description:
        "The adoption of the quality management systems is essential to the continued growth and success of the organization.",
      image: "/quality-control-certification-badges.jpg",
    },
    {
      title: "OUR VISION",
      description:
        "To lead the industry through innovation & excellence in maintenance & cleaning industry with the best of Technology in order to satisfy our customer's requirement.",
      image: "/modern-glass-office.png",
    },
    {
      title: "OUR MISSION",
      description:
        "To ensure that our customers gets the best service available in the Maintenance & Cleaning Industry in order to provide maximum satisfaction.",
      image: "/modern-office-cleaning-team.png",
    },
  ]

  const clients = [
    { name: "Client 1", logo: "/generic-corporate-logo.png" },
    { name: "Client 2", logo: "/generic-corporate-logo.png" },
    { name: "GREIF", logo: "/greif-company-logo.jpg" },
    { name: "Client 4", logo: "/generic-corporate-logo.png" },
    { name: "LAFARGE", logo: "/lafarge-company-logo.jpg" },
  ]

  return (
    <section id="about" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="mx-auto rounded-lg"
                />
              </div>
              <h3 className="text-lg font-bold mb-4 tracking-wide">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            In order to cater for the various needs of our clients from diverse industries, we offer a comprehensive
            range of services which include:
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <Image src="/modern-office-interior-with-plants.jpg" alt="Our workspace" fill className="object-cover" />
          </div>
        </div>

        {/* Clients Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Our Client</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We work closely with a wide range of clients from different sectors and regions across public sector and
            private sector.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
