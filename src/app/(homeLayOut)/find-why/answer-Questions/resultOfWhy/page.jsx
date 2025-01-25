"use client";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import PageHeader from "@/components/PageHeader/PageHeader";
import ProgressBarCustom from "@/components/answer-Questions/ProgressBarCustom";
import Image from "next/image";
import PricingPlans from "@/components/answer-Questions/PricingPlans";
import { CiCircleCheck } from "react-icons/ci";
import { PiWarningCircleThin } from "react-icons/pi";
import DonateSection from "@/components/LadingPage/DonateSection";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { FiPrinter } from "react-icons/fi";

function page() {
  // Sample data for the pie chart
  const data = [
    { name: "Passion", value: 10 },
    { name: "Health and Wellness", value: 15 },
    { name: "Personal Growth", value: 30 },
    { name: "Community Impact", value: 20 },
    { name: "Relationships", value: 25 },
  ];

  const strengthsData = [
    {
      title: "Understanding Others' Feelings",
      description:
        "You have an uncanny ability to understand others' feelings and needs.",
    },
    {
      title: "Strong Problem-Solving Skills",
      description:
        "You excel at finding creative solutions to complex problems.",
    },
    {
      title: "Effective Communication",
      description:
        "You are able to express yourself clearly and listen attentively to others.",
    },
    {
      title: "Empathy and Compassion",
      description:
        "You naturally connect with people and offer emotional support when needed.",
    },
    {
      title: "Adaptability",
      description:
        "You are flexible and thrive in dynamic environments, adjusting easily to new situations.",
    },
  ];

  const weaknesses = [
    {
      title: "Overthinking",
      description:
        "You tend to overanalyze situations, which can lead to indecision or unnecessary stress.",
    },
    {
      title: "Avoiding Conflict",
      description:
        "You prefer to avoid confrontation, sometimes leading to unresolved issues or misunderstandings.",
    },
    {
      title: "Difficulty Saying No",
      description:
        "You often struggle to set boundaries, taking on too many responsibilities at once.",
    },
    {
      title: "Perfectionism",
      description:
        "You hold yourself to very high standards, which can sometimes result in frustration or burnout.",
    },
    {
      title: "Impatience",
      description:
        "You can sometimes rush through tasks or expect quick results, which may lead to mistakes.",
    },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28EF6"];

  return (
    <div>
      <PageHeader
        title={`Discover Your WHY`}
        subTitle={`Take our free personality WHY's to uncover your 'Why' and receive personalized guidance and actionable steps to help you live a fulfilling life.`}
      ></PageHeader>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-center font-bold mb-4">
          Hello Mujahid Islam
        </h1>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Summary of Your WHY</h3>
          <p className="text-gray-700">
            Your empathetic nature is a powerful asset, enabling you to build
            meaningful relationships and understand others deeply. However, it
            can also lead to emotional fatigue if boundaries aren't maintained,
            as you may prioritize others' needs over your own. Balancing
            compassion with self-care is essential to harnessing this strength
            effectively.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-full justify-between flex flex-col md:flex-row">
            {/* Key Points Section */}
            <div className="w-full md:w-1/2">
              <h4 className="text-lg font-semibold mb-2">Key Points:</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Time Management Struggles</li>
                <li>Focus and Clarity Challenges</li>
                <li>Self-Care and Well-Being</li>
                <li>Procrastination Issues</li>
                <li>Consistency and Routine Building</li>
              </ul>
            </div>

            {/* Recharts Pie Chart */}
            <div className="md:w-1/2 flex md:flex-row flex-col justify-center">
              <PieChart width={300} height={300}>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                {/* <Legend /> */}
              </PieChart>
            </div>
          </div>
        </div>
        <div className="flex my-12 items-center md:flex-row flex-col justify-between">
          <div className="basis-3/4">
            <ProgressBarCustom />
          </div>
          <div className="flex flex-col items-center  bg-[#dbeffd] rounded-md p-12 gap-2 text-center">
            <p>Energy</p>
            <h1 className="text-xl font-bold">70% Summary of Findings</h1>
            <Image
              src={"/result.svg"}
              alt="resultIcon"
              width={200}
              height={150}
            />
            <p className="opacity-75">
              You likely get energized by social interaction and tend to openly
              express your enthusiasm and excitement.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold">Your Strengths</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 md:p-4">
            {strengthsData.map((strength, idx) => (
              <div key={idx} className="p-4 flex flex-col items-start gap-2">
                <h1 className="text-xl font-bold text-gray-800">
                  {strength.title}
                </h1>
                <div className="flex items-start gap-3">
                  <CiCircleCheck
                    style={{ fontSize: "40px", color: "#00B0F2" }}
                  />
                  <p className="text-gray-600">{strength.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <h1 className="text-2xl md:text-4xl font-bold">Your Weaknesses</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 md:p-4">
            {weaknesses.map((weaknese, idx) => (
              <div key={idx} className="p-4 flex flex-col items-start gap-2">
                <h1 className="text-xl font-bold text-gray-800">
                  {weaknese.title}
                </h1>
                <div className="flex items-start gap-3">
                  <PiWarningCircleThin
                    style={{ fontSize: "50px", color: "#ffa337" }}
                  />
                  <p className="text-gray-600">{weaknese.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex my-4 md:my-12 justify-between flex-col p-4 rounded-lg text-center">
          <div className="flex items-end">
            <img
              className="w-12 mt-12 sm:w-10 md:w-14 lg:w-16"
              src="/bullet-point 1.svg"
              alt="bullet-point icon"
            />
            <h2 className=" md:text-2xl font-bold text-gray-800">
              Share Your WHY Insights and Inspire Change
            </h2>
          </div>
          <div className="flex justify-between md:flex-row flex-col w-full mt-12">
            <div className="flex justify-center items-center gap-4 mb-6">
              <FaFacebookF className="text-blue-600 text-2xl cursor-pointer hover:scale-110 transition-transform" />
              <FaInstagram className="text-pink-500 text-2xl cursor-pointer hover:scale-110 transition-transform" />
              <FaTiktok className="text-black text-2xl cursor-pointer hover:scale-110 transition-transform" />
              <FaTwitter className="text-blue-400 text-2xl cursor-pointer hover:scale-110 transition-transform" />
              <FaWhatsapp className="text-green-500 text-2xl cursor-pointer hover:scale-110 transition-transform" />
              <FaTelegramPlane className="text-blue-400 text-2xl cursor-pointer hover:scale-110 transition-transform" />
            </div>
            <div className="flex justify-center md:flex-row flex-col gap-4">
              <button
                onClick={() => alert("Emailing the response...")}
                className="rounded-md flex gap-2 items-center text-white px-6 py-2 rounded-mdhover:text-[#00b0f2] bg-[#00b0f2]  border-[1px] border-[#00b0f2] transition-colors"
              >
                <SiMinutemailer style={{ fontSize: "20px" }} />
                Email the response
              </button>
              <button
                onClick={() => alert("Printing your response...")}
                className="bg-gray-800 flex items-center gap-2 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                <FiPrinter style={{ fontSize: "20px" }} /> Print Your response
              </button>
            </div>
          </div>
        </div>

        <PricingPlans />
      </div>
      <DonateSection />
    </div>
  );
}

export default page;
