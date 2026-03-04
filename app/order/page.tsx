'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, UtensilsCrossed, Send, Sparkles, User, Phone, Trash2, Plus, Minus, ShoppingCart, Check } from 'lucide-react'
import Link from 'next/link'
import menuData from '@/lib/data/menu.json'

type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
  isVeg: boolean
}

export default function OrderPage() {
  const [orderType, setOrderType] = useState<'takeaway' | 'dinein'>('takeaway')
  const [cart, setCart] = useState<CartItem[]>([])
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '' })
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const addToCart = (item: any) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1, isVeg: item.isVeg }]
    })
  }

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(i => i.id !== itemId))
  }

  const updateQuantity = (itemId: string, delta: number) => {
    setCart(prev => {
      return prev.map(i => {
        if (i.id === itemId) {
          const newQuantity = i.quantity + delta
          return newQuantity > 0 ? { ...i, quantity: newQuantity } : i
        }
        return i
      }).filter(i => i.quantity > 0)
    })
  }

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }, [cart])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (cart.length === 0 || !customerInfo.name || !customerInfo.phone) return

    const itemsList = cart.map(item => `${item.name} x${item.quantity} - ₹${item.price * item.quantity}`).join('%0A')
    const message = `*${orderType === 'takeaway' ? 'TAKEAWAY' : 'DINE-IN'} ORDER*%0A%0A*Customer Details:*%0AName: ${customerInfo.name}%0APhone: ${customerInfo.phone}%0A%0A*Order Items:*%0A${itemsList}%0A%0A*Total Amount: ₹${total}*`
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank')
  }

  const filteredCategories = selectedCategory 
    ? menuData.categories.filter(cat => cat.id === selectedCategory)
    : menuData.categories

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-lightCream">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-dark to-secondary text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-semibold">Fast & Easy Ordering</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              Order <span className="font-script text-6xl md:text-7xl bg-gradient-to-r from-accent via-gold to-rose bg-clip-text text-transparent">Online</span>
            </h1>
            <p className="text-xl text-gray-300">Choose your dining preference and build your perfect meal</p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Order Type & Customer Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Order Type */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-3xl shadow-card-hover p-6 sticky top-24"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-lg">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-primary">Order Type</h2>
                    <p className="text-xs text-gray-600">Choose preference</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <button
                    onClick={() => setOrderType('takeaway')}
                    className={`group p-4 rounded-2xl border-2 transition-all ${
                      orderType === 'takeaway'
                        ? 'border-accent bg-gradient-to-br from-accent/10 to-gold/10 shadow-lg'
                        : 'border-gray-200 hover:border-accent/50 bg-gray-50'
                    }`}
                  >
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center transition-all ${
                      orderType === 'takeaway' ? 'bg-gradient-accent shadow-lg' : 'bg-gray-200'
                    }`}>
                      <ShoppingBag className={`w-6 h-6 ${orderType === 'takeaway' ? 'text-white' : 'text-gray-400'}`} />
                    </div>
                    <p className="font-black text-sm text-primary">Takeaway</p>
                  </button>
                  
                  <button
                    onClick={() => setOrderType('dinein')}
                    className={`group p-4 rounded-2xl border-2 transition-all ${
                      orderType === 'dinein'
                        ? 'border-accent bg-gradient-to-br from-accent/10 to-gold/10 shadow-lg'
                        : 'border-gray-200 hover:border-accent/50 bg-gray-50'
                    }`}
                  >
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center transition-all ${
                      orderType === 'dinein' ? 'bg-gradient-accent shadow-lg' : 'bg-gray-200'
                    }`}>
                      <UtensilsCrossed className={`w-6 h-6 ${orderType === 'dinein' ? 'text-white' : 'text-gray-400'}`} />
                    </div>
                    <p className="font-black text-sm text-primary">Dine-In</p>
                  </button>
                </div>

                {/* Customer Info */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-black text-primary mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-accent" />
                    Your Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 mb-2 block">Full Name *</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all bg-gray-50 font-semibold text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 mb-2 block">Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all bg-gray-50 font-semibold text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Cart Summary */}
                {cart.length > 0 && (
                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-black text-primary flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5 text-accent" />
                        Cart ({cart.length})
                      </h3>
                      <button
                        onClick={() => setCart([])}
                        className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" />
                        Clear
                      </button>
                    </div>
                    
                    <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
                      {cart.map(item => (
                        <div key={item.id} className="flex items-center justify-between text-sm bg-gray-50 p-3 rounded-xl">
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-primary truncate">{item.name}</p>
                            <p className="text-xs text-gray-600">₹{item.price} × {item.quantity}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-6 h-6 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-black text-primary w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-6 h-6 rounded-lg bg-accent hover:bg-accent/80 text-white flex items-center justify-center"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-accent text-white p-4 rounded-2xl mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm opacity-90">Total Amount</span>
                        <span className="text-2xl font-black">₹{total}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={!customerInfo.name || !customerInfo.phone || cart.length === 0}
                      className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-4 rounded-2xl font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Order via WhatsApp
                    </button>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right Column - Menu Items */}
            <div className="lg:col-span-2">
              {/* Category Filter */}
              <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                    !selectedCategory
                      ? 'bg-gradient-accent text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-card'
                  }`}
                >
                  All Items
                </button>
                {menuData.categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-gradient-accent text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-card'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Menu Items */}
              <div className="space-y-6">
                {filteredCategories.map((category, catIndex) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: catIndex * 0.1 }}
                    className="bg-white rounded-3xl shadow-card p-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-lg text-2xl">
                        {category.id === 'hot-beverages' && '☕'}
                        {category.id === 'cold-beverages' && '🥤'}
                        {category.id === 'snacks' && '🍟'}
                        {category.id === 'main-course' && '🍛'}
                        {category.id === 'breads' && '🫓'}
                        {category.id === 'desserts' && '🍰'}
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-primary">{category.name}</h3>
                        <p className="text-sm text-gray-600">{category.items.length} items available</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.items.map((item, itemIndex) => {
                        const inCart = cart.find(i => i.id === item.id)
                        return (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: itemIndex * 0.05 }}
                            className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-accent/30 rounded-2xl p-4 transition-all"
                          >
                            <div className="flex gap-4">
                              <div className={`w-3 h-3 mt-1 border-2 flex items-center justify-center flex-shrink-0 ${
                                item.isVeg ? 'border-green-600' : 'border-red-600'
                              }`}>
                                <div className={`w-1.5 h-1.5 rounded-full ${
                                  item.isVeg ? 'bg-green-600' : 'bg-red-600'
                                }`}></div>
                              </div>
                              
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2 mb-2">
                                  <h4 className="font-black text-primary group-hover:text-gradient transition-all">{item.name}</h4>
                                  {item.popular && (
                                    <span className="bg-gradient-accent text-white px-2 py-0.5 rounded-full text-xs font-bold flex-shrink-0">
                                      Popular
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                                
                                <div className="flex items-center justify-between">
                                  <div className="text-xl font-black text-gradient">₹{item.price}</div>
                                  
                                  {inCart ? (
                                    <div className="flex items-center gap-2 bg-accent/10 px-3 py-1.5 rounded-xl">
                                      <button
                                        onClick={() => updateQuantity(item.id, -1)}
                                        className="w-6 h-6 rounded-lg bg-white hover:bg-gray-100 flex items-center justify-center shadow-sm"
                                      >
                                        <Minus className="w-3 h-3 text-accent" />
                                      </button>
                                      <span className="font-black text-accent w-6 text-center">{inCart.quantity}</span>
                                      <button
                                        onClick={() => updateQuantity(item.id, 1)}
                                        className="w-6 h-6 rounded-lg bg-accent hover:bg-accent/80 text-white flex items-center justify-center shadow-sm"
                                      >
                                        <Plus className="w-3 h-3" />
                                      </button>
                                    </div>
                                  ) : (
                                    <button
                                      onClick={() => addToCart(item)}
                                      className="bg-gradient-accent text-white px-4 py-2 rounded-xl font-bold hover:shadow-glow transition-all flex items-center gap-2 text-sm"
                                    >
                                      <Plus className="w-4 h-4" />
                                      Add
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
