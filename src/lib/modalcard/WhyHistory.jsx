'use client';
import React, { useState } from 'react';
import { Button, Modal, Spin } from 'antd';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import Link from 'next/link';
import {
  useDeleteWhyMutation,
  useGetMyWhyQuery,
} from '@/app/provider/redux/services/whyApis';
import Swal from 'sweetalert2';
import { toast } from 'sonner';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import { CiCircleCheck } from 'react-icons/ci';
import { PiWarningCircleThin } from 'react-icons/pi';
import ProgressBarCustom from '@/components/answer-Questions/ProgressBarCustom';
import energy from '../../../public/result.svg';
import Image from 'next/image';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28EF6'];

export default function WhyLogsHistory() {
  const { data, isLoading: whyLoading } = useGetMyWhyQuery();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedWhy, setSelectedWhy] = useState(null);
  const [deleteWhy, { isLoading: deleteLoading }] = useDeleteWhyMutation();
  if (whyLoading) {
    return (
      <div className="w-full flex items-center justify-center">
        <Spin />
      </div>
    );
  }
  const sortedData = data?.data
    ? [...data.data].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      )
    : [];

  const formatTitle = (index) => `Why Response Version ${index + 1}`;

  const handleView = (why) => {
    setSelectedWhy(why);
  };

  const handleCloseViewModal = () => {
    setSelectedWhy(null);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this why response.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        await deleteWhy(id).unwrap();
        toast.success('Your why response has been deleted.');
        await Swal.fire(
          'Deleted!',
          'Your why response has been deleted.',
          'success'
        );
      } catch (error) {
        console.error('Failed to delete the why response:', error);
        toast.error('Failed to delete the why response.');
      }
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      {/* <Modal
        title={
          <span className="text-lg font-bold text-[#1d3557]">
            WHY Logs History
          </span>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={800}
        className="rounded-lg shadow-lg p-6"
      >
        <div className="space-y-4">
          {sortedData.map((why, index) => (
            <div
              key={why._id}
              className="flex items-center  justify-between bg-gray-100 p-4 rounded-lg shadow-sm"
            >
              <div className="flex md:items-center w-full md:flex-row flex-col justify-center md:justify-between gap-3">
                <img className="w-12" src="/show.png" alt="" />
                <div className="flex md:items-center gap-2 md:flex-row flex-col items-start justify-between w-full ">
                  <div>
                    <h3 className="font-medium text-xl text-[#1d3557]">
                      {formatTitle(index)}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(why.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      className="bg-[#60B7FF] hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                      type="text"
                      icon={<EyeOutlined className="text-white" />}
                      onClick={() => handleView(why)}
                    />
                    <Button
                      className="bg-red-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                      type="text"
                      icon={<DeleteOutlined className="text-white" />}
                      onClick={() => handleDelete(why._id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-col md:flex-row gap-2 items-center justify-between mt-4">
            <span>Click Here to Create New WHY –</span>
            <Link href={`/ftw`}>
              <Button
                type="primary"
                className="bg-[#21B6F2] hover:bg-blue-600 text-white px-6 py-2 rounded-md"
              >
                Find Your Why
              </Button>
            </Link>
          </div>
        </div>
      </Modal> */}
      <div className="space-y-4">
        {sortedData.map((why, index) => (
          <div
            key={why._id}
            className="flex items-center  justify-between bg-gray-100 p-4 rounded-lg shadow-sm"
          >
            <div className="flex md:items-center w-full md:flex-row flex-col justify-center md:justify-between gap-3">
              <img className="w-12" src="/show.png" alt="" />
              <div className="flex md:items-center gap-2 md:flex-row flex-col items-start justify-between w-full ">
                <div>
                  <h3 className="font-medium text-xl text-[#1d3557]">
                    {formatTitle(index)}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(why.createdAt).toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    className="bg-[#60B7FF] hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    type="text"
                    icon={<EyeOutlined className="text-white" />}
                    onClick={() => handleView(why)}
                  />
                  <Button
                    className="bg-red-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    type="text"
                    icon={<DeleteOutlined className="text-white" />}
                    onClick={() => handleDelete(why._id)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between mt-4">
          <span>Click Here to Create New WHY –</span>
          <Link href={`/ftw`}>
            <Button
              type="primary"
              className="bg-[#21B6F2] hover:bg-blue-600 text-white px-6 py-2 rounded-md"
            >
              Find Your Why
            </Button>
          </Link>
        </div>
      </div>
      {selectedWhy && (
        <Modal
          title={
            <span className="text-lg font-bold text-[#1d3557]">
              {formatTitle(sortedData.indexOf(selectedWhy))}
            </span>
          }
          open={!!selectedWhy}
          onCancel={handleCloseViewModal}
          footer={null}
          width={1200}
          className="rounded-lg shadow-lg p-6"
        >
          <div className="container mx-auto p-4">
            <div className="border-b-2 pb-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">WHY Analysis</h2>

              {/* Initial Summary Section */}
              {selectedWhy?.initialSummary && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Summary</h3>
                  <p className="text-gray-700">{selectedWhy?.initialSummary}</p>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="w-full justify-between flex flex-col md:flex-row">
                  {/* Key Points Section */}
                  {selectedWhy?.keyPoints && (
                    <div className="w-full md:w-1/2">
                      <h4 className="text-lg font-semibold mb-2">
                        Key Points:
                      </h4>
                      <ul className="list-disc list-inside text-gray-700">
                        {selectedWhy?.keyPoints.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Recharts Pie Chart */}
                  {selectedWhy?.pieChartData && (
                    <div className="md:w-1/2 flex md:flex-row flex-col justify-center">
                      <PieChart width={300} height={300}>
                        <Pie
                          data={selectedWhy?.pieChartData}
                          dataKey="percentage"
                          nameKey="category"
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          fill="#8884d8"
                          label
                        >
                          {selectedWhy?.pieChartData.map((entry, i) => (
                            <Cell key={i} fill={COLORS[i % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </div>
                  )}
                </div>
              </div>

              {/* Strengths Section */}
              {selectedWhy?.strengths && (
                <div>
                  <h1 className="text-2xl md:text-4xl font-bold">
                    Your Strengths
                  </h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 md:p-4">
                    {selectedWhy?.strengths.map((strength, idx) => (
                      <div
                        key={idx}
                        className="p-4 flex flex-col items-start gap-2"
                      >
                        <h1 className="text-xl font-bold text-gray-800">
                          {strength.title}
                        </h1>
                        <div className="flex items-start gap-3">
                          <CiCircleCheck
                            style={{ fontSize: '40px', color: '#00B0F2' }}
                          />
                          <p className="text-gray-600">
                            {strength.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Weaknesses Section */}
              {selectedWhy?.weaknesses.length > 0 && (
                <div className="mt-12">
                  <h1 className="text-2xl md:text-4xl font-bold">
                    Your Weaknesses
                  </h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 md:p-4">
                    {selectedWhy?.weaknesses.map((weakness, idx) => (
                      <div
                        key={idx}
                        className="p-4 flex flex-col items-start gap-2"
                      >
                        <h1 className="text-xl font-bold text-gray-800">
                          {weakness.title}
                        </h1>
                        <div className="flex items-start gap-3">
                          <PiWarningCircleThin
                            style={{ fontSize: '50px', color: '#ffa337' }}
                          />
                          <p className="text-gray-600">
                            {weakness.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Progress Bar Section */}
              <div className="flex my-12 items-center md:flex-row flex-col justify-between">
                {selectedWhy?.progressBarData && (
                  <div className="w-full flex-1">
                    <ProgressBarCustom data={selectedWhy?.progressBarData} />
                  </div>
                )}
                {selectedWhy?.finalSummary && (
                  <div className="flex-1 flex flex-col items-center bg-[#dbeffd] rounded-md p-12 gap-2 text-center">
                    <Image
                      width={50}
                      height={50}
                      src={energy}
                      alt="Eergy"
                      className="w-48 h-48"
                    />
                    <p>Energy</p>
                    <h1 className="text-xl font-bold">
                      70% Summary of Findings
                    </h1>
                    <p className="opacity-75">{selectedWhy?.finalSummary}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
