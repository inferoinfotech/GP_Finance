"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"
import { Play, ChevronLeft, ChevronRight, MoveRight, MoveLeft } from "lucide-react"
import { useEffect, useState } from "react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"


const HomeBanner = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const slides = [
    {
      id: 1,
      badge: "Best Insurance Agency",
      title: "Secure Your Business Future.",
      description:
        "Choose us for comprehensive insurance coverage that safeguards what Matters most, personalized to your unique needs.",
      buttonText: "Discover More",
      image: "../images/banner-4.png",
    },
    {
      id: 2,
      badge: "Trusted Protection",
      title: "Protect What Matters Most.",
      description:
        "Experience peace of mind with our tailored insurance solutions designed to protect your family and business assets.",
      buttonText: "Learn More",
      image: "../images/banner-4.png",
    },
    {
      id: 3,
      badge: "Expert Coverage",
      title: "Insurance Made Simple.",
      description:
        "Get the coverage you need with our expert guidance and personalized service that puts your needs first.",
      buttonText: "Get Started",
      image: "../images/banner-4.png",
    },
  ]

  if (!mounted) return null
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Dots */}
        <div className="absolute top-0 left-0 w-48 h-52">
          <img
            src="../images/banners-3.png"
            alt="Floating"
            className="object-contain animate-upDown"
          />

        </div>

        {/* Top Right Waves */}
        <div className="absolute top-12 right-12 w-40 h-8">
          <img
            src="../images/banner-3.png"
            alt="Decorative Wave"
            className="object-contain animate-leftRight"
          />
        </div>

        {/* Bottom Left Circle */}
        <img
          src="../images/banner-2.png"
          alt="Decorative Bounce"
          className="absolute bottom-2 left-8 w-32 h-32  rounded-full animate-[spin_3s_linear_infinite]"
          style={{ animationDuration: "3s" }}
        />

        {/* Bottom Right Dots Grid */}
        <div className="absolute bottom-8 right-8 w-28 h-24">
          <img
            src="../images/banners-2.png"
            alt=""
            className=" object-contain animate-upDown"
          />
        </div>
      </div>

      <div className=" mx-auto max-w-container px-4 relative z-10">
      
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
            {slides.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <div className="h-fit flex items-center">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full pt-28">
                    {/* Left Content */}
                    <div className="space-y-8 order-2 lg:order-1">
                      {/* Badge with Animation */}
                      <div className="inline-flex items-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                        <span className="bg-blue-100 text-[#2974FF] px-6 py-3 rounded-full text-[16px] font-medium flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#2974FF] rounded-full animate-pulse" />
                          {slide.badge}
                        </span>
                      </div>

                      {/* Title with Animation */}
                      <h1
                        className="text-4xl lg:text-5xl xl:text-[90px] font-bold text-gray-900 leading-tighter animate-fade-in-up"
                        style={{ animationDelay: "0.4s" }}
                      >
                        {slide.title}
                      </h1>

                      {/* Description with Animation */}
                      <p
                        className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-lg animate-fade-in-up"
                        style={{ animationDelay: "0.6s" }}
                      >
                        {slide.description}
                      </p>

                      {/* Buttons with Animation */}
                      <div className="flex items-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                          {slide.buttonText}
                        </button>
                        <button className="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group">
                          <Play className="w-6 h-6 ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
                        </button>
                      </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative order-1 lg:order-2 hidden lg:block mx-auto">
                      <div className="relative animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
                        <img
                          src={slide.image || "/placeholder.svg"}
                          alt={`Hero slide ${slide.id}`}
                          className="transform transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
      </div>
      <div className="absolute right-36 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-4">
        <button className="hero-button-prev w-16 h-16 bg-white backdrop-blur-sm shadow-[0px_30px_70px_rgba(0,0,0,0.08)] rounded-full flex items-center justify-center hover:bg-[#2974FF] hover:scale-110 transition-all duration-300 group">
          <MoveRight className="w-5 h-5 text-black group-hover:text-white  transition-colors" />
        </button>
        <button className="hero-button-next w-16 h-16 bg-white backdrop-blur-sm shadow-[0px_30px_70px_rgba(0,0,0,0.08)] rounded-full flex items-center justify-center hover:bg-[#2974FF] hover:scale-110 transition-all duration-300 group">
          <MoveLeft className="w-5 h-5 text-black group-hover:text-white  transition-colors" />
        </button>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out forwards;
          opacity: 0;
        }

        .hero-swiper .swiper-pagination {
          bottom: 40px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
        }
        
        .hero-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background: rgba(59, 130, 246, 0.3) !important;
          opacity: 1 !important;
          margin: 0 8px !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
        }
        
        .hero-pagination-bullet-active {
          background: #3b82f6 !important;
          transform: scale(1.3) !important;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5) !important;
        }

        .hero-swiper .swiper-slide {
          height: auto !important;
        }

        .hero-swiper .swiper-slide-active .animate-fade-in-up,
        .hero-swiper .swiper-slide-active .animate-fade-in-right {
          animation-play-state: running;
        }
      `}</style>
    </section>
  )
}
export default HomeBanner