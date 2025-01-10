'use client';
import { Modal, Input, Button } from 'antd';
import { SendOutlined, DeleteOutlined, MoreOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ComposeEmailModal = ({ isModalVisible, setIsModalVisible, selectedRecord }) => {
    const [to, setTo] = useState(selectedRecord?.address || '');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (!to || !subject || !message) {

            Swal.fire({
                icon: 'error',
                title: 'Failed to Send',
                text: 'Please fill in all fields before sending.',
            });
            return;
        }


        console.log('Email Sent:', { to, subject, message });
        Swal.fire({
            icon: 'success',
            title: 'Email Sent',
            text: 'Your email has been successfully sent!',
        });


        setIsModalVisible(false);
        setTo('');
        setSubject('');
        setMessage('');
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setTo('');
        setSubject('');
        setMessage('');
    };
    return (
        <Modal
            title="New Message"
            open={isModalVisible}
            onCancel={handleCancel}
            footer={null}
            width={600}
            style={{ top: 20 }}
        >
            {/* To Input */}
            <div className="mb-4">
                <Input
                    placeholder="To"
                    value={to}
                    type='email'
                    onChange={(e) => setTo(e.target.value)}
                    addonAfter={<a href="#">Cc Bcc</a>}
                    size="large"
                    className="rounded-lg"
                />
            </div>

            {/* Subject Input */}
            <div className="mb-4">
                <Input
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    size="large"
                    className="rounded-lg"
                />
            </div>

            {/* Message Body */}
            <div className="mb-4">
                <Input.TextArea
                    rows={8}
                    placeholder="Compose your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="rounded-lg"
                />
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-between items-center">
                {/* Left Actions */}
                <div className="flex items-center space-x-3">
                    <Button
                        type="primary"
                        icon={<SendOutlined />}
                        onClick={handleSend}
                        className="flex items-center justify-center rounded-lg"
                    >
                        Send
                    </Button>
                    <Button
                        icon={<DeleteOutlined />}
                        type="text"
                        danger
                        onClick={handleCancel}
                        className="flex items-center justify-center"
                    >
                        Discard
                    </Button>
                </div>

                {/* Right Actions */}
                <div>
                    <Button
                        icon={<MoreOutlined />}
                        shape="circle"
                        type="text"
                        onClick={() => console.log('More options clicked')}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default ComposeEmailModal;
