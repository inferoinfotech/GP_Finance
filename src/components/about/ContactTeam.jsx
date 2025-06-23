import React from "react";
import Link from "next/link";

function ContactTeam() {
  return (
    <section className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-fixed z-0"
        style={{
          backgroundImage: "url('/images/call-banner.jpg')", // replace with your image path
        }}
      ></div>

      {/* Dark Transparent Overlay */}
      <div className="absolute inset-0 bg-gray-900/70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-[1170px]">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug max-w-3xl mx-auto">
          Manage your money <br />
          with more{" "}
          <span className="text-primary-1 font-bold">confidence</span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg mt-4 max-w-xl mx-auto">
          Plan smart. Save better. Invest with purpose.
        </p>

        <Link
          href="/your-target-page"
          className="inline-block mt-8 link-button-2  px-8 py-3  shadow-md"
        >
          GET STARTED
        </Link>
      </div>
    </section>
  );
}

export default ContactTeam;
