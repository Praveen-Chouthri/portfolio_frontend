import React from "react";
import { User, Award, Target } from "lucide-react";

const EnhancedAboutSection = ({ data }) => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 transition-colors duration-300">
              {data.summary}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <User className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Current Focus</h3>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">{data.focus}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/50 dark:to-green-800/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Experience Level</h3>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">{data.yearsOfExperience}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/50 dark:to-purple-800/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Specialization</h3>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Web Application Development with focus on backend systems and database management</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Card */}
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 card-hover">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Quick Facts</h3>
            <div className="space-y-6">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">8.0</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Current GPA</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Certifications</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">1+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Major Projects</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAboutSection;