# 🚀 Deployment Guide - LearnHub EdTech Platform

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git installed
- Vercel account (free tier works perfectly)

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```
This creates an optimized build in the `dist` folder.

### 4. Preview Production Build
```bash
npm run preview
```

## Deployment to Vercel (Recommended)

### Method 1: Vercel CLI (Fastest)

1. **Install Vercel CLI globally**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? **learnhub-edtech** (or your choice)
- In which directory is your code located? **./**
- Want to override settings? **N**

4. **Deploy to Production**
```bash
vercel --prod
```

### Method 2: Vercel Dashboard (Most Common)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit: LearnHub EdTech Platform"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Import to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "Add New Project"
- Import your GitHub repository
- Vercel will auto-detect Vite configuration

3. **Configure (Auto-detected)**
- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

4. **Deploy**
- Click "Deploy"
- Wait 1-2 minutes for deployment
- Your app will be live at `https://your-project.vercel.app`

### Method 3: GitHub Actions (CI/CD)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## Alternative Deployment Options

### Netlify

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Build and Deploy**
```bash
npm run build
netlify deploy --prod --dir=dist
```

Or use Netlify Dashboard:
- Connect GitHub repository
- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages

1. **Install gh-pages**
```bash
npm install -D gh-pages
```

2. **Add to package.json scripts**
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. **Update vite.config.js**
```javascript
export default {
  base: '/your-repo-name/',
  // ... rest of config
}
```

4. **Deploy**
```bash
npm run deploy
```

### Firebase Hosting

1. **Install Firebase CLI**
```bash
npm install -g firebase-tools
```

2. **Login and Initialize**
```bash
firebase login
firebase init hosting
```

3. **Configure**
- Public directory: `dist`
- Single-page app: **Yes**
- GitHub integration: **Optional**

4. **Build and Deploy**
```bash
npm run build
firebase deploy
```

## Environment Variables

If you need environment variables in the future:

1. **Create `.env` file**
```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=LearnHub
```

2. **Access in code**
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. **Add to Vercel**
- Go to Project Settings → Environment Variables
- Add your variables
- Redeploy

## Post-Deployment Checklist

- [ ] Test all pages and navigation
- [ ] Verify dark/light mode toggle works
- [ ] Check mobile responsiveness
- [ ] Test course filtering and search
- [ ] Verify all animations are smooth
- [ ] Check browser console for errors
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify SEO meta tags are present
- [ ] Test page load speed (should be < 2s)
- [ ] Check accessibility with Lighthouse

## Performance Optimization

### Already Implemented
✅ Code splitting with React Router
✅ Lazy loading of images
✅ Optimized animations with Framer Motion
✅ Tailwind CSS purging in production
✅ Vite's automatic optimizations

### Optional Enhancements
- Add service worker for offline support
- Implement image lazy loading library
- Add CDN for static assets
- Enable Brotli compression
- Add analytics (Google Analytics, Plausible)

## Custom Domain Setup (Vercel)

1. **Go to Project Settings → Domains**
2. **Add your domain**
3. **Configure DNS**
   - Type: **A Record**
   - Name: **@**
   - Value: **76.76.21.21**
   
   - Type: **CNAME**
   - Name: **www**
   - Value: **cname.vercel-dns.com**

4. **Wait for DNS propagation** (5-48 hours)
5. **SSL certificate auto-generated** by Vercel

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing Issues (404 on refresh)
- Ensure `vercel.json` has proper rewrites
- For other platforms, configure SPA fallback

### Slow Build Times
- Check for large dependencies
- Optimize images before importing
- Use dynamic imports for heavy components

### Dark Mode Not Persisting
- Check localStorage is enabled
- Verify ThemeContext is wrapping App

## Monitoring & Analytics

### Vercel Analytics (Built-in)
- Automatically enabled
- View in Vercel Dashboard → Analytics

### Google Analytics
Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Support

For issues or questions:
- Check the README.md
- Review Vercel documentation
- Check browser console for errors
- Verify all dependencies are installed

## Success! 🎉

Your LearnHub EdTech platform is now live and ready to inspire millions of learners!

**Next Steps:**
1. Share your deployment URL
2. Gather user feedback
3. Iterate and improve
4. Consider adding backend integration
5. Implement user authentication
6. Add payment gateway
7. Build mobile app version

---

**Deployment URL Format:**
- Vercel: `https://your-project-name.vercel.app`
- Netlify: `https://your-project-name.netlify.app`
- Custom: `https://yourdomain.com`
