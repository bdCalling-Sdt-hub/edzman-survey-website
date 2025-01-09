'use client';
import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Input, Upload, Modal } from 'antd';
import 'antd/dist/reset.css';

export default function ShareYourWhy() {
  const [fileList, setFileList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleUpload = (info) => {
    let newFileList = [...info.fileList].slice(0, 5); // Limit to 5 files
    setFileList(newFileList);
  };

  const handleCancel = () => {
    setFileList([]);
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Files:', fileList);
    // Add further submission logic here
  };

  return (
    <Modal
      title={<span className="text-lg font-bold text-[#1d3557]">Share your WHY</span>}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      width={600}
      className="rounded-lg shadow-lg p-6"
    >
      <div className="space-y-6">
        {/* Upload Section */}
        <Upload.Dragger
          multiple
          fileList={fileList}
          onChange={handleUpload}
          className="border-dashed border-2 flex flex-col border-blue-300 rounded-lg p-6 hover:border-blue-500 transition duration-200"
          accept=".jpg,.png,.pdf,.docx"
          beforeUpload={() => false} // Prevent automatic upload
        >
          <div className="flex flex-col items-center justify-center text-center">
            <UploadOutlined className="text-blue-500 text-4xl mb-2" />
            <p className="text-gray-600 font-medium">Drag your file(s) to start uploading</p>
            <p className="text-gray-500 text-sm">OR</p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white mt-2">
              Browse files
            </Button>
            <p className="text-sm text-gray-400 mt-2">Max 5 files allowed</p>
          </div>
        </Upload.Dragger>

        {/* Story Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Story Title
          </label>
          <Input
            placeholder="Enter your story title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 rounded-md border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Story Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Story Description
          </label>
          <Input.TextArea
            rows={5}
            placeholder="Write a detailed description of your story..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-3 rounded-md border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end items-center gap-4">
          <Button
            onClick={handleCancel}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-md font-medium"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium"
          >
            Request for post
          </Button>
        </div>
      </div>
    </Modal>
  );
}
