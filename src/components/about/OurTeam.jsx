import React from 'react';
import { FaFacebookF, FaTwitter, FaBehance, FaLinkedinIn } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Michael James',
    role: 'Claims Adjuster',
    img: '/images/team-5.jpg',
    socials: [
      { icon: <FaFacebookF />, url: 'https://www.facebook.com' },
      { icon: <FaTwitter />, url: 'https://twitter.com' },
      { icon: <FaBehance />, url: 'https://www.behance.net' },
      { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com' },
    ],
  },
  {
    name: 'Balm Bayrak',
    role: 'Case Manager',
    img: '/images/team-1.jpg',
    socials: [/* same as above */],
  },
  {
    name: 'Lucas Alexander',
    role: 'Sales Agent',
    img: '/images/team-7.jpg',
    socials: [/* same as above */],
  },
  {
    name: 'Grace Elizabeth',
    role: 'Underwriter',
    img: '/images/team-8.jpg',
    socials: [/* same as above */],
  },
];

export default function OurTeam() {
  return (
    <section className="section-padding bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="relative inline-block pl-6 text-sm font-semibold text-blue-600 uppercase tracking-wider before:content-[''] before:absolute before:top-0 before:left-0 before:w-5 before:h-5 before:bg-[url('/images/subtitle-4.png')] before:bg-no-repeat">
            Our Member
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-gray-800">Expert Professionals</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white bg-opacity-90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="block text-sm font-medium text-blue-600">{member.role}</span>
                <h4 className="mt-1 text-lg font-semibold text-gray-800">
                  <a href="team-single.html" className="hover:text-blue-600">
                    {member.name}
                  </a>
                </h4>

                <ul className="mt-4 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.socials.map((social, idx) => (
                    <li key={idx}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600"
                      >
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
