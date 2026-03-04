import Link from 'next/link'
import { Phone, Sparkles } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>
      
      {/* Animated Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-gold animate-pulse" />
            <span className="font-bold">Special Offer Available</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white leading-tight">
            Ready to Experience
            <span className="block mt-2 font-script text-6xl md:text-7xl bg-gradient-to-r from-accent via-gold to-rose bg-clip-text text-transparent">
              Caffévo?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 font-medium max-w-2xl mx-auto">
            Visit us today or place your order online for a delightful culinary experience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/order" className="btn-primary text-lg">
              Order Now
            </Link>
            <a href="tel:+919876543210" className="btn-secondary text-lg">
              <Phone className="w-5 h-5 inline-block mr-2" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
