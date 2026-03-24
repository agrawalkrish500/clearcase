'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MousePointerClick, MessageSquareText, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: MousePointerClick,
    number: '01',
    title: 'Choose Your Topic',
    description: 'Select from divorce, property, traffic challans, or other legal categories tailored for Indian law.',
  },
  {
    icon: MessageSquareText,
    number: '02',
    title: 'Describe Your Situation',
    description: 'Tell us about your case in simple words. Our AI understands English, Hindi, and Hinglish.',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Get Instant Guidance',
    description: 'Receive clear, actionable advice with relevant IPC sections, documents needed, and next steps.',
  },
]

export function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-16 md:py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-4">
            <span className="text-gold text-xs font-medium">Simple 3-Step Process</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get legal clarity in minutes, not days
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="relative p-6 rounded-2xl bg-card border border-border text-center group hover:border-gold/30 hover:shadow-lg dark:hover:shadow-gold/5 transition-all duration-300">
                  {/* Number badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-background border border-gold flex items-center justify-center">
                    <span className="text-gold text-xs font-bold">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 mb-5 mt-2 group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-300">
                    <step.icon className="w-6 h-6 text-gold" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 text-gold/30">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
