'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShoppingBag, Calendar, Star, Coffee, Phone } from 'lucide-react'
import { useState } from 'react'
import ReservationModal from './ReservationModal'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80"
          alt="Café background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>
      </div>

      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Navbar removed: using global Header from layout for consistent navigation */}

      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full mb-6 text-sm"
            >
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="font-semibold">Rated 4.8/5 by 1000+ Customers</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 text-white leading-tight"
            >
              Welcome to{' '}
              <span className="block mt-2 font-script text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-accent via-gold to-rose bg-clip-text text-transparent">
                Caffévo
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg mb-8 text-gray-200 leading-relaxed max-w-2xl mx-auto"
            >
              Experience the perfect blend of traditional Indian cuisine and modern café culture. 
              From aromatic masala chai to delicious biryani – we serve happiness!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link href="/order" className="group bg-gradient-accent text-white px-8 py-3 rounded-xl font-bold hover:shadow-glow transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2">
                <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Order Online
              </Link>
              <button onClick={() => setIsModalOpen(true)} className="group bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-primary transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Reserve Table
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-black text-gold mb-1">50+</div>
                <div className="text-xs text-gray-300 font-semibold">Menu Items</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-black text-gold mb-1">1000+</div>
                <div className="text-xs text-gray-300 font-semibold">Happy Customers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-black text-gold mb-1">4.8★</div>
                <div className="text-xs text-gray-300 font-semibold">Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-black text-gold mb-1">500+</div>
                <div className="text-xs text-gray-300 font-semibold">Daily Orders</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
