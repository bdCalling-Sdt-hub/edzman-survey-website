'use client';
import PageHeader from '@/components/PageHeader/PageHeader';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Pagination logic
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <PageHeader
        title={'Uncover Your Why'}
        subTitle={`Take our free personality WHY's to uncover your 'Why' and receive personalized guidance and actionable steps to help you live a fulfilling life.`}
      />

      <div className="max-w-screen-2xl px-1 mx-auto mt-8">
        {currentItems.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col lg:flex-row items-start md:items-center gap-16">
              {/* Image Section */}
              <img
                src={item.bannerImage}
                alt={`Banner for ${item.title}`}
                className="w-full lg:w-[50%] h-auto object-cover rounded-md mb-4"
              />
              {/* Text Content Section */}
              <div className="w-full lg:w-[50%]">
                <h3 className="text-3xl font-semibold underline">{item.title}</h3>
                <p className="text-gray-700 mt-2">
                  {item.description.length > 100 ? `${item.description.slice(0, 200)}...` : item.description}
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src={item.author.image}
                    alt={item.author.name}
                    className="w-10 h-10 object-cover rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">{item.author.name}</p>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                </div>
                <Button className="bg-[#00b0f2] my-3 hover:bg-[#00b0f2]/70">
                  Read more <MdOutlineKeyboardArrowRight />
                </Button>
              </div>
            </div>
            <div className="h-[1px] bg-[#222]/50 w-full mb-4"></div>
          </div>
        ))}


        <div className="flex justify-end mb-4 mt-8">
          <button
            className="p-3 mx-2 bg-transparent border-[1px] border-black  text-black rounded-lg"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          <span className="flex items-center justify-center px-4 py-2"><div className='px-4 py-2 mx-2 bg-[#407899] text-white rounded-lg'>
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
  );
}

export default Page;


// TODO: create sorting