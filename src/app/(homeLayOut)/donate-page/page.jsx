"use client";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import PageHeader from "@/components/PageHeader/PageHeader";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import DonateSection from "@/components/LadingPage/DonateSection";
import Link from "next/link";
import Image from "next/image";

const datas = [
  {
    img: "/image/image4.png",
    alt: `Create Your Why `,
    title: `Help Fund Personalized WHY'ss and Guidance`,
    description: `As you continue, additional questions help refine your journey, gathering key insights about your values and aspirations to craft a personalized experience.`,
  },
  {
    img: "/image/image5.png",
    alt: "Support Our Mission to Empower Lives",
    title: "Personalize Your ‘WHY’",
    description:
      "As you continue, additional questions help refine your journey by gathering key insights about your values and aspirations to craft a personalized experience. By finding your WHY, we can better align your goals with meaningful actions.",
  },
  {
    img: "/image/image6.png",
    alt: "Create Your Why",
    title: `Help Fund Personalized WHY'ss and Guidance`,
    description: `As you continue, additional questions help refine your journey, gathering key insights about your values and aspirations to craft a personalized experience.`,
  },
];
function page() {
  return (
    <div>
      <PageHeader
        title={`Help Us Inspire Purpose`}
        subTitle={`Take our free personality WHY's to uncover your 'Why' and receive personalized guidance and actionable steps to help you live a fulfilling life.`}
      ></PageHeader>
      <div className="container mx-auto">
        <SectionHeader
          title={`Why Help Us?`}
          subTitle={`At FindYourWhy.com, we are dedicated to helping individuals discover their true purpose, align with their passions, and lead more fulfilling lives. But we can't do it alone. Here's why your support is so crucial:`}
        ></SectionHeader>
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col items-center gap-12 justify-between">
            <div className="flex flex-col gap-12 px-2">
              {datas.map((data, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    idx % 2 === 0
                      ? "lg:flex-row flex-col"
                      : "flex-col lg:flex-row-reverse"
                  } items-center gap-16 justify-center `}
                >
                  <Image
                    width={400}
                    height={400}
                    className="flex-1 w-[500px]"
                    src={data?.img}
                    alt={data.alt}
                  />
                  <div className="flex-1 gap-6 items-start flex flex-col relative z-8">
                    <div
                      className={`-top-6 -left-4 -z-[888] w-12 h-12 ${
                        idx % 2 !== 0 ? "bg-[#1D355799]" : "bg-[#2196F399]/50"
                      } rounded-full  absolute`}
                    ></div>
                    <div className="bottom-0 right-12 -z-[888] w-8 h-8  rounded-full bg-[#00B0F2] absolute"></div>
                    <p className="text-4xl z-[888] text-[#1D3557] font-bold">
                      {data.title.split(" ").map((word, index) =>
                        word?.toLowerCase() === "‘why’" ||
                        word?.toLowerCase() === "story" ||
                        word?.toLowerCase() === "your" ? (
                          <span key={index} className="text-[#00B0F2]">
                            {word}{" "}
                          </span>
                        ) : (
                          <span key={index}>{word} </span>
                        )
                      )}
                    </p>
                    <p className="opacity-75 z-[888]">{data.description}</p>
                    <Link
                      className="flex items-center gap-2"
                      href={
                        "https://www.zeffy.com/en-US/embed/donation-form/donate-to-assist-others-with-find-your-why"
                      }
                    >
                      <div className="flex px-6 py-3 items-center hover:bg-[#00b0f2] transition-all border-[#00B0F2] rounded-md border-2 gap-2">
                        <button className="cursor-pointer">Donate Now</button>
                        <MdOutlineKeyboardArrowRight />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <DonateSection />
    </div>
  );
}

export default page;
