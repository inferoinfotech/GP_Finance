import { MapPin, Clock, Mail, Phone } from "lucide-react";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const galleryImages = [
    "/placeholder.svg?height=80&width=80",
    "/placeholder.svg?height=80&width=80",
    "/placeholder.svg?height=80&width=80",
    "/placeholder.svg?height=80&width=80",
    "/placeholder.svg?height=80&width=80",
    "/placeholder.svg?height=80&width=80",
  ];

  const mainPages = [
    "Health Insurance", 
    "Car Insurance", 
    "Home Insurance", 
    "Life Insurance", 
    "Business Insurance"
  ];

  const services = [
    "Financial Planning",
    "Investment Management",
    "Retirement Solutions",
    "Tax Optimization",
    "Risk Assessment"
  ];

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      {/* Wave Background - Expanded to cover entire content */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="w-full h-[180%]"
          viewBox="0 0 1600 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="bg" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "rgba(180, 125, 5, 0.16)" }} />
              <stop offset="100%" style={{ stopColor: "rgba(244, 244, 244, 0.06)" }} />
            </linearGradient>
            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,0 c0,0,236.988-41.997,505.475,0
                s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v800H-363.852V0z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave" opacity=".3">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="10s"
                calcMode="spline"
                values="270 0; -334 0; 270 0"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".6">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="8s"
                calcMode="spline"
                values="-270 0;243 0;-270 0"
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".9">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="6s"
                calcMode="spline"
                values="0 0;-140 0;0 0"
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-1 rounded-full flex items-center justify-center text-white">
                <div className="text-xl font-bold">FS</div>
              </div>
              <span className="text-2xl font-bold text-primary-3">Financial Services</span>
            </div>
            <p className="text-primary-6 text-base leading-relaxed">
              Providing expert financial guidance since 2003. We help individuals and businesses achieve their financial goals through personalized strategies.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary-1/20 rounded-full flex items-center justify-center hover:bg-primary-1 transition-colors text-primary-1 hover:text-white" aria-label="Facebook">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-1/20 rounded-full flex items-center justify-center hover:bg-primary-1 transition-colors text-primary-1 hover:text-white" aria-label="Twitter">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-1/20 rounded-full flex items-center justify-center hover:bg-primary-1 transition-colors text-primary-1 hover:text-white" aria-label="Instagram">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-1/20 rounded-full flex items-center justify-center hover:bg-primary-1 transition-colors text-primary-1 hover:text-white" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-primary-3 mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-6 hover:text-primary-1 transition-colors flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary-1 flex-shrink-0"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-primary-3 mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-1/10 rounded-full flex items-center justify-center text-primary-1 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-primary-6">4140 Parker Rd. Allentown, New Mexico 31134</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-1/10 rounded-full flex items-center justify-center text-primary-1 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <p className="text-primary-6">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-1/10 rounded-full flex items-center justify-center text-primary-1 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <p className="text-primary-6">info@financialservices.com</p>
              </div>
              <div className="flex items-start gap-3 mt-6">
                <div className="w-10 h-10 bg-primary-1/10 rounded-full flex items-center justify-center text-primary-1 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-primary-3 font-medium mb-1">Working Hours</h4>
                  <p className="text-primary-6">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-primary-6">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-primary-3 mb-6">Newsletter</h3>
            <p className="text-primary-6 mb-4">
              Subscribe to our newsletter for financial tips and market updates.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 rounded-lg bg-white/90 border border-primary-4 focus:outline-none focus:ring-2 focus:ring-primary-1"
              />
              <button 
                type="submit" 
                className="w-full bg-primary-1 text-white px-4 py-3 rounded-lg font-medium hover:bg-primary-2 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-4/30 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-6 text-sm text-center">
            © {new Date().getFullYear()} Financial Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-6 hover:text-primary-1 text-sm">Privacy Policy</a>
            <a href="#" className="text-primary-6 hover:text-primary-1 text-sm">Terms of Service</a>
            <a href="#" className="text-primary-6 hover:text-primary-1 text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}