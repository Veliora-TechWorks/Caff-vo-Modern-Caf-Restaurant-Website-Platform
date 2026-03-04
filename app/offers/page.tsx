'use client'

import { motion } from 'framer-motion'
import { Tag, Calendar, ShoppingBag, Sparkles, Gift, Clock, Percent, TrendingUp, Copy, Check } from 'lucide-react'
import offersData from '@/lib/data/offers.json'
import Link from 'next/link'
import { useState } from 'react'

export default function OffersPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const getOfferIcon = (id: string) => {
    switch(id) {
      case 'evening-special': return <Clock className="w-6 h-6" />
      case 'weekend-biryani': return <Gift className="w-6 h-6" />
      case 'family-meal': return <TrendingUp className="w-6 h-6" />
      case 'first-order': return <Percent className="w-6 h-6" />
      default: return <Tag className="w-6 h-6" />
    }
  }

  const getOfferColor = (index: number) => {
    const colors = [
      'from-rose-500 to-pink-500',
      'from-purple-500 to-indigo-500',
      'from-blue-500 to-cyan-500',
      'from-green-500 to-emerald-500',
    ]
    return colors[index % colors.length]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-lightCream">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-dark to-secondary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-semibold">Limited Time Offers</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              Special <span className="font-script text-6xl md:text-7xl bg-gradient-to-r from-accent via-gold to-rose bg-clip-text text-transparent">Offers</span>
            </h1>
            <p className="text-xl text-gray-300">Don&apos;t miss out on our amazing deals and exclusive discounts</p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Tag className="w-8 h-8" />, value: '4+', label: 'Active Offers' },
              { icon: <Percent className="w-8 h-8" />, value: '20%', label: 'Max Discount' },
              { icon: <Gift className="w-8 h-8" />, value: 'Free', label: 'Add-ons' },
              { icon: <TrendingUp className="w-8 h-8" />, value: '₹150+', label: 'Savings' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-cream to-white rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-2xl flex items-center justify-center text-white shadow-lg">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-primary mb-3">
              Available <span className="font-script text-5xl text-gradient">Deals</span>
            </h2>
            <p className="text-gray-600 text-lg">Choose the best offer for your order</p>
          </motion.div>

          <div className="space-y-6">
            {offersData.offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-3xl shadow-card hover:shadow-card-hover overflow-hidden transition-all"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Left Side - Gradient Badge */}
                  <div className={`md:w-48 bg-gradient-to-br ${getOfferColor(index)} p-8 flex flex-col items-center justify-center text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                        {getOfferIcon(offer.id)}
                      </div>
                      <div className="text-3xl font-black mb-1">{offer.discount}</div>
                      <div className="text-sm opacity-90 font-semibold">Discount</div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="flex-1 p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-black text-primary mb-2 group-hover:text-gradient transition-all">
                          {offer.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">{offer.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-xl">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="font-semibold">Valid until: {offer.validUntil}</span>
                      </div>

                      {offer.id === 'first-order' && (
                        <button
                          onClick={() => copyCode('FIRST15')}
                          className="flex items-center gap-2 bg-gradient-accent text-white px-4 py-2 rounded-xl font-bold hover:shadow-glow transition-all"
                        >
                          {copiedCode === 'FIRST15' ? (
                            <>
                              <Check className="w-4 h-4" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              Copy Code
                            </>
                          )}
                        </button>
                      )}

                      <Link
                        href="/order"
                        className="ml-auto bg-primary hover:bg-secondary text-white px-6 py-2 rounded-xl font-bold transition-all flex items-center gap-2"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Order Now
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* How to Use Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-accent/10 via-gold/10 to-rose/10 rounded-3xl p-8 md:p-12 border-2 border-accent/20"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-black text-primary mb-3">
                How to <span className="font-script text-4xl text-gradient">Redeem</span>
              </h3>
              <p className="text-gray-600">Follow these simple steps to avail your offer</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: '1', title: 'Choose Your Offer', desc: 'Select the offer that suits your order' },
                { step: '2', title: 'Place Your Order', desc: 'Add items to cart and proceed to checkout' },
                { step: '3', title: 'Enjoy Savings', desc: 'Your discount will be applied automatically' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-card"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-black text-primary mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-dark to-secondary text-white py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
              <Gift className="w-4 h-4 text-gold" />
              <span className="text-sm font-semibold">Don&apos;t Wait!</span>
            </div>
            <h3 className="text-4xl font-black mb-3">
              Ready to <span className="font-script text-5xl text-gold">Save?</span>
            </h3>
            <p className="text-gray-300 text-lg mb-8">Take advantage of these offers and place your order now</p>
            <Link
              href="/order"
              className="inline-flex items-center gap-3 bg-gradient-accent text-white px-8 py-4 rounded-2xl font-bold hover:shadow-glow transition-all transform hover:scale-105"
            >
              <ShoppingBag className="w-6 h-6" />
              Order Now & Save
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
