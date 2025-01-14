import React from "react";
import { Button } from "antd";
import SectionHeader from "../SectionHeader/SectionHeader";
import { FaCheckCircle } from "react-icons/fa";

const plansData = [
  {
    title: "Career Counseling",
    price: "$19 /month",
    description: "The Career Guidance Course for Beginners With Udemy Academy",
    buttonText: "Get Started",
    features: [
      "Comprehensive career counseling for beginners.",
      "Step-by-step guidance for career selection and planning.",
      "Access to exclusive Udemy Academy content.",
      "Personalized progress tracking and recommendations.",
      "Certification upon course completion.",
    ],
  },
  {
    title: "Personal Development",
    price: "$15 /month",
    description: "Master Your Productivity With Skillshare",
    buttonText: "Get Started",
    features: [
      "Learn time management and productivity strategies.",
      "Access to 50+ guided video lessons.",
      "Downloadable productivity templates and tools.",
      "Personalized project feedback from Skillshare mentors.",
      "Certificate of completion to showcase your progress.",
    ],
  },
  {
    title: "Leadership Skills",
    price: "$49 /month",
    description: "Mastering Effective Team Management With LinkedIn Learning",
    buttonText: "Get Started",
    features: [
      "Learn leadership and team management techniques.",
      "Access to video lessons taught by industry experts.",
      "Templates for project management and team collaboration.",
      "Soft skills training, including communication and conflict resolution.",
      "LinkedIn Professional Certificate to boost your profile.",
    ],
  },
];

const PricingPlans = () => {
  return (
    <div>
      <SectionHeader
        title={`Affordable Learning Plans to Help You Achieve Your Goals`}
        subTitle={`Take the next step in unlocking your full career potential!`}
      ></SectionHeader>
      <div className="flex flex-wrap items-center justify-center mt-8">
        {plansData.map((plan, index) => (
          <div
            key={index}
            className={`bg-gradient-to-b flex flex-col ${index % 2 === 0 ? 'md:leading-2' : 'md:leading-8 md:gap-3'} from-[#e2eaef] to-[#7dbef1] text-white shadow-md rounded-lg m-4 p-6 w-full sm:w-80`}
          >
            <h3 className="text-lg font-bold text-gray-800">{plan.title}</h3>
            <p className="text-xl font-bold text-blue-500">{plan.price}</p>
            <p className="mt-2 text-gray-600">{plan.description}</p>
            <Button className="mt-4 w-full bg-blue-500 text-white hover:bg-blue-600">
              {plan.buttonText}
            </Button>
            <div className="w-full h-[1px] bg-black/20 my-2"></div>
            <ul className="mt-4 text-gray-600 space-y-2">
              {plan.features.map((feature, featureIndex) => (
                <li className="flex items-center gap-2" key={featureIndex}> <FaCheckCircle style={{ fontSize: '20px', marginRight: '10px' }} />{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Button className="bg-[#00b0f2] text-white hover:bg-[#00b0f2]/70 px-6 py-2 rounded-md">
          Explore More
        </Button>
      </div>
    </div>
  );
};

export default PricingPlans;
