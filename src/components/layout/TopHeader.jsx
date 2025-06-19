'use client';

import React from 'react';
import { MapPin, Mail, Facebook, Instagram, Twitter, Globe } from "lucide-react";

const TopHeader = () => {
  return (
    <section>
      <div className="bg-[#2974FF] text-white py-[9px] px-5">
        <div className="max-w-container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm gap-y-3">

            {/* Location & Email */}
            <div className="flex flex-wrap items-center gap-2 text-[14px] font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 cursor-pointer" />
                <span className="sm:pr-[25px] sm:mr-[25px] border-0 lg:border-r-2 cursor-pointer">Location : Thornridge Cir, Shiloh, Hawaii</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 cursor-pointer" />
                <span className="cursor-pointer">Email : info.me@gmail.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row items-center justify-start md:justify-end gap-2 sm:gap-[30px]">
              <h6 className="text-[14px] leading-[24px] font-medium font-body whitespace-nowrap">Follow Us :</h6>
              <ul className="flex items-center gap-[10px] text-white text-[14px] leading-[24px] font-heading">
                {/* Facebook */}
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center pr-[10px] mr-[10px] hover:text-white transition duration-300 group"
                  >
                    <Facebook className="w-4 h-4" />
                    <span className="ml-2 w-0 opacity-0 group-hover:ml-[10px] group-hover:w-[95px] group-hover:opacity-100 transition-all duration-300 relative">
                      Facebook
                      <span className="absolute w-[4px] h-[4px] rounded-full bg-white top-1/2 -translate-y-1/2 right-0" />
                    </span>
                  </a>
                </li>
                {/* Instagram */}
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center pr-[10px] mr-[10px] hover:text-white transition duration-300 group"
                  >
                    <Instagram className="w-4 h-4" />
                    <span className="ml-2 w-0 opacity-0 group-hover:ml-[10px] group-hover:w-[100px] group-hover:opacity-100 transition-all duration-300 relative">
                      Instagram
                      <span className="absolute w-[4px] h-[4px] rounded-full bg-white top-1/2 -translate-y-1/2 right-0" />
                    </span>
                  </a>
                </li>
                {/* Twitter */}
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center pr-[10px] mr-[10px] hover:text-white transition duration-300 group"
                  >
                    <Twitter className="w-4 h-4" />
                    <span className="ml-2 w-0 opacity-0 group-hover:ml-[10px] group-hover:w-[78px] group-hover:opacity-100 transition-all duration-300 relative">
                      Twitter
                      <span className="absolute w-[4px] h-[4px] rounded-full bg-white top-1/2 -translate-y-1/2 right-0" />
                    </span>
                  </a>
                </li>
                {/* Dribbble */}
                <li>
                  <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center pr-[10px] mr-[10px] hover:text-white transition duration-300 group"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="ml-2 w-0 opacity-0 group-hover:ml-[10px] group-hover:w-[88px] group-hover:opacity-100 transition-all duration-300 relative">
                      Dribbble
                      <span className="absolute w-[4px] h-[4px] rounded-full bg-white top-1/2 -translate-y-1/2 right-0" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
