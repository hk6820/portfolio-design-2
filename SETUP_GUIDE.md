# Portfolio Setup Guide for End Users

## 🎯 Quick Start (5 Minutes)

### Step 1: Download & Install
1. Download the portfolio template
2. Extract to your desired folder
3. Open terminal in the project folder
4. Run: `npm install`

### Step 2: Personalize Your Content
Open `/src/config/portfolioConfig.js` and update:

```javascript
// 1. Your Personal Info
personal: {
  name: "Your Full Name",           // Replace with your name
  title: "Your Job Title",          // e.g., "Frontend Developer"
  subtitle: "Hello, I'm",           // Keep or customize greeting
  description: "Write your bio...", // 2-3 sentences about yourself
  avatar: "/assets/your-photo.jpg", // Add your photo to /public/assets/
  resumeUrl: "/assets/resume.pdf",  // Add your resume to /public/assets/
}
```

### Step 3: Add Your Projects
```javascript
projects: [
  {
    title: "Your Project Name",
    description: "Brief project description",
    image: "/assets/project1.jpg",     // Add project images to /public/assets/
    link: "https://your-project.com",  // Live demo or GitHub link
    tags: ["React", "CSS", "API"],     // Technologies used
  },
  // Add more projects...
]
```

### Step 4: Update Experience
```javascript
experience: [
  {
    title: "Your Job Title",
    employer: "Company Name",
    years: "2023 - Present",
    techStack: ["React", "Node.js"],
    description: "What you did at this job...",
  },
  // Add more experiences...
]
```

### Step 5: Launch Your Portfolio
```bash
npm start
```
Visit `http://localhost:3000` to see your portfolio!

## 📁 File Structure for Users

```
portfolio/
├── public/assets/          ← Put your images here
│   ├── your-photo.jpg     ← Your profile picture
│   ├── project1.jpg       ← Project screenshots
│   └── resume.pdf         ← Your resume
├── src/config/
│   └── portfolioConfig.js ← Edit this file only!
└── README.md              ← Documentation
```

## 🖼️ Image Guidelines

### Profile Photo
- **Size**: 400x400px recommended
- **Format**: JPG or PNG
- **Name**: Save as `/public/assets/your-photo.jpg`

### Project Images
- **Size**: 800x600px recommended
- **Format**: JPG or PNG
- **Naming**: `project1.jpg`, `project2.jpg`, etc.

## ✏️ Content Tips

### Writing Your Bio
- Keep it 2-3 sentences
- Mention your specialty
- Include what you're passionate about
- Example: "I'm a frontend developer who loves creating beautiful, user-friendly interfaces. I specialize in React and have a passion for turning complex problems into simple, elegant solutions."

### Project Descriptions
- Start with what the project does
- Mention key technologies
- Keep it under 2 sentences
- Example: "A task management app built with React and Firebase. Features real-time collaboration and drag-and-drop functionality."

### Experience Descriptions
- Use bullet points in the description
- Focus on achievements, not just duties
- Include metrics when possible
- Example: "Led development of customer portal that increased user engagement by 40%"

## 🎨 Customization Options

### Colors (Optional)
In `portfolioConfig.js`, you can customize:
```javascript
theme: {
  primaryColor: "#60a5fa",    // Main accent color
  secondaryColor: "#1e3a8a",  // Secondary accent
  // Other colors...
}
```

### Section Titles
```javascript
sectionTitles: {
  experience: "Work Experience",  // Customize section names
  skills: "Technologies",
  projects: "My Work",
  education: "Background",
}
```

## 🚀 Going Live

### Option 1: Netlify (Easiest)
1. Run `npm run build`
2. Drag the `build` folder to [netlify.com/drop](https://app.netlify.com/drop)
3. Your site is live!

### Option 2: Vercel
1. Push code to GitHub
2. Connect GitHub to Vercel
3. Deploy automatically

## ❗ Common Issues & Fixes

### Images Not Showing
- Make sure images are in `/public/assets/`
- Check file names match exactly in config
- Use forward slashes: `/assets/photo.jpg`

### Site Won't Start
- Run `npm install` first
- Make sure Node.js is installed
- Check for syntax errors in config file

### Resume Download Not Working
- Add resume PDF to `/public/assets/`
- Update `resumeUrl` in config
- File name must match exactly

## 📞 Need Help?

1. Check this guide first
2. Look at the example in `portfolioConfig.js`
3. Make sure all file paths are correct
4. Contact support if still stuck

---

**Remember**: Only edit the `portfolioConfig.js` file - everything else is handled automatically!
