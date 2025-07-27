import React from "react";
import { User, Award, Target } from "lucide-react";

const AboutSection = ({ data }) => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {data.summary}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <User className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Current Focus</h3>
                  <p className="text-gray-700">{data.focus}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                  <Target className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Experience Level</h3>
                  <p className="text-gray-700">{data.yearsOfExperience}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                  <Award className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Specialization</h3>
                  <p className="text-gray-700">Web Application Development with focus on backend systems and database management</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats/Highlights */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Facts</h3>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">8.0</div>
                <div className="text-sm text-gray-600">Current GPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">5+</div>
                <div className="text-sm text-gray-600">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">2+</div>
                <div className="text-sm text-gray-600">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">10+</div>
                <div className="text-sm text-gray-600">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;