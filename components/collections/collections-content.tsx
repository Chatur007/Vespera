"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem, GoldDivider } from "@/components/scroll-animations"

const categories = ["All", "Men", "Female", "Signature"]

const perfumes = [
  {
    id: 1,
    name: "Azzaro Chrome Extreme",
    category: "Men",
    description: "A deep-sea dive in a bottle: cold, salty, and much darker than the original Chrome.",
    notes: { top: "Green Mandarin", heart: "Sea Notes, Juniper", base: "Cashmeran, Amber" },
    price: "₹599",
    image: "/images/perfume-1.jpg",
  },
  {
    id: 2,
    name: "Azzaro Most Wanted",
    category: "Men",
    description: "A warm, 'edible' fragrance that smells like spicy caramel and pure confidence.",
    notes: { top: "Cardamom", heart: "Toffee", base: "Amberwood" },
    price: "₹599",
    image: "/images/perfume-2.jpg",
  },
  {
    id: 3,
    name: "Paco Rabanne Invictus",
    category: "Men",
    description: "The ultimate 'sporty' scent that smells like a fresh, salty victory in the locker room.",
    notes: { top: "Grapefruit, Sea Notes", heart: "Bay Leaf, Jasmine", base: "Guaiac Wood, Oakmoss" },
    price: "₹599",
    image: "/images/perfume-3.jpg",
  },
  {
    id: 4,
    name: "Cristiano Ronaldo CR7",
    category: "Female",
    description: "A reliable, versatile everyday scent with a surprising touch of spicy tobacco.",
    notes: { top: "Lavender, Cardamom, Artemisia", heart: "Tobacco, Cedar, Iris", base: "Musk, Vanilla, Sandalwood" },
    price: "₹599",
    image: "/images/perfume-4.jpg",
  },
  {
    id: 5,
    name: "Davidoff Cool Water",
    category: "Female",
    description: "The 90s legend; a sharp, cold splash of ocean water and clean laundry.",
    notes: { top: "Sea Water, Mint, Lavender", heart: "Sandalwood, Geranium, Neroli", base: "Musk, Tobacco, Cedar" },
    price: "₹599",
    image: "/images/perfume-5.jpg",
  },
  {
    id: 6,
    name: "Rasasi Hawas Ice",
    category: "Signature",
    description: "An icy, fruitier upgrade to the original Hawas that screams 'summer party.'",
    notes: { top: "Frozen Apple, Bergamot, Lemon", heart: "Plum, Orange Blossom, Cardamom", base: "Musk, Amber, Driftwood" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
   {
    id: 7,
    name: "Versace Dylan Blue",
    category: "Signature",
    description: "A sophisticated 'Swiss Army Knife' scent—dark, citrusy, and slightly smoky.",
    notes: { top: "Bergamot, Grapefruit, Fig Leaf", heart: "Ambroxan, Patchouli, Black Pepper", base: "Incense, Musk, Tonka Bean" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
   {
    id: 8,
    name: "Dunhill Desire Red",
    category: "Signature",
    description: "A nostalgic, sweet, and synthetic apple-vanilla scent that projects like a beast.",
    notes: { top: "Apple, Lemon, Bergamot", heart: "Rose, Teak Wood, Patchouli", base: "Vanilla, Musk" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
   {
    id: 9,
    name: "Lacoste White",
    category: "Signature",
    description: "Clean, crisp, and minimalist—the olfactory equivalent of a freshly ironed white polo.",
    notes: { top: "Grapefruit, Rosemary, Cardamom", heart: "Tuberose, Ylang-Ylang", base: "Suede, Cedar, Vetiver" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
   {
    id: 10,
    name: "Bleu de Chanel",
    category: "Signature",
    description: "The gold standard of 'Blue' fragrances: professional, woody, and timelessly classy.",
    notes: { top: "Grapefruit, Lemon, Mint", heart: "Ginger, Jasmine, Nutmeg", base: "Incense, Sandalwood, Cedar" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
   {
    id: 11,
    name: "Gucci Guilty",
    category: "Signature",
    description: "A smooth, floral-leaning masculine scent that feels modern and provocative.",
    notes: { top: "Lavender, Amalfi Lemon", heart: "African Orange Flower", base: "Virginia Cedar, Patchouli" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
    {
    id: 12,
    name: "Armani Stronger With You",
    category: "Signature",
    description: "A cozy, sweet masterpiece that smells like roasted chestnuts and warm hugs.",
    notes: { top: "Cardamom, Pink Pepper, Mint", heart: "Sage, Melon, Pineapple", base: "Vanilla, Chestnut, Cedar" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
    {
    id: 13,
    name: "YSL Y",
    category: "Signature",
    description: "A loud, 'metallic' fresh scent that is incredibly bright and long-lasting.",
    notes: { top: "Apple, Ginger, Bergamot", heart: "Sage, Juniper Berries, Geranium", base: "Amberwood, Tonka Bean, Cedar" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
    {
    id: 14,
    name: "Afnan 9 PM",
    category: "Signature",
    description: "A powerful, sweet party scent that is famous for being a high-quality 'Ultra Male' dupe.",
    notes: { top: "Apple, Cinnamon, Wild Lavender", heart: "Orange Blossom, Lily-of-the-Valley", base: "Vanilla, Tonka Bean, Amber" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
    {
    id: 15,
    name: "Dior Sauvage",
    category: "Signature",
    description: "A raw, spicy, and wildly popular fragrance that defines modern masculinity.",
    notes: { top: "Calabrian Bergamot, Pepper", heart: "Sichuan Pepper, Lavender", base: "Ambroxan, Cedar" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
    {
    id: 16,
    name: "Armani Code Black",
    category: "Signature",
    description: "A suave, 'black tie' fragrance that is silky, powdery, and very seductive.",
    notes: { top: "Lemon, Bergamot", heart: "Star Anise, Olive Blossom", base: "Leather, Tobacco, Tonka Bean" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
    {
    id: 17,
    name: "Tom Ford Oud Wood",
    category: "Signature",
    description: "Rare, exotic, and pricey; it smells like a luxurious, smoky library in a Five-Star hotel.",
    notes: { top: "Rosewood, Cardamom", heart: "Oud, Sandalwood, Vetiver", base: "Vanilla, Amber, Tonka Bean" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
     {
    id: 18,
    name: "Armani Acqua di Gio",
    category: "Signature",
    description: "The best-selling aquatic of all time; it's the smell of a Mediterranean sea breeze.",
    notes: { top: "Lime, Lemon, Bergamot", heart: "Sea Notes, Peach, Jasmine", base: "White Musk, Cedar, Oakmoss" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
     {
    id: 19,
    name: "YSL Libre",
    category: "Female",
    description: "A 'power-woman' scent that uses masculine lavender to create a bold, floral statement.",
    notes: { top: "Lavender, Mandarin, Blackcurrant", heart: "Lavender, Jasmine, Orange Blossom", base: "Vanilla, Musk, Cedar" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
     {
    id: 20,
    name: "Victoria's Secret Bombshell",
    category: "Female",
    description: "A sparkling, bright, and ultra-feminine fruity-floral that is impossible to dislike.",
    notes: { top: "Passionfruit, Grapefruit, Strawberry", heart: "Peony, Vanilla Orchid, Jasmine", base: "Musk, Woody Notes" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
     {
    id: 21,
    name: "Carolina Herrera Good Girl",
    category: "Female",
    description: "A sexy, sweet-and-salty 'femme fatale' fragrance in an iconic stiletto bottle.",
    notes: { top: "Almond, Coffee, Bergamot", heart: "Jasmine Sambac, Tuberose", base: "Tonka Bean, Cacao, Vanilla" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
     {
    id: 22,
    name: "Zara Red Vanilla",
    category: "Female",
    description: "A dark, moody, and affordable gourmand that leans heavily into sweet fruit and warm sugar.",
    notes: { top: "Pear, Blackcurrant", heart: "Iris, Praline", base: "Vanilla, Patchouli" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
    {
    id: 23,
    name: "Gucci Flora",
    category: "Female",
    description: "A joyful, 'pink' floral scent that feels like walking through a sun-drenched garden.",
    notes: { top: "Pear Blossom, Red Berries", heart: "White Gardenia, Jasmine", base: "Brown Sugar, Patchouli" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
    {
    id: 24,
    name: "Chanel Coco Mademoiselle",
    category: "Female",
    description: "The essence of a chic Parisian woman: elegant, citrusy, and heavy on the patchouli.",
    notes: { top: "Orange, Bergamot", heart: "Rose, Jasmine", base: "Patchouli, White Musk, Vanilla" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
    {
    id: 25,
    name: "Burberry London",
    category: "Female",
    description: "A classic, cozy floral that feels like a rainy day in London wrapped in a trench coat.",
    notes: { top: "Honeysuckle, Tangerine, Rose", heart: "Jasmine, Tiare Flower, Peony", base: "Musk, Sandalwood" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
    {
    id: 26,
    name: "Prada Paradoxe",
    category: "Female",
    description: "A trendy, vibrant floral that uses 'biotechnology' to keep the freshness lasting all day.",
    notes: { top: "Pear, Tangerine, Bergamot", heart: "Orange Blossom, Neroli, Jasmine", base: "White Musk, Amber, Vanilla" },
    price: "₹599",
    image: "/images/perfume-6.jpg",
  },
    {
    id: 27,
    name: "Dior Miss Dior",
    category: "Female",
    description: "A romantic, velvety 'millefiori' bouquet that feels youthful and high-fashion.",
    notes: { top: "Iris, Peony, Lily-of-the-Valley", heart: "Apricot, Rose, Peach", base: "Vanilla, Tonka Bean, Sandalwood" },
    price: "₹599",
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
