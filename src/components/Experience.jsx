import React from 'react';
import { FaChalkboardTeacher, FaUniversity, FaUsers, FaBookOpen } from 'react-icons/fa';

const experiences = [
  {
    title: 'Teaching Assistant – DU Seminar',
    organization: 'Delhi University',
    date: 'Jan 2024 – Apr 2024',
    icon: <FaChalkboardTeacher />,
    description: 'Assisted in organizing and presenting lectures on Indian Political Thought for undergrad students.',
  },
  {
    title: 'Research Intern – History Dept.',
    organization: 'Delhi University',
    date: 'May 2023 – Jul 2023',
    icon: <FaBookOpen />,
    description: 'Conducted field-based historical research and helped draft academic reports on cultural heritage topics.',
  },
  {
    title: 'Workshop Speaker – Soft Skills',
    organization: 'Youth Edu Forum',
    date: 'Sep 2023',
    icon: <FaUsers />,
    description: 'Delivered a session on effective communication and public speaking to university peers.',
  },
  {
    title: 'Academic Volunteer',
    organization: 'College Orientation Program',
    date: 'Aug 2022',
    icon: <FaUniversity />,
    description: 'Helped new students adjust to academic life, assisted in orientation sessions and Q&A rounds.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-100 text-gray-800 py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>

        <div className="relative border-l-4 border-blue-300 pl-6 space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Circle Icon */}
              <div className="absolute -left-7 top-1 text-blue-500 text-2xl bg-white rounded-full p-1 shadow">
                {exp.icon}
              </div>

              {/* Card */}
              <div className="bg-white rounded-lg shadow hover:shadow-md transition duration-300 p-6">
                <h3 className="text-xl font-semibold text-blue-700">{exp.title}</h3>
                <p className="text-sm text-gray-500">{exp.organization} — <span>{exp.date}</span></p>
                <p className="mt-2 text-gray-700 text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
