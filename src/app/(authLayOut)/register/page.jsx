"use client";
import React from "react";
import { Form, Input, Button, Spin } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Link from "next/link";
import { useResgiterPostUserMutation } from "@/app/provider/redux/services/authApis";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Register = () => {
  const [regiterUser, { isLoading }] = useResgiterPostUserMutation();
  const router = useRouter();
  const onFinish = async (values) => {
    const { name, email, password, confirmPassword, phone, dateOfBirth } =
      values;
    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !phone ||
      !dateOfBirth
    ) {
      return;
    }
    localStorage.setItem("register-email", email);
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
    const res = await regiterUser({ data: formattedData }).unwrap();
    console.log("res", res);

    if (res?.success) {
      Swal.fire("User registered successfully.").then(() => {
        router.push("/register/verify-email");
      });
    } else {
      Swal.fire(res?.message || "Failed to register user.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 h-auto rounded-xl shadow-md max-w-md w-full">
        <h1 className="text-center text-2xl font-bold mb-4">
          Create an Account
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Please enter your details to register
        </p>
        <Form
          requiredMark={false}
          layout="vertical"
          onFinish={onFinish}
          className="space-y-6"
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input placeholder="John Doe" className="h-12 text-gray-700" />
          </Form.Item>
          <div className="flex w-full md:flex-row flex-col gap-2">
            <Form.Item
              className="flex-1"
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: "Please enter your phone number!" },
                {
                  message: "Please enter a valid phone number!",
                },
              ]}
            >
              <Input placeholder="1234567890" className="h-12 text-gray-700" />
            </Form.Item>
            <Form.Item
              className="flex-1"
              name="dateOfBirth"
              label="Date of Birth"
              rules={[
                { required: true, message: "Please enter your date of birth!" },
              ]}
            >
              <Input
                type="date"
                className="h-12 text-gray-700"
                placeholder="Enter your date of birth"
              />
            </Form.Item>
          </div>

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
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Re-Type Password"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              className="h-12"
              placeholder="Re-enter your password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              className="w-full h-12 bg-[#00b0f2] hover:bg-[#00b0f2]/70 text-white text-lg font-bold"
            >
              {isLoading ? <Spin size="small"></Spin> : "Sign Up"}
            </Button>
          </Form.Item>
        </Form>
        <h1 className="text-black text-sm md:text-base mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-[#00B0F2] underline">
            Go to login
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Register;
