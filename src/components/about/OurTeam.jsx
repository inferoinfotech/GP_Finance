import React from "react";
import { FaFacebookF, FaTwitter, FaBehance, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "Michael James",
    role: "Claims Adjuster",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500&q=80",
    socials: [
      { icon: <FaFacebookF />, url: "https://www.facebook.com" },
      { icon: <FaTwitter />, url: "https://twitter.com" },
      { icon: <FaBehance />, url: "https://www.behance.net" },
      { icon: <FaLinkedinIn />, url: "https://www.linkedin.com" },
    ],
  },
  {
    name: "Balm Bayrak",
    role: "Case Manager",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500&q=80",
    socials: [
      { icon: <FaFacebookF />, url: "https://www.facebook.com" },
      { icon: <FaTwitter />, url: "https://twitter.com" },
      { icon: <FaBehance />, url: "https://www.behance.net" },
      { icon: <FaLinkedinIn />, url: "https://www.linkedin.com" },
    ],
  },
  {
    name: "Lucas Alexander",
    role: "Sales Agent",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500&q=80",
    socials: [
      { icon: <FaFacebookF />, url: "https://www.facebook.com" },
      { icon: <FaTwitter />, url: "https://twitter.com" },
      { icon: <FaBehance />, url: "https://www.behance.net" },
      { icon: <FaLinkedinIn />, url: "https://www.linkedin.com" },
    ],
  },
  {
    name: "Grace Elizabeth",
    role: "Underwriter",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500&q=80",
    socials: [
      { icon: <FaFacebookF />, url: "https://www.facebook.com" },
      { icon: <FaTwitter />, url: "https://twitter.com" },
      { icon: <FaBehance />, url: "https://www.behance.net" },
      { icon: <FaLinkedinIn />, url: "https://www.linkedin.com" },
    ],
  },
];

export default function OurTeam() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="relative inline-block pl-7 text-[14px] md:text-[16px] font-semibold text-blue-600 uppercase before:content-[''] before:absolute before:top-[-2px] before:left-0 before:w-[20px] before:h-[22px] before:bg-no-repeat before:bg-[length:19px] before:bg-[url('/images/subtitle-4.png')]">
            Our Member
          </span>
          <h2 className="mt-4 text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42] xl:text-[50px] font-bold text-gray-800 font-serif">
            Expert Professionals
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl bg-white"
            >
              <div className="relative pb-[120%] overflow-hidden">
                <div className="absolute inset-3 rounded overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent
                    opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-700/30 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Social icons */}
                  <div
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <div className="bg-white px-5 py-3 rounded-lg shadow-md">
                      <ul className="flex space-x-3">
                        {member.socials.map((social, idx) => (
                          <li key={idx}>
                            <a
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100
                           text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300
                           transform hover:-translate-y-1"
                            >
                              <span className="text-sm">{social.icon}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content area */}
              <div className="p-5 transition-transform duration-500 group-hover:-translate-y-2">
                <span className="block text-blue-600 text-sm font-medium">{member.role}</span>
                <h4 className="mt-1 text-lg font-bold text-gray-800">
                  <a href="team-single.html" className="hover:text-blue-600 transition-colors">
                    {member.name}
                  </a>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
