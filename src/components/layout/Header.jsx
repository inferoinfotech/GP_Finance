"use client";

import { useState, useEffect } from "react";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";
import SidebarModal from "../model/sidebar-modal";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 backdrop-blur transition-all duration-300 ${
          scrolled ? "bg-primary-2/80 text-primary-3 shadow-md" : "bg-transparent text-primary-3"
        }`}
      >
        <div className="w-full max-w-container 2xl:px-8 xl:px-6 lg:px-5 md:px-4 sm:px-4 px-3 mx-auto transition-all duration-300">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-12 h-12 object-contain rounded-full shadow-md border border-primary-1"
              />
              <span
                className={`text-[28px] font-bold tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-primary-1" : "text-primary-3"
                }`}
              >
                Financial Services
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-12">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  className={`cursor-pointer font-bold text-[16px] transition-colors duration-300 ${
                    scrolled ? "text-primary-3" : "text-primary-3"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Actions (optional) */}
            <div className="flex items-center gap-5">{/* Future button/Sidebar trigger if needed */}</div>
          </div>
        </div>
      </header>

      {/* Sidebar Modal */}
      <SidebarModal isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
}
