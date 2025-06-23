"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaBehance, FaLinkedinIn } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const teamMembers = [
  {
    name: "Michael James",
    role: "Claims Adjuster",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=500&q=80",
  },
  {
    name: "Balm Bayrak",
    role: "Case Manager",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=500&q=80",
  },
  {
    name: "Lucas Alexander",
    role: "Sales Agent",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=500&q=80",
  },
  {
    name: "Grace Elizabeth",
    role: "Underwriter",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80",
  },
];

export default function OurTeamSlider() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-start gap-10">
          {/* Left Content */}
          <div className="lg:w-1/3 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-1 mb-4">
              Experienced Professionals
            </h2>
            <p className="text-para-5 text-sm sm:text-base">
              Our team brings extensive industry knowledge and commitment to delivering outstanding results.
            </p>
          </div>

          {/* Right Slider */}
          <div className="lg:w-2/3 w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={2}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
            >
              {teamMembers.map((member, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-[300px] mx-auto">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-[400px] object-cover object-top"
                    />
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-primary-1">{member.name}</h4>
                      <p className="text-primary-2 text-sm">{member.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
