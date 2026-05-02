import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          Hi, I'm <span className="text-gradient">Shrilakshmi Kakati</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-light text-text-secondary mb-8">
          Web3 Developer & Software Engineer
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-text-secondary mx-auto mb-10">
          Building decentralized applications, smart contracts, and full-stack web platforms.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#projects" className="glass-card px-8 py-3 font-semibold hover:bg-white/10 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="glass-card px-8 py-3 font-semibold bg-accent/20 hover:bg-accent/40 transition-colors border-accent/50">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
