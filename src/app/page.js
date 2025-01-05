import Banner from "@/components/LadingPage/Banner";
import CreatePersonalWhy from "@/components/LadingPage/CreatePersonalWhy";
import Testimonials from "@/components/LadingPage/Testimonials";
import WelcomeSection from "@/components/LadingPage/WelcomeSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center md:gap-28">
        {/* MAKE THE LANDING PAGE RESPONSIVE */}
        <Banner></Banner>   
        <WelcomeSection></WelcomeSection>
        <CreatePersonalWhy></CreatePersonalWhy>
        <Testimonials/>
      </div>
    </>
  );
}
