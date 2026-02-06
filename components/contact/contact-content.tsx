"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import { FadeIn, GoldDivider } from "@/components/scroll-animations"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export function ContactContent() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="VESPERA Contact"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <p className="text-xs tracking-ultra uppercase text-gold mb-4">
              Get in Touch
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-ivory tracking-wide">
              Contact Us
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <GoldDivider className="w-32 mx-auto mt-8" />
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Information */}
            <div>
              <FadeIn>
                <p className="text-xs tracking-ultra uppercase text-gold mb-6">
                  Visit Our Atelier
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-8">
                  We Welcome Your Presence
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-muted-foreground leading-relaxed mb-12">
                  Whether you seek a private consultation, wish to explore our collections, 
                  or simply desire to immerse yourself in the world of VESPERA, our doors 
                  are open. Schedule an appointment to experience our atelier firsthand.
                </p>
              </FadeIn>

              <div className="space-y-8">
                <FadeIn delay={0.3}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-ivory mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        Atelier VESPERA<br />
                        24 Rue de la Parfumerie<br />
                        06130 Grasse, France
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-ivory mb-1">Email</h3>
                      <a href="mailto:contact@vespera.com" className="text-muted-foreground hover:text-gold transition-colors duration-300">
                        contact@vespera.com
                      </a>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-ivory mb-1">Phone</h3>
                      <a href="tel:+33493362180" className="text-muted-foreground hover:text-gold transition-colors duration-300">
                        +91 8618601526
                      </a>
                    </div>
                  </div>
                </FadeIn>

                {/* <FadeIn delay={0.6}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-ivory mb-1">Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 10:00 - 18:00<br />
                        Saturday: By Appointment<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </FadeIn> */}
              </div>
            </div>

            {/* Contact Form */}
            <FadeIn delay={0.3} direction="right">
              <div className="bg-charcoal p-8 md:p-12">
                <h3 className="font-serif text-2xl text-ivory mb-6">
                  Send a Message
                </h3>
                
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-8 h-8 text-gold" />
                    </div>
                    <h4 className="font-serif text-xl text-ivory mb-2">
                      Message Received
                    </h4>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We will respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-background border border-border/50 px-4 py-3 text-ivory placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors duration-300"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-background border border-border/50 px-4 py-3 text-ivory placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors duration-300"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full bg-background border border-border/50 px-4 py-3 text-ivory focus:border-gold focus:outline-none transition-colors duration-300"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Private Consultation">Private Consultation</option>
                        <option value="Bespoke Fragrance">Bespoke Fragrance</option>
                        <option value="Press & Media">Press & Media</option>
                        <option value="Partnership">Partnership</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full bg-background border border-border/50 px-4 py-3 text-ivory placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors duration-300 resize-none"
                        placeholder="How may we assist you?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-xs tracking-ultra uppercase bg-gold text-background py-4 hover:bg-gold-light transition-all duration-500 luxury-ease disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      {/* <section className="h-[400px] relative">
        <Image
          src="/images/grasse-map.jpg"
          alt="Grasse, France"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="glass px-8 py-6 text-center">
            <p className="font-serif text-xl text-ivory">Grasse, France</p>
            <p className="text-sm text-ivory/70 mt-1">The Perfume Capital of the World</p>
          </div>
        </div>
      </section> */}
    </div>
  )
}
