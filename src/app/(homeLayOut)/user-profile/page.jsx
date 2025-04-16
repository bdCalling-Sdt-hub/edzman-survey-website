'use client'
import { useProfileGetQuery } from '@/app/provider/redux/services/userApis';
import React from 'react';
import dynamic from 'next/dynamic';

const ProfileComponent = dynamic(() => import('@/components/ProfileComponent'));

function page() {
  const { data: userData } = useProfileGetQuery();
  return (
    <div>
      <ProfileComponent userData={userData} />
    </div>
  );
}

export default page;
