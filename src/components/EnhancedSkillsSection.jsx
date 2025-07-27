import React from "react";
import { Code, Database, Settings, Layers } from "lucide-react";

const EnhancedSkillsSection = ({ data }) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-600" size={24} />,
      skills: data.programming,
      color: "blue",
      gradient: "from-blue-50 to-blue-100"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="text-green-600" size={24} />,
      skills: data.frameworks,
      color: "green",
      gradient: "from-green-50 to-green-100"
    },
    {
      title: "Tools & Environment",
      icon: <Settings className="text-purple-600" size={24} />,
      skills: data.tools,
      color: "purple",
      gradient: "from-purple-50 to-purple-100"
    },
    {
      title: "Databases",
      icon: <Database className="text-orange-600" size={24} />,
      skills: data.databases,
      color: "orange",
      gradient: "from-orange-50 to-orange-100"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 border-blue-200",
      green: "bg-gradient-to-r from-green-50 to-green-100 text-green-800 border-green-200",
      purple: "bg-gradient-to-r from-purple-50 to-purple-100 text-purple-800 border-purple-200",
      orange: "bg-gradient-to-r from-orange-50 to-orange-100 text-orange-800 border-orange-200"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto transition-colors duration-300">
            A comprehensive overview of the technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700 card-hover">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} dark:from-${category.color}-900/50 dark:to-${category.color}-800/50 rounded-full flex items-center justify-center`}>
                  {React.cloneElement(category.icon, {
                    className: `text-${category.color}-600 dark:text-${category.color}-400`
                  })}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 cursor-pointer ${getColorClasses(category.color)} dark:border-${category.color}-800`}
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
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 shadow-lg max-w-3xl mx-auto border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Always Learning</h3>
            <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
              Currently exploring advanced topics in web development, data structures, and software architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedSkillsSection;