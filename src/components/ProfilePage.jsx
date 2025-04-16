// profilePage.js
import React from 'react';
import { useProfileGetQuery } from '@/app/provider/redux/services/userApis';

const ProfilePage = () => {
  const { data: userData, isLoading } = useProfileGetQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProfileForm userData={userData} />
    </div>
  );
};

export default ProfilePage;
