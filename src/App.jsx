import "./App.css";

import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Technologies from "./sections/Technologies/Technologies";
import Experience from "./sections/Experience/Experience";
import Education from "./sections/Education/Education";
import Contact from "./sections/Contact/Contact";
import { portfolioConfig } from "./config/portfolioConfig";
import { logValidationResults } from "./utils/validation";


function App() {
  // Validate configuration in development
  logValidationResults(portfolioConfig);

  // Extract data from configuration
  const {
    personal,
    navigation,
    experience: experienceData,
    projects: projectsData,
    skills: programmingLanguagesData,
    education: educationData,
    contact: contactData,
    sectionTitles
  } = portfolioConfig;


  return (
    <div className="app-wrapper">
      <Navbar
        logoText={personal.title}
        links={navigation}
      />

      <main>
        <Hero
          subtitle={personal.subtitle}
          title={personal.name}
          description={personal.description}
          buttonText="Download CV"
          onButtonClick={() =>
            window.open(personal.resumeUrl, '_blank')
          }
          avatar={personal.avatar}
        />

        <Experience experience={experienceData} sectionTitle={sectionTitles.experience}/>
        <Technologies languages={programmingLanguagesData} sectionTitle={sectionTitles.skills}/>
        <Projects projects={projectsData} sectionTitle={sectionTitles.projects}/>
        <Education educationData={educationData} sectionTitle={sectionTitles.education}/>
        <Contact {...contactData} />
      </main>
    </div>
  );
}

export default App;
