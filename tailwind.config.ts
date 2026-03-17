import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#000000',
        'cyber-gray': '#111111',
        'cyber-blue': '#00d9ff',
        'cyber-purple': '#d946ef',
        'cyber-slate': '#1a1a1a',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'magnetic': 'magnetic 0.3s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        pulseGlow: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.8',
          },
        },
        magnetic: {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '100%': {
            transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))',
          },
        },
      },
      backdropFilter: {
        'blur-xs': 'blur(2px)',
      },
    },
  },
  plugins: [],
}
export default config
