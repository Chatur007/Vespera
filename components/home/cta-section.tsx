"use client"

import Link from "next/link"
import { FadeIn, GoldDivider } from "@/components/scroll-animations"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-25 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs tracking-ultra uppercase text-gold mb-6">
              Begin Your Journey
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight mb-8">
              Discover the Collection
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <GoldDivider className="w-32 mx-auto mb-8" />
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
              Each VESPERA fragrance is an invitation to experience the extraordinary. 
              Explore our curated collection and find the scent that speaks to your soul.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/collections"
                className="inline-block text-xs tracking-ultra uppercase bg-gold text-background px-10 py-4 hover:bg-gold-light transition-all duration-500 luxury-ease"
              >
                Explore Collections
              </Link>
              <Link
                href="/contact"
                className="inline-block text-xs tracking-ultra uppercase text-ivory border border-ivory/30 px-10 py-4 hover:border-gold hover:text-gold transition-all duration-500 luxury-ease"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>

          {/* Decorative bottom element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-24"
          >
            <span className="font-serif text-6xl md:text-8xl text-ivory/5">V</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
