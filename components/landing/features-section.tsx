'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Heart, FileText, Car, Briefcase, ArrowRight, Users, FileCheck, MapPin, Gavel } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Divorce & Separation',
    description: 'Complete guidance under Hindu Marriage Act & Special Marriage Act. Understand alimony, custody & property rights.',
    stat: '2,500+',
    statLabel: 'Cases Guided',
    href: '/chat?topic=divorce',
  },
  {
    icon: FileText,
    title: 'Document Checker',
    description: 'Never be caught unprepared. Get exact document checklists for passport, license, property and government services.',
    stat: '50+',
    statLabel: 'Document Types',
    href: '/documents',
  },
  {
    icon: Car,
    title: 'Challan & Traffic',
    description: 'Find the fastest, cheapest way to resolve any traffic challan. Get state-specific fine details and payment options.',
    stat: '29',
    statLabel: 'States Covered',
    href: '/chat?topic=challan',
  },
  {
    icon: Briefcase,
    title: 'Lawyer Suite',
    description: 'Professional tools for advocates — client management, IPC section finder, and AI-powered case analysis.',
    stat: '500+',
    statLabel: 'Lawyers Trust Us',
    href: '/dashboard',
  },
]

const additionalFeatures = [
  { icon: Users, label: 'Family Law', value: '15+ Topics' },
  { icon: FileCheck, label: 'Property Disputes', value: 'Complete Guide' },
  { icon: MapPin, label: 'All Indian States', value: 'Supported' },
  { icon: Gavel, label: 'IPC Sections', value: '500+ Indexed' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" className="relative py-16 md:py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-4">
            <span className="text-gold text-xs font-medium">Comprehensive Legal Tools</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful legal tools designed specifically for modern India
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative"
            >
              <Link href={feature.href}>
                <div className="relative p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-gold/30 hover:shadow-lg dark:hover:shadow-gold/5 h-full">
                  {/* Hover glow effect - dark mode only */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:block hidden" />
                  
                  {/* Header with icon and stat */}
                  <div className="relative flex items-start justify-between mb-5">
                    <div className="inline-flex p-3 rounded-xl bg-gold/10 border border-gold/20">
                      <feature.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gold">{feature.stat}</div>
                      <div className="text-xs text-muted-foreground">{feature.statLabel}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="relative font-serif text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="relative text-muted-foreground leading-relaxed text-sm mb-5">
                    {feature.description}
                  </p>

                  {/* Learn more link */}
                  <div className="relative inline-flex items-center gap-2 text-gold font-medium text-sm group/link">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {additionalFeatures.map((item) => (
            <div
              key={item.label}
              className="p-4 rounded-xl bg-muted/50 dark:bg-card border border-border text-center hover:border-gold/30 transition-colors"
            >
              <item.icon className="w-5 h-5 text-gold mx-auto mb-2" />
              <div className="text-foreground font-semibold text-sm mb-1">{item.value}</div>
              <div className="text-muted-foreground text-xs">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
