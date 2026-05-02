import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Solidity', category: 'Web3' },
    { name: 'Rust', category: 'Web3/Systems' },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card px-6 py-4 flex flex-col items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300 cursor-default"
            >
              <span className="text-lg font-semibold">{skill.name}</span>
              <span className="text-xs text-text-secondary mt-1">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
