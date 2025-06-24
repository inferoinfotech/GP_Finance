"use client";

import React from "react";

const stats = [
  { value: "20", label: "Year of\nexperience" },
  { value: "88", label: "Award\nwinning" },
  { value: "324", label: "Happy\ncustomers" },
  { value: "100%", label: "Satisfied\ncustomers" },
];

export default function GrowBusinessSection() {
  return (
    <section className="bg-primary-2 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-[1170px] mx-auto text-center">
          {/* Header */}
          <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42]  sm:text-4xl md:text-5xl font-semibold text-primary-3 uppercase tracking-wide">
            WE HELP YOU TO GROW YOUR BUSINESS
          </h2>
          <div className="w-16 h-[2px] bg-primary-1 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-500 max-w-3xl mx-auto text-[14px] md:text-[16px] md:text-base">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate.
          </p>

          {/* Stats Grid */}
          <div className=" grid  grid-cols1 sm:grid-cols-2 md:grid-cols-4 gap-30 mt-16">
            {stats.map((item, index) => (
              <div
                key={index}
                className="border border-primary-1 p-4 text-center transition-all hover:shadow-md hover:scale-[1.02]"
              >
                <span className="block text-[36px] font-bold text-primary-1 mb-2">{item.value}</span>
                <h4 className="text-gray-700 text-base font-medium whitespace-pre-line">{item.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
