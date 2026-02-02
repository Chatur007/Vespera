import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-border/30">
      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl tracking-luxury text-ivory">
                VESPERA
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              An essence beyond time. Crafted with rare ingredients sourced from 
              the world's most pristine landscapes, each fragrance tells a story 
              of elegance and refinement.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-luxury uppercase text-gold mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/collections" className="text-sm text-muted-foreground hover:text-ivory transition-colors duration-300">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-ivory transition-colors duration-300">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-ivory transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-luxury uppercase text-gold mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Atelier VESPERA</li>
              <li>24 Rue de la Parfumerie</li>
              <li>Grasse, France 06130</li>
              <li className="pt-2">
                <a href="mailto:contact@vespera.com" className="hover:text-ivory transition-colors duration-300">
                  contact@vespera.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} VESPERA Perfume Co. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-xs text-muted-foreground hover:text-ivory transition-colors duration-300 tracking-wider">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-ivory transition-colors duration-300 tracking-wider">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
