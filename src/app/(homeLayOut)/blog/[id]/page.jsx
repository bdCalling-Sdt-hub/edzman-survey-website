"use client";

import DonateSection from "@/components/LadingPage/DonateSection";
import PageHeader from "@/components/PageHeader/PageHeader";
import ShareLink from "@/components/shareLink/ShareLink";
import { Spin } from "antd";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function BlogPage() {
  const params = useParams();
  const blogId = params.id;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/jsonData/blogs.json")
      .then((res) => {
        const blogs = res.data;
        const foundBlog = blogs.find((item) => item.id === parseInt(blogId));
        if (foundBlog) {
          setBlog(foundBlog);
        } else {
          setError("Blog not found");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [blogId]);

  if (loading) {
    return (
      <div className="text-center text-lg w-full min-h-screen flex items-center justify-center">
        Loading....
      </div>
    )
  };
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div>
      <PageHeader
        title={`Find Inspiration in Our Latest Blog Stories`}
        subTitle={`Take our free personality WHY's to uncover your 'Why' and receive personalized guidance and actionable steps to help you live a fulfilling life.`}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col gap-6 items-start">
          <p className="text-xs sm:text-sm bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
            {blog.category}
          </p>

          <h1 className="text-[#1D3557] text-2xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            {blog.title}
          </h1>

          <p className="text-gray-600 text-sm sm:text-base">
            <strong>Date:</strong> {blog.date}
          </p>

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full max-h-[400px] sm:max-h-[600px] object-cover rounded-lg shadow-lg"
          />

          <div className="prose prose-sm sm:prose-base lg:prose-lg text-gray-800 mt-8">
            {blog.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {blog.sections &&
            blog.sections.map((section, index) => (
              <div key={index} className="mt-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1D3557] mb-4">
                  {section.heading}
                </h2>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
                  {section.text}
                </p>
              </div>
            ))}
        </div>
      </div>
      <ShareLink></ShareLink>
      <DonateSection></DonateSection>
    </div>
  );
}

export default BlogPage;
