'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const Projects = () => {
  const projects = [
    {
      title: 'NewsX Room — Next-Gen AI News Platform',
      subtitle: 'Production-Grade CMS & News Portal',
      description:
        'A highly scalable, production-grade CMS and News Portal engineered with Next.js 16. Features an autonomous AI pipeline (Gemini 2.5) for automated article rewriting, summarization, and multi-language translation. Live cricket/stock tickers, WebSocket-powered Live Blogs via Pusher, infinite scroll feeds with dynamic widget injection, and TikTok-style Stories.',
      tech: ['Next.js 16', 'Neon PostgreSQL', 'Gemini AI', 'WebSockets', 'Pusher', 'Vercel Blob', 'Tailwind CSS', 'NextAuth'],
      gradient: 'from-cyber-blue via-cyan-500 to-purple-500',
      highlights: ['Real-Time Engine', 'AI-Powered Pipeline', 'Serverless Architecture', 'Web Push Notifications'],
      links: [
        { label: 'Live Demo', url: 'https://news-x-room-seven.vercel.app/', variant: 'primary' },
      ],
      featured: true,
    },
    {
      title: 'Route-Rakshak',
      subtitle: 'AI Logistics Super-App',
      description:
        'Architected a 4-agent autonomous system using CrewAI & Llama 3.1 to optimize logistics matching. Reduced matching time from 30 minutes to 2 seconds.',
      tech: ['Next.js', 'CrewAI', 'Llama 3.1', 'FastAPI', 'Groq LLM'],
      gradient: 'from-cyber-blue to-cyan-500',
      highlights: ['4-Agent Autonomous System', '2s Matching Time', 'CrewAI Architecture'],
      links: [{ label: 'View Project', url: 'https://vortex-logistics-ai-advanced-decisi.vercel.app/', variant: 'secondary' }],
    },
    {
      title: 'Crypto Data MCP Server',
      subtitle: 'High-Throughput Real-Time Streaming',
      description:
        'Engineered a high-performance server handling 500+ requests/sec with 99.9% uptime. Handles real-time crypto data aggregation and streaming.',
      tech: ['FastAPI', 'Python', 'Redis', 'WebSockets', 'PostgreSQL'],
      gradient: 'from-cyber-purple to-pink-500',
      highlights: ['500+ req/sec', '99.9% Uptime', 'Real-Time Streaming'],
      links: [{ label: 'View Project', url: 'https://drive.google.com/file/d/1g1nrPDSs0FDAmdvS5Gi_BzvLd2We5CL9/view?usp=sharing', variant: 'secondary' }],
    },
    {
      title: 'Vortex Logistics AI',
      subtitle: 'Decision-Centric Optimization Engine',
      description:
        'Real-time logistics optimization platform with advanced decision-making AI. Integrates real-time crypto data and market analysis for informed logistics decisions.',
      tech: ['Next.js', 'Python', 'AI/ML', 'Real-Time APIs', 'Cloud Infrastructure'],
      gradient: 'from-yellow-400 to-orange-500',
      highlights: ['Real-Time Processing', 'AI-Driven', 'Market Integration'],
      links: [{ label: 'View Project', url: '#', variant: 'secondary' }],
    },
    {
      title: 'Healthcare Automation Bot',
      subtitle: 'WhatsApp-Integrated CRM',
      description:
        'AI-powered healthcare automation platform integrated with WhatsApp. Handles patient communication, appointment scheduling, and follow-ups.',
      tech: ['Next.js', 'Gemini API', 'Meta Cloud API', 'Supabase', 'Node.js'],
      gradient: 'from-green-400 to-emerald-500',
      highlights: ['WhatsApp Integration', 'Healthcare Grade', 'Automation'],
      links: [{ label: 'View Project', url: 'https://youtube.com/shorts/LxAA_22gAUE?si=dx34QDAIDZhsFnds ', variant: 'secondary' }],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="projects"
      className="relative w-full py-24 bg-gradient-to-b from-cyber-gray/30 to-cyber-dark overflow-hidden"
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
              <span className="text-white font-bold text-sm">⚡</span>
            </div>
            <p className="text-cyber-blue text-sm font-mono tracking-widest">FEATURED WORK</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projects That <span className="text-gradient">Drive Impact</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full" />
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`group relative h-full ${project.featured ? 'md:col-span-2' : ''}`}
            >
              {/* Glow effect on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-0 blur-2xl group-hover:opacity-20 transition-opacity duration-300`}
              />

              {/* Card */}
              <div className="glass-morphism rounded-2xl p-8 h-full border border-cyber-blue/20 group-hover:border-cyber-blue/50 transition-all duration-300 flex flex-col relative z-10">
                {/* Corner gradient accent */}
                <motion.div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.gradient} opacity-5 rounded-2xl`}
                />

                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} group-hover:shadow-lg transition-all duration-300`}
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(0, 217, 255, 0.2))',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="mb-6 flex-1">
                  <p className="text-cyber-blue text-sm font-mono mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.highlights.map((highlight, hIdx) => (
                    <span
                      key={hIdx}
                      className="px-3 py-1 text-xs bg-cyber-blue/10 border border-cyber-blue/20 rounded-full text-cyber-blue font-mono"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 text-xs font-mono bg-cyber-dark/50 border border-cyber-blue/30 rounded-lg text-gray-300 hover:text-cyber-blue hover:border-cyber-blue transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-6 flex gap-3">
                  {project.links.map((link, lIdx) => (
                    <motion.a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                        link.variant === 'primary'
                          ? 'bg-gradient-to-r from-cyber-blue to-cyan-500 text-white border border-cyber-blue/50 hover:shadow-lg hover:shadow-cyan-500/50'
                          : 'border border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/10 hover:border-cyber-blue'
                      }`}
                    >
                      {link.label} →
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
