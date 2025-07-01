import React from 'react';
import { Download, MapPin, Mail, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                I'm a passionate full-stack developer with over 3 years of experience creating 
                modern, scalable web applications. My journey started with a curiosity about 
                how websites work, and it has evolved into a career dedicated to crafting 
                exceptional digital experiences.
              </p>
              
              <p>
                I specialize in React, Node.js, and modern web technologies, always staying 
                up-to-date with the latest industry trends. My approach combines technical 
                expertise with a keen eye for design, ensuring that every project not only 
                functions flawlessly but also provides an outstanding user experience.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge within the developer community.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                Remote Worldwide
              </div>
              <div className="flex items-center text-gray-400">
                <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                Available Now
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                Quick Response
              </div>
              <div className="flex items-center text-gray-400">
                <Download className="w-4 h-4 mr-2 text-blue-400" />
                Portfolio Ready
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Let's Work Together
              </a>
              <a
                href="#"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              {/* Developer illustration placeholder */}
              <div className="aspect-square bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl flex items-center justify-center">
               <img src="https://avatars.githubusercontent.com/u/185621439?s=400&u=41633096d46b7c92c0c5f9a8915959bf2ab764a0&v=4" alt="" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-bounce delay-1000" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-green-400 to-blue-400 rounded-full animate-bounce delay-2000" />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;