'use client'
import { Form, Input, Button, Select, Modal } from "antd";
import React, { useState } from "react";
import OtpForm from "./OtpForm";

const { Option } = Select;

const countryCodes = [
    { code: "+1", name: "United States" },
    { code: "+44", name: "United Kingdom" },
    { code: "+91", name: "India" },
    { code: "+61", name: "Australia" },
    { code: "+81", name: "Japan" },
    { code: "+86", name: "China" },
    { code: "+49", name: "Germany" },
    { code: "+33", name: "France" },
    { code: "+39", name: "Italy" },
    { code: "+7", name: "Russia" },
    { code: "+55", name: "Brazil" },
    { code: "+27", name: "South Africa" },
    { code: "+82", name: "South Korea" },
    { code: "+34", name: "Spain" },
    { code: "+351", name: "Portugal" },
    { code: "+966", name: "Saudi Arabia" },
    { code: "+971", name: "United Arab Emirates" },
    { code: "+64", name: "New Zealand" },
    { code: "+852", name: "Hong Kong" },
    { code: "+62", name: "Indonesia" },
    { code: "+60", name: "Malaysia" },
    { code: "+63", name: "Philippines" },
    { code: "+94", name: "Sri Lanka" },
    { code: "+92", name: "Pakistan" },
    { code: "+20", name: "Egypt" },
    { code: "+234", name: "Nigeria" },
    { code: "+212", name: "Morocco" },
    { code: "+254", name: "Kenya" },
    { code: "+256", name: "Uganda" },
];

const UserInformationForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onFinish = (values) => {
        console.log("Form Values:", values);
        setIsModalOpen(true)
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                showSearch
                optionFilterProp="children"
                style={{
                    width: 100,
                }}
                placeholder="+91"
            >
                {countryCodes.map((country) => (
                    <Option key={country.code} value={country.code}>
                        ({country.code})
                    </Option>
                ))}
            </Select>
        </Form.Item>
    );

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
                <h2 className="text-center text-2xl font-bold mb-4">
                    User Information Form
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Please enter your valid email and information to continue
                </p>
                <Form
                requiredMark={false}
                    layout="vertical"
                    onFinish={onFinish}
                    className="space-y-6"
                >
                    {/* First Name */}
                    <Form.Item
                        label="First Name"
                        name="firstName"
                        rules={[{ required: true, message: "Please enter your first name" }]}
                    >
                        <Input placeholder="john doe" />
                    </Form.Item>

                    {/* Email Address */}
                    <Form.Item
                        label="Email address"
                        name="email"
                        rules={[
                            { required: true, message: "Please enter your email" },
                            { type: "email", message: "Please enter a valid email address" },
                        ]}
                    >
                        <Input placeholder="john.doe@example.com" />
                    </Form.Item>

                    {/* Phone Number */}
                    <Form.Item
                        label="Phone number"
                        name="phone"
                        rules={[
                            { required: true, message: "Please enter your phone number" },
                        ]}
                    >
                        <Input
                            addonBefore={prefixSelector}
                            placeholder="555-123-4567"
                        />
                    </Form.Item>

                    {/* Submit Button */}
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full rounded-sm py-2 bg-[#00b0f2] hover:bg-[#00b0f2]/70 text-white"
                        >
                            Continue
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            {
                isModalOpen && (
                    <Modal
                        title="Verify OTP"
                        open={isModalOpen} 
                        onOk={() => setIsModalOpen(false)} 
                        onCancel={() => setIsModalOpen(false)}
                        footer={null} 
                    >
                        <OtpForm />
                    </Modal>
                )
            }
        </div>
    );
};

export default UserInformationForm;

