import React from "react";
import Services from "@/components/about/Overview";
import Counter from "@/components/about/Counter";
import ContactTeam from "@/components/about/ContactTeam";
import WhyUs from "@/components/about/WhyUs";
import OurTeam from "@/components/about/OurTeam";
import PageBanner from "@/components/layout/PageBanner";

function Page() {
  return (
    <>
      <PageBanner title="About Us" />
      <Services />
      <Counter />
      <ContactTeam />
      <WhyUs />
      <OurTeam />
    </>
  );
}

export default Page;
