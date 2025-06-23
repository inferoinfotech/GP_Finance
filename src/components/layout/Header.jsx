"use client";

import { useState } from "react";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";
import SidebarModal from "../model/sidebar-modal";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-primary-2 shadow-sm">
        <div className="w-full max-w-container 2xl:px-8 xl:px-6 lg:px-5 md:px-4 sm:px-4 px-3 mx-auto">
          <div className="flex items-center justify-between py-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt=""
                className="w-25 h-25 object-contain rounded-full shadow-md border border-primary-1"
              />
              <span className="text-[36px] font-bold text-primary-3 tracking-wide">Financial Services</span>
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
                  <span className="cursor-pointer font-medium text-[16px] text-primary-3 hover:text-primary-1 transition-colors">
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-5">
              {/* Sidebar Trigger */}
              <button onClick={toggleSidebar} className="p-2 border-l pl-6 border-primary-3" aria-label="Open menu">
                <LayoutGrid className="w-8 h-8 text-primary-3" />
              </button>

              {/* Contact Button */}
              <Link href="/contact">
                <button className="bg-primary-1 hidden xl:block text-white px-8 py-3.5 rounded-full font-semibold transition-colors hover:bg-primary-3">
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
