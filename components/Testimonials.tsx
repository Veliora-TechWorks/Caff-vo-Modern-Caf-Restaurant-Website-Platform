'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, MapPin, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import testimonialsData from '@/lib/data/testimonials.json'
import Link from 'next/link'
import ReservationModal from './ReservationModal'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const itemsPerPage = 4
  const totalPages = Math.ceil(testimonialsData.testimonials.length / itemsPerPage)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages)
    }, 5000)
    return () => clearInterval(interval)
  }, [totalPages])

  const currentTestimonials = testimonialsData.testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  )

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % totalPages)
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)

  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <div className="absolute top-10 right-10 w-72 h-72 bg-rose/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">What Our <span className="font-script text-4xl md:text-5xl text-gradient">Customers</span> Say</h2>
            <p className="text-gray-600 text-base">Real experiences from real people across India</p>
          </motion.div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              {/* Desktop Grid */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentTestimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-white border border-gray-100 rounded-2xl p-5 relative group shadow-card hover:shadow-card-hover transition-all"
                  >
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center shadow-lg">
                      <Quote className="w-5 h-5 text-white" />
                    </div>

                    <div className="flex gap-1 mb-3 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed italic text-sm">
                      &quot;{testimonial.text}&quot;
                    </p>

                    <div className="border-t border-gray-100 pt-3">
                      <p className="font-bold text-primary">{testimonial.name}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Carousel - Single Card */}
              <div className="md:hidden">
                {currentTestimonials.slice(0, 1).map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card mx-auto max-w-sm"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                        ))}
                      </div>
                      <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
                        <Quote className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed italic text-sm">
                      &quot;{testimonial.text}&quot;
                    </p>

                    <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-primary text-sm">{testimonial.name}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
                          <MapPin className="w-3 h-3" />
                          <span>{testimonial.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={goToPrev}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-primary text-primary hover:text-white p-3 rounded-full shadow-card hover:shadow-card-hover transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-primary text-primary hover:text-white p-3 rounded-full shadow-card hover:shadow-card-hover transition-all z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mb-10">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-black text-primary mb-3">
            Ready to Experience <span className="font-script text-3xl md:text-4xl text-gradient">Caffévo?</span>
          </h3>
          <p className="text-base text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of happy customers and taste the difference today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Link href="/order" className="bg-gradient-accent text-white px-8 py-3 rounded-xl font-bold hover:shadow-glow transition-all transform hover:scale-105">
              Order Now
            </Link> */}
            <button onClick={() => setIsModalOpen(true)} className="bg-white border-2 border-primary text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all transform hover:scale-105">
              Reserve Table
            </button>
          </div>
        </motion.div>
      </div>
      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
