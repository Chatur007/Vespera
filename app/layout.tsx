import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VESPERA | Luxury Perfume House',
  description: 'An essence beyond time. Discover the exquisite world of VESPERA, where artistry meets olfactory excellence.',
  keywords: ['luxury perfume', 'fragrance', 'haute parfumerie', 'VESPERA', 'artisan perfume'],
  authors: [{ name: 'VESPERA Perfume Co.' }],
  openGraph: {
    title: 'VESPERA | Luxury Perfume House',
    description: 'An essence beyond time. Discover the exquisite world of VESPERA.',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#0d0d0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        <div className="noise-overlay" aria-hidden="true" />
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
