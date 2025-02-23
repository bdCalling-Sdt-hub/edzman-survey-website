'use client';
import React, { useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { IoMdSearch } from 'react-icons/io';
import { FaFilter, FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { BsSortNumericUp } from 'react-icons/bs';
import { ImSortNumbericDesc } from 'react-icons/im';
import { GoArrowUpRight } from 'react-icons/go';
import PageHeader from '@/components/PageHeader/PageHeader';
import { Button, Empty } from 'antd';
import Link from 'next/link';
import { useGetAllBlogQuery } from '@/app/provider/redux/services/blogApis';
import { imageUrl } from '@/lib/utils';
import Image from 'next/image';

function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('title');
  const [dateSortOrder, setDateSortOrder] = useState(null);

  const { data: blogsData, isLoading } = useGetAllBlogQuery({
    searchTerm,
    sort: sortOrder,
    dateSortOrder,
    page: currentPage,
    limit: 9,
  });

  const blogs = blogsData?.data?.result || [];
  const totalPages = blogsData?.data?.meta?.totalPage || 1;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'title' ? '-title' : 'title');
    setDateSortOrder(null);
  };

  const toggleDateSortOrder = () => {
    setDateSortOrder(dateSortOrder === 'newest' ? 'oldest' : 'newest');
    setSortOrder(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Find Inspiration in Our Latest Blog Stories"
        subTitle="Explore our articles to uncover your 'Why' and receive actionable guidance."
      />
      <div className="container mx-auto py-8 px-4">
        {/* Search and Sort */}
        {/* <div className="mb-4 w-full bg-[#e6f3fe] flex items-center rounded-full">
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
                  <Button className="text-black w-full border-none ">
                    {sortOrder === "title" ? "Sort A to Z" : "Sort Z to A"}
                  </Button>
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
                  <Button className="text-black w-full border-none ">
                    {dateSortOrder === "newest"
                      ? "Newest to Oldest"
                      : "Oldest to Newest"}
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div> */}
        <div className="mb-4 w-full  flex items-center justify-between rounded-full">
          <div className="w-1/2 border-2 rounded-full">
            <div className="flex pl-4 px-2 rounded-full items-center gap-2 w-full">
              <IoMdSearch />
              <input
                type="text"
                placeholder="Search for Blog"
                className="p-2 w-full outline-none bg-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex items-center gap-2 ml p-2 text-nowrap text-black rounded-lg cursor-pointer">
                <div className="flex items-center gap-2 ml p-2 text-nowrap  rounded-lg cursor-pointer">
                  <button
                    aria-label="Sort options"
                    className="!border-2 p-2 rounded-full hover:bg-slate-100"
                  >
                    <FaFilter className="text-xl" />
                  </button>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent align="end" className="p-4">
              <div className="space-y-4">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={toggleSortOrder}
                >
                  {sortOrder === 'title' ? (
                    <FaSortAlphaDown className="text-xl" />
                  ) : (
                    <FaSortAlphaDownAlt className="text-xl" />
                  )}
                  <h1 className="text-black">
                    {sortOrder === 'title' ? 'Sort A to Z' : 'Sort Z to A'}
                  </h1>
                </div>
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={toggleDateSortOrder}
                >
                  {dateSortOrder === 'newest' ? (
                    <ImSortNumbericDesc className="text-xl" />
                  ) : (
                    <BsSortNumericUp className="text-xl" />
                  )}
                  <h1 className="text-black">
                    {dateSortOrder === 'newest'
                      ? 'Newest to Oldest'
                      : 'Oldest to Newest'}
                  </h1>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        {/* Blog Items */}
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  width={500}
                  height={400}
                  src={imageUrl(blog?.blog_image)}
                  alt={blog.title || 'blog Image'}
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
