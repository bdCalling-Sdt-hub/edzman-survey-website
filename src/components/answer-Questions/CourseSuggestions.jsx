import React from "react";
import { Card, List, Typography, Button } from "antd";
import { LinkOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const CourseSuggestions = ({ courseSuggestions }) => {
  const slicedCourses = courseSuggestions.slice(0, 3);

  return (
    <Card
      title={<Title level={4}>Recommended Courses</Title>}
      style={{
        marginTop: 20,
        borderRadius: 10,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      extra={
        <Button type="link" style={{ color: "#1890ff", fontWeight: 500 }}>
          See More
        </Button>
      }
    >
      <List
        itemLayout="vertical"
        dataSource={slicedCourses}
        renderItem={(course) => (
          <List.Item
            style={{
              padding: "16px 0",
              borderBottom: "1px solid #f0f0f0",
              transition: "background 0.3s",
            }}
            className="course-item"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <Title level={5} style={{ marginBottom: 8, color: "#1d3557" }}>
                  {course.title}
                </Title>
                <Text
                  type="secondary"
                  style={{ display: "block", marginBottom: 8 }}
                >
                  {course.description}
                </Text>
                <Text strong style={{ color: "#1d3557" }}>
                  Platform:{" "}
                </Text>
                <Text>{course.platform}</Text>
              </div>
              <div>
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: 10 }}
                >
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<LinkOutlined style={{ fontSize: 16 }} />}
                    style={{
                      backgroundColor: "#1890ff",
                      border: "none",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </a>
              </div>
            </div>
          </List.Item>
        )}
      />
      <style jsx>{`
        .course-item:hover {
          background: #f9f9f9;
          cursor: pointer;
        }
      `}</style>
    </Card>
  );
};

export default CourseSuggestions;
