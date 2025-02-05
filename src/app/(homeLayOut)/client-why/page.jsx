"use client";
import PageHeader from "@/components/PageHeader/PageHeader";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoMdSearch } from "react-icons/io";
import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";
import { BsSortNumericUp } from "react-icons/bs";
import { ImSortNumbericDesc } from "react-icons/im";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Empty } from "antd";
import Link from "next/link";
import { useGetAllStoryQuery } from "@/app/provider/redux/services/storyApis";
import { imageUrl, stripHtmlTags } from "@/lib/utils";

function SkeletonLoader() {
  return (
    <div className="animate-pulse">
      <div className="h-64 w-full bg-gray-300 rounded-lg mb-4"></div>
      <div className="w-3/4 h-6 bg-gray-300 rounded mb-2"></div>
      <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
    </div>
  );
}

function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("title");
  const [dateSortOrder, setDateSortOrder] = useState(null);
  const itemsPerPage = 6;

  const { data: storyData, isLoading } = useGetAllStoryQuery({
    searchTerm,
    sort: sortOrder,
    page: currentPage,
    limit: itemsPerPage,
  });

  const stories = storyData?.data?.result || [];
  const totalPages = storyData?.data?.meta?.totalPage || 1;
  const approvedData = stories.filter((item) => item.status === "Approved");

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "title" ? "-title" : "title");
    setDateSortOrder(null);
  };

  const toggleDateSortOrder = () => {
    setDateSortOrder(dateSortOrder === "newest" ? "oldest" : "newest");
    setSortOrder(null);
  };
  console.log(approvedData);

  return (
    <div className="bg-white">
      <PageHeader
        title={"Uncover Your Why"}
        subTitle={
          'Take our free personality WHY\'s to uncover your "Why" and receive personalized guidance and actionable steps to help you live a fulfilling life.'
        }
      />
      <div className="max-w-screen-2xl px-4 mx-auto mt-8">
        {/* Search and Sort */}
        <div className="mb-4 w-full bg-[#e6f3fe] flex items-center rounded-full">
          <div className="w-full border-2 rounded-full">
            <div className="flex pl-4 px-2 rounded-full items-center gap-2 w-full">
              <IoMdSearch />
              <input
                type="text"
                placeholder="Search for Story"
                className="p-2 w-full outline-none bg-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex items-center gap-2 ml p-2 text-nowrap text-black rounded-lg cursor-pointer">
                <button
                  aria-label="Sort options"
                  className="text-black font-bold"
                >
                  Sort By
                </button>
              </div>
            </PopoverTrigger>
            <PopoverContent className="p-4">
              <div className="space-y-4">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={toggleSortOrder}
                >
                  {sortOrder === "title" ? (
                    <FaSortAlphaDown className="text-xl" />
                  ) : (
                    <FaSortAlphaDownAlt className="text-xl" />
                  )}
                  <h1 className="text-black">
                    {sortOrder === "title" ? "Sort A to Z" : "Sort Z to A"}
                  </h1>
                </div>
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={toggleDateSortOrder}
                >
                  {dateSortOrder === "newest" ? (
                    <ImSortNumbericDesc className="text-xl" />
                  ) : (
                    <BsSortNumericUp className="text-xl" />
                  )}
                  <h1 className="text-black">
                    {dateSortOrder === "newest"
                      ? "Newest to Oldest"
                      : "Oldest to Newest"}
                  </h1>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Story Items */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, idx) => (
              <SkeletonLoader key={idx} />
            ))}
          </div>
        ) : approvedData.length > 0 ? (
          approvedData.map((story) => (
            <div key={story._id}>
              <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center gap-16 mb-8">
                <img
                  src={imageUrl(story?.story_image)}
                  alt={story?.title}
                  className="w-full md:w-96 md:h-[400px] object-contain md:object-cover rounded-md"
                />
                <div className="w-full lg:w-[50%]">
                  <h3 className="text-3xl font-semibold">{story?.title}</h3>
                  <p className="text-gray-700 mt-2">
                    {story?.description?.length > 200
                      ? `${stripHtmlTags(story?.description).slice(0, 200)}...`
                      : stripHtmlTags(story?.description)}
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="flex items-center bg-[#bfe1fc] px-2 py-1 rounded-full">
                      <img
                        src={
                          imageUrl(story?.author?.profile_image) ||
                          "/default.png"
                        }
                        alt={story?.author?.name || "Author"}
                        className="w-6 h-6 rounded-full object-cover mr-2"
                      />
                      <p className="text-xs">
                        {story?.author?.name || "Unknown Author"}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ml-3 text-gray-500">
                      <SlCalender />
                      <p className="text-sm">
                        {new Date(story.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <Link href={`/client-why/${story._id}`}>
                    <Button className="bg-[#00b0f2] mt-4 hover:bg-[#00b0f2]/70">
                      Read More <MdOutlineKeyboardArrowRight />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="w-full h-[1px] bg-[#222]/20 my-2"></div>
            </div>
          ))
        ) : (
          <div className="text-center py-16">
            <Empty />
            <p className="text-lg text-gray-600">
              No stories found. Try searching for something else!
            </p>
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-between mb-4 mt-8">
          <h1 className="font-semibold">
            Showing {currentPage} of {totalPages}
          </h1>
          <div className="flex items-center">
            <button
              className="p-3 mx-2 border border-black text-black rounded-lg"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <MdOutlineKeyboardArrowLeft />
            </button>
            <span className="px-4 py-2 bg-[#407899] text-white rounded-lg">
              {currentPage}
            </span>
            <button
              className="p-3 mx-2 border border-black text-black rounded-lg"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
