'use client';
import { Layout, Menu, Typography } from 'antd';
import { UserOutlined, DashboardOutlined, SettingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import 'antd/dist/reset.css';
import { RiTodoLine } from "react-icons/ri";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import { FaEdit, FaRegBell } from 'react-icons/fa';
import { IoWalletSharp } from "react-icons/io5";
import { Avatar, AvatarImage } from '@/components/ui/avatar';
const { Header, Sider, Content } = Layout;
const { Title } = Typography;

// Menu items for the sidebar with routing paths
const menuItems = [
    {
        key: '1',
        icon: <DashboardOutlined />,
        label: 'Admin Dashboard',
        path: '/dashboard', // Default dashboard page
    },
    {
        key: '2',
        icon: <RiTodoLine />,
        label: 'WHY Management',
        path: '/dashboard/why-manage',
    },
    {
        key: '3',
        icon: <BsFillQuestionOctagonFill />,
        label: 'Story Management',
        path: '/dashboard/story-manage',
    },
    {
        key: '4',
        icon: <UserOutlined />,
        label: 'User Management',
        path: '/dashboard/user-manage',
    },
    {
        key: '5',
        icon: <FaEdit />,
        label: 'Blogs Management',
        path: '/dashboard/blogs-manage',
    },
    {
        key: '6',
        icon: <IoWalletSharp />,
        label: 'Donation Management',
        path: '/dashboard/donation-manage',
    },
    {
        key: '7',
        icon: <SettingOutlined />,
        label: 'Profile Setting',
        path: '/dashboard/profile-setting',
    },
];

export default function DashboardLayOut({ children }) {
    const router = useRouter();
    const handleMenuClick = ({ key }) => {
        const selectedItem = menuItems.find((item) => item.key === key);
        if (selectedItem && selectedItem.path) {
            router.push(selectedItem.path);
        }
    };

    const user = {
        login: true,
        photoURL: 'https://github.com/shadcn.png',
        displayName: 'expmple@mail.com',
        email: 'Hosain ali',

    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* Sidebar */}
            <Sider breakpoint="lg" collapsedWidth="0" style={{ background: '#e6f3fe' }}>
                <div
                    style={{
                        textAlign: 'center',
                        padding: '16px 0',
                        fontSize: '18px',
                        fontWeight: 'bold',
                    }}
                >
                    <img src="/brandLogo.svg" alt="logo" style={{ width: '100px' }} />
                </div>
                <Menu
                    style={{ background: '#e6f3fe' }}
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={handleMenuClick}
                    items={menuItems.map((item) => ({
                        key: item.key,
                        icon: item.icon,
                        label: item.label,
                    }))}
                />
            </Sider>

            {/* Main Layout */}
            <Layout>
                {/* Header */}
                <Header
                    style={{
                        background: '#fff',
                        padding: '0 16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Title level={4}>
                        <div className='flex items-center justify-between'>
                            <div className='p-2 rounded-full bg-white shadow-md'>
                                <FaRegBell />
                            </div>
                            <Avatar>
                                <div className='flex gap-2'>
                                    <AvatarImage className='w-8 h-8 rounded-full cursor-pointer' src={user.photoURL} />
                                    <div>
                                        <h1 className='font-semibold text-base'>{user?.email}</h1>
                                        <h1 className='font-normal opacity-75 text-base'>{user?.displayName}</h1>
                                    </div>
                                </div>
                            </Avatar>
                        </div>
                    </Title>
                </Header>

                {/* Content */}
                <Content style={{ margin: '16px', padding: '16px', background: '#fff' }}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}
