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
    <div className="min-h-screen bg-gradient-to-br from-cream via-lightCream to-white">
      {/* Hero Section */}
      <div className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-accent text-white px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-bold">Limited Time Offers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-primary">
              Special <span className="font-script text-5xl md:text-6xl text-gradient">Offers</span>
            </h1>
            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
              {"Don't miss out on our amazing deals and exclusive discounts"}
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {[
              { icon: <Tag className="w-6 h-6" />, value: '4+', label: 'Active Offers' },
              { icon: <Percent className="w-6 h-6" />, value: '20%', label: 'Max Discount' },
              { icon: <Gift className="w-6 h-6" />, value: 'Free', label: 'Add-ons' },
              { icon: <TrendingUp className="w-6 h-6" />, value: '₹150+', label: 'Savings' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl p-4 md:p-6 text-center shadow-md border border-gray-200"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 bg-gradient-accent rounded-xl flex items-center justify-center text-white shadow-md">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-black text-gradient mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {offersData.offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition-all border border-gray-200"
              >
                {/* Desktop & Tablet Layout */}
                <div className="hidden md:block">
                  <div className="flex">
                    {/* Left Side - Gradient Badge */}
                    <div className={`w-32 lg:w-40 bg-gradient-to-br ${getOfferColor(index)} p-6 flex flex-col items-center justify-center text-white relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 mx-auto mb-3 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                          {getOfferIcon(offer.id)}
                        </div>
                        <div className="text-2xl lg:text-3xl font-black mb-1">{offer.discount}</div>
                        <div className="text-xs opacity-90 font-semibold">OFF</div>
                      </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1 p-5 lg:p-6">
                      <h3 className="text-lg lg:text-xl font-black text-primary mb-2">
                        {offer.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">{offer.description}</p>

                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                          <Calendar className="w-4 h-4 text-accent" />
                          <span className="font-semibold">Valid: {offer.validUntil}</span>
                        </div>

                        <div className="flex gap-2">
                          {offer.id === 'first-order' && (
                            <button
                              onClick={() => copyCode('FIRST15')}
                              className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg font-bold hover:bg-gray-200 transition-all text-sm"
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
                            className="flex-1 bg-gradient-accent text-white px-4 py-2 rounded-lg font-bold hover:shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                          >
                            <ShoppingBag className="w-4 h-4" />
                            Order Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                  {/* Top Badge */}
                  <div className={`bg-gradient-to-r ${getOfferColor(index)} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                          {getOfferIcon(offer.id)}
                        </div>
                        <div>
                          <div className="text-2xl font-black">{offer.discount}</div>
                          <div className="text-xs opacity-90 font-semibold">Discount</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-black text-primary mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{offer.description}</p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="font-semibold">Valid until: {offer.validUntil}</span>
                      </div>

                      <div className="flex gap-2">
                        {offer.id === 'first-order' && (
                          <button
                            onClick={() => copyCode('FIRST15')}
                            className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-3 py-2.5 rounded-lg font-bold text-sm"
                          >
                            {copiedCode === 'FIRST15' ? (
                              <>
                                <Check className="w-4 h-4" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4" />
                                Copy
                              </>
                            )}
                          </button>
                        )}

                        <Link
                          href="/order"
                          className="flex-1 bg-gradient-accent text-white px-4 py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 text-sm"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          Order Now
                        </Link>
                      </div>
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
            className="mt-12 bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-md"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-black text-primary mb-2">
                How to <span className="font-script text-3xl md:text-4xl text-gradient">Redeem</span>
              </h3>
              <p className="text-gray-600 text-sm md:text-base">Follow these simple steps to avail your offer</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { step: '1', title: 'Choose Offer', desc: 'Select the offer that suits your order' },
                { step: '2', title: 'Place Order', desc: 'Add items to cart and checkout' },
                { step: '3', title: 'Enjoy Savings', desc: 'Discount applied automatically' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-cream/50 to-lightCream/50 rounded-xl p-5 text-center border border-secondary/10"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 bg-gradient-accent rounded-xl flex items-center justify-center text-white text-xl md:text-2xl font-black shadow-md">
                    {item.step}
                  </div>
                  <h4 className="text-base md:text-lg font-black text-primary mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-xs md:text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
