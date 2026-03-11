'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Flame, ChevronDown, ChevronUp } from 'lucide-react'
import menuData from '@/lib/data/menu.json'

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [vegFilter, setVegFilter] = useState<'all' | 'veg' | 'nonveg'>('all')
  const [showPopularOnly, setShowPopularOnly] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const filteredCategories = useMemo(() => {
    return menuData.categories.map(category => ({
      ...category,
      items: category.items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             item.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesVeg = vegFilter === 'all' || 
                          (vegFilter === 'veg' && item.isVeg) ||
                          (vegFilter === 'nonveg' && !item.isVeg)
        const matchesPopular = !showPopularOnly || item.popular
        
        return matchesSearch && matchesVeg && matchesPopular
      })
    })).filter(category => category.items.length > 0)
  }, [searchQuery, vegFilter, showPopularOnly])

  const getCategoryIcon = (categoryId: string) => {
    const icons: Record<string, string> = {
      'hot-beverages': '☕',
      'cold-beverages': '🥤',
      'snacks': '🍟',
      'main-course': '🍛',
      'breads': '🫓',
      'desserts': '🍰'
    }
    return icons[categoryId] || '🍽️'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-lightCream to-white">
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-primary">
              Our <span className="font-script text-5xl md:text-6xl text-gradient">Menu</span>
            </h1>
            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
              Explore our delicious selection of authentic Indian cuisine and beverages
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 rounded-xl bg-white text-dark font-semibold focus:ring-2 focus:ring-accent transition-all shadow-md border border-gray-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-md p-4 mb-8 border border-gray-200"
          >
            {/* Desktop & Tablet Layout */}
            <div className="hidden md:flex md:items-center md:justify-between gap-4">
              {/* Left Side - Type Filter */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-gray-700">Type:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setVegFilter('all')}
                    className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${
                      vegFilter === 'all' ? 'bg-gradient-accent text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setVegFilter('veg')}
                    className={`px-4 py-2 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${
                      vegFilter === 'veg' ? 'bg-green-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className="w-4 h-4 border-2 border-current flex items-center justify-center bg-white rounded-sm">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    Veg
                  </button>
                  <button
                    onClick={() => setVegFilter('nonveg')}
                    className={`px-4 py-2 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${
                      vegFilter === 'nonveg' ? 'bg-red-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className="w-4 h-4 border-2 border-current flex items-center justify-center bg-white rounded-sm">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    Non-Veg
                  </button>
                </div>
              </div>

              {/* Right Side - Popular & Clear */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowPopularOnly(!showPopularOnly)}
                  className={`px-4 py-2 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${
                    showPopularOnly
                      ? 'bg-gradient-accent text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Flame className="w-4 h-4" />
                  Popular Only
                </button>

                {(searchQuery || vegFilter !== 'all' || showPopularOnly) && (
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setVegFilter('all')
                      setShowPopularOnly(false)
                    }}
                    className="px-4 py-2 rounded-lg font-bold text-sm bg-red-50 text-red-600 hover:bg-red-100 transition-all flex items-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-3">
              {/* Type Filter */}
              <div>
                <span className="text-xs font-bold text-gray-600 mb-2 block">Type</span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setVegFilter('all')}
                    className={`px-3 py-2.5 rounded-lg font-bold text-xs transition-all ${
                      vegFilter === 'all' ? 'bg-gradient-accent text-white shadow-md' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setVegFilter('veg')}
                    className={`px-3 py-2.5 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                      vegFilter === 'veg' ? 'bg-green-600 text-white shadow-md' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="w-3.5 h-3.5 border-2 border-current flex items-center justify-center bg-white rounded-sm">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    </div>
                    Veg
                  </button>
                  <button
                    onClick={() => setVegFilter('nonveg')}
                    className={`px-3 py-2.5 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                      vegFilter === 'nonveg' ? 'bg-red-600 text-white shadow-md' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="w-3.5 h-3.5 border-2 border-current flex items-center justify-center bg-white rounded-sm">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    </div>
                    Non-Veg
                  </button>
                </div>
              </div>

              {/* Popular & Clear */}
              <div className="flex gap-2">
                <button
                  onClick={() => setShowPopularOnly(!showPopularOnly)}
                  className={`flex-1 px-3 py-2.5 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                    showPopularOnly
                      ? 'bg-gradient-accent text-white shadow-md'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5" />
                  Popular Only
                </button>

                {(searchQuery || vegFilter !== 'all' || showPopularOnly) && (
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setVegFilter('all')
                      setShowPopularOnly(false)
                    }}
                    className="px-4 py-2.5 rounded-lg font-bold text-xs bg-red-50 text-red-600 hover:bg-red-100 transition-all flex items-center gap-1.5"
                  >
                    <X className="w-3.5 h-3.5" />
                    Clear
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Categories with Dropdown */}
          {filteredCategories.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredCategories.map((category, categoryIndex) => {
                const isExpanded = expandedCategories.includes(category.id)
                
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
                  >
                    {/* Category Header - Clickable */}
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{getCategoryIcon(category.id)}</span>
                        <div className="text-left">
                          <h2 className="text-xl md:text-2xl font-black text-primary">
                            {category.name}
                          </h2>
                          <p className="text-sm text-gray-500 font-semibold">
                            {category.items.length} {category.items.length === 1 ? 'item' : 'items'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {isExpanded ? (
                          <ChevronUp className="w-6 h-6 text-accent" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {/* Category Items - Expandable */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-gray-200"
                        >
                          <div className="p-4 md:p-6 bg-gradient-to-br from-cream/30 to-lightCream/30">
                            {/* Items Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                              {category.items.map((item, itemIndex) => (
                                <motion.div
                                  key={item.id}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                                >
                                  {/* Desktop Card */}
                                  <div className="hidden lg:block bg-gradient-to-br from-cream/50 to-lightCream/50 rounded-xl p-5 hover:shadow-md transition-all border border-secondary/10">
                                    <div className="flex items-start justify-between mb-3">
                                      <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                          {item.isVeg ? (
                                            <div className="w-5 h-5 border-2 border-green-600 flex items-center justify-center flex-shrink-0">
                                              <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                                            </div>
                                          ) : (
                                            <div className="w-5 h-5 border-2 border-red-600 flex items-center justify-center flex-shrink-0">
                                              <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
                                            </div>
                                          )}
                                          <h3 className="text-lg font-black text-primary">{item.name}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                          {item.description}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-3 border-t border-secondary/10">
                                      <div className="text-xl font-black text-gradient">₹{item.price}</div>
                                      {item.popular && (
                                        <span className="bg-gradient-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                                          Popular
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  {/* Tablet Card */}
                                  <div className="hidden md:block lg:hidden bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200">
                                    <div className="p-4">
                                      <div className="flex items-start gap-3 mb-3">
                                        {item.isVeg ? (
                                          <div className="w-5 h-5 border-2 border-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                                          </div>
                                        ) : (
                                          <div className="w-5 h-5 border-2 border-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
                                          </div>
                                        )}
                                        <div className="flex-1 min-w-0">
                                          <div className="flex items-start justify-between gap-2 mb-2">
                                            <h3 className="text-base font-black text-primary leading-tight">{item.name}</h3>
                                            {item.popular && (
                                              <span className="bg-gradient-accent text-white text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0">
                                                Popular
                                              </span>
                                            )}
                                          </div>
                                          <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                            {item.description}
                                          </p>
                                          <div className="text-xl font-black text-gradient">₹{item.price}</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Mobile Card */}
                                  <div className="md:hidden bg-white rounded-xl shadow-sm border border-gray-200">
                                    <div className="p-4">
                                      {/* Header Row */}
                                      <div className="flex items-start justify-between gap-3 mb-3">
                                        <div className="flex items-start gap-2 flex-1 min-w-0">
                                          {item.isVeg ? (
                                            <div className="w-4 h-4 border-2 border-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                            </div>
                                          ) : (
                                            <div className="w-4 h-4 border-2 border-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                            </div>
                                          )}
                                          <div className="flex-1 min-w-0">
                                            <h3 className="text-base font-black text-primary leading-tight mb-1">{item.name}</h3>
                                            {item.popular && (
                                              <span className="inline-flex items-center gap-1 bg-gradient-accent text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                                <Flame className="w-3 h-3" />
                                                Popular
                                              </span>
                                            )}
                                          </div>
                                        </div>
                                        <div className="flex items-center gap-0.5 flex-shrink-0">
                                          <span className="text-lg font-black text-gradient">₹{item.price}</span>
                                        </div>
                                      </div>
                                      
                                      {/* Description */}
                                      <p className="text-sm text-gray-600 leading-relaxed">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-3xl font-black text-gray-400 mb-3">No items found</h3>
              <p className="text-gray-500 text-lg mb-6">Try adjusting your filters or search query</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setVegFilter('all')
                  setShowPopularOnly(false)
                }}
                className="bg-gradient-accent text-white px-8 py-3 rounded-xl font-bold hover:shadow-glow transition-all"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
