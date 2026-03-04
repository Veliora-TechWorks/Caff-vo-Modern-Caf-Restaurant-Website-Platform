'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ShoppingBag, Search, X, Flame, IndianRupee } from 'lucide-react'
import menuData from '@/lib/data/menu.json'
import Link from 'next/link'

type SortOption = 'popular' | 'price-low' | 'price-high' | 'name'

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [showPopularOnly, setShowPopularOnly] = useState(false)
  const [vegFilter, setVegFilter] = useState<'all' | 'veg' | 'nonveg'>('all')
  const [sortBy, setSortBy] = useState<SortOption>('popular')

  const allItems = useMemo(() => 
    menuData.categories.flatMap(cat => 
      cat.items.map(item => ({ ...item, category: cat.name, categoryId: cat.id }))
    ), []
  )

  const filteredAndSortedItems = useMemo(() => {
    let items = allItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = !selectedCategory || item.categoryId === selectedCategory
      const matchesPopular = !showPopularOnly || item.popular
      const matchesVeg = vegFilter === 'all' || 
                        (vegFilter === 'veg' && item.isVeg) ||
                        (vegFilter === 'nonveg' && !item.isVeg)
      
      return matchesSearch && matchesCategory && matchesPopular && matchesVeg
    })

    // Sort items
    switch(sortBy) {
      case 'popular':
        items = items.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0))
        break
      case 'price-low':
        items = items.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        items = items.sort((a, b) => b.price - a.price)
        break
      case 'name':
        items = items.sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    return items
  }, [allItems, searchQuery, selectedCategory, showPopularOnly, vegFilter, sortBy])

  const popularItems = useMemo(() => allItems.filter(item => item.popular), [allItems])

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
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-lightCream">
      {/* Compact Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-dark to-secondary text-white pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-3">
              Our <span className="font-script text-5xl md:text-6xl bg-gradient-to-r from-accent via-gold to-rose bg-clip-text text-transparent">Menu</span>
            </h1>
            <p className="text-gray-300 mb-6">Discover authentic flavors crafted with passion</p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 rounded-xl bg-white/95 backdrop-blur-md text-dark font-semibold focus:ring-2 focus:ring-accent transition-all shadow-lg"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="container-custom">
          <div className="flex items-center gap-3 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <button
              onClick={() => setSelectedCategory(null)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                !selectedCategory
                  ? 'bg-gradient-accent text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Items
            </button>
            {menuData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-accent text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{getCategoryIcon(cat.id)}</span>
                {cat.name}
                <span className="text-xs opacity-75">({cat.items.length})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200">
        <div className="container-custom py-4">
          {/* Desktop & Tablet Layout */}
          <div className="hidden md:flex md:flex-col lg:flex-row lg:items-center gap-4">
            {/* Left Side - Filters */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Veg Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-500 uppercase">Type:</span>
                <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
                  <button
                    onClick={() => setVegFilter('all')}
                    className={`px-3 py-1.5 rounded-md font-bold text-xs transition-all ${
                      vegFilter === 'all' ? 'bg-white shadow-sm text-primary' : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setVegFilter('veg')}
                    className={`px-3 py-1.5 rounded-md font-bold text-xs transition-all flex items-center gap-1.5 ${
                      vegFilter === 'veg' ? 'bg-white shadow-sm text-green-600' : 'text-gray-600 hover:text-green-600'
                    }`}
                  >
                    <div className="w-3 h-3 border-2 border-green-600 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    </div>
                    Veg
                  </button>
                  <button
                    onClick={() => setVegFilter('nonveg')}
                    className={`px-3 py-1.5 rounded-md font-bold text-xs transition-all flex items-center gap-1.5 ${
                      vegFilter === 'nonveg' ? 'bg-white shadow-sm text-red-600' : 'text-gray-600 hover:text-red-600'
                    }`}
                  >
                    <div className="w-3 h-3 border-2 border-red-600 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    </div>
                    Non-Veg
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden lg:block w-px h-8 bg-gray-300"></div>

              {/* Popular Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-500 uppercase">Filter:</span>
                <button
                  onClick={() => setShowPopularOnly(!showPopularOnly)}
                  className={`px-4 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1.5 ${
                    showPopularOnly
                      ? 'bg-gradient-accent text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5" />
                  Bestsellers Only
                </button>
              </div>

              {/* Divider */}
              <div className="hidden lg:block w-px h-8 bg-gray-300"></div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-500 uppercase">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="px-3 py-1.5 rounded-lg font-bold text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all border-none focus:ring-2 focus:ring-accent/30 cursor-pointer"
                >
                  <option value="popular">Popular First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>

            {/* Right Side - Results & Clear */}
            <div className="flex items-center gap-3 lg:ml-auto">
              {/* Results Count */}
              <div className="flex items-center gap-2 bg-accent/10 px-3 py-1.5 rounded-lg">
                <span className="text-xs font-bold text-gray-600">Results:</span>
                <span className="text-sm font-black text-accent">{filteredAndSortedItems.length}</span>
              </div>

              {/* Clear Filters */}
              {(searchQuery || showPopularOnly || vegFilter !== 'all' || selectedCategory || sortBy !== 'popular') && (
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setShowPopularOnly(false)
                    setVegFilter('all')
                    setSelectedCategory(null)
                    setSortBy('popular')
                  }}
                  className="px-4 py-1.5 rounded-lg font-bold text-xs bg-red-50 text-red-600 hover:bg-red-100 transition-all flex items-center gap-1.5"
                >
                  <X className="w-3.5 h-3.5" />
                  Clear All
                </button>
              )}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-3">
            {/* Row 1: Veg Filter & Results */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setVegFilter('all')}
                  className={`px-3 py-1.5 rounded-md font-bold text-xs transition-all ${
                    vegFilter === 'all' ? 'bg-white shadow-sm text-primary' : 'text-gray-600'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setVegFilter('veg')}
                  className={`px-2 py-1.5 rounded-md font-bold text-xs transition-all flex items-center gap-1 ${
                    vegFilter === 'veg' ? 'bg-white shadow-sm text-green-600' : 'text-gray-600'
                  }`}
                >
                  <div className="w-3 h-3 border-2 border-green-600 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  </div>
                  Veg
                </button>
                <button
                  onClick={() => setVegFilter('nonveg')}
                  className={`px-2 py-1.5 rounded-md font-bold text-xs transition-all flex items-center gap-1 ${
                    vegFilter === 'nonveg' ? 'bg-white shadow-sm text-red-600' : 'text-gray-600'
                  }`}
                >
                  <div className="w-3 h-3 border-2 border-red-600 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                  </div>
                  Non-Veg
                </button>
              </div>

              {/* Results Count */}
              <div className="flex items-center gap-1.5 bg-accent/10 px-3 py-1.5 rounded-lg">
                <span className="text-xs font-bold text-accent">{filteredAndSortedItems.length}</span>
                <span className="text-xs text-gray-600">items</span>
              </div>
            </div>

            {/* Row 2: Bestsellers & Sort */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowPopularOnly(!showPopularOnly)}
                className={`flex-1 px-3 py-2 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                  showPopularOnly
                    ? 'bg-gradient-accent text-white shadow-md'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                Bestsellers
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="flex-1 px-3 py-2 rounded-lg font-bold text-xs bg-gray-100 text-gray-700 border-none focus:ring-2 focus:ring-accent/30"
              >
                <option value="popular">Popular</option>
                <option value="price-low">Price ↑</option>
                <option value="price-high">Price ↓</option>
                <option value="name">A to Z</option>
              </select>

              {/* Clear Filters */}
              {(searchQuery || showPopularOnly || vegFilter !== 'all' || selectedCategory || sortBy !== 'popular') && (
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setShowPopularOnly(false)
                    setVegFilter('all')
                    setSelectedCategory(null)
                    setSortBy('popular')
                  }}
                  className="px-3 py-2 rounded-lg font-bold text-xs bg-red-50 text-red-600 flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="py-8">
        <div className="container-custom">

          {/* Menu Items - Responsive Grid Layout */}
          <AnimatePresence mode="wait">
            {filteredAndSortedItems.length > 0 ? (
              <motion.div
                key={selectedCategory || searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {filteredAndSortedItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-accent/30"
                  >
                    {/* Desktop & Tablet Layout */}
                    <div className="hidden md:block p-5">
                      <div className="flex items-start justify-between gap-4">
                        {/* Left Side - Item Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-3 mb-2">
                            {/* Veg/Non-Veg Indicator */}
                            <div className="mt-1 flex-shrink-0">
                              {item.isVeg ? (
                                <div className="w-5 h-5 border-2 border-green-600 flex items-center justify-center">
                                  <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                                </div>
                              ) : (
                                <div className="w-5 h-5 border-2 border-red-600 flex items-center justify-center">
                                  <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
                                </div>
                              )}
                            </div>

                            {/* Item Name and Badges */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1 flex-wrap">
                                <h3 className="text-lg font-black text-primary group-hover:text-gradient transition-all">
                                  {item.name}
                                </h3>
                                {item.popular && (
                                  <span className="bg-gradient-accent text-white px-2 py-0.5 rounded text-xs font-bold flex items-center gap-1">
                                    <Flame className="w-3 h-3" />
                                    Bestseller
                                  </span>
                                )}
                              </div>
                              
                              {/* Description */}
                              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                {item.description}
                              </p>

                              {/* Reviews and Category */}
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 text-gold fill-gold" />
                                  <span className="text-sm font-bold text-gray-700">
                                    {item.popular ? '4.8' : '4.5'}
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    ({item.popular ? '250+' : '120+'})
                                  </span>
                                </div>
                                
                                {/* Category Tag */}
                                <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                                  {item.category}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Side - Price */}
                        <div className="flex flex-col items-end flex-shrink-0">
                          <div className="flex items-center gap-1">
                            <IndianRupee className="w-5 h-5 text-primary font-black" />
                            <span className="text-2xl font-black text-gradient">{item.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden p-4">
                      <div className="flex gap-3">
                        {/* Left - Veg/Non-Veg Indicator */}
                        <div className="flex-shrink-0 mt-1">
                          {item.isVeg ? (
                            <div className="w-5 h-5 border-2 border-green-600 flex items-center justify-center">
                              <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                            </div>
                          ) : (
                            <div className="w-5 h-5 border-2 border-red-600 flex items-center justify-center">
                              <div className="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
                            </div>
                          )}
                        </div>

                        {/* Middle - Item Details */}
                        <div className="flex-1 min-w-0">
                          {/* Name and Price Row */}
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex-1 min-w-0">
                              <h3 className="text-base font-black text-primary leading-tight mb-1">
                                {item.name}
                              </h3>
                              {item.popular && (
                                <span className="inline-flex items-center gap-1 bg-gradient-accent text-white px-2 py-0.5 rounded text-xs font-bold">
                                  <Flame className="w-2.5 h-2.5" />
                                  Bestseller
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-0.5 flex-shrink-0">
                              <IndianRupee className="w-4 h-4 text-primary font-black" />
                              <span className="text-xl font-black text-gradient">{item.price}</span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 text-xs leading-relaxed mb-2 line-clamp-2">
                            {item.description}
                          </p>

                          {/* Bottom Row - Reviews and Category */}
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                              <span className="text-xs font-bold text-gray-700">
                                {item.popular ? '4.8' : '4.5'}
                              </span>
                              <span className="text-xs text-gray-500">
                                ({item.popular ? '250+' : '120+'})
                              </span>
                            </div>
                            
                            <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded">
                              {item.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
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
                    setShowPopularOnly(false)
                    setVegFilter('all')
                    setSelectedCategory(null)
                  }}
                  className="bg-gradient-accent text-white px-8 py-3 rounded-xl font-bold hover:shadow-glow transition-all"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-dark to-secondary text-white py-12">
        <div className="container-custom text-center">
          <h3 className="text-3xl font-black mb-2">
            Ready to <span className="font-script text-4xl text-gold">Order?</span>
          </h3>
          <p className="text-gray-300 mb-6">Experience authentic flavors delivered fresh</p>
          <Link 
            href="/order" 
            className="inline-flex items-center gap-2 bg-gradient-accent text-white px-8 py-3 rounded-xl font-bold hover:shadow-glow transition-all"
          >
            <ShoppingBag className="w-5 h-5" />
            Order Now
          </Link>
        </div>
      </section>
    </div>
  )
}
