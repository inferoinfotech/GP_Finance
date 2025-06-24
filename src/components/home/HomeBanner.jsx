"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Play, ChevronLeft, ChevronRight, MoveRight, MoveLeft } from "lucide-react";
import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HomeBanner = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slides = [
    {
      id: 1,
      badge: "Financial Excellence",
      title: "Secure Your Financial Future",
      description:
        "Expert guidance for wealth preservation and growth. Let our 20+ years of experience work for you.",
      buttonText: "Get Started",
      image: "../images/banner/banner-1.jpg",
    },
    {
      id: 2,
      badge: "Strategic Planning",
      title: "Optimize Your Investments",
      description:
        "Tailored strategies to maximize returns while minimizing risks. Your financial security is our priority.",
      buttonText: "Learn More",
      image: "../images/banner/banner-2.jpg",
    },
    {
      id: 3,
      badge: "Trusted Advisors",
      title: "Comprehensive Wealth Management",
      description:
        "Holistic solutions for retirement, taxation, and asset protection. Your success is our benchmark.",
      buttonText: "Schedule Consultation",
      image: "../images/banner/banner-3.jpg",
    },
  ];

  if (!mounted) return null;
  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation={{
          prevEl: ".hero-button-prev",
          nextEl: ".hero-button-next",
        }}
        pagination={{
          clickable: true,
          bulletClass: "hero-pagination-bullet",
          bulletActiveClass: "hero-pagination-bullet-active",
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative min-h-screen">
              {/* Background Image */}
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gray-900/35" />
              
              {/* Content */}
              <div className="relative z-10 flex items-center min-h-screen">
                <div className="container mx-auto px-4 py-24">
                  <div className="max-w-[1170px] mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                      <span className="bg-primary-1 text-primary-2 px-6 py-2.5 rounded-full text-sm font-medium tracking-wider flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-2 rounded-full animate-pulse" />
                        {slide.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h1
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-8 leading-tight animate-fade-in-up"
                      style={{ animationDelay: "0.4s" }}
                    >
                      {slide.title}
                    </h1>

                    {/* Divider */}
                    <div 
                      className="w-24 h-1 bg-primary-1 mx-auto my-6 animate-fade-in-up" 
                      style={{ animationDelay: "0.5s" }}
                    />

                    {/* Description */}
                    <p
                      className="text-gray-100 text-[15px] md:[12px] lg:[16px] max-w-xl mx-auto animate-fade-in-up"
                      style={{ animationDelay: "0.6s" }}
                    >
                      {slide.description}
                    </p>

                    {/* Buttons */}
                    <div
                      className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in-up"
                      style={{ animationDelay: "0.8s" }}
                    >
                      <button className="bg-primary-1 hover:bg-primary-2 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
                        {slide.buttonText}
                        <MoveRight className="w-4 h-4" />
                      </button>
                      <button className="text-white hover:text-primary-1 font-medium flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-full bg-primary-2/10 flex items-center justify-center group-hover:bg-primary-1 transition-colors">
                          <Play className="w-4 h-4" fill="currentColor" />
                        </div>
                        Watch Overview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Financial Indicators */}
              <div className="absolute bottom-12 left-0 right-0 z-10">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {['Taxation', 'Risk Management', 'Retirement', 'Wealth Growth'].map((item, index) => (
                      <div 
                        key={index}
                        className="bg-primary-2/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 animate-fade-in-up"
                        style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">{item}</span>
                          <button className="text-primary-1 hover:text-white transition-colors">
                            <MoveRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="hidden md:block">
        <div className="absolute top-1/2 left-4 right-4 transform -translate-y-1/2 z-20 flex justify-between">
          <button className="hero-button-prev w-12 h-12 bg-primary-2/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-1 transition-colors">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button className="hero-button-next w-12 h-12 bg-primary-2/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-1 transition-colors">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        
      `}</style>
    </section>
  );
};
export default HomeBanner;