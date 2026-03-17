'use client'

import { Hero } from '@/components/sections/Hero'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Achievements } from '@/components/sections/Achievements'
import { WhatsAppBadge } from '@/components/WhatsAppBadge'

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Experience />
      <Projects />
      <WhatsAppBadge />
      <Skills />
      <Achievements />
    </div>
  )
}
