import React, { useState, useEffect } from "react";
import { portfolioAPI, handleAPIError } from "../services/api";
import EnhancedHeroSection from "./EnhancedHeroSection";
import EnhancedAboutSection from "./EnhancedAboutSection";
import EnhancedSkillsSection from "./EnhancedSkillsSection";
import EnhancedProjectsSection from "./EnhancedProjectsSection";
import EnhancedEducationSection from "./EnhancedEducationSection";  
import EnhancedCertificationsSection from "./EnhancedCertificationsSection";
import EnhancedContactSection from "./EnhancedContactSection";
import EnhancedNavigation from "./EnhancedNavigation";
import LoadingSpinner from "./LoadingSpinner";

const EnhancedPortfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setLoading(true);
        const response = await portfolioAPI.getPortfolioData();
        if (response.success) {
          setPortfolioData(response.data);
        } else {
          throw new Error('Failed to fetch portfolio data');
        }
      } catch (error) {
        console.error('Error loading portfolio data:', error);
        setError(handleAPIError(error, 'Failed to load portfolio data'));
        
        // Fallback to mock data
        const { portfolioData: mockData } = await import('../mock');
        setPortfolioData(mockData);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

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

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error && !portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <div className="text-6xl">😔</div>
          <h2 className="text-2xl font-semibold text-gray-900">Oops! Something went wrong</h2>
          <p className="text-gray-600 max-w-md">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="enhanced-portfolio bg-white dark:bg-gray-900 transition-colors duration-300">
      {error && (
        <div className="fixed top-4 right-4 bg-yellow-100 dark:bg-yellow-900/80 border border-yellow-400 dark:border-yellow-700 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-lg shadow-lg z-50">
          <p className="text-sm">Using offline data due to connection issues</p>
        </div>
      )}
      <EnhancedNavigation activeSection={activeSection} />
      <EnhancedHeroSection data={portfolioData.personal} />
      <EnhancedAboutSection data={portfolioData.about} />
      <EnhancedSkillsSection data={portfolioData.skills} />
      <EnhancedProjectsSection data={portfolioData.projects} />
      <EnhancedEducationSection data={portfolioData.education} />
      <EnhancedCertificationsSection data={portfolioData.certifications} />
      <EnhancedContactSection data={portfolioData.personal} />
    </div>
  );
};

export default EnhancedPortfolio;