"use client";
import React from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { Button, Form, Input, message, Space } from "antd";
import toast from "react-hot-toast";
function Footer() {
  const [form] = Form.useForm();
  const handleSubmit = (values) => {
    console.log(values);
    toast.success("Thank you for subscribing");
  };
  const QuickLinks = [
    { title: "Home", path: "/" },
    { title: "Example 'WHY's", path: "/example" },
    { title: "How to FYW", path: "/ftw" },
    { title: "Client WHY's", path: "/client-why" },
    { title: "Blog", path: "/blog" },
    { title: "About Us", path: "/about" },
  ];

  const impactLinks = [
    { title: "Donate", path: "/donate-page" },
    { title: "Create Your WHY", path: "/create-why" },
    { title: "Share Your WHY", path: "/share-why" },
  ];

  const importantLinks = [
    { title: "support@FindYourWhy.com", path: "/" },
    { title: "Privacy Policy", path: "/policy", icon: <GoArrowUpRight /> },
    { title: "Terms and Conditions", path: "/terms", icon: <GoArrowUpRight /> },
    { title: "Cookie Policy", path: "/cookies", icon: <GoArrowUpRight /> },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 lg:px-28">
      <div className="container mx-auto px-4 flex lg:flex-row flex-col justify-between gap-8">
        {/* Important Links */}
        <div>
          <img src="/brandLogo.svg" alt="brand logo" />
          <ul>
            {importantLinks.map((link, index) => (
              <li
                key={index}
                className="mb-2 hover:text-[#00B0F2] flex items-center gap-2"
              >
                <Link href={link?.path}>{link?.title}</Link>
                <h1 className="text-[#00B0F2]  text-xl font-bold">
                  {link?.icon}
                </h1>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            {QuickLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <Link className="hover:text-[#00B0F2]" href={link?.path}>
                  {link?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Impact Links */}
        <div className="flex flex-col items-start lg:flex-row gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Make an Impact</h3>
            <ul>
              {impactLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link className="hover:text-[#00B0F2]" href={link?.path}>
                    {link?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Newsletter Subscription */}

          <div>
            <p className="mb-2 text-xm lg:text-base">
              Get Notified When a New WHY is Shared
            </p>
            <Form
              form={form}
              onFinish={handleSubmit}
              className="flex items-center"
            >
              <Space.Compact style={{ width: "100%" }}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Email is required!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                  style={{ marginBottom: 0, flex: 1 }}
                >
                  <Input
                    type="email"
                    placeholder="Enter a Valid Email"
                    className="rounded-l-lg rounded-none"
                    style={{ padding: "10px" }}
                  />
                </Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="rounded-r-lg h-full mt-[1px]"
                  style={{
                    backgroundColor: "#00B0F2",
                    borderColor: "#00B0F2",
                    height: "42px",
                  }}
                >
                  →
                </Button>
              </Space.Compact>
            </Form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto border-t px-4 flex lg:flex-row flex-col item-start lg:items-center justify-between border-gray-700 mt-8 pt-4 lg:text-center">
        {/* Brand Info */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <p className=" mt-4">A product of</p>
            <img src="/brandLogo.svg" alt="brands logo" />
          </div>
        </div>
        {/* Copyright Info */}
        <p>© 2001-{currentYear} FindYourWhy.com. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
