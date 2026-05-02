import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Intern',
      company: 'Nitminer Technologies Private Limited',
      date: 'Aug 2025 - April 2026',
      points: [
        'Developed Contract Auditor, a LLM-based system that converts traditional e-contracts into smart contracts and validates contract integrity and condition coverage tested on 200 E-contracts.',
        'Built a Blockchain-based certificate generation platform with MERN stack by integrating Layer 2 Zero-Knowledge Proof (ZKP) solutions for enhanced security and low-cost deployment can deploy more than 2000 Certificates on network.',
        'Designed a Blockchain-based coal mining concession system to detect coal theft and quality discrepancies using transparent tracking mechanisms.',
        'Implemented and optimized Ethereum Proof of Stake (PoS) consensus protocol for efficient and secure node operations within the network.',
        'Managed and executed social media strategy, improving digital engagement and brand visibility for the startup.'
      ]
    },
    {
      title: 'Contributor',
      company: 'Social Winter of Code',
      date: 'Jan 2026 - March 2026',
      points: [
        'Contributed to the GroqTales open-source platform by developing a full comics API with create/edit/view workflows, media uploads, search and filtering, role-based access control, and IPFS-backed publishing with optional NFT minting.',
        'Enhanced the AlgoFi open-source platform by improving the NFT minting workflow with IPFS-based user metadata via Pinata, adding secure validation, hash integrity checks, optimized pinning policies, and robust backend error handling.'
      ]
    },
    {
      title: 'Blockchain Developer Intern',
      company: 'BlockseBlock',
      date: 'June 2025 - July 2025',
      points: [
        'As a backend developer, contributed to decentralized applications including Cross-Chain Asset Swap and Health Record dApps on the ICP blockchain, designing and integrating core backend workflows.',
        'Implemented and optimized smart contracts and canister logic using Rust, improving transaction integrity, state consistency, and reliability of on-chain operations.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gradient">{exp.title}</h3>
                  <h4 className="text-lg text-text-secondary">{exp.company}</h4>
                </div>
                <span className="text-sm px-4 py-1 rounded-full bg-accent/20 border border-accent/30 mt-2 md:mt-0 inline-block w-max">
                  {exp.date}
                </span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-text-secondary">
                {exp.points.map((point, i) => (
                  <li key={i} className="pl-2">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
