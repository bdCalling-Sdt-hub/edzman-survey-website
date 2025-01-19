
"use client";

import dynamic from "next/dynamic";

const ProfileComponent = dynamic(
  () => import("../../../components/ProfileComponent.jsx"),
  { ssr: false }
);

function page() {
  return <ProfileComponent />;
}

export default page;
