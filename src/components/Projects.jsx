import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Road Pothole Detection System',
      description: 'A mobile application designed to detect road potholes in real-time, improving road safety and maintenance tracking.',
      points: [
        'Developed a mobile application using Kotlin, Flutter, and Gradle to detect road potholes in real-time.',
        'Utilized gyroscope and accelerometer sensor to identify road anomalies based on predefined thresholds.',
        'Implemented a Decision Tree algorithm to improve detection accuracy and reduce false positives.',
        'Designed the system for real-time analysis and deployment readiness, ensuring scalability and practical usability.'
      ],
      tech: ['Kotlin', 'Flutter', 'Machine Learning', 'Sensors']
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-3 text-gradient">{project.title}</h3>
              <p className="text-text-secondary mb-6">{project.description}</p>
              
              <ul className="list-disc list-inside space-y-2 text-sm text-text-secondary mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
