# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended)

Vercel is the optimal hosting platform for Next.js applications and will give you the best performance.

### Option 1: Deploy via CLI (Fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from your project directory
cd c:\Users\Shree\OneDrive\Desktop\portpoli
vercel

# Follow the prompts:
# - Link to existing project or create new
# - Confirm deployment settings
# - Done!
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Deploy!

---

## Production Build

### Local Testing Before Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Visit http://localhost:3000
```

---

## Environment Setup

### Create `.env.local` (if needed for future APIs)

```env
# Example for future integrations
NEXT_PUBLIC_SITE_URL=https://your-domain.com
API_BASE_URL=https://api.your-domain.com
```

---

## Custom Domain

Once deployed to Vercel:

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

Example domain: `@shubham-portfolio.com` or `portfolio.shubham.dev`

---

## Performance Monitoring

After deployment, check:

- **Vercel Analytics**: Built into Vercel dashboard
- **Google PageSpeed Insights**: https://pagespeed.web.dev
- **Lighthouse**: Run in Chrome DevTools

**Target Metrics**:
- ⚡ First Contentful Paint: < 1.5s
- 🎯 Largest Contentful Paint: < 2.5s
- ⌛ Cumulative Layout Shift: < 0.1
- ✅ Lighthouse Score: 90+

---

## Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Verify animations work smoothly
- [ ] Test mobile responsiveness
- [ ] Check contact email links
- [ ] Verify phone links (tel:)
- [ ] Test download resume link
- [ ] Check social media links
- [ ] Run PageSpeed audit
- [ ] Test in multiple browsers
- [ ] Test on mobile devices

---

## Continuous Deployment

With Vercel + GitHub:
- Every push to `main` auto-deploys
- Preview deployments for pull requests
- Automatic SSL certificates
- CDN distribution worldwide
- Edge function support

---

## Cost Estimate

**Vercel Free Tier** (includes):
- Unlimited projects
- Unlimited bandwidth
- Automatic deployments
- Custom domains
- SSL certificates
- Built-in analytics

No credit card required!

---

## Troubleshooting

### Build fails?
- Check `npm run build` locally first
- Ensure all imports are correct
- Check TypeScript types: `npx tsc --noEmit`

### Slow performance?
- Check image optimization in `next.config.js`
- Use Lighthouse to identify bottlenecks
- Consider Vercel Image Optimization

### Fonts not loading?
- Verify Google Fonts are imported in `layout.tsx`
- Check CSS variable names in Tailwind config

---

## Future Enhancements

After deployment, consider:

- [ ] Add blog section
- [ ] Integrate contact form with email
- [ ] Add project filtering
- [ ] Add dark/light mode toggle
- [ ] Implement CMS for content
- [ ] Add analytics tracking
- [ ] Create API for dynamic content
- [ ] Add error logging (Sentry)

---

## Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

**Your portfolio is now ready for the world! 🌍**
