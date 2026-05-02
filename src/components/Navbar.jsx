import React from 'react';

const Navbar = () => {
  return (
    <nav className="glass-nav fixed top-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              <a href="#home" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#experience" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Experience</a>
              <a href="#skills" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Skills</a>
              <a href="#projects" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
              <a href="#contact" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
