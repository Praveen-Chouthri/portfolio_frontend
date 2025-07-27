import React from "react";
import { ExternalLink, Github, CheckCircle, Clock } from "lucide-react";

const ProjectsSection = ({ data }) => {
  const getStatusIcon = (status) => {
    return status === "Live" ? 
      <CheckCircle className="text-green-600" size={16} /> : 
      <Clock className="text-orange-600" size={16} />;
  };

  const getStatusColor = (status) => {
    return status === "Live" ? "text-green-600 bg-green-50" : "text-orange-600 bg-orange-50";
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A showcase of my work in web development and software engineering
          </p>
        </div>

        <div className="space-y-12">
          {data.map((project, index) => (
            <div key={project.id} className="group">
              <div className={`bg-gray-50 rounded-3xl p-8 md:p-12 transition-all duration-300 hover:shadow-lg ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex gap-12 items-center`}>
                
                {/* Project Content */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                        {project.title}
                      </h3>
                      <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                        {getStatusIcon(project.status)}
                        {project.status}
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 font-medium">{project.subtitle}</p>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink size={16} />
                        View Live
                      </a>
                    )}
                    <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-all duration-300">
                      <Github size={16} />
                      Source Code
                    </button>
                  </div>
                </div>

                {/* Project Visual Placeholder */}
                <div className="flex-1 max-w-md">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border border-gray-200">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto flex items-center justify-center">
                        <ExternalLink className="text-gray-500" size={24} />
                      </div>
                      <p className="text-gray-500 font-medium">{project.title}</p>
                      <p className="text-sm text-gray-400">Project Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;