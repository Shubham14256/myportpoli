'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export const Skills = () => {
  const skills = [
    'Python',
    'TypeScript',
    'Java',
    'C++',
    'Next.js',
    'FastAPI',
    'OpenAI APIs',
    'Gemini API',
    'LangChain',
    'CrewAI',
    'Docker',
    'Redis',
    'Supabase',
    'MongoDB',
    'AWS',
    'PostgreSQL',
    'Groq LLM',
    'React',
    'Node.js',
    'GraphQL',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section
      id="skills"
      className="relative w-full py-24 bg-gradient-to-b from-cyber-dark to-cyber-gray/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center">
              <span className="text-white font-bold text-sm">🛠</span>
            </div>
            <p className="text-cyber-blue text-sm font-mono tracking-widest">TECH STACK</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies I <span className="text-gradient">Master</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full" />
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cyber-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cyber-dark to-transparent z-10 pointer-events-none" />

          {/* Marquee */}
          <motion.div
            className="flex gap-4"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* First set */}
            {skills.map((skill, idx) => (
              <motion.div
                key={`skill-1-${idx}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 px-6 py-3 rounded-lg border border-cyber-blue/30 bg-cyber-blue/5 hover:bg-cyber-blue/15 transition-all duration-300 cursor-pointer group"
              >
                <p className="text-sm font-semibold text-cyber-blue group-hover:text-cyan-300 transition-colors font-mono whitespace-nowrap">
                  {skill}
                </p>
              </motion.div>
            ))}

            {/* Duplicate set for seamless loop */}
            {skills.map((skill, idx) => (
              <motion.div
                key={`skill-2-${idx}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 px-6 py-3 rounded-lg border border-cyber-blue/30 bg-cyber-blue/5 hover:bg-cyber-blue/15 transition-all duration-300 cursor-pointer group"
              >
                <p className="text-sm font-semibold text-cyber-blue group-hover:text-cyan-300 transition-colors font-mono whitespace-nowrap">
                  {skill}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Grid - Alternative View */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass-morphism rounded-xl px-4 py-3 border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all text-center group cursor-pointer"
            >
              <p className="text-xs sm:text-sm font-bold text-gray-300 group-hover:text-cyber-blue transition-colors font-mono">
                {skill}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
