'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl mix-blend-screen" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-purple/5 rounded-full blur-3xl mix-blend-screen" />
      </motion.div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
        >
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Name */}
            <motion.div variants={itemVariants}>
              <p className="text-cyber-blue text-sm font-mono tracking-widest mb-2">
                Hello, I&apos;m
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Shubham
                <br />
                <span className="text-gradient">Annasaheb</span>
                <br />
                Solat
              </h1>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                AI & Full-Stack Engineer | Founder @{' '}
                <span className="text-cyber-blue font-semibold">Shubhstra Tech</span>
              </p>
              <p className="text-gray-500 text-sm mt-2 font-mono">
                Building production-grade AI solutions with Next.js & cutting-edge LLMs
              </p>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="max-w-md">
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Leading cross-functional teams to architect AI-powered platforms that solve
                real-world problems. From healthcare automation to logistics optimization,
                I craft systems that scale.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href="https://wa.me/919021816728"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-green-500/90 to-green-600 text-white font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>💬</span> Connect on WhatsApp
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg bg-cyber-blue text-cyber-dark font-bold hover:shadow-lg hover:shadow-cyber-blue/50 transition-all text-center"
              >
                View My Work
              </motion.a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4 text-sm"
            >
              <a
                href="mailto:shubhamsolat36@gmail.com"
                className="text-gray-400 hover:text-cyber-blue transition-colors"
              >
                📧 shubhamsolat36@gmail.com
              </a>
              <a
                href="tel:+919021816728"
                className="text-gray-400 hover:text-cyber-blue transition-colors"
              >
                📱 +91 9021816728
              </a>
            </motion.div>
          </div>

          {/* Right: Profile Image with Hover Effect */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center"
          >
            <motion.div
              className="relative w-64 h-80 md:w-72 md:h-96"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-2xl blur-2xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-cyber-blue/30 glow-border group">
                {/* Profile Image */}
                <Image
                  src="/profile.jpg"
                  alt="Shubham Solat Profile"
                  fill
                  className="w-full h-full object-cover"
                  priority
                />

                {/* Grayscale Filter Overlay (for hover effect) */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-cyber-dark/30 to-transparent opacity-40 group-hover:opacity-0 transition-opacity duration-300"
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-cyber-blue/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
