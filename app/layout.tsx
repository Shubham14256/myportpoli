'use client'

import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import '@/styles/globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <head>
        <title>Shubham Solat | AI & Full-Stack Engineer</title>
        <meta name="description" content="Founder @ Shubhstra Tech. Building AI-powered solutions with Next.js, Python, and cutting-edge LLMs." />
        <meta name="keywords" content="Next.js, TypeScript, AI, Full-Stack, FastAPI, LLM" />
        <meta name="author" content="Shubham Solat" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Shubham Solat | AI & Full-Stack Engineer" />
        <meta property="og:description" content="Founder @ Shubhstra Tech. Building AI-powered solutions." />
        <meta property="og:site_name" content="Shubham Solat Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@shubhamsolat" />
      </head>
      <body className="bg-cyber-dark text-white overflow-x-hidden">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
