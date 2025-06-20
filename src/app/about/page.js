import React from "react";
import Services from "@/components/about/Overview";
import Counter from "@/components/about/Counter";
import ContactTeam from "@/components/about/ContactTeam";
import WhyUs from "@/components/about/WhyUs";

function Page() {
  return (
    <>
      <Services />
      <Counter />
      <ContactTeam />
      <WhyUs />
    </>
  );
}

export default Page;
