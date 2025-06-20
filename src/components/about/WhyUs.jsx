import React from 'react';



function WhyUs() {
  return (
    <section className="relative section-padding pb-0">

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center py-16">
          {/* Left */}
          <div className="w-full lg:w-1/2 lg:pr-8 mb-10 lg:mb-0">
            <span
              className="relative pl-6 text-[16px] font-semibold text-blue-600  uppercase tracking-wider
                before:content-[''] before:absolute before:top-0 before:left-0
                before:w-[20px] before:h-[22px] before:bg-no-repeat
                before:bg-[length:19px] before:bg-[url('/images/subtitle-4.png')]"
            >
              Why choose us
            </span>
            <h2 className="mt-4 mb-4 text-[50px] font-bold text-gray-800 max-w-[500px]">
              Simplify Insurance Coverage Today
            </h2>
            <p className="mb-8 text-gray-600 text-[16px] max-w-[510px]">
              Another notable company is State Farm, a mutual insurance company that provides auto, home,
              and life insurance, as well as banking and financial services.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mb-10">
              <div className="flex items-center gap-4">
                <h2 className="text-[50px] font-bold text-gray-800"><span className="counter">89</span>k</h2>
                <h6 className="font-semibold text-[16px] text-gray-600 max-w-[145px] capitalize">
                  Project Completed Last Years
                </h6>
              </div>
              <div className="flex items-center gap-4">
                <h2 className="text-[50px] font-bold text-gray-800"><span className="counter">87</span>k</h2>
                <h6 className="font-semibold text-[16px] text-gray-600 max-w-[145px] capitalize">
                  Happy Customer Worldwide
                </h6>
              </div>
            </div>

            <a
              href="about.html"
              className="inline-block text-[16px] bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
            >
              Discover more
            </a>
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-auto flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-full">
                <img
                  src="/images/about-9.jpg"
                  alt="about-image"
                  className="w-full h-auto shadow-lg object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
