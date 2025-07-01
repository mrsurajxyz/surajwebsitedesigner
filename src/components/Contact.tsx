import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

emailjs.init('service_1sxi4cy');

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'service_1sxi4cy', // Replace with your EmailJS service ID
        'template_g219m9o', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'Support@surajwebsitedesigner.site', // Your email address
        },
        '7JgkKxY9jG-RoaRdZ' // Replace with your EmailJS public key
      );

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Support@surajwebsitedesigner.site',
      link: 'mailto:Support@surajwebsitedesigner.site'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 83688 93579',
      link: 'tel:+91 83688 93579'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'New Delhi',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">
              Get In Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-400">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <h4 className="text-xl font-bold mb-4 text-white">
                Why Choose Me?
              </h4>
              <ul className="space-y-3">
                {[
                  'Fast response within 24 hours',
                  'Free consultation and project estimation',
                  'Agile development process',
                  'Post-launch support and maintenance',
                  '100% satisfaction guarantee'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                >
                  <option value="">Select a project type</option>
                  <option value="web-app">Web Application</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="portfolio">Portfolio Website</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="api">API Development</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project requirements, timeline, and budget..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;