import React from "react";
import { Code, Database, Settings, Layers } from "lucide-react";

const SkillsSection = ({ data }) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-600" size={24} />,
      skills: data.programming,
      color: "blue"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="text-green-600" size={24} />,
      skills: data.frameworks,
      color: "green"
    },
    {
      title: "Tools & Environment",
      icon: <Settings className="text-purple-600" size={24} />,
      skills: data.tools,
      color: "purple"
    },
    {
      title: "Databases",
      icon: <Database className="text-orange-600" size={24} />,
      skills: data.databases,
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-800",
      green: "bg-green-50 border-green-200 text-green-800",
      purple: "bg-purple-50 border-purple-200 text-purple-800",
      orange: "bg-orange-50 border-orange-200 text-orange-800"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-${category.color}-50 rounded-full flex items-center justify-center`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Note */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Always Learning</h3>
            <p className="text-gray-700">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
              Currently exploring advanced topics in web development, data structures, and software architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;