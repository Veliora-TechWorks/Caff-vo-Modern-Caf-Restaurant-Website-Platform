'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Coffee, Plus, Minus, Trash2, LogOut, Search, ShoppingCart, Check } from 'lucide-react'
import menuData from '@/lib/data/menu.json'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  isVeg: boolean
}

export default function StaffOrders() {
  const router = useRouter()
  const [cart, setCart] = useState<CartItem[]>([])
  const [tableNumber, setTableNumber] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('staffAuth')) {
      router.push('/staff/login')
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('staffAuth')
    router.push('/staff/login')
  }

  const addToCart = (item: any) => {
    const existing = cart.find(i => i.id === item.id)
    if (existing) {
      setCart(cart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const updateQuantity = (id: string, change: number) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
    ).filter(item => item.quantity > 0))
  }

  const removeItem = (id: string) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const placeOrder = () => {
    if (!tableNumber || cart.length === 0) return
    
    // In production, send order to backend
    console.log('Order placed:', { tableNumber, items: cart, total })
    
    setShowSuccess(true)
    setTimeout(() => {
      setCart([])
      setTableNumber('')
      setShowSuccess(false)
    }, 2000)
  }

  const filteredItems = menuData.categories
    .filter(cat => selectedCategory === 'all' || cat.id === selectedCategory)
    .flatMap(cat => cat.items.map(item => ({ ...item, category: cat.name })))
    .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-dark text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-script text-2xl">Caffévo</h1>
                <p className="text-xs text-gold">Staff Portal</p>
              </div>
            </div>
            <button onClick={handleLogout} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all">
              <LogOut className="w-4 h-4" />
              <span className="text-sm font-bold">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Menu Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-black text-primary mb-4">Menu</h2>
              
              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search items..."
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap ${
                    selectedCategory === 'all' ? 'bg-gradient-accent text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  All
                </button>
                {menuData.categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap ${
                      selectedCategory === cat.id ? 'bg-gradient-accent text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Menu Items */}
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {filteredItems.map(item => (
                  <div key={item.id} className="flex items-center justify-between p-4 border-2 border-gray-100 rounded-xl hover:border-accent transition-all">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-3 h-3 border-2 ${item.isVeg ? 'border-green-600' : 'border-red-600'} flex items-center justify-center`}>
                          <div className={`w-1.5 h-1.5 ${item.isVeg ? 'bg-green-600' : 'bg-red-600'} rounded-full`}></div>
                        </div>
                        <h3 className="font-bold text-primary">{item.name}</h3>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{item.category}</p>
                      <p className="text-lg font-black text-gradient">₹{item.price}</p>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-gradient-accent text-white p-3 rounded-xl hover:shadow-glow transition-all"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cart Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <ShoppingCart className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-black text-primary">Current Order</h2>
              </div>

              {/* Table Number */}
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">Table Number</label>
                <input
                  type="text"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  placeholder="Enter table number"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none"
                />
              </div>

              {/* Cart Items */}
              <div className="space-y-3 mb-4 max-h-[300px] overflow-y-auto">
                {cart.length === 0 ? (
                  <p className="text-gray-400 text-center py-8">No items added</p>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="bg-gray-50 rounded-xl p-3">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-bold text-sm text-primary">{item.name}</h3>
                          <p className="text-xs text-gray-500">₹{item.price} each</p>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-7 h-7 bg-white rounded-lg flex items-center justify-center border-2 border-gray-200"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-bold w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-7 h-7 bg-white rounded-lg flex items-center justify-center border-2 border-gray-200"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="font-black text-gradient">₹{item.price * item.quantity}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Total */}
              <div className="border-t-2 border-gray-200 pt-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-gray-700">Total</span>
                  <span className="text-2xl font-black text-gradient">₹{total}</span>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                onClick={placeOrder}
                disabled={!tableNumber || cart.length === 0}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all ${
                  !tableNumber || cart.length === 0
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-gradient-accent hover:shadow-glow'
                }`}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-black text-primary mb-2">Order Placed!</h3>
            <p className="text-gray-600">Table {tableNumber}</p>
          </div>
        </div>
      )}
    </div>
  )
}
