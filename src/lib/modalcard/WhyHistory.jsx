"use client";
import React, { useState } from "react";
import { Button, Modal, Spin } from "antd";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import Link from "next/link";
import {
  useDeleteWhyMutation,
  useGetMyWhyQuery,
} from "@/app/provider/redux/services/whyApis";
import Swal from "sweetalert2";
import { toast } from "sonner";

export default function WhyLogsHistory() {
  const { data, isLoading } = useGetMyWhyQuery();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedWhy, setSelectedWhy] = useState(null);
  const [deleteWhy, { isLoading: deleteLoading }] = useDeleteWhyMutation();

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
      title: "Are you sure?",
      text: "You want to delete this why response.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await deleteWhy(id).unwrap();
        toast.success("Your why response has been deleted.");
        await Swal.fire(
          "Deleted!",
          "Your why response has been deleted.",
          "success"
        );
      } catch (error) {
        console.error("Failed to delete the why response:", error);
        toast.error("Failed to delete the why response.");
      }
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <Spin size="small" />;
  }

  return (
    <>
      <Modal
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
      </Modal>

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
          width={800}
          className="rounded-lg shadow-lg p-6"
        >
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-[#1d3557]">Initial Summary:</h4>
              <p className="text-gray-700">{selectedWhy.initialSummary}</p>
            </div>

            <div>
              <h4 className="font-semibold text-[#1d3557]">Key Points:</h4>
              <ul className="list-disc list-inside text-gray-700">
                {selectedWhy.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1d3557]">Strengths:</h4>
              <ul className="list-disc list-inside text-gray-700">
                {selectedWhy.strengths.map((strength, index) => (
                  <li key={index}>
                    <strong>{strength.title}:</strong> {strength.description}
                  </li>
                ))}
              </ul>
            </div>
            {selectedWhy.weaknesses.length > 0 && (
              <div>
                <h4 className="font-semibold text-[#1d3557]">Weaknesses:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {selectedWhy.weaknesses.map((weakness, index) => (
                    <li key={index}>
                      <strong>{weakness.title}:</strong> {weakness.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h4 className="font-semibold text-[#1d3557]">Final Summary:</h4>
              <p className="text-gray-700">{selectedWhy.finalSummary}</p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
