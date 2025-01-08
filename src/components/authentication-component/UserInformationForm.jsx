'use client'
import { Form, Input, Button } from "antd";

const UserInformationForm = () => {
  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-center text-2xl font-bold mb-4">
          User Information Form
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Please enter your valid email and information to continue
        </p>
        <Form
          layout="vertical"
          onFinish={onFinish}
          className="space-y-4"
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
            <Input addonBefore="+91" placeholder="555-123-4567" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white"
            >
              Continue
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UserInformationForm;
