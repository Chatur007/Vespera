import type { Metadata } from "next"
import { AboutContent } from "@/components/about/about-content"

export const metadata: Metadata = {
  title: "About | VESPERA",
  description: "Discover the story of VESPERA. A legacy of craftsmanship, a devotion to excellence, and an unwavering pursuit of olfactory perfection.",
}

export default function AboutPage() {
  return <AboutContent />
}
