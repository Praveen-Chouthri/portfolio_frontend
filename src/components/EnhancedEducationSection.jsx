import React from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";

const EnhancedEducationSection = ({ data }) => {
  return (
    <section id="education" className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto transition-colors duration-300">
            My academic journey and educational background
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {data.map((education, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 card-hover border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-blue-600 dark:text-blue-400" size={28} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      {education.degree}
                      {education.field && (
                        <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300"> in {education.field}</span>
                      )}
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300">
                      {education.institution}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {education.duration}
                    </div>
                    {education.gpa && (
                      <div className="flex items-center gap-2">
                        <Award size={16} />
                        <span className="font-semibold text-blue-600 dark:text-blue-400 transition-colors duration-300">GPA: {education.gpa}</span>
                      </div>
                    )}
                  </div>

                  {/* Special highlight for current education */}
                  {index === 0 && (
                    <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border-l-4 border-blue-400 dark:border-blue-600 transition-colors duration-300">
                      <p className="text-blue-800 dark:text-blue-300 text-sm font-medium transition-colors duration-300">
                        Currently pursuing an integrated dual degree program with focus on 
                        software development, data structures, algorithms, and database management systems.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Academic Info */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg card-hover border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center transition-colors duration-300">
              Academic Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="group cursor-pointer">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">8.0/10.0</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Current GPA</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">Dual Degree</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">BTech + MTech</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">IIITDM</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Premier Institute</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedEducationSection;