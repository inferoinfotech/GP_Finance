"use client";

import { useEffect, useState } from "react";
import { X, Phone, Mail, MapPin, Search, Facebook, Twitter, Globe, } from "lucide-react";
import Link from 'next/link';


export default function SidebarModal({ isOpen, onClose }) {
    const [visible, setVisible] = useState(false);
    const [mounted, setMounted] = useState(false);

    const navItems = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" }
    ];
    const socialLinks = [
        { icon: <Facebook className="w-4 h-4 md:w-5 md:h-5" />, href: "https://facebook.com" },
        { icon: <Twitter className="w-4 h-4 md:w-5 md:h-5" />, href: "https://twitter.com" },
        { icon: <Globe className="w-4 h-4 md:w-5 md:h-5" />, href: "https://yourwebsite.com" },
    ];

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
            document.body.style.overflow = "hidden";
        } else {
            const timeout = setTimeout(() => {
                setVisible(false);
                document.body.style.overflow = "";
            }, 400);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    if (!mounted || (!isOpen && !visible)) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Overlay */}
            <div
                className={`absolute inset-0 bg-[rgba(24,24,24,0.6)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "opacity-100" : "opacity-0"
                    }`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div className={`absolute right-0 top-0 h-full w-full xl:max-w-lg bg-[#121212] text-white xl:p-[40px] xl:pt-[100px] overflow-y-auto transform transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "translate-x-0" : "translate-x-full"} shadow-2xl flex flex-row xl:flex-col`}>
                {/* Left Section (Nav + Social) */}
                <div className="w-full md:w-[60%] xl:w-full lg:order-none md:border-r xl:border-r-0 border-[#1E1F21] py-[30px] px-[20px] lg:py-[40px] lg:pl-[40px] lg:px-0">
                    <div className="h-full flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-10">
                                {/* logo code */}
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                            <div className="w-4 h-4 bg-blue-600 rounded-full" />
                                        </div>
                                    </div>
                                    <span className="text-3xl font-bold">Noxiy</span>
                                </div>

                                {/* Close Button */}
                                <div className="block md:hidden xl:block">
                                    <button onClick={onClose}
                                        className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110  "
                                        aria-label="Close menu" >
                                        <X className="w-5 h-5 transition-transform duration-300 hover:rotate-90" />
                                    </button>
                                </div>
                            </div>

                            {/* Navigation */}
                            <nav className="mb-8 block xl:hidden">
                                {navItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        onClick={onClose}
                                        className="block text-white text-[26px] font-semibold py-4 border-b border-[#1E1F21] hover:text-blue-400 transition-all duration-300"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        {/* Social Media */}
                        <div className="xl:order-2 block xl:hidden">
                            <h6 className="text-white font-semibold text-sm mb-3">Follow Us</h6>
                            <div className="flex gap-2">
                                {socialLinks.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 md:w-10 md:h-10 bg-[#1E1F21] text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section (Search + Description + Contact Info) - Only on lg+ */}
                <div className="hidden md:flex flex-col space-between p-[35] xl:p-[0] gap-8 w-full md:w-[40%] xl:w-full">
                    {/* Search Bar */}
                    <div className="flex justify-end xl:hidden mb-6">
                        <button
                            onClick={onClose}
                            className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110"
                            aria-label="Close menu"
                        >
                            <X className="w-5 h-5 transition-transform duration-300 hover:rotate-90" />
                        </button>
                    </div>

                    <div className="flex items-center xl:hidden">
                        <input
                            type="text"
                            placeholder="Search Here....."
                            className="w-full px-5 py-3 bg-[#1E1E1E] text-white placeholder-gray-400 rounded-full outline-none border border-gray-700"
                        />
                        <button className="ml-3 text-white p-2">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Description */}
                    <p className="text-[#999999] text-base leading-7 hidden xl:block">
                        The insurance company assumes the financial risk of covering these events in exchange for the premiums paid by
                        the policyholder. There are many different types of insurance,
                    </p>

                    {/* Get In Touch */}
                    <div className="border-0 xl:border-t-2 xl:border-b-2 border-[#1E1F21] py-[34px]">
                        <h3 className="text-[24px] font-semibold md:mb-[20px] md:pb-[15px] xl:pb-0 xl:mb-[30px] border-b-2 border-[#1E1F21] xl:border-0">Get In Touch</h3>

                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 text-[#2974FF] flex items-center justify-center flex-shrink-0 hidden xl:block">
                                <Phone className="w-[30px] h-[30px] hidden xl:block" />
                            </div>
                            <div>
                                <p className="text-[#999999] mb-1">Call Now</p>
                                <a href="tel:+12589565856" className="text-white text-[18px] font-semibold hover:text-blue-400">
                                    +125 (895) 658 568
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 text-[#2974FF] flex items-center justify-center flex-shrink-0 hidden xl:block">
                                <Mail className="w-[30px] h-[30px] " />
                            </div>
                            <div>
                                <p className="text-[#999999] mb-1">Quick Email</p>
                                <a href="mailto:info.help@gmail.com" className="text-white text-[18px] font-semibold hover:text-blue-400">
                                    info.help@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 text-[#2974FF] flex items-center justify-center flex-shrink-0 hidden xl:block">
                                <MapPin className="w-[30px] h-[30px] hidden xl:block" />
                            </div>
                            <div>
                                <p className="text-[#999999] mb-1">Office Address</p>
                                <p className="text-white text-[18px] font-semibold hover:text-blue-400">
                                    PV3M+X68 Welshpool United <br /> Kingdom
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden xl:block">
                        <h6 className="text-white font-semibold text-sm mb-3">Follow Us</h6>
                        <div className="flex gap-2">
                            {socialLinks.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 md:w-10 md:h-10 bg-[#1E1F21] text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-all">
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}