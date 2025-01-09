'use client';
import PageHeader from '@/components/PageHeader/PageHeader';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoMdSearch } from "react-icons/io";
import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';
import { BsSortNumericUp } from 'react-icons/bs';
import { ImSortNumbericDesc } from "react-icons/im";
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Empty } from 'antd';
import Link from 'next/link';

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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // Alphabetical sort
  const [dateSortOrder, setDateSortOrder] = useState(null); // Date sort
  const itemsPerPage = 6;

  useEffect(() => {
    axios
      .get('/jsonData/story.json') // Replace with your actual API
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handlePageChange = (newPage) => setCurrentPage(newPage);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setDateSortOrder(null); // Reset date sort when toggling alphabetical sort
  };

  const toggleDateSortOrder = () => {
    setDateSortOrder(dateSortOrder === 'newest' ? 'oldest' : 'newest');
    setSortOrder(null); // Reset alphabetical sort when toggling date sort
  };

  if (loading) {
    return (
      <div>
        <PageHeader
          title={'Uncover Your Why'}
          subTitle={'Take our free personality WHY\'s to uncover your "Why" and receive personalized guidance and actionable steps to help you live a fulfilling life.'}
        />
        <div className="max-w-screen-2xl px-4 mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, idx) => (
            <SkeletonLoader key={idx} />
          ))}
        </div>
      </div>
    );
  }

  if (error) return <div className="text-red-500 text-center py-8">Error: {error}</div>;

  // Filter and Sort Logic
  const filteredData = data.filter(item =>
    item?.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (dateSortOrder) {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateSortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    } else {
      return sortOrder === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    }
  });

  // Pagination Logic
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const currentItems = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white">
      <PageHeader
        title={'Uncover Your Why'}
        subTitle={'Take our free personality WHY\'s to uncover your "Why" and receive personalized guidance and actionable steps to help you live a fulfilling life.'}
      />
      <div className="max-w-screen-2xl px-4 mx-auto mt-8">
        {/* Search and Sort */}
        <div className="mb-4 w-full bg-[#e6f3fe] flex items-center rounded-full">
          <div className='w-full border-2 rounded-full'>
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
              <div className='flex items-center gap-2 ml p-2 text-nowrap text-black rounded-lg cursor-pointer'>
                <button
                  aria-label="Sort options"
                  className='text-black font-bold'>Sort By</button>
              </div>
            </PopoverTrigger>
            <PopoverContent className="p-4">
              <div className="space-y-4">
                <div className='flex items-center gap-2 cursor-pointer' onClick={toggleSortOrder}>
                  {sortOrder === 'asc' ? <FaSortAlphaDown className='text-xl' /> : <FaSortAlphaDownAlt className='text-xl' />}
                  <h1 className="text-black">{sortOrder === 'asc' ? 'Sort A to Z' : 'Sort Z to A'}</h1>
                </div>
                <div className='flex items-center gap-2 cursor-pointer' onClick={toggleDateSortOrder}>
                  {dateSortOrder === 'newest' ? <ImSortNumbericDesc className='text-xl' /> : <BsSortNumericUp className='text-xl' />}
                  <h1 className="text-black">{dateSortOrder === 'newest' ? 'Newest to Oldest' : 'Oldest to Newest'}</h1>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Blog Items */}
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <div key={item.id}>
              <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center gap-16 mb-8">
                <img
                  src={item?.bannerImage}
                  alt={item?.title}
                  className="w-full md:w-[50%] lg:w-[40%] h-auto object-cover rounded-md"
                />
                <div className="w-full lg:w-[50%]">
                  <h3 className="text-3xl font-semibold">{item?.title}</h3>
                  <p className="text-gray-700 mt-2">
                    {item?.description?.length > 200
                      ? `${item?.description.slice(0, 200)}...`
                      : item?.description}
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="flex items-center bg-[#bfe1fc] px-2 py-1 rounded-full">
                      <img
                        src={item?.author?.image || 'https://via.placeholder.com/40'}
                        alt={item?.author?.name || 'Author'}
                        className="w-6 h-6 rounded-full object-cover mr-2"
                      />
                      <p className="text-xs">{item?.author?.name || 'Unknown Author'}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-3 text-gray-500">
                      <SlCalender />
                      <p className="text-sm">{item?.date}</p>
                    </div>
                  </div>
                  <Link href={`/client-why/${item.id}`}>
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
            <p className="text-lg text-gray-600">No Why found. Try searching for something else!</p>
          </div>
        )}

        {/* Pagination */}
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
