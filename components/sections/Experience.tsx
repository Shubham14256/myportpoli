'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const Experience = () => {
  const experiences = [
    {
      title: 'Founder & Lead Developer',
      company: 'Shubhstra Tech Services',
      duration: 'Oct 2024 - Present',
      description: 'Leading a cross-functional team of 4 engineers to build AI-powered automation platforms.',
      highlights: [
        'Engineered an AI-powered WhatsApp CRM & Automation Bot for healthcare using Next.js and Gemini API',
        'Integrated Meta Cloud API, Webhooks, and Supabase for seamless data orchestration',
        'Delivered production-grade platforms with sub-second load times and 40% SEO improvement',
        'Govt. Regulated MSME (ISO Compliant)',
      ],
      tech: ['Next.js', 'Gemini API', 'Supabase', 'Webhooks', 'TypeScript'],
    },
    {
      title: 'IT Specialist',
      company: 'Vodafone Idea Limited',
      duration: '8 months',
      description: 'Specialist role in IT operations and technical support',
      highlights: [
        'Provided technical support and IT solutions',
        'Worked on system optimization and troubleshooting',
        'Managed IT infrastructure and user support',
      ],
      tech: ['Node.js', 'Python', 'System Administration'],
    },
    {
      title: 'Web Development Intern',
      company: 'InnovativeHive Tech Solution',
      duration: '',
      description: 'Web Development Internship at InnovativeHive Tech Solution in Pune (Hybrid)',
      highlights: [
        'Assisting in the development of responsive, user-friendly web applications using modern frameworks',
        'Collaborating with senior developers on frontend and backend tasks, debugging, and API integrations',
        'Gaining hands-on experience in real-world client projects, improving code quality and performance',
        'Learning industry best practices in project management, teamwork, and client communication',
      ],
      tech: ['Node.js', 'Python', 'React', 'APIs', 'Web Development'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="experience"
      className="relative w-full py-24 bg-gradient-to-b from-cyber-dark to-cyber-gray/30 overflow-hidden"
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
              <span className="text-white font-bold text-sm">→</span>
            </div>
            <p className="text-cyber-blue text-sm font-mono tracking-widest">EXPERIENCE</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Where I&apos;ve Worked</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-morphism rounded-xl p-8 border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Meta info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-cyber-blue">{exp.title}</h3>
                  <p className="text-sm text-gray-400">{exp.company}</p>
                  {exp.duration && <p className="text-xs text-gray-500 font-mono">{exp.duration}</p>}
                </div>

                {/* Description and highlights */}
                <div className="md:col-span-2 space-y-4">
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, hIdx) => (
                      <motion.div
                        key={hIdx}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * hIdx, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex gap-3 text-sm"
                      >
                        <span className="text-cyber-blue font-bold flex-shrink-0">▸</span>
                        <span className="text-gray-400">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.tech.map((tech, tIdx) => (
                      <motion.span
                        key={tIdx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.05 * tIdx, duration: 0.3 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 text-xs font-mono bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue rounded-lg"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
