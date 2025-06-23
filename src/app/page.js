import AwardWinningSection from "@/components/home/award-winning-section";
import GrowBusinessSection from "@/components/home/Growsection";
import HomeBanner from "@/components/home/HomeBanner";
import InsuranceJourney from "@/components/home/insurance-journey";
import InsuranceSolutions from "@/components/home/insurance-solutions";
import OurProcess from "@/components/home/OurProcess";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <>
      <HomeBanner />
      <GrowBusinessSection />
      <InsuranceSolutions />
      <WhyChooseUs />
      <OurProcess />
      <AwardWinningSection />
      <InsuranceJourney />
      </>
    </>
  );
}
