"use client";

import React from "react";

const processSteps = [
  {
    title: "Define Objectives",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
    number: "01",
    align: "left",
  },
  {
    title: "Define Objectives",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
    number: "02",
    align: "right",
  },
  {
    title: "Implementation",
    description:
      "Aliquam eu felis. Nullam vel erat. Phasellus erat nibh, nonummy sit amet, lobortis quis, imperdiet ornare, dolor. Nunc odio. Nulla eros neque, egestas",
    number: "03",
    align: "left",
  },
  {
    title: "Define Objectives",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
    number: "04",
    align: "right",
  },
];

export default function OurProcess() {
  return (
    <section className="bg-primary-5 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-[1170px] mx-auto text-center">
          <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42] font-semibold text-primary-3 uppercase">Our Process</h2>
          <div className="w-16 h-[2px] bg-primary-1 mx-auto mt-4 mb-12" />

          <div className="relative  grid grid-cols-1 md:grid-cols-2 gap-y-16 before:hidden md:before:block before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-[1px] before:bg-gray-300">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col ${
                  step.align === "left" ? "items-end pr-6 text-right" : "items-start pl-6 text-left md:mt-16"
                }`}
              >
                {/* <div className="absolute top-0 md:top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary-1 bg-primary-2 z-10"></div> */}

                <div className="text-primary-1 text-[16px]">{step.number}</div>
                <h3 className="text-primary-3 text-[18px] font-semibold mt-2">{step.title}</h3>
                <p className="text-[14px] text-primary-5 mt-2 max-w-md">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
