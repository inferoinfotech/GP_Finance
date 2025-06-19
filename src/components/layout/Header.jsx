"use client";

import { useState } from "react";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";
import SidebarModal from "../model/sidebar-modal";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(true); // Open only
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="w-full max-w-container 2xl:px-8 xl:px-6 lg:px-5 md:px-4 sm:px-4 px-3 mx-auto">
          <div className="flex items-center justify-between py-5">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <span className="text-2xl font-bold text-gray-900">Noxiy</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-12">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((item, i) => (
                <Link key={i} href={item.path} passHref>
                  <span className="cursor-pointer font-medium text-[16px] text-gray-800 hover:text-blue-600 transition-colors">
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-5">
              {/* Sidebar Trigger */}
              <button
                onClick={toggleSidebar}
                className="p-2 border-l pl-6 border-gray-300"
                aria-label="Open menu"
              >
                <LayoutGrid className="w-8 h-8 text-gray-700" />
              </button>

              {/* Contact Button */}
              <Link href="/contact">
                <button className="bg-[#2974FF] hidden xl:block text-white px-8 py-3.5 rounded-full font-semibold transition-colors hover:bg-blue-700">
                  Contact Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Modal */}
      <SidebarModal isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
}
