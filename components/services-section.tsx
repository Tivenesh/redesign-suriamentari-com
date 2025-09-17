import { Button } from "@/components/ui/button"

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="text-sm font-medium tracking-widest text-gray-400 uppercase mb-4 block">
            WE ARE THE SURIAMENTARI
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-balance">
            A full service agency focused on <span className="underline decoration-1 underline-offset-8">Strategy</span>
            , <span className="underline decoration-1 underline-offset-8">Media</span>,{" "}
            <span className="underline decoration-1 underline-offset-8">Design</span>,{" "}
            <span className="underline decoration-1 underline-offset-8">Content</span>, and{" "}
            <span className="underline decoration-1 underline-offset-8">Technology</span>
          </h2>

          <div className="mt-8">
            <Button variant="ghost" className="text-white hover:text-gray-300 p-0 h-auto font-medium">
              LEARN MORE →
            </Button>
          </div>
        </div>

        {/* Services Filter */}
        <div className="mb-12">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">View by Industry</span>
            <Button variant="ghost" size="sm" className="text-white hover:text-gray-300 p-0 h-auto text-sm">
              ↓
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
