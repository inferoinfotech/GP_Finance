"use client"
import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const slides = [
      {
        id: 1,
        badge: "Best Insurance Agency",
        title: "Secure Your Business Future.",
        description:
          "Choose us for comprehensive insurance coverage that safeguards what Matters most, personalized to your unique needs.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QML5qZhGnrIQwNIqAFnIV3TBVyfgxn.png",
        mapLink: "https://www.google.com/maps",
      },
      {
        id: 2,
        badge: "Trusted Protection",
        title: "Protect What Matters Most.",
        description:
          "Experience peace of mind with our tailored insurance solutions designed to protect your family and business assets.",
        image: "/placeholder.svg?height=600&width=600",
        mapLink: "https://www.google.com/maps",
      },
      {
        id: 3,
        badge: "Expert Coverage",
        title: "Insurance Made Simple.",
        description:
          "Get the coverage you need with our expert guidance and personalized service that puts your needs first.",
        image: "/placeholder.svg?height=600&width=600",
        mapLink: "https://www.google.com/maps",
      },
    ]
const HomeBanner = () => {
  return (
    

    <section className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-container mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet-custom",
            bulletActiveClass: "swiper-pagination-bullet-active-custom",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="hero-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="min-h-[600px] lg:min-h-[700px] flex items-center py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
                  {/* Left Content */}
                  <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                    {/* Badge */}
                    <div className="inline-flex items-center">
                      <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium">
                        • {slide.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-lg">{slide.description}</p>

                    {/* Buttons */}
                    <div className="flex items-center gap-4">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300">
                        Discover More
                      </button>
                      <button className="w-14 h-14 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-300">
                        <Play className="w-5 h-5 ml-1" fill="currentColor" />
                      </button>
                    </div>

                    {/* Map Link */}
                    <div className="pt-4">
                      <a
                        href={slide.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm hover:underline"
                      >
                        {slide.mapLink}
                      </a>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="relative order-1 lg:order-2">
                    <div className="relative">
                      <img
                        src={slide.image || "/placeholder.svg"}
                        alt={`Hero slide ${slide.id}`}
                        className="w-full h-auto max-w-lg mx-auto lg:max-w-none"
                      />

                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -right-4 w-20 h-4">
                        <svg viewBox="0 0 80 16" className="w-full h-full text-blue-400">
                          <path
                            d="M0 8 Q10 0 20 8 T40 8 T60 8 T80 8"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                          />
                        </svg>
                      </div>

                      <div className="absolute -bottom-8 -right-8 w-16 h-16 grid grid-cols-4 gap-1">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 flex flex-col gap-4">
          <button className="swiper-button-prev-custom w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button className="swiper-button-next-custom w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-8 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-8 w-20 h-20 bg-blue-500 rounded-full opacity-10"></div>
      </div>
    </section>
  )
}
export default HomeBanner