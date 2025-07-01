import React from 'react';
import { Code, Smartphone, Globe, Database, Zap, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Complete web applications using modern frameworks like React, Node.js, and databases.',
      features: ['React & Next.js', 'Node.js & Express', 'PostgreSQL & MongoDB', 'RESTful APIs']
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Responsive web applications that work perfectly on all devices and screen sizes.',
      features: ['Responsive Design', 'PWA Development', 'Cross-browser Testing', 'Performance Optimization']
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Custom web solutions tailored to your business needs and user requirements.',
      features: ['Custom Solutions', 'User Experience', 'Scalable Architecture', 'Modern UI/UX']
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Efficient database architecture and optimization for high-performance applications.',
      features: ['Database Design', 'Query Optimization', 'Data Migration', 'Backup Solutions']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast applications with optimized code and best practices.',
      features: ['Code Splitting', 'Lazy Loading', 'CDN Integration', 'Caching Strategies']
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Secure applications with ongoing maintenance and updates.',
      features: ['Security Audits', 'Regular Updates', 'Monitoring', '24/7 Support']
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;