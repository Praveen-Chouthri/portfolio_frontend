import React, { useState } from "react";
import { ExternalLink, Github, CheckCircle, Clock, Code, X } from "lucide-react";

const EnhancedProjectsSection = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const getStatusIcon = (status) => {
    return status === "Live" ? 
      <CheckCircle className="text-green-600" size={16} /> : 
      <Clock className="text-orange-600" size={16} />;
  };

  const getStatusColor = (status) => {
    return status === "Live" ? 
      "text-green-600 bg-gradient-to-r from-green-50 to-green-100 border-green-200" : 
      "text-orange-600 bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200";
  };

  return (
    <>
      <section id="projects" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto transition-colors duration-300">
              Click on any project to explore in detail
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700 card-hover"
              >
                {/* Project Preview Icon */}
                <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-700 dark:to-purple-700 rounded-full flex items-center justify-center">
                    <Code className="text-white" size={24} />
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 transition-colors duration-300">{project.subtitle}</p>
                    </div>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)} dark:border-${project.status === 'Live' ? 'green' : 'orange'}-800 dark:bg-gradient-to-r dark:from-${project.status === 'Live' ? 'green' : 'orange'}-900/30 dark:to-${project.status === 'Live' ? 'green' : 'orange'}-800/30 dark:text-${project.status === 'Live' ? 'green' : 'orange'}-300` }>
                      {getStatusIcon(project.status)}
                      {project.status}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded text-xs font-medium transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded text-xs font-medium transition-colors duration-300">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:underline transition-colors duration-300">
                      View Details →
                    </span>
                    <div className="flex gap-2">
                      <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                      <Github className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 modal-backdrop">
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl dark:shadow-gray-900/70 animate-scaleIn transition-colors duration-300">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{selectedProject.title}</h2>
                  <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(selectedProject.status)} dark:border-${selectedProject.status === 'Live' ? 'green' : 'orange'}-800 dark:bg-gradient-to-r dark:from-${selectedProject.status === 'Live' ? 'green' : 'orange'}-900/30 dark:to-${selectedProject.status === 'Live' ? 'green' : 'orange'}-800/30 dark:text-${selectedProject.status === 'Live' ? 'green' : 'orange'}-300`}>
                    {getStatusIcon(selectedProject.status)}
                    {selectedProject.status}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center transition-colors duration-300">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-700 dark:to-purple-700 rounded-full mx-auto flex items-center justify-center">
                      <Code className="text-white" size={24} />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{selectedProject.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">Project Preview</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Description</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4">
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 btn-primary"
                    >
                      <ExternalLink size={16} />
                      View Live
                    </a>
                  )}
                  <button className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                    <Github size={16} />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EnhancedProjectsSection;