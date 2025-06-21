import React from "react";
import PageBanner from "../layout/PageBanner";
import Link from "next/link";

function Page() {
  return (
    <div>
      <PageBanner title="About Us" />

      {/* Overview  */}
      <div className="relative py-16 overflow-hidden">
        {/* Background shapes */}
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Column - Images - Redesigned */}
            <div className="w-full xxl:w-1/2 mb-10 lg:mb-0">
              <div className="relative flex items-start justify-start z-10">
                {/* Small wave shape (top right) */}
                {/* <img
                  src="/images/about-7.png"
                  className="absolute right-5 top-10 w-32 h-4 sm:w-40 sm:h-5 animate-waveFloat hidden sm:block z-40"
                  alt="decorative wave"
                /> */}

                {/* Main image container */}
                <div className="relative z-20 w-full max-w-md mx-auto mb-15">
                  {/* Main image */}
                  <div className="relative overflow-hidde rounded-xl">
                    <img
                      src="/images/about-5.jpg"
                      alt="family happy"
                      className="w-[85%] h-auto object-cover rounded-xl"
                    />
                  </div>

                  {/* Overlapping image */}
                  <div className="absolute z-30 -bottom-18 right-[-8] w-3/5 sm:w-2/5 md:w-2/5 lg:w-2/5 xl:w-3/5 border-4 border-white rounded-lg shadow-xl transform transition-all duration-500 hover:-translate-y-2">
                    <img
                      src="/images/about-6.jpg"
                      alt="family seated"
                      className="rounded-lg w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content - Unchanged */}
            <div className="w-full xxl:w-1/2 lg:pl-12">
              <div>
                {/* Heading Section */}
                <div className="mb-8">
                  <span className="relative pl-6 text-[14px] md:text-[16px] font-semibold text-blue-600 uppercase tracking-wider before:content-[''] before:absolute before:top-[-2px] before:left-0 before:w-[20px] before:h-[22px] before:bg-no-repeat before:bg-[length:19px] before:bg-[url('/images/subtitle-4.png')]">
                    Company Overview
                  </span>
                  <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42] xl:text-[50px] font-bold mt-2 mb-4 text-gray-800 dark:text-white">
                    Discover Better Way to Plan for Your Family
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 max-w-lg text-[15px] md:[12px] lg:[16]">
                    Insure Family Safety refers to protecting the well-being and security of your loved ones through
                    various means. Our comprehensive planning solutions give you peace of mind for your family's future.
                  </p>
                </div>

                {/* Progress Bars */}
                <div className="lg:mr-8">
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <h6 className="text-base font-medium text-gray-700 dark:text-gray-300">Financial Security</h6>
                      <span className="text-blue-600 font-semibold">84%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full progress-bar" style={{ width: "84%" }}></div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <h6 className="text-base font-medium text-gray-700 dark:text-gray-300">Health Coverage</h6>
                      <span className="text-blue-600 font-semibold">76%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full progress-bar" style={{ width: "76%" }}></div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <h6 className="text-base font-medium text-gray-700 dark:text-gray-300">Education Planning</h6>
                      <span className="text-blue-600 font-semibold">92%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full progress-bar" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
                  <Link
                    href="/your-target-page"
                    className="relative inline-block px-6 py-3 text-white font-semibold bg-blue-600 rounded-lg overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-black scale-x-0 origin-center transition-transform duration-300 ease-in-out group-hover:scale-x-100 z-0"></span>
                    <span className="relative z-10 text-[16px]">Discover More</span>
                  </Link>

                  <div className="flex items-center gap-4">
                    <img
                      src="https://placehold.co/60x60/3b82f6/white?text=EP"
                      alt="Eleanor Pena"
                      className="w-14 h-14 rounded-full object-cover border-2 border-white shadow"
                    />
                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-white">Eleanor Pena</h5>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Founder & CEO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-100 rounded-full opacity-10 -z-10"></div>
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 bg-indigo-100 rounded-full opacity-10 -z-10"></div>
      </div>
    </div>
  );
}

export default Page;
