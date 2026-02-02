import type { Metadata } from "next"
import { CollectionsContent } from "@/components/collections/collections-content"

export const metadata: Metadata = {
  title: "Collections | VESPERA",
  description: "Explore the complete VESPERA fragrance collection. Each scent is a masterpiece of olfactory art, crafted with rare ingredients from around the world.",
}

export default function CollectionsPage() {
  return <CollectionsContent />
}
