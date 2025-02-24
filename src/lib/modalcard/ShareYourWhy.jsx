// 'use client';
// import React, { useMemo, useState } from 'react';
// import { UploadOutlined } from '@ant-design/icons';
// import { Button, Upload, Modal, Input, Form, message, Image } from 'antd';
// import 'antd/dist/reset.css';
// import JoditEditor from 'jodit-react';
// import { useCreateNewStoryMutation } from '@/app/provider/redux/services/storyApis';
// import Swal from 'sweetalert2';
// import { toast } from 'sonner';

// export default function ShareYourWhy() {
//   const [fileList, setFileList] = useState([]);
//   const [previewImage, setPreviewImage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(true);
//   const [form] = Form.useForm();
//   const [description, setDescription] = useState('');
//   const [createStory, { isLoading: isCreating }] = useCreateNewStoryMutation();

//   const handleUpload = ({ file }) => {
//     if (!file.type.startsWith('image/')) {
//       message.error('Only image files are allowed!');
//       return;
//     }
//     setFileList([file]);
//     const reader = new FileReader();
//     reader.onload = () => setPreviewImage(reader.result);
//     reader.readAsDataURL(file);
//   };

//   const handleCancel = () => {
//     setFileList([]);
//     setPreviewImage(null);
//     form.resetFields();
//     setIsModalOpen(false);
//   };

//   const handleSubmit = async () => {
//     try {
//       const values = await form.validateFields();
//       if (!description) {
//         message.error('Please enter a description');
//         return;
//       }
//       const formData = new FormData();
//       formData.append('title', values.title);
//       formData.append('description', description);
//       if (fileList.length > 0) {
//         formData.append('story_image', fileList[0]);
//       }
//       console.log('formData', formData);

//       const response = await createStory(formData);

//       if (response?.data?.success) {
//         setIsModalOpen(false);
//         toast.success('Story created successfully.');
//         setDescription('');
//       } else {
//         const errorMessage =
//           response?.error?.data?.message || 'Failed to create story';
//         toast.error(errorMessage);
//       }
//     } catch (error) {
//       console.log(error?.errorFields);

//       if (error?.response) {
//         const serverErrorMessage =
//           error.response.data?.message ||
//           'Server error, please try again later';
//         toast.error(serverErrorMessage);
//         setDescription('');
//       } else if (error?.request) {
//         toast.error(
//           'Network error, please check your internet connection and try again'
//         );
//       } else {
//         toast.error(
//           error?.response?.data?.message || 'Please fill all required fields'
//         );
//       }
//     }
//   };

//   const content = useMemo(() => {
//     return (
//       <JoditEditor
//         value={description}
//         onChange={setDescription}
//         config={{ readonly: false, height: 400, width: '100%' }}
//       />
//     );
//   }, [description]);

//   return (
//     <Modal
//       destroyOnClose={false}
//       title={
//         <span className="text-lg font-bold text-[#1d3557]">Share your WHY</span>
//       }
//       open={isModalOpen}
//       onCancel={handleCancel}
//       footer={null}
//       width={1200}
//       className="rounded-lg shadow-lg"
//     >
//       <Form form={form} layout="vertical">
//         <div className="space-y-6">
//           {/* Upload Section */}
//           <Form.Item
//             label="Story Image"
//             name="story_image"
//             rules={[
//               {
//                 validator: (_, value) => {
//                   if (fileList.length === 0) {
//                     return Promise.reject('Please upload an image');
//                   }
//                   return Promise.resolve();
//                 },
//               },
//             ]}
//           >
//             <Upload
//               fileList={fileList}
//               beforeUpload={(file) => {
//                 handleUpload({ file });
//                 return false;
//               }}
//               showUploadList={false}
//               accept="image/*"
//               className="flex flex-col"
//             >
//               <Button
//                 icon={<UploadOutlined />}
//                 className="bg-[#21B6F2] text-white"
//               >
//                 Upload Image
//               </Button>
//             </Upload>
//             {previewImage && (
//               <Image
//                 src={previewImage}
//                 alt="Preview"
//                 className="mt-4 max-w-xs"
//               />
//             )}
//           </Form.Item>

//           {/* Story Title */}
//           <Form.Item
//             label="Story Title"
//             name="title"
//             rules={[
//               { required: true, message: 'Please enter the story title' },
//             ]}
//           >
//             <Input placeholder="Enter your story title" />
//           </Form.Item>

//           {/* Story Description */}
//           <Form.Item
//             label="Story Description"
//             rules={[
//               {
//                 validator: (_, value) => {
//                   if (!description) {
//                     return Promise.reject('Please enter a description');
//                   }
//                   return Promise.resolve();
//                 },
//               },
//             ]}
//           >
//             <div>{content}</div>
//           </Form.Item>

//           {/* Buttons */}
//           <div className="flex justify-end gap-4">
//             <Button
//               onClick={handleCancel}
//               className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-md"
//             >
//               Cancel
//             </Button>
//             <Button
//               onClick={handleSubmit}
//               loading={isCreating}
//               className="bg-[#21B6F2] hover:bg-blue-600 text-white px-6 py-2 rounded-md"
//             >
//               Request for post
//             </Button>
//           </div>
//         </div>
//       </Form>
//     </Modal>
//   );
// }

'use client';
import React, { useMemo, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, Modal, Input, Form, message, Image } from 'antd';
import 'antd/dist/reset.css';
import JoditEditor from 'jodit-react';
import { useCreateNewStoryMutation } from '@/app/provider/redux/services/storyApis';
import Swal from 'sweetalert2';
import { toast } from 'sonner';

export default function ShareYourWhy() {
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [form] = Form.useForm();
  const [description, setDescription] = useState('');
  const [createStory, { isLoading: isCreating }] = useCreateNewStoryMutation();

  const handleUpload = ({ file }) => {
    if (!file.type.startsWith('image/')) {
      toast.error('Only image files are allowed!');
      return;
    }
    setFileList([file]);
    const reader = new FileReader();
    reader.onload = () => setPreviewImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleCancel = () => {
    setFileList([]);
    setPreviewImage(null);
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (!description) {
        toast.error('Please enter a description');
        return;
      }
      if (description.length > 5000) {
        toast.error('Description must be less than 5000 characters');
        return;
      }
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('description', description);
      if (fileList.length > 0) {
        formData.append('story_image', fileList[0]);
      }

      const response = await createStory(formData);

      if (response?.data?.success) {
        setIsModalOpen(false);
        toast.success('Story created successfully.');
        setDescription('');
      } else {
        const errorMessage =
          response?.error?.data?.message || 'Failed to create story';
        toast.error(errorMessage);
      }
    } catch (error) {
      if (error?.response) {
        const serverErrorMessage =
          error.response.data?.message ||
          'Server error, please try again later';
        toast.error(serverErrorMessage);
        setDescription('');
      } else if (error?.request) {
        toast.error(
          'Network error, please check your internet connection and try again'
        );
      } else {
        toast.error(
          error?.response?.data?.message || 'Please fill all required fields'
        );
      }
    }
  };

  const content = useMemo(() => {
    return (
      <JoditEditor
        value={description}
        onChange={(newDescription) => {
          setDescription(newDescription);
          form.validateFields(['description']); // Reset validation for description
        }}
        config={{ readonly: false, height: 400, width: '100%' }}
      />
    );
  }, [description, form]);

  return (
    <Modal
      destroyOnClose={false}
      title={
        <span className="text-lg font-bold text-[#1d3557]">Share your WHY</span>
      }
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      width={1200}
      className="rounded-lg shadow-lg"
    >
      <Form form={form} layout="vertical">
        <div className="space-y-6">
          {/* Upload Section */}
          <Form.Item
            label="Story Image"
            name="story_image"
            rules={[
              {
                validator: (_, value) => {
                  if (fileList.length === 0) {
                    return Promise.reject('Please upload an image');
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Upload
              fileList={fileList}
              beforeUpload={(file) => {
                handleUpload({ file });
                return false;
              }}
              showUploadList={false}
              accept="image/*"
              className="flex flex-col"
            >
              <Button
                icon={<UploadOutlined />}
                className="bg-[#21B6F2] text-white"
              >
                Upload Image
              </Button>
            </Upload>
            {previewImage && (
              <Image
                src={previewImage}
                alt="Preview"
                className="mt-4 max-w-xs"
              />
            )}
          </Form.Item>

          {/* Story Title */}
          <Form.Item
            label="Story Title"
            name="title"
            rules={[
              { required: true, message: 'Please enter the story title' },
            ]}
          >
            <Input placeholder="Enter your story title" />
          </Form.Item>

          {/* Story Description */}
          <Form.Item
            label="Story Description"
            name="description"
            rules={[
              {
                validator: (_, value) => {
                  if (!description) {
                    return Promise.reject('Please enter a description');
                  }
                  if (description.length > 5000) {
                    return Promise.reject(
                      'Description must be less than 5000 characters'
                    );
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <div>{content}</div>
          </Form.Item>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <Button
              onClick={handleCancel}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-md"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              loading={isCreating}
              className="bg-[#21B6F2] hover:bg-blue-600 text-white px-6 py-2 rounded-md"
            >
              Request for post
            </Button>
          </div>
        </div>
      </Form>
    </Modal>
  );
}
