# Portfolio Marketplace Template

A modern, responsive portfolio template built with React and Tailwind CSS. Perfect for developers, designers, and creatives who want a professional online presence.

## 🚀 Features

- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **Modern Design** - Clean, professional UI with smooth animations
- **Easy Customization** - Single configuration file for all content
- **Fast Performance** - Optimized React components with lazy loading
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Dark Theme** - Professional dark theme with blue accents

## 📦 What's Included

- Hero section with animated introduction
- Experience timeline with company details
- Skills showcase with interactive cards
- Projects carousel with navigation arrows
- Education timeline
- Contact section with social links
- Responsive navigation bar

## 🛠️ Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Customize Your Content
Edit `/src/config/portfolioConfig.js` with your information:

```javascript
export const portfolioConfig = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    description: "Your description...",
    avatar: "/assets/your-photo.jpg",
    resumeUrl: "/assets/your-resume.pdf"
  },
  // ... more configuration options
}
```

### 3. Add Your Assets
- Replace images in `/public/assets/` with your own
- Add your resume PDF to `/public/assets/`
- Update image paths in the configuration

### 4. Run Development Server
```bash
npm start
```

### 5. Build for Production
```bash
npm run build
```

## 📝 Customization Guide

### Personal Information
Update your basic info in `portfolioConfig.personal`:
- Name, title, and description
- Profile photo and resume link
- Contact information

### Experience & Projects
Add your work experience and projects in the respective arrays:
- Company details and job descriptions
- Project images, links, and tech stacks
- Skills and technologies

### Styling & Theme
Customize colors and styling in `portfolioConfig.theme`:
- Primary and secondary colors
- Background and text colors
- Component styling

### Navigation
Modify navigation links in `portfolioConfig.navigation` to match your sections.

## 🎨 Components Overview

- **Hero** - Landing section with name and CTA
- **Experience** - Work history with company details
- **Technologies** - Skills grid with descriptions
- **Projects** - Carousel showcasing your work
- **Education** - Academic background
- **Contact** - Social links and contact info

## 📱 Responsive Design

The template is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly navigation
- Optimized images and fonts

## 🚀 Deployment

Ready to deploy to:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## 💡 Tips for Marketplace Users

1. **Replace all placeholder content** in the configuration file
2. **Add high-quality images** for projects and profile
3. **Update meta tags** in `public/index.html` for SEO
4. **Test on multiple devices** before going live
5. **Optimize images** for faster loading

## 🔧 Tech Stack

- React 18
- Tailwind CSS
- Framer Motion (for animations)
- Modern ES6+ JavaScript

## 📄 License

This template is available for purchase and use in personal and commercial projects.

---

**Need help?** Check the configuration file comments or contact support.
