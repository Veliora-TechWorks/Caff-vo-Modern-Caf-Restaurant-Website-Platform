'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Flame, Leaf, Drumstick } from 'lucide-react'
import menuData from '@/lib/data/menu.json'

export default function MenuPreview() {
  const popularItems = menuData.categories
    .flatMap(cat => cat.items.filter(item => item.popular).map(item => ({ ...item, category: cat.name })))
    .slice(0, 6)

  return (
    <section className="section-padding bg-gradient-to-br from-cream via-lightCream to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-accent text-white px-6 py-2 rounded-full mb-6 font-bold">
            <Flame className="w-5 h-5" />
            Most Popular
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-primary">Our <span className="font-script text-4xl md:text-5xl text-gradient">Signature Dishes</span></h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Handpicked favorites loved by thousands of customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {popularItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              {/* Desktop Card */}
              <div className="hidden md:block bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all h-full">
                <div className="relative h-56 bg-gradient-to-br from-accent/10 to-gold/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-20">🍽️</div>
                  </div>
                  <div className="absolute top-4 right-4 bg-gradient-accent text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Popular
                  </div>
                  <div className="absolute top-4 left-4">
                    {item.isVeg ? (
                      <div className="bg-white rounded-lg px-3 py-1.5 flex items-center gap-1.5 shadow-md">
                        <div className="w-4 h-4 border-2 border-green-600 flex items-center justify-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <span className="text-xs font-bold text-green-600">Veg</span>
                      </div>
                    ) : (
                      <div className="bg-white rounded-lg px-3 py-1.5 flex items-center gap-1.5 shadow-md">
                        <div className="w-4 h-4 border-2 border-red-600 flex items-center justify-center">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        </div>
                        <span className="text-xs font-bold text-red-600">Non-Veg</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-black text-primary mb-1 group-hover:text-gradient transition-all">{item.name}</h3>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{item.category}</span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{item.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-2xl font-black text-gradient">₹{item.price}</div>
                    <Link href="/order" className="bg-gradient-accent text-white px-5 py-2 rounded-lg font-bold hover:shadow-glow transition-all text-sm flex items-center gap-1">
                      Order
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Compact Card */}
              <div className="md:hidden bg-white rounded-xl shadow-card overflow-hidden">
                <div className="flex gap-4 p-4">
                  <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-gold/10 rounded-xl flex items-center justify-center relative">
                    <div className="text-4xl">🍽️</div>
                    {item.isVeg ? (
                      <div className="absolute top-1 left-1 w-4 h-4 border-2 border-green-600 bg-white flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      </div>
                    ) : (
                      <div className="absolute top-1 left-1 w-4 h-4 border-2 border-red-600 bg-white flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1">
                        <h3 className="text-base font-black text-primary leading-tight">{item.name}</h3>
                        <span className="text-xs text-gray-500 font-semibold">{item.category}</span>
                      </div>
                      <div className="bg-gradient-accent text-white px-2 py-0.5 rounded-full text-xs font-bold flex items-center gap-0.5">
                        <Star className="w-2.5 h-2.5 fill-current" />
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-black text-gradient">₹{item.price}</div>
                      <Link href="/order" className="bg-gradient-accent text-white px-4 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1">
                        Order
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/menu" className="btn-primary inline-flex items-center gap-2">
            View Full Menu
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
