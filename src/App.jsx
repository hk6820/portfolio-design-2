import "./App.css";

import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Technologies from './sections/Technologies/Technologies';
import Experience from "./sections/Experience/Experience";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";

function App() {
  const experienceData = [
    {
      title: "Frontend Developer",
      employer: "Tech Corp",
      years: "2022 - Present",
      description:
        "Worked on UI design, React components, and performance optimization.",
    },
    {
      title: "UX Intern",
      employer: "DesignHub",
      years: "2021 - 2022",
      description: "Supported research and wireframing for B2B SaaS apps.",
    },
  ];

  const skillsData = [
    {
      title: "User Research",
      description: "Conducting surveys, interviews, and usability tests.",
      buttonText: "View",
      onClick: () => alert("User Research clicked!"),
    },
    {
      title: "Wireframing",
      description: "Designing structure and layout of digital interfaces.",
      buttonText: "View",
    },
    {
      title: "Prototyping",
      description: "Creating interactive mockups to simulate UX.",
      buttonText: "View",
    },
  ];
  const projectsData = [
    {
      title: "Portfolio Website",
      description: "A modern responsive portfolio with dark/light themes.",
      image: "/assets/projectimg.png",
      link: "https://yourportfolio.com",
      tags: ["React", "Tailwind", "UI/UX"],
    },
    {
      title: "Component Marketplace",
      description: "A mini-store to showcase and sell portfolio components.",
      image: "/assets/projectimg.png",
      link: "https://yourmarketplace.com",
      tags: ["Firebase", "Stripe", "Auth"],
    },
  ];

const programmingLanguagesData = [
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces.',
    link: 'https://reactjs.org/',
  },
  {
    name: 'Redux',
    description: 'A predictable state container for JavaScript apps.',
    link: 'https://redux.js.org/',
  },
  {
    name: 'JavaScript',
    description: 'High-level, often just-in-time compiled, and multi-paradigm.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'Node.js',
    description: 'JavaScript runtime built on Chrome\'s V8 engine.',
    link: 'https://nodejs.org/',
  },
  {
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapid UI development.',
    link: 'https://tailwindcss.com/',
  },
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces.',
    link: 'https://reactjs.org/',
  },
  {
    name: 'Redux',
    description: 'A predictable state container for JavaScript apps.',
    link: 'https://redux.js.org/',
  },
  {
    name: 'JavaScript',
    description: 'High-level, often just-in-time compiled, and multi-paradigm.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'Node.js',
    description: 'JavaScript runtime built on Chrome\'s V8 engine.',
    link: 'https://nodejs.org/',
  },
  {
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapid UI development.',
    link: 'https://tailwindcss.com/',
  },
];


  const contactData = {
    heading: "Let’s Connect",
    message:
      "Feel free to reach out for collaborations, projects, or just to say hi!",
    email: "hello@example.com",
  };

  return (
    <div className="app-wrapper">
      <Navbar
        logoText="UX Designer"
        links={[
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
 { label: "Languages", href: "#languages" },
  { label: "Contact", href: "#contact" },
]}

      />

      <main>
        <Hero
          subtitle="Hello, I’m"
          title="UX Designer"
          description="I design beautiful, user-friendly interfaces and experiences that solve real problems. Let's build something meaningful together."
          buttonText="View My Work"
          onButtonClick={() =>
            window.scrollTo({ top: 600, behavior: "smooth" })
          }
          avatar="/assets/yourImage.png"
        />

        <Experience experience={experienceData} />
        <Skills skills={skillsData} />
        {/* <ProgrammingLanguages languages={programmingLanguagesData} /> */}
        <Technologies languages={programmingLanguagesData} />
        <Projects projects={projectsData} />
        <Contact {...contactData} />
      </main>
    </div>
  );
}

export default App;
