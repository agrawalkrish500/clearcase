'use client'

import { motion } from 'framer-motion'

const scrollingText = [
  'Divorce',
  'Property',
  'Challan',
  'Family Law',
  'IPC',
  'Documents',
  'Custody',
  'Maintenance',
  'RERA',
  'Consumer Rights',
]

export function LogoMarquee() {
  return (
    <section className="relative py-12 border-y border-border bg-muted/30 dark:bg-muted/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <p className="text-center text-sm text-muted-foreground font-medium">
          Trusted by Indians across all states
        </p>
      </div>
      
      {/* Scrolling Text Strip */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Marquee Container */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 items-center whitespace-nowrap"
            animate={{ x: [0, '-50%'] }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {/* First set */}
            {scrollingText.map((text, index) => (
              <div key={`first-${index}`} className="flex items-center gap-8">
                <span className="text-2xl md:text-3xl font-serif font-bold text-foreground/20 dark:text-foreground/10">
                  {text}
                </span>
                <span className="text-gold text-xl">•</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {scrollingText.map((text, index) => (
              <div key={`second-${index}`} className="flex items-center gap-8">
                <span className="text-2xl md:text-3xl font-serif font-bold text-foreground/20 dark:text-foreground/10">
                  {text}
                </span>
                <span className="text-gold text-xl">•</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
