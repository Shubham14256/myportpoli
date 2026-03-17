'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-cyber-blue/10 bg-cyber-gray/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-bold text-lg mb-2">
              <span className="text-cyber-blue">Shubham</span> Solat
            </h3>
            <p className="text-gray-400 text-sm">
              Building the future with AI & Full-Stack Engineering
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-sm mb-4">Social Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://www.linkedin.com/in/shubham-solat-010b66248" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-blue transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://wa.me/919021816728" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-blue transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:shubhamsolat36@gmail.com" className="hover:text-cyber-blue transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-sm mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                Email:{' '}
                <a
                  href="mailto:shubhamsolat36@gmail.com"
                  className="text-cyber-blue hover:underline"
                >
                  shubhamsolat36@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                Phone:{' '}
                <a
                  href="tel:+919021816728"
                  className="text-cyber-blue hover:underline"
                >
                  +91 9021816728
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyber-blue/10 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Shubham Solat. Built with Next.js & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  )
}
