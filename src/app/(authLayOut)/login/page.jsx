'use client';
import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { motion } from 'framer-motion';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const LoginRegister = () => {
    const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign In and Sign Up

    const onFinish = (values) => {
        console.log('Submitted:', values);
        // Add login/register logic here
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
                {/* Tab Buttons */}
                <div className="flex justify-center gap-6 mb-8">
                    <Button
                        type={!isSignUp ? 'primary' : 'default'}
                        onClick={() => setIsSignUp(false)}
                        className={!isSignUp ? 'bg-blue-500 text-white' : ''}
                    >
                        Sign In
                    </Button>
                    <Button
                        type={isSignUp ? 'primary' : 'default'}
                        onClick={() => setIsSignUp(true)}
                        className={isSignUp ? 'bg-blue-500 text-white' : ''}
                    >
                        Sign Up
                    </Button>
                </div>

                {/* Heading */}
                <motion.h1
                    className="text-center text-2xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {isSignUp ? 'Create an Account' : 'Login to Account'}
                </motion.h1>
                <motion.p
                    className="text-center text-gray-600 mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Please enter your email and password to continue
                </motion.p>

                {/* Form */}
                <Form
                    layout="vertical"
                    onFinish={onFinish}
                    className="space-y-6"
                >
                    {/* Email Field */}
                    <Form.Item
                        name="email"
                        label="Email address"
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

                    {/* Password Field */}
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[{ required: true, message: 'Please enter your password!' }]}
                    >
                        <Input.Password
                            placeholder="Enter your password"
                            iconRender={(visible) =>
                                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                            }
                        />
                    </Form.Item>

                    {/* Re-Type Password (Only for Sign Up) */}
                    {isSignUp && (
                        <Form.Item
                            name="confirmPassword"
                            label="Re-Type Password"
                            dependencies={['password']}
                            rules={[
                                { required: true, message: 'Please confirm your password!' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error('The two passwords do not match!')
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                placeholder="Re-enter your password"
                                iconRender={(visible) =>
                                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                }
                            />
                        </Form.Item>
                    )}

                    {/* Remember Password and Forget Password */}
                    <div className="flex justify-between items-center">
                        <Checkbox className="text-sm">Remember Password</Checkbox>
                        <a href="#" className="text-sm text-blue-500 hover:underline">
                            Forget Password?
                        </a>
                    </div>

                    {/* Submit Button */}
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold"
                        >
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default LoginRegister;

// TODO: make more interesting design