import "./App.css";

import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Technologies from "./sections/Technologies/Technologies";
import Experience from "./sections/Experience/Experience";
import Education from "./sections/Education/Education";
import Contact from "./sections/Contact/Contact";


function App() {
  const experienceData = [
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
  ];

 const projectsData = [
  {
    title: "Personal Portfolio",
    description: "A beautifully animated and responsive portfolio built with React and Tailwind CSS.",
    image: "/assets/project2.png",
    link: "https://yourportfolio.com",
    tags: ["React", "Framer Motion", "Tailwind"],
  },
  {
    title: "Component Marketplace",
    description: "A sleek marketplace for selling reusable portfolio components with secure checkout.",
    image: "/assets/projectimg.png",
    link: "https://yourmarketplace.com",
    tags: ["Firebase", "Stripe", "Authentication"],
  },
  {
    title: "Design System Toolkit",
    description: "A comprehensive design system with reusable React components and documentation.",
    image: "/assets/project3.png",
    link: "https://yourtoolkit.com",
    tags: ["Storybook", "SCSS", "Design Tokens"],
  },
];

const educationData = [
  {
    institution: "Indian Institute of Technology (IIT)",
    degree: "B.Tech in Computer Science",
    duration: "2019 - 2023",
    description:
      "Focused on software engineering, algorithms, and full-stack development. Completed several projects and internships.",
  },
  {
    institution: "ABC Higher Secondary School",
    degree: "Senior Secondary (12th Grade)",
    duration: "2017 - 2019",
    description:
      "Completed studies in the science stream with Computer Science, Physics, and Mathematics.",
  },
];
  const programmingLanguagesData = [
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
      description:
        "High-level, often just-in-time compiled, and multi-paradigm.",
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
      description:
        "High-level, often just-in-time compiled, and multi-paradigm.",
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
  ];

  const contactData = {
  heading: "Let’s Connect",
  message:
    "Interested in collaborating or want to learn more about my work? I'd love to hear from you!",
  email: "uxdesigner@example.com",
  phone: "+91-9876543210",
  linkedIn: "https://linkedin.com/in/yourname",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourhandle",
  location: "Bangalore, India"
};


  return (
    <div className="app-wrapper">
      <Navbar
        logoText="UX Designer"
        links={[
          { label: "Home", href: "#home" },
          { label: "Experience", href: "#experience" },
          { label: "Skills", href: "#languages" },
          { label: "Projects", href: "#projects" },
          { label: "Education", href: "#education" },
          { label: "Contact", href: "#contact" },
        ]}
      />

      <main>
        <Hero
          subtitle="Hello, I’m"
          title="John Doe"
          description="I design beautiful, user-friendly interfaces and experiences that solve real problems. Let's build something meaningful together."
          buttonText="Download CV"
          onButtonClick={() =>
            window.scrollTo({ top: 600, behavior: "smooth" })
          }
          avatar="/assets/yourImage.png"
        />

        <Experience experience={experienceData} sectionTitle='Experience'/>
         <Technologies languages={programmingLanguagesData}  sectionTitle='Skills'/>
        <Projects projects={projectsData} sectionTitle='Projects'/>
        <Education educationData={educationData} sectionTitle='Education'/>
        <Contact {...contactData} />
      </main>
    </div>
  );
}

export default App;
