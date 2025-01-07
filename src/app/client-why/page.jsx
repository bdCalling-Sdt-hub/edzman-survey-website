'use client';
import PageHeader from '@/components/PageHeader/PageHeader';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowUp, IoMdSearch } from "react-icons/io";

//
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { GiSettingsKnobs } from "react-icons/gi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { MdOutlineQuestionMark } from 'react-icons/md'
import { VscSignOut } from "react-icons/vsc";
import { Spin } from 'antd'
import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';
//

function SkeletonLoader() {
  return (
    <div className="animate-pulse">
      <div className="h-64 w-full bg-gray-300 rounded-lg mb-4"></div>
      <div className="w-3/4 h-6 bg-gray-300 rounded mb-2"></div>
      <div className="w-1/2 h-6 bg-gray-300 rounded mb-2"></div>
      <div className="w-1/4 h-6 bg-gray-300 rounded"></div>
    </div>
  );
}

function ImageSkeleton({ isLoading, src, alt, className }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!imageLoaded && isLoading && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-md"></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
}

function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const itemsPerPage = 6;

  useEffect(() => {
    axios
      .get('/jsonData/story.json')
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const user = {
    login: true,
    photoURL: 'https://github.com/shadcn.png',
    displayName: 'expmple@mail.com',
    email: 'Hosain ali',

  }

  if (loading) {
    return (
      <div>
        <PageHeader
          title={'Uncover Your Why'}
          subTitle={'Take our free personality WHY\'s to uncover your "Why" and receive personalized guidance and actionable steps to help you live a fulfilling life.'}
        />
        <div className="max-w-screen-2xl px-4 mx-auto mt-8">
          {[...Array(3)].map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) return <div>Error: {error}</div>;

  // Search and filter data
  const filteredData = data.filter(item =>
    item?.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting logic
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSortChange = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className='bg-white'>
      <PageHeader
        title={'Uncover Your Why'}
        subTitle={'Take our free personality WHY\'s to uncover your "Why" and receive personalized guidance and actionable steps to help you live a fulfilling life.'}
      />

      <div className="max-w-screen-2xl px-1 mx-auto mt-8">
        <div className="mb-4 w-full bg-[#e6f3fe] flex items-center rounded-full">
          <div className='w-full border-2 rounded-full '>
            <div className='flex pl-4 px-2 rounded-full items-center gap-2 w-full'>
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
              <div className='flex items-center  gap-2 ml p-2  text-nowrap text-white rounded-lg'>
                <button
                  aria-label="Sort options" className='text-black font-bold'>Sort By</button>
                <IoIosArrowUp className='text-black font-bold' />
              </div>
            </PopoverTrigger>
            <PopoverContent className="p-4">
              {
                sortOrder === 'asc' ?
                  (
                    <div className='flex items-center gap-2'>
                      <FaSortAlphaDown className='text-xl' />
                      <h1
                        className="ml p-2 w-full cursor-pointer text-nowrap text-black rounded-lg"
                        onClick={handleSortChange}
                      >
                        Sort A to Z
                      </h1>
                    </div>
                  ) :

                  (
                    <div className='flex items-center gap-2'>
                      <FaSortAlphaDownAlt className='text-xl' />
                      <h1
                        className="ml p-2 cursor-pointer w-full text-nowrap text-black rounded-lg"
                        onClick={() => handleSortChange("desc")}
                      >
                        Sort Z to A
                      </h1>
                    </div>
                  )
              }

            </PopoverContent>
          </Popover>


        </div>

        {
          currentItems.length === 0 ? (
            <div className="flex items-center justify-center py-28">
              <div className="text-center p-8 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-semibold text-gray-800">Data Not Found</h1>
                <p className="text-gray-600 mt-2">Oops! We couldn’t find the data you’re looking for.</p>
              </div>
            </div>
          ) : (
            currentItems.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col lg:flex-row items-start md:items-center gap-16">
                  {/* Image Section */}
                  <img
                    src={item?.bannerImage || 'https://static.thenounproject.com/png/504708-200.png'}
                    alt={`Banner for ${item?.title}`}
                    className="w-full lg:w-[50%] h-auto object-cover rounded-md mb-4"
                  />
                  {/* Text Content Section */}
                  <div className="w-full lg:w-[50%]">
                    <h3 className="text-3xl font-semibold">{item?.title}</h3>
                    <p className="text-gray-700 mt-2">
                      {item?.description.length > 200 ? `${item?.description.slice(0, 200)}...` : item?.description}
                    </p>
                    <div className="flex items-center mt-4">
                      <div className='flex items-center pr-2 bg-[#bfe1fc] p-1 rounded-full'>
                        <img
                          src={item?.author.image}
                          alt={item?.author.name}
                          className="w-6 h-6 object-cover rounded-full mr-3"
                        />
                        <p className="text-xs">- {item?.author.name}</p>
                      </div>
                      <div className='flex items-center gap-2 ml-3'>
                        <SlCalender />
                        <p className="text-sm text-gray-500">{item?.date}</p>
                      </div>
                    </div>
                    <Button className="bg-[#00b0f2] my-3 hover:bg-[#00b0f2]/70">
                      Read more <MdOutlineKeyboardArrowRight />
                    </Button>
                  </div>
                </div>
                <div className="h-[1px] bg-[#222]/50 w-full mb-4"></div>
              </div>
            ))
          )
        }

        <div className="flex justify-between mb-4 mt-8">
          <div>
            <h1 className='font-semibold'>Showing {currentPage} of {totalPages}</h1>
          </div>
          <div className='flex items-center'>
            <button
              className="p-3 mx-2 bg-transparent border-[1px] border-black  text-black rounded-lg"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <MdOutlineKeyboardArrowLeft />
            </button>
            <span className="flex items-center justify-center px-4 py-2">
              <div className='px-4 py-2 mr-2 bg-[#407899] text-white rounded-lg'>
                {currentPage}</div> of {totalPages}</span>
            <button
              className="p-3 mx-2 bg-transparent border-[1px] border-black  text-black rounded-lg"
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

// TODO: Question === 0 page styling