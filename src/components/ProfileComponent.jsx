'use client';
import React, { useState } from 'react';
import { Input, Button, Select, Spin } from 'antd';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CameraOutlined } from '@ant-design/icons';
import PageHeader from '@/components/PageHeader/PageHeader';
import ShareYourWhy from '@/lib/modalcard/ShareYourWhy';
import DonateSection from '@/components/LadingPage/DonateSection';
import WhyHistory from '@/lib/modalcard/WhyHistory';
import Swal from 'sweetalert2';
import { imageUrl } from '@/lib/utils';
import {
  useProfileDeleteMutation,
  useProfileUpdateMutation,
} from '@/app/provider/redux/services/userApis';
import { toast } from 'sonner';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const { Option } = Select;

const InputField = ({
  label,
  value,
  onChange,
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
        selected={value ? new Date(value || null) : null}
        onChange={(date) => onChange(date)}
        dateFormat="yyyy-MM-dd"
        className="w-full p-2 border border-gray-300 rounded"
        wrapperClassName="w-full"
        disabled={disabled}
      />
    ) : (
      <Component
        value={value}
        onChange={(e) => onChange(e.target.value || '')}
        className="w-full"
        disabled={disabled}
      />
    )}
  </div>
);

const ProfileComponent = ({ userData, isLoading }) => {
  const router = useRouter();
  const user = userData?.data;

  const [updateProfile, { isLoading: updatingProfile }] =
    useProfileUpdateMutation();
  const [profileDelete, { isLoading: deleting }] = useProfileDeleteMutation();
  const [showModal, setShowModal] = useState(false);
  const [WhyHistoryShow, setWhyHistoryShow] = useState(false);
  const [image, setImage] = useState(null);
  const [profile, setProfile] = useState({
    name: user?.name || '',
    profession: user?.profession || '',
    dateOfBirth: user?.dateOfBirth || null,
    education: user?.education || '',
    email: user?.email || '',
    phone: user?.phone || '',
    country: user?.country || '',
    city: user?.city || '',
  });

  const profileFields = [
    { key: 'name', label: 'Full Name' },
    { key: 'profession', label: 'Profession' },
    {
      key: 'dateOfBirth',
      label: 'Date of Birth',
      Component: DatePicker,
    },
    {
      key: 'education',
      label: 'Education Level',
    },
    { key: 'email', label: 'Email', disabled: true },
    { key: 'phone', label: 'Phone Number', disabled: true },
    { key: 'country', label: 'Country' },
    { key: 'city', label: 'City' },
  ];

  const handleInputChange = (key, value) => {
    setProfile((prev) => ({
      ...prev,
      [key]:
        key === 'dateOfBirth' && value
          ? value.toISOString().split('T')[0]
          : value,
    }));
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    const updateData = {
      name: profile?.name,
      profession: profile?.profession,
      dateOfBirth: profile?.dateOfBirth,
      education: profile?.education,
      country: profile?.country,
      city: profile?.city,
    };
    Object.keys(updateData).forEach((key) => {
      formData.append(key, profile[key]);
    });

    if (image) {
      formData.append('profile_image', image);
    }

    try {
      const res = await updateProfile({ data: formData }).unwrap();
      toast.success(res?.message);
    } catch (error) {
      toast.error('An error occurred while updating the profile.');
    }
  };

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { value: password } = await Swal.fire({
          title: 'Please enter your password to confirm',
          input: 'password',
          inputPlaceholder: 'Enter your password',
          inputAttributes: {
            autocapitalize: 'off',
          },
          showCancelButton: true,
          confirmButtonText: 'Delete Account',
          cancelButtonText: 'Cancel',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          preConfirm: (password) => {
            if (!password) {
              Swal.showValidationMessage('Password is required');
              return false;
            }
            return password;
          },
        });

        if (password) {
          const data = {
            password: password,
          };

          try {
            const response = await profileDelete({ data }).unwrap();
            if (response.success) {
              toast.success('Account deleted successfully.');
              Cookies.remove('token');
              localStorage.removeItem('accessToken');
              localStorage.removeItem('browserInfo');
              localStorage.removeItem('cookieConsent');
              router.push('/login');
            } else {
              toast.error(response.message || 'An error occurred.');
            }
          } catch (error) {
            console.error('Error deleting account:', error);
            toast.error(
              error.message || 'An error occurred while deleting the account.'
            );
          }
        }
      }
    });
  };

  const handleImageUpload = (e) => {
    if (e.target.files?.[0]) {
      setImage(e.target.files[0]);
    }
  };

  const profileImages = image
    ? URL.createObjectURL(image)
    : user?.profile_image
    ? imageUrl(user?.profile_image)
    : '/path/to/default-image.jpg';

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
            <div className="w-32 border-[1px] border-black h-32 rounded-full relative">
              <img
                className="w-full h-full object-cover rounded-full border-4 border-white"
                src={profileImages}
                alt="Profile"
              />
              <div
                className="absolute bottom-2 right-2 bg-[#00b0f2] text-[#083a50] rounded-full p-1 cursor-pointer"
                onClick={() => document.getElementById('fileInput')?.click()}
              >
                <CameraOutlined className="text-white" />
              </div>

              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </div>
            <div className="flex-grow text-[#083a50]">
              <div className="text-center lg:text-start">
                <h1 className="text-3xl font-bold">
                  {profile.name} {profile.surname}
                </h1>
                <p className="text-[#083a50] mt-2">
                  "Unlock Your Potential: Discover, Embrace, and Share Your
                  'Why'"
                </p>
              </div>
              <div className="flex w-full items-center justify-center lg:items-start lg:justify-start gap-4 mt-4">
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
                  field.key === 'dateOfBirth'
                    ? profile[field.key]
                      ? new Date(profile[field.key])
                      : null
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
              {deleting ? 'Deleting...' : 'Delete Account'}
            </Button>
            <Button
              onClick={handleUpdate}
              className="bg-[#00b0f2] rounded-md text-white hover:bg-[#00b0f2]"
            >
              {updatingProfile ? <Spin size="small"></Spin> : 'Update'}
            </Button>
          </div>
        </div>
        {showModal && <ShareYourWhy></ShareYourWhy>}
        {WhyHistoryShow && <WhyHistory></WhyHistory>}
        <DonateSection></DonateSection>
      </div>
    </>
  );
};

export default ProfileComponent;
