'use client';
import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useForgetEmailPostMutation } from '../provider/redux/services/authApis';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const ForgetPassword = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [emailSet, { isLoading: isEmailSet }] = useForgetEmailPostMutation();

  const onFinish = async (values) => {
    try {
      const response = await emailSet(values).unwrap();
      if (response?.success) {
        localStorage.setItem('email', values.email);
        router.push('/login/email-confirm/verify-email-otp');
      } else {
        toast.error(response?.message || 'An unexpected error occurred.');
      }
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          'Something went wrong. Please try again later.'
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
        <h1 className="text-center text-2xl font-bold mb-4">
          Forgot Password?
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Please enter your email to get a verification code
        </p>
        <Form
          requiredMark={false}
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="space-y-6"
        >
          {/* Email Address Input */}
          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input
              placeholder="example@gmail.com"
              className="h-12 text-gray-700"
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-12 bg-[#21B6F2] hover:bg-blue-600 text-white text-lg font-bold"
              loading={isEmailSet}
            >
              Continue
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgetPassword;
