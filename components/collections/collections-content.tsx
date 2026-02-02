"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem, GoldDivider } from "@/components/scroll-animations"

const categories = ["All", "Signature", "Limited Edition", "Exclusive"]

const perfumes = [
  {
    id: 1,
    name: "Noir Éternel",
    category: "Signature",
    description: "A captivating blend of oud, black amber, and midnight jasmine that evokes the mystery of twilight.",
    notes: { top: "Bergamot, Pink Pepper", heart: "Jasmine, Oud", base: "Black Amber, Musk" },
    price: "€380",
    image: "/images/perfume-1.jpg",
  },
  {
    id: 2,
    name: "Lumière d'Or",
    category: "Signature",
    description: "Golden saffron intertwined with silk orchid and sandalwood creates an aura of luminous warmth.",
    notes: { top: "Saffron, Cardamom", heart: "Orchid, Iris", base: "Sandalwood, Vanilla" },
    price: "€420",
    image: "/images/perfume-2.jpg",
  },
  {
    id: 3,
    name: "Velours Nocturne",
    category: "Signature",
    description: "Velvety rose absolute embraced by smoky incense and vanilla whispers of romantic evenings.",
    notes: { top: "Rose, Raspberry", heart: "Incense, Violet", base: "Vanilla, Benzoin" },
    price: "€395",
    image: "/images/perfume-3.jpg",
  },
  {
    id: 4,
    name: "Éclipse Rare",
    category: "Limited Edition",
    description: "A rare alignment of precious woods and ethereal white flowers, crafted for the celestial collector.",
    notes: { top: "Aldehydes, Neroli", heart: "Tuberose, Gardenia", base: "Agarwood, Ambergris" },
    price: "€680",
    image: "/images/perfume-4.jpg",
  },
  {
    id: 5,
    name: "Ombre Sacrée",
    category: "Limited Edition",
    description: "Sacred temple incense meets Mediterranean citrus in this transcendent limited creation.",
    notes: { top: "Citron, Mandarin", heart: "Frankincense, Myrrh", base: "Cypriol, Vetiver" },
    price: "€590",
    image: "/images/perfume-5.jpg",
  },
  {
    id: 6,
    name: "Maison Privée",
    category: "Exclusive",
    description: "Available by appointment only. A bespoke fragrance experience for the distinguished patron.",
    notes: { top: "Custom Selection", heart: "Master Blend", base: "Signature Accord" },
    price: "Upon Request",
    image: "/images/perfume-6.jpg",
  },
]

export function CollectionsContent() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPerfumes = activeCategory === "All" 
    ? perfumes 
    : perfumes.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <FadeIn>
            <p className="text-xs tracking-ultra uppercase text-gold mb-4">
              The VESPERA Collection
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-ivory tracking-wide">
              Our Fragrances
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <GoldDivider className="w-32 mx-auto mt-8 mb-8" />
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Each fragrance in our collection is a testament to the art of perfumery. 
              Discover scents that transcend time and evoke the most precious memories.
            </p>
          </FadeIn>
        </div>

        {/* Category Filter */}
        <FadeIn delay={0.6}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`text-xs tracking-ultra uppercase px-6 py-3 border transition-all duration-500 luxury-ease ${
                  activeCategory === category
                    ? "bg-gold text-background border-gold"
                    : "border-border/50 text-muted-foreground hover:border-gold hover:text-gold"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Perfume Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {filteredPerfumes.map((perfume) => (
                <StaggerItem key={perfume.id}>
                  <div className="group cursor-pointer">
                    <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-secondary">
                      <Image
                        src={perfume.image || "/placeholder.svg"}
                        alt={perfume.name}
                        fill
                        className="object-cover transition-transform duration-1000 luxury-ease group-hover:scale-105"
                      />
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] tracking-ultra uppercase bg-background/80 backdrop-blur-sm text-gold px-3 py-1.5">
                          {perfume.category}
                        </span>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                        <div className="text-center px-6">
                          <p className="text-xs tracking-wider text-ivory/70 mb-2">Notes</p>
                          <p className="text-sm text-ivory mb-1">Top: {perfume.notes.top}</p>
                          <p className="text-sm text-ivory mb-1">Heart: {perfume.notes.heart}</p>
                          <p className="text-sm text-ivory">Base: {perfume.notes.base}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-serif text-2xl text-ivory mb-2 group-hover:text-gold transition-colors duration-500">
                          {perfume.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                          {perfume.description}
                        </p>
                      </div>
                      <span className="text-sm text-gold font-medium">
                        {perfume.price}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <FadeIn className="text-center mt-24">
          <p className="text-muted-foreground mb-6">
            Seeking a bespoke fragrance experience?
          </p>
          <a
            href="/contact"
            className="inline-block text-xs tracking-ultra uppercase text-ivory border border-gold/50 px-10 py-4 hover:bg-gold hover:text-background transition-all duration-500 luxury-ease"
          >
            Schedule a Consultation
          </a>
        </FadeIn>
      </div>
    </div>
  )
}
