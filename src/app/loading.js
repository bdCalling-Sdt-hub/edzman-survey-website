'use client';

import { Spin } from 'antd';

function loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Spin size="large" />
    </div>
  );
}

export default loading;
