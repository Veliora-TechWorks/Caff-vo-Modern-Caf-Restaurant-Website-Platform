import Link from 'next/link'
import { Coffee, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock, LogIn } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-dark to-primary text-white">
      <div className="container-custom section-padding">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center shadow-lg">
                <Coffee className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="font-script text-2xl">Caffévo</span>
                <p className="text-xs text-gold">Café & Restaurant</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Experience the finest blend of traditional Indian flavors and modern café culture.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-accent rounded-xl flex items-center justify-center transition-all hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-accent rounded-xl flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-accent rounded-xl flex items-center justify-center transition-all hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-black text-lg mb-6 text-gold"><span className="font-cursive text-xl">Quick</span> Links</h2>
            <ul className="space-y-3">
              <li><Link href="/menu" className="text-gray-300 hover:text-gold transition-colors font-semibold">Menu</Link></li>
              <li><Link href="/order" className="text-gray-300 hover:text-gold transition-colors font-semibold">Order Online</Link></li>
              <li><Link href="/reserve" className="text-gray-300 hover:text-gold transition-colors font-semibold">Reserve Table</Link></li>
              <li><Link href="/offers" className="text-gray-300 hover:text-gold transition-colors font-semibold">Offers</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-gold transition-colors font-semibold">Contact</Link></li>
              <li><Link href="/staff/login" className="text-gray-300 hover:text-gold transition-colors font-semibold flex items-center gap-2"><LogIn className="w-4 h-4" />Staff Login</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-black text-lg mb-6 text-gold"><span className="font-cursive text-xl">Contact</span> Us</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-gold transition-colors font-semibold">+91 98765 43210</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@caffevo.in" className="text-gray-300 hover:text-gold transition-colors font-semibold">hello@caffevo.in</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">123, MG Road, Koramangala<br />Bangalore, Karnataka 560034</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h2 className="font-black text-lg mb-6 text-gold"><span className="font-cursive text-xl">Opening</span> Hours</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p className="font-bold text-white mb-2">Monday - Friday</p>
                  <p className="font-semibold">8:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p className="font-bold text-white mb-2">Saturday - Sunday</p>
                  <p className="font-semibold">8:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8 mb-12">
          {/* Brand */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center shadow-lg">
                <Coffee className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="font-script text-2xl">Caffévo</span>
                <p className="text-xs text-gold">Café & Restaurant</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Experience the finest blend of traditional Indian flavors and modern café culture.
            </p>
            <div className="flex gap-3 justify-center">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white/5 rounded-2xl p-6">
            <h2 className="font-black text-base mb-4 text-gold text-center">Quick Links</h2>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/menu" className="text-gray-300 text-sm font-semibold text-center">Menu</Link>
              <Link href="/order" className="text-gray-300 text-sm font-semibold text-center">Order Online</Link>
              <Link href="/reserve" className="text-gray-300 text-sm font-semibold text-center">Reserve Table</Link>
              <Link href="/offers" className="text-gray-300 text-sm font-semibold text-center">Offers</Link>
              <Link href="/contact" className="text-gray-300 text-sm font-semibold text-center col-span-2">Contact</Link>
              <Link href="/staff/login" className="text-gold text-sm font-bold text-center col-span-2 flex items-center justify-center gap-1"><LogIn className="w-3 h-3" />Staff Login</Link>
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-4">
            <div className="bg-white/5 rounded-2xl p-5">
              <h2 className="font-black text-base mb-4 text-gold">Contact Us</h2>
              <div className="space-y-3">
                <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-300 text-sm">
                  <Phone className="w-4 h-4 text-gold" />
                  <span>+91 98765 43210</span>
                </a>
                <a href="mailto:hello@caffevo.in" className="flex items-center gap-3 text-gray-300 text-sm">
                  <Mail className="w-4 h-4 text-gold" />
                  <span>hello@caffevo.in</span>
                </a>
                <div className="flex items-start gap-3 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>123, MG Road, Koramangala, Bangalore 560034</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-5">
              <h2 className="font-black text-base mb-4 text-gold">Opening Hours</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-bold text-white">Mon - Fri</p>
                  <p className="text-gray-300">8:00 AM - 10:00 PM</p>
                </div>
                <div>
                  <p className="font-bold text-white">Sat - Sun</p>
                  <p className="text-gray-300">8:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">&copy; {new Date().getFullYear()} Caffévo. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-300 hover:text-gold transition-colors font-semibold">Privacy Policy</Link>
              <Link href="#" className="text-gray-300 hover:text-gold transition-colors font-semibold">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
