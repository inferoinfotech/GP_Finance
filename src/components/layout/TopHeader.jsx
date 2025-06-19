'use client';

import React from 'react'
import { MapPin, Mail, Facebook, Instagram, Twitter, Globe } from "lucide-react"

const TopHeader = () => {
    return (
        <section>
            <div className="bg-[#2974FF] text-white py-[9px] px-[20px]">
                <div className="max-w-container mx-auto  px-4">
                    <div className="flex items-center justify-between text-sm">
                        {/* Location */}
                        <div className="flex items-center gap-2 ">
                            <MapPin className="w-4 h-4 cursor-pointer" />
                            <span className='border-r-2 pr-[25px] mr-[25px] text-[14px] font-medium cursor-pointer'>Location : Thornridge Cir, Shiloh, Hawaii</span>
                            <Mail className="w-4 h-4 cursor-pointer" />
                            <span className='text-[14px] font-medium cursor-pointer'>Email : info.me@gmail.com</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-2">

                        </div>

                        {/* Social Media */}
                        <div className="w-full lg:w-1/3">
                            <div className="flex items-center justify-end gap-[30px] sm:mt-1">
                                <h6 className="text-white text-[14px] leading-[24px] font-medium font-body">Follow Us :</h6>
                                <div className="overflow-hidden">
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
                                                    <span className="absolute w-[4px] h-[4px] rounded-full bg-white group-hover:bg-white top-1/2 -translate-y-1/2 right-0"></span>
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
                                                    <span className="absolute w-[4px] h-[4px] rounded-full bg-white group-hover:bg-white top-1/2 -translate-y-1/2 right-0"></span>
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
                                                    <span className="absolute w-[4px] h-[4px] rounded-full bg-white group-hover:bg-white top-1/2 -translate-y-1/2 right-0"></span>
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
                                                    <span className="absolute w-[4px] h-[4px] rounded-full bg-white group-hover:bg-white top-1/2 -translate-y-1/2 right-0"></span>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopHeader