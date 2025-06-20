import React from "react";

const PageBanner = ({ title }) => {
  return (
    <section
      className="relative h-[350px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/PageBanner.png')"}}
    >
      <div className="absolute inset-0  bg-opacity-50 flex flex-col items-start pl-22 justify-center text-white text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
        <p className="text-sm md:text-base tracking-wide">
          <a href="/" className="font-semibold hover:underline">
            HOME
          </a>{" "}
          / {title}
        </p>
      </div>
    </section>
  );
};

export default PageBanner;
