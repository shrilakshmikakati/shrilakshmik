import React from 'react';



return (
  <nav className="glass-nav fixed top-0 w-full z-50 transition-all duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <span className="font-bold text-xl tracking-wider text-gradient">SK</span>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <a href="#home" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
            <a href="#experience" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Experience</a>
            <a href="#skills" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Skills</a>
            <a href="#projects" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
            <a href="#contact" className="hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
          </div>
        </div>
        <div>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="bg-black/20 text-white text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5 backdrop-blur-md border border-white/10 outline-none"
          >
            {themes.map(t => (
              <option key={t.id} value={t.id} className="bg-gray-900 text-white">{t.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
