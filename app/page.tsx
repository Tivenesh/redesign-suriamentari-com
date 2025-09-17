import { EnhancedNavigation } from "@/components/enhanced-navigation"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { FeaturedServicesSection } from "@/components/featured-services-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <EnhancedNavigation />
      <HeroSection />
      <MissionSection />
      <FeaturedServicesSection />
      <Footer />
    </main>
  )
}
