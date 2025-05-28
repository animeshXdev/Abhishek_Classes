import React from 'react';
import {
  FaChalkboardTeacher,
  FaBook,
  FaUniversity,
  FaGlobeAsia,
  FaPenFancy,
  FaComments,
} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'Teaching (Online/Offline)', icon: <FaChalkboardTeacher />, level: 95, color: 'bg-green-500' },
  { name: 'Academic Writing', icon: <FaPenFancy />, level: 90, color: 'bg-purple-500' },
  { name: 'Research & Analysis', icon: <FaUniversity />, level: 85, color: 'bg-blue-500' },
  { name: 'History & Political Science', icon: <FaBook />, level: 90, color: 'bg-yellow-500' },
  { name: 'Public Speaking', icon: <FaComments />, level: 80, color: 'bg-red-400' },
  { name: 'Critical Thinking', icon: <FaGlobeAsia />, level: 88, color: 'bg-indigo-500' },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6 md:px-16 py-16"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Academic & Teaching Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center gap-3 mb-2 text-lg font-semibold">
                <span className="text-2xl">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-in-out`}
                  style={{
                    width: inView ? `${skill.level}%` : '0%',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
