'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation, Send, Sparkles, Instagram, Facebook, Twitter } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `*New Contact Form Submission*%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage:%0A${formData.message}`
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
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
              <span className="text-sm font-bold">{"We're Here to Help"}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-primary">
              Contact <span className="font-script text-5xl md:text-6xl text-gradient">Us</span>
            </h1>
            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
              {"We'd love to hear from you. Get in touch with us today!"}
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-5 shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-base text-primary mb-1">Phone</h3>
                  <a href="tel:+919876543210" className="text-sm text-gray-600 hover:text-accent transition-colors font-semibold block">
                    +91 98765 43210
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Mon-Fri, 9 AM - 9 PM</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-5 shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-base text-primary mb-1">WhatsApp</h3>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-accent transition-colors font-semibold block">
                    Chat with us
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Quick responses</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-5 shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-base text-primary mb-1">Email</h3>
                  <a href="mailto:hello@caffevo.com" className="text-sm text-gray-600 hover:text-accent transition-colors font-semibold block truncate">
                    hello@caffevo.com
                  </a>
                  <p className="text-xs text-gray-500 mt-1">24 hour response</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl p-5 shadow-md border border-gray-200 hover:shadow-lg transition-all md:col-span-2 lg:col-span-1"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-base text-primary mb-1">Address</h3>
                  <p className="text-sm text-gray-600 font-semibold mb-2">
                    123 Coffee Street, Downtown<br />Mumbai, MH 400001
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-accent hover:text-secondary font-bold transition-colors"
                  >
                    <Navigation className="w-3 h-3" />
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl p-5 shadow-md border border-gray-200 hover:shadow-lg transition-all md:col-span-2 lg:col-span-1"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-base text-primary mb-1">Opening Hours</h3>
                  <div className="text-sm text-gray-600 font-semibold space-y-0.5">
                    <p>Mon-Fri: 7 AM - 9 PM</p>
                    <p>Sat-Sun: 8 AM - 10 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-accent/10 via-gold/10 to-rose/10 rounded-xl p-5 border-2 border-accent/20 md:col-span-2 lg:col-span-1"
            >
              <h3 className="font-black text-base text-primary mb-3">Follow Us</h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center text-white hover:shadow-md transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center text-white hover:shadow-md transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center text-white hover:shadow-md transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form & Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-gray-200"
            >
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-black text-primary mb-2">
                  Send us a <span className="font-script text-3xl md:text-4xl text-gradient">Message</span>
                </h2>
                <p className="text-sm text-gray-600">{"Fill out the form and we'll get back to you soon"}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all bg-gray-50 font-semibold text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all bg-gray-50 font-semibold text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all bg-gray-50 font-semibold text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all bg-gray-50 font-semibold resize-none text-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-accent text-white px-6 py-3 rounded-xl font-bold hover:shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
            >
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-black text-primary mb-2">
                  Find <span className="font-script text-3xl md:text-4xl text-gradient">Us</span>
                </h2>
                <p className="text-sm text-gray-600 mb-4">Visit our café and experience the warmth</p>
              </div>
              <div className="w-full h-64 md:h-80 lg:h-full lg:min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841374555896!2d-73.98823492346618!3d40.75797097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
