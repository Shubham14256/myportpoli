'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const Achievements = () => {
  const achievements = [
    {
      title: 'Founder of Govt. Regulated MSME',
      description: 'Established Shubhstra Tech Services as an ISO-compliant, Government-Regulated Micro, Small & Medium Enterprise.',
      icon: '🏢',
      date: '2024',
    },
    {
      title: 'Finalist - Tech Sangam Hackathon',
      description: 'Reached finals at MIT ADT Pune with an innovative AI-powered logistics solution.',
      icon: '🏆',
      date: '2024',
    },
    {
      title: 'Reverse Coding Hackathon Participant',
      description: 'Competed at Pimpri Chinchwad College of Engineering reverse-engineering hackathon.',
      icon: '💻',
      date: '2024',
    },
    {
      title: 'Production AI Systems',
      description: 'Shipped 4+ production systems handling 500+ req/sec with 99.9% uptime.',
      icon: '⚡',
      date: 'Ongoing',
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
      id="achievements"
      className="relative w-full py-24 bg-gradient-to-b from-cyber-gray/50 to-cyber-dark overflow-hidden"
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
              <span className="text-white font-bold text-sm">🎯</span>
            </div>
            <p className="text-cyber-blue text-sm font-mono tracking-widest">MILESTONES</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements &{' '}
            <span className="text-gradient">Recognition</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline connector */}
              {idx < achievements.length - 1 && (
                <motion.div
                  className="absolute left-6 top-20 w-1 h-12 bg-gradient-to-b from-cyber-blue/50 to-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 * idx, duration: 0.6 }}
                  viewport={{ once: true }}
                />
              )}

              {/* Card */}
              <div className="flex gap-6">
                {/* Timeline dot */}
                <motion.div
                  className="flex flex-col items-center mt-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center border-2 border-cyber-dark shadow-lg shadow-cyber-blue/50 relative z-10">
                    <span className="text-lg">{achievement.icon}</span>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="glass-morphism rounded-xl p-6 border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all flex-1 group hover:bg-cyber-blue/5"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold group-hover:text-cyber-blue transition-colors">
                      {achievement.title}
                    </h3>
                    <span className="text-cyber-blue text-sm font-mono px-3 py-1 bg-cyber-blue/10 rounded-lg w-fit">
                      {achievement.date}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20 pt-16 border-t border-cyber-blue/10"
        >
          {[
            { label: 'Years of Experience', value: '2+' },
            { label: 'Projects Shipped', value: '15+' },
            { label: 'Team Members Led', value: '4' },
            { label: 'Lines of Code', value: '50K+' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-morphism rounded-xl p-6 text-center border border-cyber-blue/20"
            >
              <p className="text-4xl font-bold text-gradient mb-2">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
