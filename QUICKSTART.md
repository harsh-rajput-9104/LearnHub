# 🚀 Quick Start Guide - LearnHub EdTech Platform

## ⚡ Get Started in 3 Steps

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser

### 3️⃣ Build for Production
```bash
npm run build
```

## 📦 What's Included

```
✅ 5 Complete Pages (Landing, Dashboard, Courses, Course Detail, Profile)
✅ 15+ Reusable Components
✅ Dark/Light Mode Toggle
✅ Smooth Framer Motion Animations
✅ Fully Responsive Design
✅ SEO Optimized
✅ Production Ready
✅ Vercel Deployment Ready
```

## 🎨 Key Features

- **Premium UI/UX** - Glassmorphism, gradients, smooth animations
- **60fps Animations** - Optimized for performance
- **Mobile-First** - Works perfectly on all devices
- **Zero Layout Shift** - Skeleton loaders everywhere
- **Accessibility** - ARIA labels, keyboard navigation
- **Clean Code** - Reusable components, no hardcoded values

## 📱 Pages Overview

1. **Landing Page** (`/`)
   - Hero with animated backgrounds
   - Course categories
   - Featured courses
   - Testimonials
   - CTA sections

2. **Dashboard** (`/dashboard`)
   - Learning stats
   - Enrolled courses
   - Upcoming classes
   - Streak tracker
   - Performance metrics

3. **Courses** (`/courses`)
   - Search & filters
   - Category filtering
   - Level filtering
   - Course grid

4. **Course Detail** (`/course/:id`)
   - Video player UI
   - Chapter accordion
   - Progress tracking
   - Enrollment options

5. **Profile** (`/profile`)
   - User info
   - Learning stats
   - Achievements
   - Course progress

## 🎯 Tech Stack

- **React 19** - Latest version
- **Vite** - Lightning fast builds
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

## 🚀 Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub + Vercel Dashboard
1. Push to GitHub
2. Import on vercel.com
3. Deploy (auto-configured)

## 📝 Important Notes

### CSS Warnings (Normal)
The `@tailwind` and `@apply` warnings in `index.css` are **expected and safe to ignore**. They're PostCSS directives that work perfectly during build time.

### Demo Data
All data is in `src/data/demoData.js`. Modify as needed or integrate with a backend API.

### No Backend Required
This is a frontend-only demo. All features work with static data.

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your colors */ },
  accent: { /* your colors */ }
}
```

### Add New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add to navbar in `src/components/Navbar.jsx`

### Modify Demo Data
Edit `src/data/demoData.js` to change courses, categories, testimonials, etc.

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Dark Mode Not Working
- Check browser localStorage is enabled
- Clear cache and reload

## 📚 Documentation

- `README.md` - Full project documentation
- `DEPLOYMENT.md` - Deployment guide for all platforms
- `FEATURES.md` - Complete features list
- This file - Quick start guide

## ✨ Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Explore all pages
4. ✅ Test dark/light mode
5. ✅ Test on mobile
6. ✅ Build for production
7. ✅ Deploy to Vercel

## 🎉 You're All Set!

Your premium EdTech platform is ready to go. Start the dev server and see the magic!

```bash
npm run dev
```

Visit: `http://localhost:5173`

---

**Need Help?**
- Check `README.md` for detailed docs
- Review `DEPLOYMENT.md` for deployment help
- See `FEATURES.md` for all features

**Happy Coding! 🚀**
