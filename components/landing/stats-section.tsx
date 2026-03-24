'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { MessageSquare, Users, Clock, Shield } from 'lucide-react'

const stats = [
  { 
    icon: MessageSquare,
    value: 10000, 
    suffix: '+', 
    label: 'Queries Resolved',
    description: 'Legal questions answered'
  },
  { 
    icon: Users,
    value: 500, 
    suffix: '+', 
    label: 'Lawyers Onboarded',
    description: 'Verified professionals'
  },
  { 
    icon: Clock,
    value: 24, 
    suffix: '/7', 
    label: 'Always Available',
    description: 'Round the clock support'
  },
  { 
    icon: Shield,
    value: 100, 
    suffix: '%', 
    label: 'Privacy Guaranteed',
    description: 'Your data stays yours'
  },
]

function AnimatedNumber({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      const duration = 2000
      const startTime = Date.now()

      const animate = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / duration, 1)
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOutQuart * value))

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(value)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isInView, value])

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="stats" className="relative py-16 md:py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-card border border-border"
        >
          {/* Background decoration - Light mode */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 dark:hidden" />
          
          {/* Background decoration - Dark mode */}
          <div className="absolute inset-0 hidden dark:block">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-gold/5 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-gold/5 to-transparent blur-3xl" />
          </div>

          <div className="relative p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2"
              >
                Trusted by Thousands
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-muted-foreground"
              >
                Making legal help accessible across India
              </motion.p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                  className="relative text-center"
                >
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-xl bg-gold/10 mb-4">
                    <stat.icon className="w-5 h-5 text-gold" />
                  </div>

                  {/* Number */}
                  <div className="font-serif text-3xl md:text-4xl font-bold text-gold mb-1">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} isInView={isInView} />
                  </div>

                  {/* Label */}
                  <div className="text-foreground font-medium text-sm md:text-base mb-1">
                    {stat.label}
                  </div>
                  <div className="text-muted-foreground text-xs hidden md:block">
                    {stat.description}
                  </div>

                  {/* Divider for desktop */}
                  {index < stats.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
