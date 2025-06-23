import React from "react";
import Services from "@/components/about/Overview";
import Counter from "@/components/about/Counter";
import ContactTeam from "@/components/about/ContactTeam";
import WhyUs from "@/components/about/WhyUs";
import OurTeam from "@/components/about/OurTeam";

function Page() {
  return (
    <>
      <Services />
      <Counter />
      <ContactTeam />
      <WhyUs />
      <OurTeam />
    </>
  );
}

export default Page;
