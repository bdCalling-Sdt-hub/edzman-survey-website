"use client";
import React, { useMemo, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, Modal, Input, Form, message, Image } from "antd";
import "antd/dist/reset.css";
import JoditEditor from "jodit-react";
import { useCreateNewStoryMutation } from "@/app/provider/redux/services/storyApis";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function ShareYourWhy() {
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [form] = Form.useForm();
  const [description, setDescription] = useState("");
  const [createStory, { isLoading: isCreating }] = useCreateNewStoryMutation();

  const handleUpload = ({ file }) => {
    if (!file.type.startsWith("image/")) {
      message.error("Only image files are allowed!");
      return;
    }
    setFileList([file]);
    const reader = new FileReader();
    reader.onload = () => setPreviewImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleCancel = () => {
    setFileList([]);
    setPreviewImage(null);
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", description);
      if (fileList.length > 0) {
        formData.append("story_image", fileList[0]);
      }
      const response = await createStory(formData);

      if (response?.data?.success) {
        setIsModalOpen(false);
        Swal.fire({
          title: `${response?.data?.message}`,
          icon: "success",
          draggable: true,
        });
      } else {
        message.error("Failed to create story");
      }
    } catch (error) {
      message.error("Please fill out all fields correctly.");
    }
  };
  const content = useMemo(() => {
    return (
      <JoditEditor
        value={description}
        onBlur={setDescription}
        config={{ readonly: false, height: 600, width: "100%" }}
      />
    );
  }, []);

  return (
    <Modal
      destroyOnClose={false}
      title={
        <span className="text-lg font-bold text-[#1d3557]">Share your WHY</span>
      }
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      width={1200}
      className="rounded-lg shadow-lg"
    >
      <Form form={form} layout="vertical">
        <div className="space-y-6">
          {/* Upload Section */}
          <Form.Item label="Story Image" name="story_image">
            <Upload
              fileList={fileList}
              beforeUpload={(file) => {
                handleUpload({ file });
                return false;
              }}
              showUploadList={false}
              accept="image/*"
              className="flex flex-col"
            >
              <Button
                icon={<UploadOutlined />}
                className="bg-[#21B6F2] text-white"
              >
                Upload Image
              </Button>
            </Upload>
            {previewImage && (
              <Image
                src={previewImage}
                alt="Preview"
                className="mt-4 max-w-xs"
              />
            )}
          </Form.Item>

          {/* Story Title */}
          <Form.Item
            label="Story Title"
            name="title"
            rules={[
              { required: true, message: "Please enter the story title" },
            ]}
          >
            <Input placeholder="Enter your story title" />
          </Form.Item>

          {/* Story Description */}
          <div>{content}</div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <Button
              onClick={handleCancel}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-md"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              loading={isCreating}
              className="bg-[#21B6F2] hover:bg-blue-600 text-white px-6 py-2 rounded-md"
            >
              Request for post
            </Button>
          </div>
        </div>
      </Form>
    </Modal>
  );
}
