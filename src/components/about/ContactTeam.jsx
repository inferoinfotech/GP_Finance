import React from "react";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

function ContactTeam() {
  return (
    <div
      className="relative bg-fixed bg-center bg-no-repeat bg-cover section-padding"
      style={{ backgroundImage: "url('/assets/img/pages/video.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85 z-0"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="text-white text-center lg:text-left">
            <span className="relative pl-6 text-[16px] font-semibold text-blue-600 uppercase tracking-wider before:content-[''] before:absolute before:top-[-2px] before:left-0 before:w-[20px] before:h-[22px] before:bg-no-repeat before:bg-[length:19px] before:bg-[url('/images/subtitle-4.png')]">
              Need a help?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight max-w-xl">
              Connect with Our Team for Assistance
            </h2>
            <Link
              href="/team.html"
              className="relative inline-block mt-8 px-6 py-3 text-white font-semibold bg-blue-600 rounded-lg overflow-hidden group"
            >
              <span className="absolute inset-0 bg-black scale-x-0 origin-center transition-transform duration-300 ease-in-out group-hover:scale-x-100 z-0"></span>
              <span className="relative z-10">Our Team</span>
            </Link>
          </div>

          {/* Contact Info Boxes */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-6">
            {/* Phone */}
            <div className="bg-white px-8 py-6 rounded-lg shadow-md text-center w-full sm:w-auto">
              <div className="flex flex-col items-center mb-3">
                <div className="bg-blue-100 text-blue-600 rounded-full w-14 h-14 flex items-center justify-center mb-2 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-gray-600">Call us 24/7</span>
              </div>
              <h6 className="text-lg font-semibold lowercase">
                <a
                  href="tel:+125895658568"
                  className="text-gray-800 hover:text-blue-600 transition-all border-b-2 border-transparent hover:border-blue-600"
                >
                  +125 (895) 658 568
                </a>
              </h6>
            </div>

            {/* Email */}
            <div className="bg-white px-8 py-6 rounded-lg shadow-md text-center w-full sm:w-auto">
              <div className="flex flex-col items-center mb-3">
                <div className="bg-blue-100 text-blue-600 rounded-full w-14 h-14 flex items-center justify-center mb-2 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-gray-600">Mail us anytime</span>
              </div>
              <h6 className="text-lg font-semibold lowercase">
                <a
                  href="mailto:support@gmail.com"
                  className="text-gray-800 hover:text-blue-600 transition-all border-b-2 border-transparent hover:border-blue-600"
                >
                  support@gmail.com
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactTeam;
