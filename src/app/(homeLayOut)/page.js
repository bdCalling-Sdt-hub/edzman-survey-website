'use client';
import Banner from '@/components/LadingPage/Banner';
import CookiesModal from '@/components/cookie-modal/CookiesModal.jsx';
import CreatePersonalWhy from '@/components/LadingPage/CreatePersonalWhy';
import DonateSection from '@/components/LadingPage/DonateSection';
import Testimonials from '@/components/LadingPage/Testimonials';
import WelcomeSection from '@/components/LadingPage/WelcomeSection';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center md:gap-28">
        <CookiesModal />
        <Banner></Banner>
        <WelcomeSection></WelcomeSection>
        <CreatePersonalWhy></CreatePersonalWhy>
        <Testimonials></Testimonials>
        <DonateSection></DonateSection>
      </div>
    </>
  );
}
