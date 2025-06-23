"use client";

import React from "react";
import { Building2, BriefcaseBusiness, Newspaper, Medal } from "lucide-react";

const features = [
  {
    title: "Experienced",
    description:
      "In molestie, neque et porta lobortis, ligula sem auctor mauris, a luctus lacus quam sit amet augue. Aliquam eu felis. Nullam vel erat. Phasellus erat nibh.",
    icon: Building2,
  },
  {
    title: "Professional",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Easy To Use",
    description:
      "Nulla eros neque, egestas ut, auctor eu, luctus vitae, nisi. Aenean malesuada leo a nunc. Etiam fermentum neque in justo. Aliquam erat volutpat. Aenean tellus.",
    icon: Newspaper,
  },
  {
    title: "Vibrant",
    description:
      "Neque et porta lobortis, ligula sem auctor mauris, a luctus lacus quam sit amet augue. Aliquam eu felis. Nullam vel erat. Phasellus erat nibh, nonummy sit.",
    icon: Medal,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-primary-2 pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-[1170px] mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary-3 uppercase">Why Choose Us?</h2>
          <div className="w-16 h-[2px] bg-primary-1 mx-auto mt-4 mb-12" />

          {/* Grid Layout */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[500px]">
            {/* Left Column Features */}
            <div className="space-y-10">
              {features.slice(0, 2).map(({ title, description, icon: Icon }, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded border border-primary-1 text-primary-1">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary-3">{title}</h4>
                  <p className="text-sm text-primary-5 max-w-xs">{description}</p>
                </div>
              ))}
            </div>

            {/* Center Image: shown only on lg and up */}
            <div className="hidden lg:flex justify-center relative">
              <img
                src="/images/why-us-1.png"
                alt="Why Choose Us"
                className="absolute bottom-0 xl:h-[400px] object-contain"
              />
            </div>

            {/* Right Column Features */}
            <div className="space-y-10">
              {features.slice(2).map(({ title, description, icon: Icon }, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded border border-primary-1 text-primary-1">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary-3">{title}</h4>
                  <p className="text-sm text-primary-5 max-w-xs">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
