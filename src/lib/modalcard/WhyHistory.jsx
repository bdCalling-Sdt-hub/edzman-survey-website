"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function WhyLogsHistory() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [logs, setLogs] = useState([
        {
            id: 1,
            title: "why response version 1",
            timestamp: "2024-12-14 08:00 AM",
        },
        {
            id: 2,
            title: "WHY's Completion Alert",
            description: "Jane Smith has completed the 'Discover Your Purpose' WHY's.",
            timestamp: "2024-12-14 08:00 AM",
        },
        {
            id: 3,
            title: "WHY's Completion Alert",
            description: "Jane Smith has completed the 'Discover Your Purpose' WHY's.",
            timestamp: "2024-12-14 08:00 AM",
        },
    ]);

    const handleDelete = (id) => {
        setLogs((prevLogs) => prevLogs.filter((log) => log.id !== id));
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal
            title={<span className="text-lg font-bold text-[#1d3557]">WHY Logs History</span>}
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
            width={600}
            className="rounded-lg shadow-lg p-6"
        >
            <div className="space-y-4">
                {logs.map((log) => (
                    <div
                        key={log.id}
                        className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm"
                    >
                        <div>
                            <h3 className="font-medium text-xl text-[#1d3557]">{log.title}</h3>
                            {log.description && (
                                <p className="text-sm text-gray-600">{log.description}</p>
                            )}
                            <p className="text-xs text-gray-500 mt-1">{log.timestamp}</p>
                        </div>
                        <Button
                            type="text"
                            icon={<DeleteOutlined className="text-red-500" />}
                            onClick={() => handleDelete(log.id)}
                        />
                    </div>
                ))}



                <div className="flex items-center justify-between mt-4">
                    <div className="mt-4 text-sm text-[#1d3557] underline cursor-pointer">
                        Click Here to Create New WHY
                    </div>
                    <Link href={`/ftw`}>
                        <Button
                            type="primary"
                            className="bg-[#21B6F2] hover:bg-blue-600 text-white px-6 py-2 rounded-md"
                        >
                            Find Your Why
                        </Button>
                    </Link>
                </div>
            </div>
        </Modal>
    );
}