'use client';
import React, { useState } from 'react';
import { Form, Input, Button, Spin, Divider, Row, Col, Typography } from 'antd';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  MailOutlined,
  LockOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useResgiterPostUserMutation } from '@/app/provider/redux/services/authApis';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const { Title, Text } = Typography;

const Register = () => {
  const [regiterUser, { isLoading }] = useResgiterPostUserMutation();
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const { name, email, password, confirmPassword, dateOfBirth } = values;

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !phone ||
      !dateOfBirth
    ) {
      toast.error('Please fill in all required fields');
      return;
    }

    localStorage.setItem('register-email', email);
    const formattedData = {
      password: password,
      confirmPassword: confirmPassword,
      userData: {
        name: name,
        email: email,
        phone: phone,
        dateOfBirth: dateOfBirth,
      },
    };

    try {
      const res = await regiterUser({ data: formattedData }).unwrap();

      if (res?.success) {
        toast.success('For user verification please check your email.');
        router.push('/register/verify-email');
      } else {
        toast.error(res?.message || 'Failed to register user.');
      }
    } catch (error) {
      toast.error(
        error?.data?.message || 'Registration failed. Please try again.'
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl w-full">
        <div className="text-center mb-8">
          <Title level={2} className="mb-2">
            Create an Account
          </Title>
          <Text className="text-gray-600">
            Please enter your details to register
          </Text>
        </div>

        <Form
          form={form}
          requiredMark={false}
          layout="vertical"
          onFinish={onFinish}
          className="space-y-4"
        >
          <Divider orientation="left" className="text-gray-500 font-medium">
            Personal Information
          </Divider>

          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="name"
                label="Full Name"
                rules={[{ required: true, message: 'Please enter your name!' }]}
              >
                <Input
                  prefix={<UserOutlined className="text-gray-400" />}
                  placeholder="John Doe"
                  className="h-12 text-gray-700"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="dateOfBirth"
                label="Date of Birth"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your date of birth!',
                  },
                ]}
              >
                <Input
                  prefix={<CalendarOutlined className="text-gray-400" />}
                  type="date"
                  className="h-12 text-gray-700"
                />
              </Form.Item>
            </Col>
          </Row>

          <Divider orientation="left" className="text-gray-500 font-medium">
            Contact Information
          </Divider>

          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input
              prefix={<MailOutlined className="text-gray-400" />}
              placeholder="example@gmail.com"
              className="h-12 text-gray-700"
            />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            rules={[
              { required: true, message: 'Please enter your phone number!' },
            ]}
            validateStatus={phone ? 'success' : 'error'}
            help={!phone ? 'Please enter your phone number!' : null}
          >
            <PhoneInput
              country={'us'}
              value={phone}
              onChange={setPhone}
              inputClass="!h-12 !w-full !text-gray-700"
              containerClass="w-full"
              enableSearch={true}
              placeholder="Enter phone number"
            />
          </Form.Item>

          <Divider orientation="left" className="text-gray-500 font-medium">
            Security
          </Divider>

          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  { required: true, message: 'Please enter your password!' },
                  {
                    min: 8,
                    message: 'Password must be at least 8 characters long!',
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="text-gray-400" />}
                  className="h-12"
                  placeholder="Enter your password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="confirmPassword"
                label="Confirm Password"
                dependencies={['password']}
                rules={[
                  { required: true, message: 'Please confirm your password!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error('The passwords do not match!')
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="text-gray-400" />}
                  className="h-12"
                  placeholder="Re-enter your password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
            </Col>
          </Row>

          <div className="mt-8">
            <Button
              htmlType="submit"
              size="large"
              className="w-full h-12 bg-[#00b0f2] hover:bg-[#00b0f2]/80 text-white text-lg font-bold transition-all duration-300"
            >
              {isLoading ? <Spin /> : 'Create Account'}
            </Button>
          </div>
        </Form>

        <div className="text-center mt-6">
          <Text className="text-gray-600">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-[#00B0F2] font-medium hover:underline"
            >
              Sign in instead
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Register;
