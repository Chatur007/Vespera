"use client"

import Image from "next/image"
import { FadeIn, GoldDivider, Parallax, TextReveal } from "@/components/scroll-animations"

const values = [
  {
    title: "Heritage",
    description: "Rooted in the perfumery traditions of Grasse, our craft honors centuries of olfactory artistry while embracing contemporary innovation.",
  },
  {
    title: "Excellence",
    description: "We source only the rarest ingredients—each selected for its exceptional quality and unique character, never compromising on perfection.",
  },
  {
    title: "Sustainability",
    description: "Our commitment extends beyond fragrance. We partner with ethical suppliers and employ sustainable practices throughout our creation process.",
  },
]

const timeline = [
  {
    year: "1987",
    title: "The Beginning",
    description: "Isabelle Mercier, a third-generation perfumer from Grasse, envisions a fragrance house dedicated to timeless elegance.",
  },
  {
    year: "1992",
    title: "First Creation",
    description: "Noir Éternel debuts at a private Paris salon, captivating the world's most discerning collectors.",
  },
  {
    year: "2005",
    title: "Global Recognition",
    description: "VESPERA receives the Grand Prix International du Parfum, cementing its place among legendary houses.",
  },
  {
    year: "2024",
    title: "Modern Legacy",
    description: "The atelier welcomes a new generation of master perfumers, carrying forward the VESPERA vision.",
  },
]

export function AboutContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="VESPERA Atelier"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <p className="text-xs tracking-ultra uppercase text-gold mb-4">
              Our Story
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-ivory tracking-wide">
              The House of
              <br />
              <span className="italic">VESPERA</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <GoldDivider className="w-32 mx-auto mt-8" />
          </FadeIn>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-ivory leading-relaxed">
                <TextReveal delay={0.2}>
                  Born from a passion for the extraordinary, VESPERA represents the pinnacle of haute parfumerie. We craft fragrances that become invisible companions through life's most cherished moments.
                </TextReveal>
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left">
              <Parallax speed={-0.15}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/founder.jpg"
                    alt="Isabelle Mercier, Founder"
                    fill
                    className="object-cover"
                  />
                </div>
              </Parallax>
            </FadeIn>

            <div>
              <FadeIn>
                <p className="text-xs tracking-ultra uppercase text-gold mb-6">
                  The Founder
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight mb-8">
                  Isabelle Mercier
                </h2>
              </FadeIn>
              <GoldDivider className="w-24 mb-8" />
              <FadeIn delay={0.3}>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Raised among the jasmine fields of Grasse, Isabelle inherited her grandmother's 
                  gift for discerning the subtlest nuances in nature's most precious essences. 
                  After apprenticing with the legendary houses of France, she founded VESPERA 
                  with a singular vision: to create fragrances that transcend trends and touch 
                  the soul.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Today, her philosophy guides every creation that emerges from our atelier—
                  a commitment to authenticity, artistry, and the belief that a truly exceptional 
                  fragrance should be both an intimate pleasure and a timeless legacy.
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <blockquote className="border-l-2 border-gold pl-6">
                  <p className="font-serif text-xl text-ivory italic">
                    "Perfume is memory made visible, emotion captured in a bottle."
                  </p>
                </blockquote>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-xs tracking-ultra uppercase text-gold mb-4">
                Our Values
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="font-serif text-4xl md:text-5xl text-ivory">
                Guiding Principles
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={0.2 + index * 0.15}>
                <div className="text-center">
                  <span className="font-serif text-6xl text-gold/20 block mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl text-ivory mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-xs tracking-ultra uppercase text-gold mb-4">
                Our Journey
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="font-serif text-4xl md:text-5xl text-ivory">
                A Legacy in Time
              </h2>
            </FadeIn>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <FadeIn key={item.year} delay={0.2 + index * 0.1}>
                <div className="flex gap-8 mb-12 last:mb-0">
                  <div className="flex-shrink-0 w-20">
                    <span className="font-serif text-2xl text-gold">{item.year}</span>
                  </div>
                  <div className="flex-1 border-l border-border/30 pl-8 pb-12 last:pb-0">
                    <h3 className="font-serif text-xl text-ivory mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-6">
              Experience VESPERA
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Visit our atelier in Grasse or explore our collections online. 
              Begin your journey into the extraordinary.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/collections"
                className="inline-block text-xs tracking-ultra uppercase bg-gold text-background px-10 py-4 hover:bg-gold-light transition-all duration-500 luxury-ease"
              >
                View Collections
              </a>
              <a
                href="/contact"
                className="inline-block text-xs tracking-ultra uppercase text-ivory border border-ivory/30 px-10 py-4 hover:border-gold hover:text-gold transition-all duration-500 luxury-ease"
              >
                Plan Your Visit
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
