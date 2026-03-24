'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Lock, Zap, Scale, Send, Bot, ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

const chatMessages = [
  { type: 'user', text: 'I want to file for divorce. What documents do I need?' },
  { type: 'ai', text: 'For filing divorce under Hindu Marriage Act, you will need: Marriage Certificate, Address Proof, Income Proof, and 2 Passport Photos. Would you like the complete checklist?' },
]

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-12 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background - Light mode gradient (Stripe-inspired) */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute top-0 right-0 w-[70%] h-full">
          <div className="absolute inset-0 bg-gradient-to-bl from-[#c9a84c]/20 via-[#e8a54c]/25 to-[#ff7b5c]/30 opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-tl from-[#ff7b5c]/20 via-[#e8a54c]/15 to-transparent" />
        </div>
      </div>
      
      {/* Background - Dark mode gradient (Linear-inspired) */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#c9a84c]/10 via-[#c9a84c]/5 to-transparent blur-3xl" />
        </div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30 dark:opacity-20" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-16 pb-8 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
          >
            <span className="text-foreground">Legal Clarity,</span>
            <br />
            <span className="bg-gradient-to-r from-[#c9a84c] via-[#e8a54c] to-[#c9a84c] dark:from-[#c9a84c] dark:via-[#e8d48a] dark:to-[#c9a84c] bg-clip-text text-transparent">
              For Every Indian.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            Instant AI-powered guidance on divorce, challans, property disputes and more. 
            In English or Hindi. Available 24/7.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
            <Link href="/get-help">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full sm:w-auto h-12 px-6 rounded-lg font-medium text-sm text-primary-foreground gold-shimmer shadow-lg shadow-gold/20 flex items-center justify-center gap-2"
              >
                Start Free Consultation
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link href="/dashboard">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto h-12 px-6 rounded-lg font-medium text-sm text-gold border border-gold bg-transparent transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gold/10"
              >
                I'm a Lawyer
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-6 text-muted-foreground text-sm"
          >
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-gold" />
              <span>100% Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-gold" />
              <span>Instant Answers</span>
            </div>
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-gold" />
              <span>India-specific Law</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Floating Chat Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative hidden lg:block"
        >
          <div className="relative">
            {/* Glow effect behind chat */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-gold/10 dark:from-gold/20 dark:to-transparent blur-[60px] rounded-3xl" />
            
            {/* Chat Container */}
            <motion.div
              className="relative bg-card backdrop-blur-xl rounded-2xl border border-border p-6 shadow-2xl dark:shadow-gold/5"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Chat Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-[#e8d48a] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">ClearCase AI</h4>
                  <p className="text-muted-foreground text-xs">Always here to help</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-500 text-xs">Online</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 mb-4">
                {/* User Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex justify-end"
                >
                  <div className="max-w-[85%] bg-gold text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 text-sm">
                    {chatMessages[0].text}
                  </div>
                </motion.div>

                {/* AI Response */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[85%] bg-muted text-foreground rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-relaxed">
                    {chatMessages[1].text}
                  </div>
                </motion.div>

                {/* Typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ delay: 3.5, duration: 2, repeat: Infinity }}
                  className="flex items-center gap-2 text-muted-foreground text-xs"
                >
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span>AI is typing...</span>
                </motion.div>
              </div>

              {/* Input Area */}
              <div className="flex items-center gap-3 p-3 bg-muted/50 dark:bg-background/50 rounded-xl border border-border">
                <input
                  type="text"
                  placeholder="Ask your legal question..."
                  className="flex-1 bg-transparent text-foreground text-sm placeholder:text-muted-foreground outline-none"
                  disabled
                />
                <button className="w-9 h-9 rounded-lg bg-gold flex items-center justify-center hover:bg-[#e8d48a] transition-colors">
                  <Send className="w-4 h-4 text-primary-foreground" />
                </button>
              </div>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-gradient-to-br from-gold/20 to-transparent backdrop-blur-sm border border-gold/20"
              animate={{ rotate: [0, 10, 0], y: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-muted to-transparent backdrop-blur-sm border border-border"
              animate={{ scale: [1, 1.1, 1], y: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
