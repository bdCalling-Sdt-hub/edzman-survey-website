'use client';
import { Layout, Menu, Typography } from 'antd';
import { UserOutlined, DashboardOutlined, SettingOutlined } from '@ant-design/icons';
import { useRouter, usePathname } from 'next/navigation';
import 'antd/dist/reset.css';
import { RiTodoLine } from "react-icons/ri";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import { FaEdit, FaRegBell } from 'react-icons/fa';
import { IoWalletSharp } from "react-icons/io5";
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { IoMdArrowDropdown } from "react-icons/io";
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Notification from '@/components/notification/Notification';
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const menuItems = [
    {
        key: '1',
        icon: <DashboardOutlined />,
        label: 'Admin Dashboard',
        path: '/dashboard',
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
    const pathname = usePathname();

    const handleMenuClick = ({ key }) => {
        const selectedItem = menuItems.find((item) => item.key === key);
        if (selectedItem && selectedItem.path) {
            router.push(selectedItem.path);
        }
    };

    const user = {
        login: true,
        photoURL: 'https://github.com/shadcn.png',
        displayName: 'Hosain Ali',
        email: 'example@mail.com',
    };

    return (
        <Layout style={{ minHeight: '100vh', overflow: 'hidden' }}>
            {/* Sidebar */}
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                style={{
                    background: '#e6f3fe',
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
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
                    onClick={handleMenuClick}
                    items={menuItems.map((item) => ({
                        key: item.key,
                        icon: item.icon,
                        label: item.label,
                        style: pathname === item.path ? { background: '#c0e9fc', color: '#111' } : {},
                    }))}
                />
            </Sider>

            {/* Main Layout */}
            <Layout style={{ overflow: 'hidden' }}>
                {/* Header */}
                <Header
                    style={{
                        background: '#fff',
                        padding: '0 16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        position: 'sticky',
                        top: 0,
                        zIndex: 1000,
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Title level={4} className="w-full">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center"></div>
                            <div className="flex items-center gap-4">
                                {/* Avatar with Popover */}
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <div className="flex items-center gap-2 cursor-pointer">
                                            <Avatar className='flex items-center w-8 h-8 justify-center bg-black'>
                                                <FaRegBell className='text-white' />
                                            </Avatar>
                                        </div>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-96 mt-8">
                                        <Notification />
                                    </PopoverContent>
                                </Popover>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <div className="flex items-center gap-2 cursor-pointer">
                                            <Avatar>
                                                <AvatarImage
                                                    className="w-8 h-8 rounded-full"
                                                    src={user.photoURL}
                                                    alt="User Avatar"
                                                />
                                            </Avatar>
                                            <div className="flex items-center gap-1">
                                                <p className="font-semibold text-sm">{user?.email}</p>
                                                <IoMdArrowDropdown />
                                            </div>
                                        </div>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-48 p-2 mt-8">
                                        <div className="flex flex-col gap-2">
                                            <Button variant="ghost" className="justify-start flex items-center gap-2" onClick={() => navigateToSettings()}>
                                                <CiSettings /> Settings
                                            </Button>
                                            <Button variant="ghost" className="justify-start flex items-center gap-2" onClick={() => handleSignOut()}>
                                                <CiLogout /> Sign Out
                                            </Button>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    </Title>
                </Header>

                {/* Content */}
                <Content
                    style={{
                        margin: '16px',
                        padding: '16px',
                        background: '#fff',
                        height: 'calc(100vh - 64px)',
                        overflowY: 'auto',
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}
