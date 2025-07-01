import React from 'react';
import { ArrowRight, Sparkles, Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">Available for new projects</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
          Hi, I'm
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          SURAJ YADAV
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Full-stack developer specializing in modern web applications. 
          I transform ideas into powerful, scalable solutions that drive business growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#portfolio"
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <span>View My Work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          <a
            href="#contact"
            className="group px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <Code2 className="w-5 h-5" />
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '3+', label: 'Years Experience' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;