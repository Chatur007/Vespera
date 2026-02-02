"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { FadeIn } from "@/components/scroll-animations"

export function CinematicSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative h-[80vh] md:h-screen overflow-hidden">
      {/* Parallax image */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/cinematic.jpg"
          alt="VESPERA Campaign"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/60" />
      </motion.div>

      {/* Content overlay */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center px-6 max-w-4xl">
          <FadeIn>
            <p className="text-xs tracking-ultra uppercase text-gold mb-6">
              Crafted in Grasse, France
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-ivory leading-tight mb-8">
              Where Nature Meets
              <br />
              <span className="italic">Artistry</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl text-ivory/70 max-w-2xl mx-auto">
              From the lavender fields of Provence to the jasmine gardens of Grasse, 
              we capture nature's most exquisite essences.
            </p>
          </FadeIn>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
