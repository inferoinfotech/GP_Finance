"use client";

import { useEffect, useState } from "react";
import { X, Phone, Mail, MapPin } from "lucide-react";

export default function SidebarModal({ isOpen, onClose }) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    } else {
      const timeout = setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = ''; // Re-enable scrolling
      }, 400); // Match the longest transition duration
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!mounted || (!isOpen && !visible)) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Background Overlay */}
      <div
        className={`absolute inset-0 bg-[rgba(24,24,24,0.6)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-lg bg-[#121212] text-white p-[40px] pt-[100px] overflow-y-auto transform transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-2xl`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-12 right-8 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110"
          aria-label="Close menu"
        >
          <X className="w-5 h-5 transition-transform duration-300 hover:rotate-90" />
        </button>

        {/* Logo and Brand */}
        <div className="flex items-center gap-3 mb-[30px] transform transition-all duration-500 delay-75 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full" />
            </div>
          </div>
          <span className="text-3xl font-bold">Noxiy</span>
        </div>

        {/* Description */}
        <p className={`text-[#999999] text-base leading-7 mb-4 transition-all duration-500 delay-100 ease-out ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          The insurance company assumes the financial risk of covering these events in exchange for the premiums paid by
          the policyholder. There are many different types of insurance,
        </p>

        {/* Get In Touch Section */}
        <div className={`mb-12 border-t-2 border-b-2 border-[#1E1F21] my-[40px] py-[34px] transition-all duration-500 delay-150 ease-out ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h3 className="text-[30px] font-semibold mb-[30px]">Get In Touch</h3>

          {/* Call Now */}
          <div className="flex items-start gap-4 mb-6 transition-all duration-300 hover:translate-x-1">
            <div className="w-12 h-12 text-[#2974FF] flex items-center justify-center flex-shrink-0">
              <Phone className="w-[30px] h-[30px]" />
            </div>
            <div>
              <p className="text-[#999999] mb-1">Call Now</p>
              <a href="tel:+12589565856" className="text-white text-[18px] font-semibold hover:text-blue-400 transition-all duration-300">
                +125 (895) 658 568
              </a>
            </div>
          </div>

          {/* Quick Email */}
          <div className="flex items-start gap-4 mb-6 transition-all duration-300 hover:translate-x-1">
            <div className="w-12 h-12 text-[#2974FF] flex items-center justify-center flex-shrink-0">
              <Mail className="w-[30px] h-[30px]" />
            </div>
            <div>
              <p className="text-[#999999] mb-1">Quick Email</p>
              <a href="mailto:info.help@gmail.com" className="text-white text-[18px] font-semibold hover:text-blue-400 transition-all duration-300">
                info.help@gmail.com
              </a>
            </div>
          </div>

          {/* Office Address */}
          <div className="flex items-start gap-4 mb-8 transition-all duration-300 hover:translate-x-1">
            <div className="w-12 h-12 text-[#2974FF] flex items-center justify-center flex-shrink-0">
              <MapPin className="w-[30px] h-[30px]" />
            </div>
            <div>
              <p className="text-[#999999] mb-1">Office Address</p>
              <p className="text-white text-[18px] font-semibold hover:text-blue-400 transition-all duration-300">
                PV3M+X68 Welshpool United <br /> Kingdom
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className={`flex gap-2 transition-all duration-500 delay-200 ease-out ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          {["f", "t", "Be", "in"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110 mr-2.5"
              aria-label={item}
            >
              <span className="text-white font-bold text-sm">{item}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}