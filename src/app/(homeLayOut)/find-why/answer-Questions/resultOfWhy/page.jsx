"use client";
import { useState, useEffect, Suspense } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { CiCircleCheck } from "react-icons/ci";
import { PiWarningCircleThin } from "react-icons/pi";
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
import { useSearchParams } from "next/navigation";
import { useGetSingleWhyQuery } from "@/app/provider/redux/services/whyApis";
import { useProfileGetQuery } from "@/app/provider/redux/services/userApis";
import { Skeleton } from "antd";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import PageHeader from "@/components/PageHeader/PageHeader";
import ProgressBarCustom from "@/components/answer-Questions/ProgressBarCustom";
import Image from "next/image";
import DonateSection from "@/components/LadingPage/DonateSection";
import CourseSuggestions from "@/components/answer-Questions/CourseSuggestions";

function PageContent() {
  const searchParams = useSearchParams();
  const responseId = searchParams.get("id");
  const { data: user } = useProfileGetQuery();
  const {
    data: whyData,
    isLoading,
    isError,
  } = useGetSingleWhyQuery({ id: responseId });
  const [singleWhyData, setSingleWhyData] = useState(null);

  useEffect(() => {
    if (whyData) {
      setSingleWhyData(whyData);
    }
  }, [whyData]);

  const handlePrint = async () => {
    const pdf = new jsPDF("p", "pt", "a4");
    const pdfContent = document.querySelector(".printArea");

    const CourseSuggestionsElement =
      document.querySelector(".CourseSuggestions");
    const DonateSectionElement = document.querySelector(".DonateSection");
    const PageHeaderElement = document.querySelector(".PageHeader");
    const shareSection = document.querySelector(".shareSection");

    const canvas = await html2canvas(pdfContent);
    const imgData = canvas.toDataURL("image/png");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    const margin = 20;

    pdf.addImage(
      imgData,
      "PNG",
      margin,
      margin,
      pdfWidth - 2 * margin,
      pdfHeight - 2 * margin
    );

    pdf.save("result.pdf");

    CourseSuggestionsElement.style.display = "block";
    DonateSectionElement.style.display = "block";
    PageHeaderElement.style.display = "block";
    shareSection.style.display = "block";
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <Skeleton
          active
          paragraph={{ rows: 4 }}
          title={{ width: 200 }}
          className="w-full"
        />
        <Skeleton
          active
          paragraph={{ rows: 8 }}
          title={false}
          className="w-full"
        />
        <Skeleton
          active
          paragraph={{ rows: 4 }}
          title={{ width: 200 }}
          className="w-full"
        />
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching data. Please try again.</div>;
  }

  const initialSummary =
    singleWhyData?.data?.initialSummary || "No initial summary available.";
  const keyPoints = singleWhyData?.data?.keyPoints || [];
  const strengths = singleWhyData?.data?.strengths || [];
  const weaknesses = singleWhyData?.data?.weaknesses || [];
  const pieChartData = singleWhyData?.data?.pieChartData || [];
  const progressBarData = singleWhyData?.data?.progressBarData || [];
  const courseSuggestions = singleWhyData?.data?.courseSuggestions || [];
  const finalSummary =
    singleWhyData?.data?.finalSummary || "No final summary available.";

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28EF6"];

  return (
    <div>
      <PageHeader
        title={`Discover Your WHY`}
        subTitle={`Take our free personality WHY's to uncover your 'Why' and receive personalized guidance and actionable steps to help you live a fulfilling life.`}
      />
      <div className="container mx-auto p-4">
        <div className="printArea">
          <h1 className="text-3xl text-center font-bold mb-4">
            Hello {user?.data?.name}
          </h1>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Summary of Your WHY</h3>
            <p className="text-gray-700">{initialSummary}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-full justify-between flex flex-col md:flex-row">
              {keyPoints.length > 0 && (
                <div className="w-full md:w-1/2">
                  <h4 className="text-lg font-semibold mb-2">Key Points:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {keyPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
              {pieChartData.length > 0 && (
                <div className="md:w-1/2 flex md:flex-row flex-col justify-center">
                  <PieChart width={300} height={300}>
                    <Pie
                      data={pieChartData.map((item) => ({
                        name: item.category,
                        value: item.percentage,
                      }))}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      label
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </div>
              )}
            </div>
          </div>
          <div className="flex my-12 items-center md:flex-row flex-col justify-between">
            {progressBarData.length > 0 && (
              <div className="basis-3/4">
                <ProgressBarCustom data={progressBarData} />
              </div>
            )}
            {finalSummary && (
              <div className="flex flex-col items-center md:w-1/2 w-full bg-[#dbeffd] rounded-md p-2 md:p-12 gap-2 text-center">
                <p>Energy</p>
                <h1 className="text-xl font-bold">70% Summary of Findings</h1>
                <Image
                  src={"/result.svg"}
                  alt="resultIcon"
                  width={200}
                  height={150}
                />
                <p className="opacity-75 md:text-base text-sm">
                  {finalSummary}
                </p>
              </div>
            )}
          </div>
          <div>
            {strengths.length > 0 && (
              <>
                <h1 className="text-2xl md:text-4xl font-bold">
                  Your Strengths
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 md:p-4">
                  {strengths.map((strength, idx) => (
                    <div
                      key={idx}
                      className="p-4 flex flex-col items-start gap-2"
                    >
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
              </>
            )}
          </div>
          {weaknesses?.length > 0 && (
            <div className="mt-12">
              <h1 className="text-2xl md:text-4xl font-bold">
                Your Weaknesses
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 md:p-4">
                {weaknesses.map((weakness, idx) => (
                  <div
                    key={idx}
                    className="p-4 flex flex-col items-start gap-2"
                  >
                    <h1 className="text-xl font-bold text-gray-800">
                      {weakness.title}
                    </h1>
                    <div className="flex items-start gap-3">
                      <PiWarningCircleThin
                        style={{ fontSize: "50px", color: "#ffa337" }}
                      />
                      <p className="text-gray-600">{weakness.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex my-4 md:my-12 justify-between flex-col p-4 rounded-lg text-center">
          <div className="flex items-end">
            <img
              className="w-12 mt-12 sm:w-10 md:w-14 lg:w-16"
              src="/bullet-point 1.svg"
              alt="bullet-point icon"
            />
            <h2 className="md:text-2xl font-bold text-gray-800">
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
                className="rounded-md flex gap-2 items-center text-white px-6 py-2 rounded-mdhover:text-[#00b0f2] bg-[#00b0f2] border-[1px] border-[#00b0f2] transition-colors"
              >
                <SiMinutemailer style={{ fontSize: "20px" }} />
                Email the response
              </button>
              <button
                onClick={handlePrint}
                className="bg-gray-800 flex items-center gap-2 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                <FiPrinter style={{ fontSize: "20px" }} /> Print Your response
              </button>
            </div>
          </div>
        </div>

        <CourseSuggestions courseSuggestions={courseSuggestions} />
      </div>
      <DonateSection />
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
