import React from 'react';
import { portimg } from '../assets';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

import Pdf from '../finalcv.docx';

const Home = () => {
  return (
    <div>
      <div className="container mx-auto flex md:flex-row flex-col items-center">
        <section className="text-white font-nunito body-font w-full px-6">
          <div className="flex flex-col md:flex-row px-5 py-20 items-center">
            {/* Content Container */}
            <div className="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Srujan Kumar
                <br className="text-white hidden lg:inline-block" /> a Web Developer
              </h1>
              <p className="mb-8 leading-relaxed font-nunito">
                I am a rising senior from Geethanjali College of Engineering and Technology pursuing a Bachelor of Technology in Information Technology. The skills I possess include web development and Java programming.
              </p>
              <div className="flex justify-center">
                <div className="relative inline-flex group">
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-cyan-400 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                  <a
                    href={Pdf}
                    title="Get quote now"
                    download
                    className="relative inline-flex items-center justify-center px-8 py-4 text-lg text-white transition-all duration-200 bg-stone-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>

            {/* Image Container with Circular Hover Effect */}
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full md:pl-16 mt-12 md:mt-0 flex justify-center relative group">
              {/* Subtle Blur Effect Overlay */}
              <div className="absolute rounded-full bg-cyan-400 blur-lg opacity-80 transition-all duration-300 group-hover:opacity-70 group-hover:scale-110 w-40 h-40 md:w-96 md:h-96 z-0"></div>
              <img className="object-cover object-center rounded-full w-40 h-40 md:w-96 md:h-96 relative z-10" alt="hero" src={portimg} />
            </div>
          </div>
        </section>
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
