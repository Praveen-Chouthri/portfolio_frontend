import React, { useState, useEffect } from "react";
import { portfolioData } from "../mock";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import EducationSection from "./EducationSection";  
import CertificationsSection from "./CertificationsSection";
import ContactSection from "./ContactSection";
import Navigation from "./Navigation";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "education", "certifications", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="portfolio">
      <Navigation activeSection={activeSection} />
      <HeroSection data={portfolioData.personal} />
      <AboutSection data={portfolioData.about} />
      <SkillsSection data={portfolioData.skills} />
      <ProjectsSection data={portfolioData.projects} />
      <EducationSection data={portfolioData.education} />
      <CertificationsSection data={portfolioData.certifications} />
      <ContactSection data={portfolioData.personal} />
    </div>
  );
};

export default Portfolio;