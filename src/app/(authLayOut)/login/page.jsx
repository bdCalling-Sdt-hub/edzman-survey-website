import LoginPage from '@/components/loginPageComponent/LoginPage';
import { Spin } from 'antd';
import { Suspense } from 'react';

function page() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex items-center justify-center">
          <Spin size="large" />
        </div>
      }
    >
      <LoginPage />
    </Suspense>
  );
}

export default page;
