"use client";

import React from "react";
import { MapPin, Mail, Globe } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const TopHeader = () => {
  return (
    <section className="bg-primary-1 text-primary-2 py-2 px-4">
      <div className="max-w-container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] font-medium">
        {/* Location & Email */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="border-0 lg:border-r-2 lg:pr-4">Thornridge Cir, Shiloh, Hawaii</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>info.me@gmail.com</span>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-right">
          <h6 className="text-[14px] font-medium whitespace-nowrap">Follow Us:</h6>
          <ul className="flex items-center gap-4 text-[14px]">
            {/* Facebook */}
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group transition-all duration-300"
              >
                <FaFacebook className="w-4 h-4" />
                <span className="ml-1 w-0 opacity-0 group-hover:ml-2 group-hover:w-auto group-hover:opacity-100 transition-all duration-300">
                  Facebook
                </span>
              </a>
            </li>

            {/* Instagram */}
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group transition-all duration-300"
              >
                <FaInstagram className="w-4 h-4" />
                <span className="ml-1 w-0 opacity-0 group-hover:ml-2 group-hover:w-auto group-hover:opacity-100 transition-all duration-300">
                  Instagram
                </span>
              </a>
            </li>

            {/* Twitter */}
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group transition-all duration-300"
              >
                <FaTwitter className="w-4 h-4" />
                <span className="ml-1 w-0 opacity-0 group-hover:ml-2 group-hover:w-auto group-hover:opacity-100 transition-all duration-300">
                  Twitter
                </span>
              </a>
            </li>

            {/* Dribbble */}
            <li>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
                <span className="ml-1 w-0 opacity-0 group-hover:ml-2 group-hover:w-auto group-hover:opacity-100 transition-all duration-300">
                  Dribbble
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
