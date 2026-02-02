"use client"

import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem, GoldDivider } from "@/components/scroll-animations"
import Link from "next/link"
import Image from "next/image"

const perfumes = [
  {
    id: 1,
    name: "Noir Éternel",
    description: "A captivating blend of oud, black amber, and midnight jasmine",
    notes: "Oud • Black Amber • Jasmine",
    image: "/images/perfume-1.jpg",
  },
  {
    id: 2,
    name: "Lumière d'Or",
    description: "Golden saffron intertwined with silk orchid and sandalwood",
    notes: "Saffron • Orchid • Sandalwood",
    image: "/images/perfume-2.jpg",
  },
  {
    id: 3,
    name: "Velours Nocturne",
    description: "Velvety rose absolute embraced by smoky incense and vanilla",
    notes: "Rose • Incense • Vanilla",
    image: "/images/perfume-3.jpg",
  },
]

export function FeaturedCollection() {
  return (
    <section className="py-32 md:py-48 bg-charcoal relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-20 md:mb-32">
          <FadeIn>
            <p className="text-xs tracking-ultra uppercase text-gold mb-4">
              The Collection
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory tracking-wide">
              Signature Fragrances
            </h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <GoldDivider className="w-32 mx-auto mt-8" />
          </FadeIn>
        </div>

        {/* Perfume grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12" staggerDelay={0.15}>
          {perfumes.map((perfume) => (
            <StaggerItem key={perfume.id}>
              <Link href="/collections" className="group block">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-secondary">
                  <Image
                    src={perfume.image || "/placeholder.svg"}
                    alt={perfume.name}
                    fill
                    className="object-cover transition-transform duration-1000 luxury-ease group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* View details text */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <span className="text-xs tracking-ultra uppercase text-ivory border border-ivory/50 px-6 py-3">
                      Explore
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-ivory mb-2 group-hover:text-gold transition-colors duration-500">
                  {perfume.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {perfume.description}
                </p>
                <p className="text-xs tracking-wider text-gold/70">
                  {perfume.notes}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View all button */}
        <FadeIn delay={0.6} className="text-center mt-20">
          <Link
            href="/collections"
            className="inline-block text-xs tracking-ultra uppercase text-ivory border border-gold/50 px-10 py-4 hover:bg-gold hover:text-background transition-all duration-500 luxury-ease"
          >
            View All Collections
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
