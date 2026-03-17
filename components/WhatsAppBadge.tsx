'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const WhatsAppBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center my-12"
    >
      <motion.a
        href="https://wa.me/919021816728"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative px-8 py-4 rounded-full bg-gray-900/50 border border-green-500/50 hover:border-green-500 backdrop-blur-md hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 group"
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-green-600/10 transition-all duration-300" />
        
        {/* Content */}
        <div className="relative flex items-center gap-3">
          <span className="text-2xl animate-pulse group-hover:animate-none transition-all">💬</span>
          <div className="flex flex-col items-start">
            <span className="text-sm text-green-400 font-semibold group-hover:text-green-300 transition-colors">
              Let&apos;s Connect
            </span>
            <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors font-mono">
              Direct WhatsApp Message
            </span>
          </div>
        </div>

        {/* Border glow effect */}
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-green-500/20 to-green-400/20 blur-lg opacity-0 group-hover:opacity-100 -z-10 transition-all duration-300" />
      </motion.a>
    </motion.div>
  )
}
