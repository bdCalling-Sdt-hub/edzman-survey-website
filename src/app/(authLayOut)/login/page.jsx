"use client";
import React, { useState } from "react";
import { Form, Input, Button, Checkbox, message, Spin } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Link from "next/link";
import { usePostLoginInfoMutation } from "@/app/provider/redux/services/authApis";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Login = () => {
  const [form] = Form.useForm();
  const [login, { isLoading }] = usePostLoginInfoMutation();
  const [error, setError] = useState("");
  const router = useRouter();

  const onFinish = async (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await login(data).unwrap();
      if (response.success) {
        localStorage.setItem("accessToken", response.data.accessToken);
        toast.success("Login successful!");
        router.push("/");
      } else {
        setError(response.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError(err?.data?.message || "Login failed. Please try again.");
      message.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 h-auto rounded-xl shadow-md max-w-md w-full">
        <h1 className="text-center text-2xl font-bold mb-4">
          Login to Account
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Please enter your email and password to continue
        </p>
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        <Form
          form={form}
          requiredMark={false}
          layout="vertical"
          onFinish={onFinish}
          className="space-y-6"
          autoComplete="on"
        >
          <Form.Item
            name="email"
            label="Email address"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              placeholder="example@gmail.com"
              className="h-12 text-gray-700"
              autoComplete="email"
              aria-label="Email address"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password
              className="h-12"
              placeholder="Enter your password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              autoComplete="current-password"
              aria-label="Password"
            />
          </Form.Item>

          <div className="flex justify-between items-center">
            <Checkbox className="text-sm">Remember Password</Checkbox>
            <Link
              href="/login/email-confirm"
              className="text-sm text-[#21B6F2] hover:underline"
            >
              Forget Password?
            </Link>
          </div>

          <Form.Item>
            <Button
              htmlType="submit"
              className="w-full h-12 bg-[#00b0f2] hover:bg-[#00b0f2]/70 text-white text-lg font-bold"
              disabled={isLoading}
              aria-label="Sign In"
            >
              {isLoading ? <Spin size="small" /> : "Sign In"}
            </Button>
          </Form.Item>
        </Form>
        <h1 className="text-black mt-6">
          Don't have an account?
          <Link
            href="/register"
            className="text-[#00B0F2] underline text-sm md:text-base ml-2"
          >
            Go to Sign up
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Login;
