'use client';

import React from 'react';
import { Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

function ErrorPage() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <ExclamationCircleOutlined className="text-red-500 text-6xl mb-4 sm:text-8xl" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2 sm:text-5xl md:text-6xl">
        Oops! Something Went Wrong
      </h1>
      <p className="text-gray-600 text-lg mb-6 sm:text-xl md:text-2xl">
        We're sorry, but an unexpected error occurred. Please try again or go back to the homepage.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button type="primary" size="large" onClick={refreshPage} className="w-full sm:w-auto">
          Refresh Page
        </Button>
        <Button type="default" size="large" href="/" className="w-full sm:w-auto">
          Go to Homepage
        </Button>
      </div>
    </div>
  );
}

export default ErrorPage;