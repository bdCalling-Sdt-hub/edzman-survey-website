'use client';
import React, { useState } from 'react';
import { Table } from 'antd';
import { MdMessage } from "react-icons/md";
import ComposeEmailModal from '@/lib/modalcard/ComposeEmailModal';

const DonateTable = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleMessageClick = (record) => {
        setIsModalVisible(true);
    };

    const columns = [
        {
            title: 'SL No',
            width: 100,
            dataIndex: 'slNo',
            key: 'name',
            fixed: 'left',
        },
        {
            title: 'User Name',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
        },
        {
            title: 'Email',
            dataIndex: 'address',
            key: '1',
            width: 150,
        },
        {
            title: 'Donation Date',
            dataIndex: 'date',
            key: '2',
            width: 150,
        },
        {
            title: 'Transaction ID',
            dataIndex: 'transectionId',
            key: '3',
            width: 150,
        },
        {
            title: 'Amount',
            dataIndex: 'number',
            key: '4',
            width: 150,
        },
        {
            title: 'Message',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (_, record) => (
                <a onClick={() => handleMessageClick(record)}>
                    <MdMessage className="text-white w-8 p-2 hover:bg-white 
          hover:text-[#2d5882] h-8 rounded-md bg-[#2d5882]" />
                </a>
            ),
        },
    ];

    const dataSource = Array.from({ length: 10 }).map((_, i) => ({
        key: i,
        slNo: i,
        date:'28 Jan, 12:30 AM	',
        age: `User ${i + 1}`,
        address: `user${i + 1}@example.com`,
        number: `$ ${Math.floor(Math.random() * 200)}`,
        transectionId: Math.random() * 100
    }));

    return (
        <>
            <Table
                columns={columns}
                pagination={false}
                dataSource={dataSource}
                scroll={{
                    x: 1500,
                }}
                summary={() => (
                    <Table.Summary fixed="top">
                        <Table.Summary.Row />
                    </Table.Summary>
                )}
                sticky={{
                    offsetHeader: 64,
                }}
            />

            {/* Compose Email Modal */}
            {isModalVisible && (
                <ComposeEmailModal
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                />
            )}
        </>
    );
};

export default DonateTable;
