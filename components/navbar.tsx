'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Scale, Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

const navLinks = [
  { href: '/get-help', label: 'Get Help' },
  { href: '/documents', label: 'Documents' },
  { href: '/ipc', label: 'IPC Finder' },
  { href: '/book-lawyer', label: 'Book a Lawyer' },
  { href: '/pricing', label: 'Pricing' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Clickable to Home */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Scale className="w-7 h-7 text-gold" />
            </motion.div>
            <span className="font-serif text-xl md:text-2xl font-bold text-gold">
              ClearCase
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-muted-foreground hover:text-foreground transition-colors text-sm font-medium group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Side - Theme Toggle & CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-border bg-background hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {resolvedTheme === 'dark' ? (
                  <Sun className="w-4 h-4 text-gold" />
                ) : (
                  <Moon className="w-4 h-4 text-gold" />
                )}
              </motion.button>
            )}

            <Link href="/get-help">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-4 py-2 rounded-md font-medium text-xs text-primary-foreground overflow-hidden gold-shimmer"
              >
                Start Free Consultation
              </motion.button>
            </Link>
            <Link href="/dashboard">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 rounded-md font-medium text-xs text-gold border border-gold bg-transparent hover:bg-gold/10 transition-colors"
              >
                I'm a Lawyer
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-border bg-background"
                aria-label="Toggle theme"
              >
                {resolvedTheme === 'dark' ? (
                  <Sun className="w-4 h-4 text-gold" />
                ) : (
                  <Moon className="w-4 h-4 text-gold" />
                )}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border py-4 px-4 shadow-xl z-50"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/get-help" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full mt-3 px-4 py-2 rounded-md font-medium text-xs text-primary-foreground gold-shimmer">
                Start Free Consultation
              </button>
            </Link>
            <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full mt-2 px-4 py-2 rounded-md font-medium text-xs text-gold border border-gold bg-transparent">
                I'm a Lawyer
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
