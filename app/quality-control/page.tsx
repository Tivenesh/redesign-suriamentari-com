import { AnimatedHeroText } from "@/components/animated-hero-text"
import { EnhancedNavigation } from "@/components/enhanced-navigation"
import { Footer } from "@/components/footer"
import { CheckCircle, Users, GitCompareArrows } from "lucide-react"
import Image from "next/image"

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

        <AnimatedHeroText subtitle="QUALITY CONTROL" title="Our Commitment to Quality" />
      </section>

      {/* Introduction Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/modern-office-cleaning-team.png"
                alt="Professional cleaning team at work"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                At SMCS, we realize that our work is a direct reflection on your image. The management of your company
                had worked very hard and spent a big amount of money to create the “look and feel” of your company
                environment. We know that your company’s trust on your cleaning company to enhance and preserve its
                appearance and ambience. We also know our feature success depends on your consistent satisfaction.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                At SMCS our objective is to accommodate your cleaning needs. Our cleaning expertise and labour
                management techniques can provide verity of option for your customized cleaning schedule. We have
                established a reputation in the cleaning industry for quality and dependability for your entire
                cleaning requirement. At SMCS we are focused on the job in hand and we would like to do it with
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

 {/* Quality Policy Section */}
      <section className="py-32 px-6 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4">
            <h2 className="text-sm font-medium tracking-[0.3em] text-white/80 uppercase">QUALITY POLICY</h2>
            <div className="w-16 h-px bg-white/50 mx-auto mt-2" />
          </div>
<br></br>
<br></br>
          <p className="text-lg text-gray-300 leading-relaxed">
            SuriaMentari Cleaning Services Sdn. Bhd. has established the following Quality Policy as part of its Quality
            Management System in accordance to ISO 9001 requirements. This policy is communicated throughout the
            organization.
          </p>
          <br></br>
          <br></br>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                <Users className="w-8 h-8 text-white transition-transform duration-500 group-hover:rotate-[360deg]" />
              </div>
              <h3 className="text-xl font-light mb-4">Customer Satisfaction</h3>
              <p className="text-gray-400 leading-relaxed">
              
              </p>
            </div>
            <div className="group">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                <CheckCircle className="w-8 h-8 text-white transition-transform duration-500 group-hover:rotate-[360deg]" />
              </div>
              <h3 className="text-xl font-light mb-4">Continual Improvement</h3>
              <p className="text-gray-400 leading-relaxed">
              
              </p>
            </div>
            <div className="group">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                <GitCompareArrows className="w-8 h-8 text-white transition-transform duration-500 group-hover:rotate-[360deg]" />
              </div>
              <h3 className="text-xl font-light mb-4">Compliance</h3>
              <p className="text-gray-400 leading-relaxed">
              
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">Our Certifications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We have long recognized the importance of the quality of our service. Our processes are in line with the
              requirements of ISO 14000 and other cleaning concepts such as the 5S cleaning method.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-sm h-auto bg-gray-800/50 rounded-lg flex items-center justify-center mb-4 p-4">
                <img
                  src="/iso9001_UKAS.jpg"
                  alt="ISO 9001 Certificate"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold">ISO 9001:2015</h3>
              <p className="text-gray-400">Quality Management System</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full max-w-sm h-auto bg-gray-800/50 rounded-lg flex items-center justify-center mb-4 p-4">
                <img
                  src="/iso9001_Standard.jpg"
                  alt="ISO 14001 Certificate"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold">ISO 14001:2015</h3>
              <p className="text-gray-400">Environmental Management System</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

