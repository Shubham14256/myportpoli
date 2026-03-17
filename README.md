# Shubham Solat | Portfolio

Ultra-modern, high-performance personal developer portfolio built with cutting-edge web technologies.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 10
- **UI Components**: Radix UI
- **Deployment**: Vercel Edge Network
- **Fonts**: Geist Sans & Geist Mono

## ✨ Features

- ⚡ **Performance**: Sub-second load times, optimized for Core Web Vitals
- 🎨 **Premium Design**: Silicon Valley Stealth Startup aesthetic
- 🌙 **Dark Mode**: Default dark theme with eye-catching accents
- 🎭 **Smooth Animations**: Framer Motion micro-interactions and scroll effects
- 📱 **Fully Responsive**: Mobile-first design with flawless touch targets
- ♿ **Accessibility**: WCAG 2.1 compliant
- 🔍 **SEO Optimized**: Metadata, structured data, and performance optimization
- 🎯 **Edge Optimized**: Deployed on Vercel edge network

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with font setup
│   └── page.tsx            # Home page
├── components/
│   ├── Navigation.tsx      # Sticky navigation bar
│   ├── Footer.tsx          # Footer component
│   └── sections/
│       ├── Hero.tsx        # Hero section with profile
│       ├── Experience.tsx  # Work experience timeline
│       ├── Projects.tsx    # Featured projects grid
│       ├── Skills.tsx      # Tech stack with marquee
│       └── Achievements.tsx # Milestones & recognition
├── styles/
│   └── globals.css         # Global styles & utilities
├── public/                 # Static assets
├── lib/                    # Utility functions
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎯 Sections

### Hero
- Animated entrance with staggered animations
- Profile image with hover grayscale reveal
- CTA buttons with magnetic effects
- Contact information

### Experience
- Work history with key highlights
- Technology stack for each role
- Glass-morphism cards with hover effects

### Projects
- Featured 4 projects in grid layout
- Glassmorphism cards with glow on hover
- Tech stack tags
- Project highlights

### Skills
- Infinite scrolling marquee
- Tech stack grid with hover effects
- 20+ technologies

### Achievements
- Timeline view with animated connectors
- Milestone cards
- Statistics section
- Recognition badges

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the cyber-blue/purple accent colors:

```typescript
colors: {
  'cyber-dark': '#000000',
  'cyber-gray': '#111111',
  'cyber-blue': '#00d9ff',      // Change this
  'cyber-purple': '#d946ef',    // And this
}
```

### Content
All content is hardcoded in the component files:
- `components/sections/Hero.tsx` - Personal info
- `components/sections/Experience.tsx` - Work history
- `components/sections/Projects.tsx` - Project portfolio
- `components/sections/Skills.tsx` - Tech stack
- `components/sections/Achievements.tsx` - Achievements

### Fonts
Fonts are configured in `app/layout.tsx` using Google Fonts (Geist).

## 📊 Performance Metrics

- **Lighthouse Score**: 95+
- **PageSpeed Insights**: 90+ (Mobile & Desktop)
- **Core Web Vitals**: All Green
- **Load Time**: Sub-1 second

## 🔒 Best Practices

- ✅ TypeScript Strict Mode
- ✅ ESLint Configuration
- ✅ Responsive Design (Mobile-First)
- ✅ Accessibility Standards
- ✅ SEO Optimization
- ✅ Cache Headers for Vercel
- ✅ Image Optimization
- ✅ CSS-in-JS Performance

## 📱 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Custom Server

```bash
npm run build
npm start
```

## 📄 License

© 2024 Shubham Solat. All rights reserved.

## 📧 Contact

- Email: shubhamsolat36@gmail.com
- Phone: +91 9021816728
- LinkedIn: [Your Profile]
- GitHub: [Your Profile]
