'use client'

import { motion } from 'framer-motion'
import { Scale, Plus, ChevronRight, Home, FileText, Users, HelpCircle, Car } from 'lucide-react'
import Link from 'next/link'

const topics = [
  { id: 'divorce', icon: Scale, label: 'Divorce & Separation' },
  { id: 'challan', icon: Car, label: 'Challan & Traffic' },
  { id: 'documents', icon: FileText, label: 'Document Requirements' },
  { id: 'property', icon: Home, label: 'Property Dispute' },
  { id: 'family', icon: Users, label: 'Family Law' },
  { id: 'general', icon: HelpCircle, label: 'General Legal Query' },
]

interface ChatSidebarProps {
  activeTopic: string
  onTopicChange: (topic: string) => void
  onNewChat: () => void
}

export function ChatSidebar({ activeTopic, onTopicChange, onNewChat }: ChatSidebarProps) {
  return (
    <aside className="hidden md:flex flex-col w-[270px] h-full bg-card backdrop-blur-xl border-r border-border">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative">
            <Scale className="w-6 h-6 text-gold" />
            <div className="absolute inset-0 blur-md bg-gold opacity-30" />
          </div>
          <span className="font-serif text-xl font-bold text-foreground">ClearCase</span>
        </Link>
      </div>

      {/* Topics */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3 px-2">
          Legal Topics
        </div>
        <div className="space-y-1">
          {topics.map((topic) => (
            <motion.button
              key={topic.id}
              onClick={() => onTopicChange(topic.id)}
              whileHover={{ x: 4 }}
              className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left transition-all duration-200 group ${
                activeTopic === topic.id
                  ? 'bg-gold/10 border-l-[3px] border-l-gold text-gold'
                  : 'border-l-[3px] border-l-transparent hover:bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              <topic.icon className={`w-4 h-4 flex-shrink-0 transition-colors duration-200 ${
                activeTopic === topic.id ? 'text-gold' : ''
              }`} />
              <span className="flex-1 text-[13px] font-medium whitespace-nowrap">{topic.label}</span>
              <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                activeTopic === topic.id ? 'opacity-100' : ''
              }`} />
            </motion.button>
          ))}
        </div>
      </div>

      {/* New Chat Button */}
      <div className="p-4 border-t border-border">
        <motion.button
          onClick={onNewChat}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-dashed border-gold/40 text-gold hover:bg-gold/5 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span className="text-sm font-medium">New Chat</span>
        </motion.button>
      </div>
    </aside>
  )
}
