import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 80 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 93 },
        { name: 'Express.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'GraphQL', level: 78 },
        { name: 'REST APIs', level: 95 },
      ]
    },
    {
      title: 'Database & Cloud',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'AWS', level: 82 },
        { name: 'Docker', level: 75 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'Figma', level: 85 },
        { name: 'Jest Testing', level: 80 },
        { name: 'CI/CD', level: 78 },
        { name: 'Agile/Scrum', level: 88 },
      ]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proficient in modern technologies and frameworks to deliver cutting-edge solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications or Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Always Learning
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and I stay current by continuously learning new tools, frameworks, 
              and best practices. I'm always exploring emerging technologies to provide the best solutions for my clients.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['AWS Certified', 'React Expert', 'Node.js Specialist', 'Agile Practitioner'].map((cert, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;