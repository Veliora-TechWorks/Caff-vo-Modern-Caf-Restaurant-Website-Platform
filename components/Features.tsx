'use client'

import { motion } from 'framer-motion'
import { Coffee, Zap, Award, Heart, Shield, Clock } from 'lucide-react'

const features = [
  {
    icon: Coffee,
    title: 'Premium Quality',
    description: 'Finest ingredients from across India',
    color: 'from-accent to-rose',
  },
  {
    icon: Zap,
    title: 'Fast Service',
    description: 'Quick preparation, fresh delivery',
    color: 'from-gold to-accent',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized for excellence',
    color: 'from-rose to-accent',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every dish crafted with passion',
    color: 'from-accent to-gold',
  },
  {
    icon: Shield,
    title: 'Hygienic',
    description: 'Highest safety standards',
    color: 'from-gold to-rose',
  },
  {
    icon: Clock,
    title: 'Open Daily',
    description: '8 AM to 11 PM every day',
    color: 'from-rose to-gold',
  },
]

export default function Features() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #FF6B35 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-primary">Why Choose <span className="font-script text-4xl md:text-5xl text-gradient">Us</span></h2>
          <p className="text-lg text-gray-600 font-medium">Experience the difference that makes us special</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              {/* Desktop Card */}
              <div className="hidden md:block card text-center relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-black mb-3 text-primary">{feature.title}</h3>
                  <p className="text-gray-600 text-sm font-medium">{feature.description}</p>
                </div>
              </div>

              {/* Mobile Horizontal Card */}
              <div className="md:hidden bg-white rounded-xl p-4 shadow-card flex items-center gap-4">
                <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-md`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-base font-black text-primary mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-xs">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
