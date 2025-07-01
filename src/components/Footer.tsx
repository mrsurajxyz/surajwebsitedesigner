import React from 'react';
import { Code, Zap, Github, Twitter, Linkedin, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mrsurajxyz', label: 'GitHub' },
    { icon: MessageCircle, href: 'https://wa.me/918368893579', label: 'WhatsApp' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/surajxyz', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:Support@surajwebsitedesigner.site', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Code className="w-8 h-8 text-blue-400" />
                <Zap className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SURAJ WEB HUB
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Passionate full-stack developer creating modern, scalable web applications 
              that drive business growth and provide exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300 hover:scale-110"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>Support@surajwebsitedesigner.site</p>
              <p>+91 83688 93579</p>
              <p>New delhi </p>
              <div className="mt-4">
                <span className="inline-flex items-center px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} surajwebsitedesigner.site. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;