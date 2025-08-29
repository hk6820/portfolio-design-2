# 📁 File Structure Guide for Users

## Where to Put Your Files

### 🖼️ Images and Assets
All your images and files go in the `/public/assets/` folder:

```
portfolio/
├── public/
│   └── assets/                 ← PUT ALL YOUR FILES HERE
│       ├── your-photo.jpg      ← Your profile picture
│       ├── resume.pdf          ← Your resume PDF
│       ├── project1.jpg        ← First project screenshot
│       ├── project2.jpg        ← Second project screenshot
│       ├── project3.jpg        ← Third project screenshot
│       └── ...more files
└── src/
    └── config/
        └── portfolioConfig.js  ← EDIT THIS FILE WITH YOUR INFO
```

## 📸 Image Requirements

### Profile Photo
- **Location**: `/public/assets/your-photo.jpg`
- **Size**: 400x400 pixels (square)
- **Format**: JPG or PNG
- **Name**: Can be anything (update config file to match)

### Project Screenshots
- **Location**: `/public/assets/project1.jpg`, `/public/assets/project2.jpg`, etc.
- **Size**: 800x600 pixels (landscape)
- **Format**: JPG or PNG
- **Names**: Can be anything (update config file to match)

### Resume
- **Location**: `/public/assets/resume.pdf`
- **Format**: PDF only
- **Name**: Can be anything (update config file to match)

## 🔗 How File Paths Work

When you put a file in `/public/assets/`, you reference it in the config like this:

```javascript
// If your file is at: /public/assets/my-photo.jpg
avatar: "/assets/my-photo.jpg"

// If your file is at: /public/assets/my-resume.pdf
resumeUrl: "/assets/my-resume.pdf"

// If your file is at: /public/assets/my-project.png
image: "/assets/my-project.png"
```

**Important**: Always start with `/assets/` (NOT `/public/assets/`)

## ✅ Step-by-Step Process

1. **Add your files** to `/public/assets/` folder
2. **Note the exact filenames** you used
3. **Open** `/src/config/portfolioConfig.js`
4. **Update the paths** to match your filenames
5. **Save** and refresh your browser

## 🚨 Common Mistakes

❌ **Wrong**: `avatar: "/public/assets/photo.jpg"`
✅ **Correct**: `avatar: "/assets/photo.jpg"`

❌ **Wrong**: `image: "project1.jpg"`
✅ **Correct**: `image: "/assets/project1.jpg"`

❌ **Wrong**: Putting files in `/src/` folder
✅ **Correct**: Putting files in `/public/assets/` folder

## 📝 Example Setup

If you have these files:
```
/public/assets/
├── john-doe.jpg
├── john-resume.pdf
├── ecommerce-app.png
├── todo-app.png
└── weather-app.png
```

Your config should look like:
```javascript
personal: {
  name: "John Doe",
  avatar: "/assets/john-doe.jpg",
  resumeUrl: "/assets/john-resume.pdf",
},
projects: [
  {
    title: "E-commerce App",
    image: "/assets/ecommerce-app.png",
    // ...
  },
  {
    title: "Todo App", 
    image: "/assets/todo-app.png",
    // ...
  },
  {
    title: "Weather App",
    image: "/assets/weather-app.png",
    // ...
  }
]
```

## 🆘 Troubleshooting

**Images not showing?**
1. Check if files are in `/public/assets/` folder
2. Check if filenames match exactly in config
3. Make sure paths start with `/assets/`
4. Refresh your browser

**Resume not downloading?**
1. Make sure it's a PDF file
2. Check the filename matches in config
3. Make sure path starts with `/assets/`
