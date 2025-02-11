import DonateSection from "@/components/LadingPage/DonateSection";
import PageHeader from "@/components/PageHeader/PageHeader";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <PageHeader
        title={"About Us"}
        subTitle={`Take our free personality WHY's to uncover your 'Why' and receive personalized guidance and actionable steps to help you live a fulfilling life.`}
      ></PageHeader>
      <div className="px-2 mt-12 max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-[#00b0f2] font-semibold text-lg md:text-xl text-center md:text-left">
            Changing Lives One 'Why' at a Time
          </h2>
          <h1 className="font-semibold text-2xl md:text-4xl text-center md:text-left">
            Our Step by Step Guide
          </h1>
          <p className="opacity-75 text-sm md:text-base text-center md:text-left">
            At<span className="text-[#00b0f2] underline">FindYourWhy.com</span>,
            we empower individuals to discover their true purpose in life
            through insightful guidance and self-reflection. Our mission is to
            help you unlock your potential, align your actions with your values,
            and pursue a fulfilling life with clarity and confidence.
          </p>
          <div className="flex items-start gap-4">
            <Image
              width={200}
              height={200}
              src="/Icon/rocket.png"
              alt="mission icon"
              className="w-12 h-12 md:w-16 md:h-16"
            />
            <div>
              <h1 className="text-lg md:text-3xl">Our Mission</h1>
              <p className="opacity-75 text-sm md:text-base">
                We believe that understanding your "Why" is the key to living a
                life of purpose. Our goal is to guide you through a
                transformative process, uncovering what truly drives you, and
                offering the tools and resources needed to create a meaningful
                journey.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Image
              width={200}
              height={200}
              src="/Icon/idea.png"
              alt="idea icon"
              className="w-12 h-12 md:w-16 md:h-16"
            />
            <div>
              <h1 className="text-lg md:text-3xl">Our Vision</h1>
              <p className="opacity-75 text-sm md:text-base">
                Our vision is to create a community where individuals are
                empowered to connect with their inner selves, embrace their
                unique journeys, and live authentically with purpose and
                fulfillment.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          <Image
            width={500}
            height={400}
            src="/image/aboutImage.png"
            alt="About Us Image"
          />
          <div className="text-center -mt-28 w-11/12  sm:w-8/12  md:w-9/12 lg:w-[80%] xl:w-7/12 bg-gradient-to-b from-[#2d4749] to-[#cee8f2] text-white rounded-3xl p-4 lg:px-8 shadow-xl lg:py-6">
            <h1 className="text-xl lg:text-3xl">Looking for Guidance?</h1>
            <p className="text-sm lg:text-xl font-extralight tracking-wide lg:leading-7">
              If you're ready to take the next step toward self-discovery, our
              resources are designed to help you find clarity, make empowered
              decisions, and live authentically. Join us in exploring your
              unique purpose today.
            </p>
          </div>
        </div>
      </div>
      <DonateSection></DonateSection>
    </div>
  );
}

export default page;
