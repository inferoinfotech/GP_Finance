import React from "react";
import PageBanner from "../layout/PageBanner";
import Link from "next/link";

function Page() {
  return (
    <div>
      <PageBanner title="About Us" />

      {/* Overview */}
      <div className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Column */}
            <div className="w-full xxl:w-1/2 mb-10 lg:mb-0">
              <div className="relative flex items-start justify-start z-10">
                <div className="relative z-20 w-full max-w-md mx-auto mb-15">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src="/images/about-5.jpg"
                      alt="family happy"
                      className="w-[85%] h-auto object-cover rounded-xl"
                    />
                  </div>

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

            {/* Right Column */}
            <div className="w-full xxl:w-1/2 lg:pl-12">
              <div>
                {/* Heading Section */}
                <div className="mb-8">
                  <span className="relative pl-6 text-[14px] md:text-[16px] font-semibold uppercase tracking-wider text-primary-1 before:content-[''] before:absolute before:top-[-2px] before:left-0 before:w-[20px] before:h-[22px] before:bg-no-repeat before:bg-[length:19px] before:bg-[url('/images/subtitle-4.png')]">
                    Company Overview
                  </span>
                  <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42] xl:text-[50px] font-bold mt-2 mb-4 text-primary-3">
                    Discover Better Way to Plan for Your Family
                  </h2>
                  <p className="text-para-5  max-w-lg text-[15px] md:[12px] lg:[16]">
                    Insure Family Safety refers to protecting the well-being and security of your loved ones through
                    various means. Our comprehensive planning solutions give you peace of mind for your family's future.
                  </p>
                </div>

                {/* Progress Bars */}
                <div className="lg:mr-8">
                  {[
                    { label: "Financial Security", percent: 84 },
                    { label: "Health Coverage", percent: 76 },
                    { label: "Education Planning", percent: 92 },
                  ].map((item, index) => (
                    <div key={index} className="mb-6">
                      <div className="flex justify-between mb-2">
                        <h6 className="text-base font-medium text-gray-700 ">{item.label}</h6>
                        <span className="font-semibold text-primary-1">{item.percent}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary-1" style={{ width: `${item.percent}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="mt-10">
                  <Link href="/your-target-page" className="link-button">
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Background Circles */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full opacity-10 -z-10 bg-primary-1"></div>
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 rounded-full opacity-10 -z-10 bg-primary-1"></div>
      </div>
    </div>
  );
}

export default Page;
