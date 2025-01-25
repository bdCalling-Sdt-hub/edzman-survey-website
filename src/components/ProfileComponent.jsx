"use client";
import React, { useState } from "react";
import { Input, Button, Select, Modal, Upload } from "antd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CameraOutlined, UploadOutlined } from "@ant-design/icons";
import PageHeader from "@/components/PageHeader/PageHeader";
import ShareYourWhy from "@/lib/modalcard/ShareYourWhy";
import DonateSection from "@/components/LadingPage/DonateSection";
import WhyHistory from "@/lib/modalcard/WhyHistory";
import Swal from "sweetalert2";

const { Option } = Select;

const InputField = ({
  label,
  value,
  onChange,
  type = "text",
  options,
  Component = Input,
  disabled = false,
}) => (
  <div className="w-full">
    <label className="block text-gray-700 font-medium mb-1">{label}</label>
    {Component === Select ? (
      <Select
        value={value}
        onChange={onChange}
        className="w-full"
        disabled={disabled}
      >
        {options?.map((opt) => (
          <Option key={opt} value={opt}>
            {opt}
          </Option>
        ))}
      </Select>
    ) : Component === DatePicker ? (
      <DatePicker
        selected={value ? new Date(value) : null}
        onChange={(date) => onChange(date)}
        dateFormat="yyyy-MM-dd"
        className="w-full p-2 border border-gray-300 rounded"
        wrapperClassName="w-full"
        disabled={disabled}
      />
    ) : (
      <Component
        value={value}
        onChange={(e) => onChange(e.target.value || "")}
        className="w-full"
        disabled={disabled}
      />
    )}
  </div>
);

const ProfileComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [WhyHistoryShow, setWhyHistoryShow] = useState(false);
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const [profileImage, setProfileImage] = useState(
    "https://randomuser.me/api/portraits/men/75.jpg"
  );
  const [profile, setProfile] = useState({
    Name: "Mojahid Islam",
    surname: "",
    profession: "Software Engineer",
    dateOfBirth: "1995-01-15",
    educationLevel: "Bachelor's Degree",
    email: "MojahidIslam@example.com",
    phone: "+8801737705511",
    country: "Bangladesh",
    city: "Dhaka",
  });

  const profileFields = [
    { key: "Name", label: "Full Name" },
    { key: "profession", label: "Profession" },
    {
      key: "dateOfBirth",
      label: "Date of Birth",
      Component: DatePicker,
    },
    {
      key: "educationLevel",
      label: "Education Level",
      Component: Select,
      options: ["High School", "Bachelor's Degree", "Master's Degree", "PhD"],
    },
    { key: "email", label: "Email", disabled: true },
    { key: "phone", label: "Phone Number", disabled: true },
    { key: "country", label: "Country" },
    { key: "city", label: "City" },
  ];

  const handleInputChange = (key, value) => {
    setProfile((prev) => ({
      ...prev,
      [key]:
        key === "dateOfBirth" && value
          ? value.toISOString().split("T")[0]
          : value,
    }));
  };

  const handleUpdate = () => {
    console.log("Updated Profile:", profile);
    Swal.fire({
      title: "Update Profile!",
      text: "You clicked the button!",
      icon: "success",
    });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Account has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setNewImage(reader.result);
    };
    reader.readAsDataURL(file);
    return false;
  };

  const saveNewImage = () => {
    setProfileImage(newImage);
    setImageModalVisible(false);
    Swal.fire({
      title: "Profile Image Updated!",
      text: "Your profile image has been successfully updated.",
      icon: "success",
    });
  };

  return (
    <>
      <PageHeader
        title={`Profile`}
        subTitle={`Explore your personalized journey to uncover your WHY. Take the next step by sharing your story and inspiring others to find their 'Why.'`}
      ></PageHeader>
      <div className="bg-gray-50">
        {/* Header Section */}
        <div className=" text-[#083a50] py-12 px-4">
          <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-8">
            <div className="relative border-4 rounded-full border-[#083a50] w-32 h-32 lg:w-40 lg:h-40">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />
              <div
                className="absolute bottom-2 right-2 bg-[#00b0f2] text-[#083a50] rounded-full p-1 cursor-pointer"
                onClick={() => setImageModalVisible(true)}
              >
                <CameraOutlined />
              </div>
            </div>
            <div className="flex-grow text-[#083a50]">
              <h1 className="text-3xl font-bold">
                {profile.Name} {profile.surname}
              </h1>
              <p className="text-[#083a50] mt-2">
                "Unlock Your Potential: Discover, Embrace, and Share Your 'Why'"
              </p>
              <div className="flex gap-4 mt-4">
                <Button
                  onClick={() => setWhyHistoryShow(!WhyHistoryShow)}
                  className="bg-[#00b0f2] rounded-md text-white hover:bg-[#00b0f2]"
                >
                  WHY Logs History
                </Button>
                <Button
                  onClick={() => setShowModal(!showModal)}
                  className="bg-[#00b0f2] rounded-md text-white hover:bg-[#00b0f2]"
                >
                  Share your WHY
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Form Section */}
        <div className="max-w-screen-xl mx-auto px-4 py-8 mt-6">
          <h2 className="text-2xl font-bold mb-6">Your Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileFields.map((field) => (
              <InputField
                key={field.key}
                label={field.label}
                value={
                  field.key === "dateOfBirth"
                    ? new Date(profile[field.key])
                    : profile[field.key]
                }
                onChange={(value) => handleInputChange(field.key, value)}
                options={field.options}
                Component={field.Component}
                disabled={field.disabled}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button
              danger
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-[#083a50] px-6 py-2 rounded-md"
            >
              Delete Account
            </Button>
            <Button
              onClick={handleUpdate}
              className="bg-[#00b0f2] rounded-md text-white hover:bg-[#00b0f2]"
            >
              Update
            </Button>
          </div>
        </div>
        {showModal && <ShareYourWhy></ShareYourWhy>}
        {WhyHistoryShow && <WhyHistory></WhyHistory>}
        <DonateSection></DonateSection>
      </div>
      <Modal
        title="Update Profile Image"
        open={imageModalVisible}
        onCancel={() => setImageModalVisible(false)}
        onOk={saveNewImage}
        okText="Save"
      >
        <div className="space-y-6">
          {/* Upload Section */}
          <Upload.Dragger
            className="border-dashed border-2 flex flex-col border-blue-300 rounded-lg p-6 hover:border-blue-500 transition duration-200"
            accept=".jpg,.png" // Restrict to image files
            beforeUpload={(file) => {
              const isImage =
                file.type === "image/jpeg" || file.type === "image/png";
              if (!isImage) {
                Swal.fire({
                  title: "Invalid File Type!",
                  text: "Only JPG/PNG images are allowed.",
                  icon: "error",
                });
                return Upload.LIST_IGNORE;
              }
              const isSmallEnough = file.size / 1024 / 1024 < 5; // Restrict to 5MB
              if (!isSmallEnough) {
                Swal.fire({
                  title: "File Too Large!",
                  text: "File size must be smaller than 5MB.",
                  icon: "error",
                });
                return Upload.LIST_IGNORE;
              }
              setNewImage(URL.createObjectURL(file)); // Preview the image
              return false; // Prevent auto-upload
            }}
            maxCount={1} // Allow only one file
            showUploadList={{
              showRemoveIcon: true,
            }}
            onRemove={() => setNewImage(null)} // Clear the preview on remove
          >
            {newImage ? (
              <img
                src={newImage}
                alt="Preview"
                className="w-full h-48 object-contain rounded"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center">
                <UploadOutlined className="text-blue-500 text-4xl mb-2" />
                <p className="text-gray-600 font-medium">
                  Drag your image here to upload
                </p>
                <p className="text-gray-500 text-sm">OR</p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white mt-2">
                  Browse files
                </Button>
              </div>
            )}
          </Upload.Dragger>
        </div>
      </Modal>
      ;
    </>
  );
};

export default ProfileComponent;
