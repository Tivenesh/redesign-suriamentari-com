import { EnhancedNavigation } from "@/components/enhanced-navigation"
import { Footer } from "@/components/footer"

export default function QualityControlPage() {
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
          <span className="text-sm font-medium tracking-[0.3em] text-white/80 uppercase mb-8 block">
            QUALITY CONTROL
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.9] text-balance">
            Our Commitment to Quality
          </h1>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-8">Our Vision</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                To meet the growing demand of the maintenance and cleaning industry with the latest technology to
                satisfy customer requirements.
              </p>
            </div>
            <div className="relative">
              <img
                src="/quality-control-certification-badges.jpg"
                alt="Quality Control Standards"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <img src="/modern-glass-office.png" alt="Professional Standards" className="w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-8">Our Mission</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                To ensure that customers get the best service available in the maintenance and cleaning industry to
                provide customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-16">Quality Standards</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                <span className="text-2xl font-light">01</span>
              </div>
              <h3 className="text-xl font-light mb-4">Advanced Technology</h3>
              <p className="text-gray-400 leading-relaxed">
                Utilizing cutting-edge equipment and innovative solutions for superior results.
              </p>
            </div>

            <div className="group">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                <span className="text-2xl font-light">02</span>
              </div>
              <h3 className="text-xl font-light mb-4">Professional Training</h3>
              <p className="text-gray-400 leading-relaxed">
                Continuous education and certification programs for our skilled workforce.
              </p>
            </div>

            <div className="group">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                <span className="text-2xl font-light">03</span>
              </div>
              <h3 className="text-xl font-light mb-4">Customer Satisfaction</h3>
              <p className="text-gray-400 leading-relaxed">
                Dedicated to exceeding expectations through meticulous attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
