"use client";
import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BsSortNumericUp } from "react-icons/bs";
import { ImSortNumbericDesc } from "react-icons/im";
import { GoArrowUpRight } from "react-icons/go";
import PageHeader from "@/components/PageHeader/PageHeader";
import { Empty } from "antd";
import Link from "next/link";
import { useGetAllBlogQuery } from "@/app/provider/redux/services/blogApis";
import { imageUrl } from "@/lib/utils";

function SkeletonLoader() {
  return (
    <div className="animate-pulse bg-gray-100 p-4 rounded-lg">
      <div className="h-40 w-full bg-gray-300 rounded-md mb-4"></div>
      <div className="h-6 w-3/4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
    </div>
  );
}

function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [dateSortOrder, setDateSortOrder] = useState(null);

  const { data: blogsData, isLoading } = useGetAllBlogQuery({});
  const blogs = blogsData?.data?.result || [];
  const meta = blogsData?.data?.meta || {
    page: 1,
    limit: 10,
    total: 0,
    totalPage: 1,
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, idx) => (
            <SkeletonLoader key={idx} />
          ))}
        </div>
      </div>
    );
  }

  const filteredBlogs = blogs.filter((blog) =>
    blog?.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    if (dateSortOrder) {
      return dateSortOrder === "newest"
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : new Date(a.createdAt) - new Date(b.createdAt);
    } else {
      return sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    }
  });

  // Pagination Logic
  const totalPages = meta.totalPage;
  const handlePageChange = (newPage) => setCurrentPage(newPage);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setDateSortOrder(null);
  };

  const toggleDateSortOrder = () => {
    setDateSortOrder(dateSortOrder === "newest" ? "oldest" : "newest");
    setSortOrder(null);
  };
  console.log(blogsData?.data?.result);

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Find Inspiration in Our Latest Blog Stories"
        subTitle="Explore our articles to uncover your 'Why' and receive actionable guidance."
      />
      <div className="container mx-auto py-8 px-4">
        {/* Search and Sort */}
        <div className="mb-4 w-full bg-[#e6f3fe] flex items-center rounded-full px-3">
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
              <div className="flex items-center gap-2 p-2 text-black rounded-lg cursor-pointer">
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
                  {sortOrder === "asc" ? (
                    <FaSortAlphaDown className="text-xl" />
                  ) : (
                    <FaSortAlphaDownAlt className="text-xl" />
                  )}
                  <h1 className="text-black">
                    {sortOrder === "asc" ? "Sort A to Z" : "Sort Z to A"}
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

        {/* Blog Items */}
        {sortedBlogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedBlogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={imageUrl(blog?.blog_image)}
                  alt={blog.title}
                  className="h-64 w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full inline-block">
                    {blog.hashtag}
                  </p>
                  <h2 className="text-lg font-semibold text-gray-800 mt-3">
                    {blog.title}
                  </h2>
                  <Link href={`/blog/${blog._id}`}>
                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-sm">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                      <span className="text-sm hover:underline ml-auto text-[#00b0f2]">
                        See more
                      </span>
                      <GoArrowUpRight />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
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
              className="p-3 mx-2 border-[1px] border-black text-black rounded-lg"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <MdOutlineKeyboardArrowLeft />
            </button>
            <span className="px-4 py-2 bg-[#407899] text-white rounded-lg">
              {currentPage}
            </span>
            <button
              className="p-3 mx-2 border-[1px] border-black text-black rounded-lg"
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

export default BlogPage;
