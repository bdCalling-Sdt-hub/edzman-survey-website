'use client';
import React, { useState } from 'react';
import { Input, Button, Select, DatePicker } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import moment from 'moment'; // Ensure moment is imported
import PageHeader from '@/components/PageHeader/PageHeader';
import ShareYourWhy from '@/lib/modalcard/ShareYourWhy';
import DonateSection from '@/components/LadingPage/DonateSection';
import WhyHistory from '@/lib/modalcard/WhyHistory';

const { Option } = Select;

const InputField = ({ label, value, onChange, type = 'text', options, Component = Input }) => (
    <div>
        <label className="block text-gray-700 font-medium mb-1">{label}</label>
        {Component === Select ? (
            <Select value={value} onChange={onChange} className="w-full">
                {options?.map((opt) => (
                    <Option key={opt} value={opt}>
                        {opt}
                    </Option>
                ))}
            </Select>
        ) : Component === DatePicker ? (
            <DatePicker
                value={value ? moment(value, 'YYYY-MM-DD') : null}
                onChange={(date, dateString) => onChange(dateString)}
                className="w-full"
            />
        ) : (
            <Component value={value} onChange={onChange} className="w-full" />
        )}
    </div>
);

export default function Profile() {
    const [showModal, setShowModal] = useState(false)
    const [WhyHistoryShow, setWhyHistoryShow] = useState(false)
    const [profile, setProfile] = useState({
        firstName: 'Mojahid',
        surname: 'Islam',
        profession: 'Software Engineer',
        dateOfBirth: '1995-01-15',
        educationLevel: "Bachelor's Degree",
        email: 'MojahidIslam@example.com',
        phone: '+8801737705511',
        country: 'Bangladesh',
        city: 'Dhaka',
    });

    const profileFields = [
        { key: 'firstName', label: 'First Name' },
        { key: 'surname', label: 'Surname' },
        { key: 'profession', label: 'Profession' },
        {
            key: 'dateOfBirth',
            label: 'Date of Birth',
            Component: DatePicker,
        },
        {
            key: 'educationLevel',
            label: 'Education Level',
            Component: Select,
            options: ["High School", "Bachelor's Degree", "Master's Degree", 'PhD'],
        },
        { key: 'email', label: 'Email' },
        { key: 'phone', label: 'Phone Number' },
        { key: 'country', label: 'Country' },
        { key: 'city', label: 'City' },
    ];

    const handleInputChange = (key, value) => {
        setProfile((prev) => ({ ...prev, [key]: value }));
    };

    const handleUpdate = () => {
        console.log('Updated Profile:', profile);
        // Add logic for updating profile
    };

    const handleDelete = () => {
        console.log('Delete Account');
        // Add logic for deleting account
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
                                src="https://randomuser.me/api/portraits/men/75.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover rounded-full border-4 border-white"
                            />
                            <div className="absolute bottom-2 right-2 bg-[#00b0f2] text-[#083a50] rounded-full p-1 cursor-pointer">
                                <CameraOutlined />
                            </div>
                        </div>
                        <div className="flex-grow text-[#083a50]">
                            <h1 className="text-3xl font-bold">
                                {profile.firstName} {profile.surname}
                            </h1>
                            <p className="text-[#083a50] mt-2">
                                "Unlock Your Potential: Discover, Embrace, and Share Your 'Why'"
                            </p>
                            <div className="flex gap-4 mt-4">
                                <Button onClick={() => setWhyHistoryShow(!WhyHistoryShow)} className="bg-[#00b0f2] rounded-md text-white hover:bg-[#00b0f2]">
                                    WHY Logs History
                                </Button>
                                <Button onClick={() => setShowModal(!showModal)} className="bg-[#00b0f2] rounded-md text-white hover:bg-[#00b0f2]">
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
                                value={profile[field.key]}
                                onChange={(value) =>
                                    handleInputChange(field.key, value)
                                }
                                options={field.options}
                                Component={field.Component}
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
                {
                    showModal && <ShareYourWhy></ShareYourWhy>
                }
                {
                    WhyHistoryShow && <WhyHistory></WhyHistory>
                }
                <DonateSection></DonateSection>
            </div>
        </>
    );
}
