// Portfolio Configuration File
// Users can easily customize their portfolio by editing this file
//
// 📁 IMPORTANT: File Locations
// - Put your profile photo in: /public/assets/your-photo.jpg
// - Put your resume in: /public/assets/resume.pdf  
// - Put project images in: /public/assets/project1.jpg, project2.jpg, etc.
// - Then update the paths below to match your file names

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "John Doe", // ✏️ Replace with your full name
    title: "UX Designer", // ✏️ Replace with your job title
    subtitle: "Hello, I'm", // ✏️ Customize your greeting
    description: "I design beautiful, user-friendly interfaces and experiences that solve real problems. Let's build something meaningful together.", // ✏️ Write 2-3 sentences about yourself
    avatar: "/assets/yourImage.png", // 📸 Put your photo in /public/assets/ and update filename here
    resumeUrl: "/assets/resume.pdf", // 📄 Put your resume PDF in /public/assets/ and update filename here
  },

  // Navigation Links
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#languages" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],

  // Experience Data
  experience: [
    {
      title: "Senior Frontend Engineer",
      employer: "Innovexa Technologies",
      years: "2023 - Present",
      techStack: ["React", "TypeScript", "Tailwind", "Vite"],
      description: `Architected and led development of large-scale React applications.
Collaborated with UX designers to implement accessible, responsive interfaces.
Migrated legacy codebase to modern React with hooks and TypeScript.
Improved performance by 35% through code-splitting and lazy loading.
Mentored junior developers and conducted weekly code reviews.`,
    },
    {
      title: "UI/UX Engineer",
      employer: "PixelCraft Studio",
      techStack: ["React", "TypeScript", "Tailwind", "Vite"],
      years: "2021 - 2023",
      description: `Created interactive UI components and design systems with Tailwind CSS.
Led prototyping efforts for high-priority client projects using Figma.
Worked closely with backend teams to build full-stack apps using Node.js.
Conducted usability testing and implemented feedback to boost engagement.
Automated component testing with Jest and React Testing Library.`,
    },
  ],

  // Projects Data - Add your projects here
  projects: [
    {
      title: "Personal Portfolio", // ✏️ Replace with your project name
      description: "A beautifully animated and responsive portfolio built with React and Tailwind CSS.", // ✏️ Describe what your project does
      image: "/assets/project2.png", // 📸 Put project screenshot in /public/assets/ and update filename
      link: "https://yourportfolio.com", // 🔗 Replace with your project URL or GitHub link
      tags: ["React", "Framer Motion", "Tailwind"], // 🏷️ List technologies used
    },
    {
      title: "Component Marketplace", // ✏️ Replace with your project name
      description: "A sleek marketplace for selling reusable portfolio components with secure checkout.", // ✏️ Describe what your project does
      image: "/assets/projectimg.png", // 📸 Put project screenshot in /public/assets/ and update filename
      link: "https://yourmarketplace.com", // 🔗 Replace with your project URL or GitHub link
      tags: ["Firebase", "Stripe", "Authentication"], // 🏷️ List technologies used
    },
    {
      title: "Design System Toolkit", // ✏️ Replace with your project name
      description: "A comprehensive design system with reusable React components and documentation.", // ✏️ Describe what your project does
      image: "/assets/project3.png", // 📸 Put project screenshot in /public/assets/ and update filename
      link: "https://yourtoolkit.com", // 🔗 Replace with your project URL or GitHub link
      tags: ["Storybook", "SCSS", "Design Tokens"], // 🏷️ List technologies used
    },
  ],

  // Skills/Technologies
  skills: [
    {
      name: "React",
      description: "A JavaScript library for building user interfaces.",
      link: "https://reactjs.org/",
    },
    {
      name: "Redux",
      description: "A predictable state container for JavaScript apps.",
      link: "https://redux.js.org/",
    },
    {
      name: "JavaScript",
      description: "High-level, often just-in-time compiled, and multi-paradigm.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Node.js",
      description: "JavaScript runtime built on Chrome's V8 engine.",
      link: "https://nodejs.org/",
    },
    {
      name: "Tailwind CSS",
      description: "A utility-first CSS framework for rapid UI development.",
      link: "https://tailwindcss.com/",
    },
    {
      name: "TypeScript",
      description: "JavaScript with syntax for types.",
      link: "https://www.typescriptlang.org/",
    },
  ],

  // Education Data
  education: [
    {
      institution: "Indian Institute of Technology (IIT)",
      degree: "B.Tech in Computer Science",
      duration: "2019 - 2023",
      description: "Focused on software engineering, algorithms, and full-stack development. Completed several projects and internships.",
    },
    {
      institution: "ABC Higher Secondary School",
      degree: "Senior Secondary (12th Grade)",
      duration: "2017 - 2019",
      description: "Completed studies in the science stream with Computer Science, Physics, and Mathematics.",
    },
  ],

  // Contact Information
  contact: {
    heading: "Let's Connect",
    message: "Interested in collaborating or want to learn more about my work? I'd love to hear from you!",
    email: "uxdesigner@example.com",
    phone: "+91-9876543210",
    linkedIn: "https://linkedin.com/in/yourname",
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourhandle",
    location: "Bangalore, India",
  },

  // Theme Configuration
  theme: {
    primaryColor: "#60a5fa",
    secondaryColor: "#1e3a8a",
    backgroundColor: "#0a0a0a",
    cardBackground: "#111827",
    textColor: "#f5f5f5",
    textSecondary: "#ccc",
  },

  // Section Titles (customizable)
  sectionTitles: {
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    education: "Education",
  },
};
