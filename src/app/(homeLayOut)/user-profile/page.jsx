"use client";

import { useProfileGetQuery } from "@/app/provider/redux/services/userApis.js";
import { Card, Col, Row, Skeleton } from "antd";
import dynamic from "next/dynamic";

const ProfileComponent = dynamic(
  () => import("../../../components/ProfileComponent.jsx"),
  { ssr: false }
);

function page() {
  const { data: userData, isLoading } = useProfileGetQuery();
  if (isLoading) {
    return (
      <div className="bg-gray-50 min-h-screen p-6">
        <Card className="container mx-auto p-6">
          {/* Header Section */}
          <Row gutter={16} align="middle">
            <Col xs={24} md={6} className="flex justify-center">
              <Skeleton.Avatar active size={100} shape="circle" />
            </Col>
            <Col xs={24} md={18}>
              <Skeleton.Input active size="large" style={{ width: "40%" }} />
              <Skeleton paragraph={{ rows: 1, width: "60%" }} />
              <div className="flex gap-4 mt-4">
                <Skeleton.Button active size="default" />
                <Skeleton.Button active size="default" />
              </div>
            </Col>
          </Row>

          {/* Profile Form Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6">
              <Skeleton.Input active size="default" style={{ width: "30%" }} />
            </h2>
            <Row gutter={16}>
              {[...Array(8)].map((_, index) => (
                <Col xs={24} md={12} key={index} className="mb-4">
                  <Skeleton.Input
                    active
                    size="large"
                    style={{ width: "100%" }}
                  />
                </Col>
              ))}
            </Row>

            {/* Buttons */}
            <div className="flex justify-between items-center mt-8">
              <Skeleton.Button active shape="round" size="large" />
              <Skeleton.Button active shape="round" size="large" />
            </div>
          </div>
        </Card>
      </div>
    );
  }
  console.log(userData);
  return <ProfileComponent userData={userData} isLoading={isLoading} />;
}

export default page;
