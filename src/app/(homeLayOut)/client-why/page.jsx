'use client';
import PageHeader from '@/components/PageHeader/PageHeader';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { IoMdSearch } from 'react-icons/io';
import { FaFilter, FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';
import { BsSortNumericUp } from 'react-icons/bs';
import { ImSortNumbericDesc } from 'react-icons/im';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Card, Divider, Empty } from 'antd';
import Link from 'next/link';
import { useGetAllStoryQuery } from '@/app/provider/redux/services/storyApis';
import { imageUrl } from '@/lib/utils';
import Image from 'next/image';

function SkeletonLoader() {
  return (
    <div className="animate-pulse flex items-center gap-4">
      <div className="h-64 w-full bg-gray-300 rounded-lg mb-4"></div>
      <div className="w-full">
        <div className="w-3/4 h-6 bg-gray-300 rounded mb-2"></div>
        <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
        <div className="w-1/2 h-6 bg-gray-300 rounded mt-3"></div>
        <div className="w-1/2 h-6 bg-gray-300 rounded mt-3"></div>
      </div>
    </div>
  );
}

function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('title');
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
  const approvedData = stories.filter((item) => item.status === 'Approved');
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
    <div className="bg-white">
      <PageHeader
        title={'Uncover Your Why'}
        subTitle={
          'Take our free personality WHY\'s to uncover your "Why" and receive personalized guidance and actionable steps to help you live a fulfilling life.'
        }
      />
      <div className="max-w-screen-2xl px-4 mx-auto mt-8">
        {/* Search and Sort */}
        <div className="mb-4 w-full  flex items-center justify-between rounded-full">
          <div className="w-1/2 border-2 rounded-full">
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
              <div className="flex items-center gap-2 ml p-2 text-nowrap  rounded-lg cursor-pointer">
                <button
                  aria-label="Sort options"
                  className="!border-2 p-2 rounded-full hover:bg-slate-100"
                >
                  <FaFilter className="text-xl" />
                </button>
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
        {/* <Divider /> */}
        {/* Story Items */}
        {isLoading ? (
          <div className="grid grid-cols-1 gap-6">
            {[...Array(6)].map((_, idx) => (
              <SkeletonLoader key={idx} />
            ))}
          </div>
        ) : approvedData.length > 0 ? (
          approvedData.map((story) => (
            <Card key={story._id}>
              <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center gap-16 mb-8">
                <Image
                  width={400}
                  height={400}
                  src={imageUrl(story?.story_image)}
                  alt={story?.title}
                  className="w-full h-[250px] md:w-[500px] md:h-[300px] object-contain md:object-cover rounded-md"
                />
                <div className="w-full lg:w-[50%]">
                  <h3 className="text-xl md:text-3xl font-semibold">
                    {story?.title || 'No Title'}
                  </h3>
                  <p
                    className="text-gray-700 mt-2"
                    dangerouslySetInnerHTML={{
                      __html:
                        story?.description?.length > 200
                          ? `${story?.description.slice(0, 200)}...`
                          : story?.description,
                    }}
                  />
                  <div className="flex items-center mt-4">
                    <div className="flex items-center bg-[#bfe1fc] px-2 py-1 rounded-full">
                      <Image
                        width={200}
                        height={200}
                        src={
                          imageUrl(story?.author?.profile_image) ||
                          '/default.png'
                        }
                        alt={story?.author?.name || 'Author'}
                        className="w-6 h-6 rounded-full object-cover mr-2"
                      />
                      <p className="text-xs">
                        {story?.author?.name || 'Unknown Author'}
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
            </Card>
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
