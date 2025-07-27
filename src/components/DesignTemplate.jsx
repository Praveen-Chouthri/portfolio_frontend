import React, { useState } from "react";
import { X, ExternalLink, Github, Code, Database, Settings, Layers, User, Award, Target, GraduationCap, Calendar, Mail, Phone, MapPin, Linkedin, Send, CheckCircle, ChevronDown } from "lucide-react";

const DesignTemplate = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const templateProjects = [
    {
      id: 1,
      title: "Project Alpha",
      tech: ["React", "Node.js", "MongoDB"],
      description: "A comprehensive full-stack application with modern features...",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Project Beta",
      tech: ["Python", "Flask", "MySQL"],
      description: "Backend-focused project with complex database operations...",
      category: "Backend"
    },
    {
      id: 3,
      title: "Project Gamma",
      tech: ["React Native", "Firebase"],
      description: "Mobile application with real-time features...",
      category: "Mobile"
    }
  ];

  return (
    <div className="design-template bg-gray-50 min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-8 animate-slideUp">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-light text-gray-900 tracking-tight leading-none">
                Your
                <br />
                <span className="font-normal bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Name</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
                Professional Title
              </p>
            </div>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Your compelling description that hooks the reader immediately...
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">
                <Mail size={20} />
                <span className="text-sm">email@example.com</span>
              </div>
              {/* More contact items... */}
            </div>

            <div className="pt-8 flex flex-col items-center">
              <button className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-10 py-4 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 hover:from-gray-800 hover:to-gray-700">
                View My Work
              </button>
              
              <button className="mt-12 text-gray-400 hover:text-gray-600 transition-colors animate-bounce">
                <ChevronDown size={32} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Your compelling story and background that shows personality and professionalism...
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <User className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Current Focus</h3>
                    <p className="text-gray-700">Your current focus area</p>
                  </div>
                </div>
                {/* More about items... */}
              </div>
            </div>

            {/* Enhanced Stats Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-6">
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">8.0</div>
                  <div className="text-sm text-gray-600">Current GPA</div>
                </div>
                {/* More stats... */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center">
                  <Code className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Programming Languages</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {["Python", "JavaScript", "C++"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full text-sm font-medium border bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 border-blue-200 hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* More skill categories... */}
          </div>
        </div>
      </section>

      {/* NEW: Enhanced Projects Section with Cards + Modal */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Click on any project to explore in detail
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templateProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                {/* Project Preview Icon */}
                <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Code className="text-white" size={24} />
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-medium rounded-full mt-2">
                      {project.category}
                    </span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-blue-600 text-sm font-medium group-hover:underline">
                      View Details →
                    </span>
                    <div className="flex gap-2">
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      <Github className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto flex items-center justify-center">
                      <Code className="text-white" size={24} />
                    </div>
                    <p className="text-gray-600">Project Preview</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Detailed project description with all features, challenges overcome, and technologies used...
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {["Feature 1", "Feature 2", "Feature 3"].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4">
                  <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                    <ExternalLink size={16} />
                    View Live
                  </button>
                  <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-all duration-300">
                    <Github size={16} />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Template Info Banner */}
      <div className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg">
        <p className="text-sm font-medium">🎨 Enhanced Design Template</p>
      </div>
    </div>
  );
};

export default DesignTemplate;