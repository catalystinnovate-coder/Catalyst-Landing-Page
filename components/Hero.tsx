import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tighter">
          Brand strategy and social media
          <span className="block bg-gradient-to-r from-blue-400 to-indigo-600 text-transparent bg-clip-text">
            that actually converts.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-400">
          We work with service-based businesses in the US, UK, and Australia to build brands worth following — and social media that turns attention into clients.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://calendly.com/catalystinnovate/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Book a Discovery Call
          </a>
          <a href="#work" className="text-sm font-semibold leading-6 text-slate-300 hover:text-white transition-colors duration-300">
            See Our Work <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
