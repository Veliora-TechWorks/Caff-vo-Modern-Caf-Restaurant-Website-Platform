'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation, Send, Sparkles, Instagram, Facebook, Twitter } from 'lucide-react'
import Link from 'next/link'
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
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-lightCream">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-dark to-secondary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-semibold">We&apos;re Here to Help</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              Contact <span className="font-script text-6xl md:text-7xl bg-gradient-to-r from-accent via-gold to-rose bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-300">We&apos;d love to hear from you. Get in touch with us today!</p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <h2 className="text-4xl font-black text-primary mb-3">
                  Get in <span className="font-script text-5xl text-gradient">Touch</span>
                </h2>
                <p className="text-gray-600 text-lg">Have questions? We&apos;re here to help you with anything you need</p>
              </div>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-xl text-primary mb-2">Phone</h3>
                      <a href="tel:+919876543210" className="text-gray-600 hover:text-accent transition-colors font-semibold text-lg">
                        +91 98765 43210
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9 AM - 9 PM</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-xl text-primary mb-2">WhatsApp</h3>
                      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors font-semibold">
                        Chat with us instantly
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Quick responses guaranteed</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-xl text-primary mb-2">Email</h3>
                      <a href="mailto:hello@caffevo.com" className="text-gray-600 hover:text-accent transition-colors font-semibold">
                        hello@caffevo.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">We&apos;ll respond within 24 hours</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-xl text-primary mb-2">Address</h3>
                      <p className="text-gray-600 font-semibold mb-2">
                        123 Coffee Street<br />
                        Downtown District<br />
                        Mumbai, Maharashtra 400001
                      </p>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:text-secondary font-bold transition-colors"
                      >
                        <Navigation className="w-4 h-4" />
                        Get Directions
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-xl text-primary mb-2">Opening Hours</h3>
                      <div className="text-gray-600 font-semibold space-y-1">
                        <p>Monday - Friday: 7:00 AM - 9:00 PM</p>
                        <p>Saturday - Sunday: 8:00 AM - 10:00 PM</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 bg-gradient-to-br from-accent/10 via-gold/10 to-rose/10 rounded-2xl p-6 border-2 border-accent/20"
              >
                <h3 className="font-black text-xl text-primary mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center text-white hover:shadow-glow transition-all transform hover:scale-110">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center text-white hover:shadow-glow transition-all transform hover:scale-110">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center text-white hover:shadow-glow transition-all transform hover:scale-110">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-card-hover p-8 md:p-10"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-black text-primary mb-3">Send us a <span className="font-script text-4xl text-gradient">Message</span></h2>
                <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you soon</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all bg-gray-50 font-semibold"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all bg-gray-50 font-semibold"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all bg-gray-50 font-semibold"
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
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all bg-gray-50 font-semibold resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-accent text-white px-8 py-4 rounded-2xl font-bold hover:shadow-glow transition-all flex items-center justify-center gap-3 transform hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-primary mb-3">
              Find <span className="font-script text-5xl text-gradient">Us</span>
            </h2>
            <p className="text-gray-600 text-lg">Visit our café and experience the warmth of our hospitality</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-card-hover"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841374555896!2d-73.98823492346618!3d40.75797097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
