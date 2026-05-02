import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch("https://formsubmit.co/ajax/shrilakshmik.work@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: "table"
        })
      });

      const result = await response.json();

      if (result.success === "true" || result.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send. Please try again.');
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus('An error occurred. Please try again later.');
    }
    
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="py-20 mb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 md:p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-text-secondary mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full glass-card bg-accent/20 hover:bg-accent/40 border-accent/50 py-3 font-semibold transition-colors"
            >
              Send Message
            </button>
            {status && (
              <p className={`text-center text-sm font-medium ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                {status}
              </p>
            )}
          </form>

          <div className="mt-12 flex justify-center space-x-6">
            <a href="mailto:shrilakshmik.work@gmail.com" className="text-text-secondary hover:text-accent transition-colors">
              shrilakshmik.work@gmail.com
            </a>
            <span className="text-text-secondary">|</span>
            <a href="https://github.kr/shrilakshmikakati" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
              GitHub
            </a>
            <span className="text-text-secondary">|</span>
            <a href="https://linkedin.com/in/shrilakshmi-kakati" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
