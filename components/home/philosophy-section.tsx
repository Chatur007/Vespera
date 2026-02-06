"use client"

import { FadeIn, TextReveal, GoldDivider, Parallax } from "@/components/scroll-animations"
import Image from "next/image"

export function PhilosophySection() {
  return (
    <section className="py-32 md:py-48 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <FadeIn direction="left" className="relative order-2 lg:order-1">
            <Parallax speed={-0.2}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/Perfume-5.jpg"
                  alt="VESPERA Atelier"
                  fill
                  className="object-cover"
                />
              </div>
            </Parallax>
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-gold/20 -z-10" />
          </FadeIn>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <FadeIn>
              <p className="text-xs tracking-ultra uppercase text-gold mb-6">
                Our Philosophy
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight mb-8">
                <TextReveal delay={0.3}>
                  The Art of Olfactory Excellence
                </TextReveal>
              </h2>
            </FadeIn>

            <GoldDivider className="w-24 mb-8" />

            <FadeIn delay={0.4}>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At VESPERA, we believe that a fragrance is more than a scent—it is an 
                invisible signature, a silent companion through life's most precious 
                moments. Each creation emerges from our atelier in Grasse, where 
                master perfumers blend centuries-old traditions with contemporary artistry.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We source only the rarest ingredients: Bulgarian rose harvested at dawn, 
                Indian oud aged for decades, and saffron from the Persian highlands. 
                These precious elements are transformed through patience and precision 
                into fragrances that transcend the ordinary.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <blockquote className="border-l-2 border-gold pl-6 my-10">
                <p className="font-serif text-xl md:text-2xl text-ivory italic">
                  "Every fragrance tells a story waiting to be worn."
                </p>
                <cite className="text-xs tracking-wider text-gold/70 mt-4 block not-italic">
                  — Isabelle Mercier, Founder
                </cite>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
