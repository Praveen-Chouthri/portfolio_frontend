import React from "react";
import { ChevronDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

const HeroSection = ({ data }) => {
  const scrollToNext = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Name with elegant typography */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-light text-gray-900 tracking-tight leading-none">
              {data.name.split(" ")[0]}
              <br />
              <span className="font-normal">{data.name.split(" ")[1]}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
              {data.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <a
              href={`mailto:${data.email}`}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Mail size={20} />
              <span className="text-sm">{data.email}</span>
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Github size={20} />
              <span className="text-sm">GitHub</span>
            </a>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={20} />
              <span className="text-sm">{data.location}</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8 flex flex-col items-center">
            <button
              onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
              className="bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            
            {/* Scroll indicator - centered under button */}
            <button
              onClick={scrollToNext}
              className="mt-12 text-gray-400 hover:text-gray-600 transition-colors animate-bounce"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;