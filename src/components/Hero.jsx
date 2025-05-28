import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profilePic from '../assets/undraw_finance-guy-avatar_vhop.svg'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 text-white flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 pt-24"
    >
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left space-y-6 mt-10 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-blue-400">Abhishek</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium">
          <Typewriter
            words={['Student', 'Writer', 'Researcher', 'BA - Delhi University']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto md:mx-0">
          Passionate about arts, history, and social science. I believe in
          meaningful learning and helping others grow through knowledge.
        </p>

        <a href="#contact"><button  className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition ">
          Book a Class
        </button></a>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={profilePic}
          alt="Abhishek"
          className="w-60 h-60 rounded-full object-cover border-4 border-blue-400 shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
