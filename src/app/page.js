import Banner from "@/components/LadingPage/Banner";
import CreatePersonalWhy from "@/components/LadingPage/CreatePersonalWhy";
import DonateSection from "@/components/LadingPage/DonateSection";
import Testimonials from "@/components/LadingPage/Testimonials";

import WelcomeSection from "@/components/LadingPage/WelcomeSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center md:gap-28">
        {/* <Banner></Banner>    */}
        {/* <WelcomeSection></WelcomeSection> */}
        {/* <CreatePersonalWhy></CreatePersonalWhy> */}
        <Testimonials></Testimonials>
        {/* <DonateSection></DonateSection> */}
      </div>
    </>
  );
}
