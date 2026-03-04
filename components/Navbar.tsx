'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, Coffee, Phone, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/order', label: 'Order Online' },
    { href: '/offers', label: 'Offers' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      isScrolled || isMenuOpen ? 'bg-cream/95 backdrop-blur-md shadow-lg border-b border-secondary/20' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-all ${
              isScrolled || isMenuOpen ? 'bg-gradient-to-r from-secondary to-primary' : 'bg-gradient-to-r from-accent via-gold to-rose'
            }`}>
              <Coffee className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className={`font-script text-2xl transition-colors ${isScrolled || isMenuOpen ? 'text-primary' : 'text-white'}`}>Caffévo</span>
              <p className={`text-xs font-semibold transition-colors ${isScrolled || isMenuOpen ? 'text-secondary' : 'text-gray-300'}`}>Café & Restaurant</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              const base = 'px-4 py-2 rounded-lg font-bold text-sm transition-all'
              const themed = isScrolled || isMenuOpen
                ? active
                  ? 'text-accent bg-secondary/10'
                  : 'text-dark hover:text-secondary hover:bg-lightCream'
                : active
                ? 'text-gold bg-white/10'
                : 'text-white hover:text-gold hover:bg-white/5'

              return (
                <Link key={link.href} href={link.href} className={`${base} ${themed}`}>
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className={`transition-colors font-bold flex items-center gap-2 px-4 py-2 rounded-lg ${
                isScrolled || isMenuOpen
                  ? 'text-secondary hover:text-primary hover:bg-lightCream' 
                  : 'text-gold hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 98765 43210</span>
            </a>
            <Link
              href="/order"
              className="bg-gradient-accent text-white px-5 py-2.5 rounded-xl font-bold hover:shadow-glow transition-all flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled || isMenuOpen ? 'text-primary hover:bg-lightCream' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-secondary/20">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg font-bold transition-all ${
                    isActive(link.href) 
                      ? 'text-accent bg-secondary/10'
                      : 'text-dark hover:text-secondary hover:bg-lightCream'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 space-y-2 border-t border-secondary/20">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 px-4 py-3 font-bold rounded-lg text-secondary hover:bg-lightCream"
              >
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <Link
                href="/order"
                className="flex items-center justify-center gap-2 bg-gradient-accent text-white px-6 py-3 rounded-xl font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag className="w-4 h-4" />
                Order Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
