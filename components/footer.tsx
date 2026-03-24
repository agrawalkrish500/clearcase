'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Scale, Share2, Check, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Footer() {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.origin : 'https://clearcase.app'
    
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = url
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative py-16 px-4 border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Scale className="w-6 h-6 text-gold" />
              <span className="font-serif text-xl font-bold text-gold">ClearCase</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              AI-powered legal guidance platform built for India. Get instant answers on divorce, 
              challans, property disputes and more.
            </p>
            
            {/* Share Button */}
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted border border-border text-muted-foreground hover:text-gold hover:border-gold/30 transition-all text-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-green-500">Link copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>Share ClearCase</span>
                </>
              )}
            </button>

            {/* National Legal Helpline */}
            <div className="mt-6 p-4 rounded-lg bg-gold/10 border border-gold/20">
              <div className="flex items-center gap-2 text-gold mb-1">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-semibold">National Legal Helpline</span>
              </div>
              <a href="tel:15100" className="text-2xl font-bold text-foreground hover:text-gold transition-colors">
                15100
              </a>
              <p className="text-xs text-muted-foreground mt-1">Free legal aid for all citizens</p>
            </div>

            <p className="text-muted-foreground text-xs mt-6">
              © 2025 ClearCase. All rights reserved.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/get-help" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Get Help
                </Link>
              </li>
              <li>
                <Link href="/documents" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Documents
                </Link>
              </li>
              <li>
                <Link href="/book-lawyer" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Book a Lawyer
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Page Sections */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-muted-foreground hover:text-gold transition-colors text-sm text-left"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('stats')}
                  className="text-muted-foreground hover:text-gold transition-colors text-sm text-left"
                >
                  Statistics
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-muted-foreground hover:text-gold transition-colors text-sm text-left"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <Link href="/get-help" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-3 rounded-lg bg-card border border-gold/30 text-gold text-sm font-medium shadow-xl z-50"
          >
            Link copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}
