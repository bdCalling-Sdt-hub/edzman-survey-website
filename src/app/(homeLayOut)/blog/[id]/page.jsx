"use client";
import { useSingleBlogGetQuery } from "@/app/provider/redux/services/blogApis";
import DonateSection from "@/components/LadingPage/DonateSection";
import PageHeader from "@/components/PageHeader/PageHeader";
import ShareLink from "@/components/shareLink/ShareLink";
import { imageUrl } from "@/lib/utils";
import { Spin } from "antd";
import Image from "next/image";
import { useParams } from "next/navigation";

function BlogPage() {
  const params = useParams();
  const blogId = params.id;
  const { data: blogData, isLoading } = useSingleBlogGetQuery({ id: blogId });

  if (isLoading) {
    return (
      <div className="text-center text-lg w-full min-h-screen flex items-center justify-center">
        <Spin size="small"></Spin>
      </div>
    );
  }

  const blog = blogData?.data;

  return (
    <div>
      <PageHeader
        title={`Find Inspiration in Our Latest Blog Stories`}
        subTitle={`Take our free personality WHY's to uncover your 'Why' and receive personalized guidance and actionable steps to help you live a fulfilling life.`}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col gap-6 items-start">
          <p className="text-xs sm:text-sm bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
            {blog.hashtag}
          </p>

          <h1 className="text-[#1D3557] text-2xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            {blog.title}
          </h1>

          <p className="text-gray-600 text-sm sm:text-base">
            <strong>Date:</strong>{" "}
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>

          <Image
            width={500}
            height={400}
            src={imageUrl(blog.blog_image)}
            alt={blog.title}
            className="w-full md:w-1/2 max-h-[200px] sm:max-h-[300px] object-cover rounded-lg"
          />

          <div
            className="prose prose-sm sm:prose-base lg:prose-lg text-gray-800 mt-8"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </div>
      </div>
      <ShareLink />
      <DonateSection />
    </div>
  );
}

export default BlogPage;
