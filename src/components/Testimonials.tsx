import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Working with DevCraft was an absolute pleasure. The attention to detail and technical expertise delivered exactly what we needed for our startup. Our web application exceeded all expectations.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCorp',
      content: 'The development process was smooth and efficient. Communication was excellent throughout the project, and the final product was delivered on time and within budget. Highly recommended!',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, CreativeSpace',
      content: 'Our e-commerce platform has been running flawlessly since launch. The performance optimizations and user experience improvements have significantly increased our conversion rates.',
      rating: 5,
      avatar: '👩‍🎨'
    },
    {
      name: 'David Thompson',
      role: 'CTO, DataFlow Solutions',
      content: 'The technical architecture and scalability planning were exceptional. Our application handles thousands of users without any performance issues. Professional work all around.',
      rating: 5,
      avatar: '👨‍🔬'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-400/30" />
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the list of satisfied clients who have transformed their ideas into successful digital products.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Let's Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;