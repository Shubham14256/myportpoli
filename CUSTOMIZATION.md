# 🎨 Customization Quick Reference

## 🔧 Most Common Customizations

### 1. Update Your Personal Information

**File**: `components/sections/Hero.tsx` (Lines 20-50)

```typescript
// Name
<h1 className="text-5xl md:text-7xl font-bold leading-tight">
  Shubham
  <br />
  <span className="text-gradient">Annasaheb</span>
  <br />
  Solat
</h1>

// Headline
<p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
  AI & Full-Stack Engineer | Founder @{' '}
  <span className="text-cyber-blue font-semibold">Shubhstra Tech</span>
</p>

// Contact Info (Lines 80-90)
<a href="mailto:shubhamsolat36@gmail.com">
  📧 shubhamsolat36@gmail.com
</a>
<a href="tel:+919021816728">
  📱 +91 9021816728
</a>
```

---

### 2. Update Experience Section

**File**: `components/sections/Experience.tsx` (Lines 7-30)

```typescript
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    duration: 'Start - End',
    description: 'Your description',
    highlights: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3',
    ],
    tech: ['Tech1', 'Tech2', 'Tech3'],
  },
  // Add more experiences...
]
```

---

### 3. Add/Update Projects

**File**: `components/sections/Projects.tsx` (Lines 5-60)

```typescript
const projects = [
  {
    title: 'Project Name',
    subtitle: 'One-line description',
    description: 'Full project description...',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    gradient: 'from-cyber-blue to-cyan-500',
    highlights: ['Highlight 1', 'Highlight 2'],
  },
  // Add more projects...
]
```

**Gradient Color Options**:
```
from-cyber-blue to-cyan-500      (blue)
from-cyber-purple to-pink-500    (purple)
from-yellow-400 to-orange-500    (yellow)
from-green-400 to-emerald-500    (green)
```

---

### 4. Update Skills

**File**: `components/sections/Skills.tsx` (Lines 6-30)

```typescript
const skills = [
  'Python',
  'TypeScript',
  'Java',
  'C++',
  // Add your skills...
]
```

---

### 5. Update Achievements

**File**: `components/sections/Achievements.tsx` (Lines 6-40)

```typescript
const achievements = [
  {
    title: 'Achievement Title',
    description: 'Achievement description',
    icon: '🏆',
    date: '2024',
  },
  // Add more achievements...
]
```

**Icon Used**: Any emoji (🏢, 🏆, 💻, ⚡, etc.)

---

### 6. Change Color Scheme

**File**: `tailwind.config.ts` (Lines 12-17)

```typescript
colors: {
  'cyber-dark': '#000000',        // Dark background
  'cyber-gray': '#111111',        // Card background
  'cyber-blue': '#00d9ff',        // Primary accent
  'cyber-purple': '#d946ef',      // Secondary accent
  'cyber-slate': '#1a1a1a',       // Alternative dark
}
```

---

### 7. Change Fonts

**File**: `app/layout.tsx` (Lines 1-15)

```typescript
// Current (Inter + Fira Code)
import { Inter, Fira_Code } from 'next/font/google'

const inter = Inter({...})
const firaCode = Fira_Code({...})

// Alternative options:
// Mono Fonts: JetBrains_Mono, Source_Code_Pro, IBM_Plex_Mono
// Sans Fonts: Roboto, Open_Sans, Plus_Jakarta_Sans
```

---

### 8. Change Animation Speed

**File**: `components/sections/Hero.tsx` (Speed examples)

```typescript
// Slower animation (1+ seconds)
transition={{ duration: 1.2, ease: 'easeOut' }}

// Faster animation (0.3 seconds)
transition={{ duration: 0.3, ease: 'easeOut' }}

// Standard (0.6 seconds)
transition={{ duration: 0.6, ease: 'easeOut' }}
```

---

### 9. Add Navigation Links

**File**: `components/Navigation.tsx` (Lines 20-30)

```typescript
const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  // Add new sections
  { label: 'Blog', href: '#blog' },
]
```

Also add corresponding section ID in the component:
```typescript
<section id="blog" className="...">
```

---

### 10. Update Footer Links

**File**: `components/Footer.tsx` (Lines 40-60)

```typescript
<li>
  <a href="https://github.com/YOUR_USERNAME">
    GitHub
  </a>
</li>
<li>
  <a href="https://linkedin.com/in/YOUR_PROFILE">
    LinkedIn
  </a>
</li>
```

---

## 🎯 File Location Quick Reference

| Component | File | Lines |
|-----------|------|-------|
| Hero Content | `sections/Hero.tsx` | 20-90 |
| Experience | `sections/Experience.tsx` | 7-30 |
| Projects | `sections/Projects.tsx` | 5-60 |
| Skills | `sections/Skills.tsx` | 6-30 |
| Achievements | `sections/Achievements.tsx` | 6-40 |
| Navigation | `Navigation.tsx` | 20-30 |
| Footer | `Footer.tsx` | 30-60 |
| Colors | `tailwind.config.ts` | 12-17 |
| Fonts | `layout.tsx` | 1-15 |
| Global Styles | `styles/globals.css` | All |

---

## 🎨 Common Customization Patterns

### Change Card Background Opacity
```css
/* In globals.css */
.glass-morphism {
  background: rgba(17, 17, 17, 0.4); /* Change 0.4 to 0.2 (more transparent) or 0.8 (more opaque) */
}
```

### Change Glow Effect Intensity
```typescript
// In any component
boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' // Increase 0.3 for more glow
```

### Adjust Spacing
```html
<!-- Tailwind spacing classes -->
<div className="p-8">     <!-- padding: 32px -->
<div className="gap-6">    <!-- gap: 24px -->
<div className="py-24">    <!-- padding-y: 96px -->
```

### Change Animation Timing
```typescript
// Stagger delay between items
staggerChildren: 0.1     // 0.1s between each item
delayChildren: 0.3       // 0.3s before first item starts
```

---

## 📱 Responsive Breakpoints

Tailwind breakpoints used in the design:

```
sm:  640px    (tablets)
md:  768px    (small desktops)
lg:  1024px   (desktops)
xl:  1280px   (large desktops)
2xl: 1536px   (extra large)
```

Example:
```html
<div className="text-lg md:text-2xl lg:text-4xl">
  Responsive text size
</div>
```

---

## 🎭 Animation Naming Convention

| Animation | Duration | Use Case |
|-----------|----------|----------|
| fade-in-up | 0.6s | Asset entrance |
| pulse-glow | 2s | Background elements |
| magnetic | 0.3s | Button hover effects |

---

## 🔐 Best Practices

✅ DO:
- Update content with real information
- Test changes locally before deploying
- Keep animations subtle (avoid > 1s for interactions)
- Maintain consistent spacing and sizing
- Use semantic HTML

❌ DON'T:
- Remove 'use client' directives from client components
- Edit files in `.next/` folder (auto-generated)
- Modify node_modules directly
- Remove critical animations without reason

---

## 📚 Need Help?

Visit the original files:
- Main Content: Components in `components/sections/`
- Styling: `styles/globals.css` and `tailwind.config.ts`
- Layout: `app/layout.tsx` and `app/page.tsx`

All files are well-commented and follow TypeScript best practices!

---

**Happy customizing! 🎉**
