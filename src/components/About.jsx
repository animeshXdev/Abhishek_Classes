import React from 'react';
import profilePic from '../assets/undraw_developer-avatar_f6ac.svg'

import {
  FaBookReader,
  FaPenFancy,
  FaChalkboardTeacher,
  FaBrain,
  FaUsers,
} from 'react-icons/fa';

const qualities = [
  {
    icon: <FaBookReader />,
    title: 'Passionate Learner',
    desc: 'Deep interest in history, literature, and social sciences.',
  },
  {
    icon: <FaPenFancy />,
    title: 'Creative Writer',
    desc: 'Experienced in academic writing and thoughtful expression.',
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'Educator',
    desc: 'Believes in making learning interactive and impactful.',
  },
  {
    icon: <FaBrain />,
    title: 'Critical Thinker',
    desc: 'Enjoys analyzing topics with depth and clarity.',
  },
  {
    icon: <FaUsers />,
    title: 'Team Collaborator',
    desc: 'Loves sharing ideas and working with others.',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 text-gray-800 min-h-screen flex items-center justify-center px-6 md:px-16 py-16"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={profilePic}
            alt="Abhishek"
            className="rounded-xl shadow-lg w-64 h-64 object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Me
          </h2>
          <p className="text-gray-700 text-lg">
            I'm Abhishek, a Bachelor of Arts student at Delhi University. I'm
            passionate about history, literature, and social studies. I enjoy
            writing, research, and sharing knowledge through thoughtful
            discussions.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {qualities.map((item, idx) => (
              <div
                key={idx}
                className="cursor-pointer flex items-start gap-4 p-4 rounded-lg bg-white hover:bg-blue-50 transition duration-300 shadow hover:shadow-lg"
              >
                <div className="text-2xl text-blue-600">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
