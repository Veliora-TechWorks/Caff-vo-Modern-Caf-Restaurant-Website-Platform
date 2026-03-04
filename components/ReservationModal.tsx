'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Clock, Users, Send, Sparkles } from 'lucide-react'

interface ReservationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Table Reservation Request:%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0ADate: ${formData.date}%0ATime: ${formData.time}%0AGuests: ${formData.guests}%0ANotes: ${formData.notes || 'None'}`
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-gradient-to-br from-cream via-white to-cream rounded-3xl shadow-2xl w-full max-w-lg my-8 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>

              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-primary transition-colors z-10 bg-white rounded-full p-2 shadow-card"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-gradient-accent text-white px-4 py-2 rounded-full mb-4 shadow-glow">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-bold">Reserve Your Table</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-primary mb-2">
                    Book a <span className="font-script text-4xl md:text-5xl text-gradient">Table</span>
                  </h2>
                  <p className="text-gray-600">Secure your spot for an unforgettable experience</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-primary">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all shadow-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-primary">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all shadow-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-primary flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-accent" />
                        Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2 text-primary flex items-center gap-1">
                        <Clock className="w-4 h-4 text-accent" />
                        Time *
                      </label>
                      <input
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-primary flex items-center gap-1">
                      <Users className="w-4 h-4 text-accent" />
                      Number of Guests *
                    </label>
                    <select
                      required
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all shadow-sm"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                      <option value="9+">9+ Guests</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-primary">Special Requests</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={2}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all shadow-sm resize-none"
                      placeholder="Dietary restrictions, celebrations, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mt-6"
                  >
                    <Send className="w-5 h-5" />
                    Confirm via WhatsApp
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  You&apos;ll receive instant confirmation via WhatsApp
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
