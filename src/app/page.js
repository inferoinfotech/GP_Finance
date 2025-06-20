import AwardWinningSection from "@/components/home/award-winning-section";
import HomeBanner from "@/components/home/HomeBanner";
import InsuranceJourney from "@/components/home/insurance-journey";
import InsuranceSolutions from "@/components/home/insurance-solutions";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <>
      <HomeBanner />
      <InsuranceSolutions />
      <AwardWinningSection />
      <InsuranceJourney />
      </>
    </>
  );
}
