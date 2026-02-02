import { HeroSection } from "@/components/home/hero-section"
import { FeaturedCollection } from "@/components/home/featured-collection"
import { PhilosophySection } from "@/components/home/philosophy-section"
import { CinematicSection } from "@/components/home/cinematic-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCollection />
      <PhilosophySection />
      <CinematicSection />
      <CTASection />
    </>
  )
}
