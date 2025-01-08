'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { GiSettingsKnobs } from "react-icons/gi";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { MdOutlineQuestionMark } from 'react-icons/md'
import { VscSignOut } from "react-icons/vsc";
import { Spin } from 'antd'

function Navbar() {
    const path = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navlinks = [
        { title: 'Home', path: '/' },
        { title: 'Example Whys', path: '/example' },
        { title: 'How to FTW', path: '/ftw' },
        { title: 'Client Why', path: '/client-why' },
        { title: 'Blog', path: '/blog' },
        { title: 'Donate', path: '/donate-page' },
        { title: 'About Us', path: '/about' },
    ]

    const user = {
        login: true,
        photoURL: 'https://github.com/shadcn.png',
        displayName: 'expmple@mail.com',
        email: 'Hosain ali',

    }

    // Animation Variants
    const menuVariants = {
        hidden: { opacity: 0, x: '100%' },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
        exit: { opacity: 0, x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
    }

    return (
        <div className='container mx-auto flex items-center justify-between p-4'>
            <div>
                <img src="/brandLogo.svg" alt="brandLogo" className='h-10' />
            </div>

            {/* Desktop Menu */}
            <div className='hidden lg:flex lg:text-sm items-center gap-4'>
                <ul className='flex items-center gap-4'>
                    {navlinks.map((link, idx) => {
                        const isActive = path === link?.path
                        return (
                            <motion.li
                                key={idx}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className={`${isActive ? 'text-[#00b0f2] font-bold' : 'text-gray-600'} transition`}
                            >
                                <Link href={link?.path} className='px-2'>{link?.title}</Link>
                                {isActive && (
                                    <motion.div
                                        layoutId="underline"
                                        className="block w-full h-1 bg-[#00b0f2] rounded-tl-full rounded-tr-full"
                                    />
                                )}
                            </motion.li>
                        )
                    })}
                </ul>
                <div>
                    {user.login ? (
                        <>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar>
                                        <AvatarImage className='w-8 h-8 rounded-full' src={user.photoURL} />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="p-4">
                                    <Avatar>
                                        <div className='flex gap-2'>
                                            <AvatarImage className='w-8 h-8 rounded-full' src={user.photoURL} />
                                            <div>
                                                <h1 className='font-semibold text-base'>{user?.email}</h1>
                                                <h1 className='font-normal opacity-75 text-base'>{user?.displayName}</h1>
                                            </div>
                                        </div>
                                        <AvatarFallback>
                                            <Spin></Spin>
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="divider w-full h-[1px] bg-slate-400/40 my-3"></div>
                                    <ul className='mt-3 flex items-start flex-col gap-3'>
                                        <li className=' flex items-center gap-2'> <GiSettingsKnobs className='text-xl' />Profile Settings</li>
                                        <li className=' flex items-center gap-2'><MdOutlineQuestionMark className='text-xl' /> About us</li>
                                        <div className="divider w-full h-[1px] bg-slate-400/40"></div>
                                        <li className=' flex items-center gap-2'><VscSignOut className='text-xl' />Sign Out</li>
                                    </ul>
                                </PopoverContent>
                            </Popover>
                        </>
                    ) : 'Guest'}
                </div>
            </div>

            {/* Hamburger Menu Icon for Mobile */}
            <div className='lg:hidden flex items-center'>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-2xl'>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <>
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className='fixed  z-[999] top-0 right-0 w-full h-screen bg-white flex flex-col items-start pl-12  justify-center gap-4 lg:hidden'
                    >
                        <img src="/logo/FYW.png" alt="logo" />
                        <button onClick={() => setIsMenuOpen(false)} className='text-3xl absolute top-4 right-4'>
                            <FaTimes />
                        </button>
                        <ul className='flex flex-col items-start gap-3'>
                            {navlinks.map((link, idx) => {
                                const isActive = path === link?.path
                                return (
                                    <motion.li
                                        key={idx}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`${isActive ? 'text-[#00b0f2] font-bold' : 'text-gray-600'} transition`}
                                    >
                                        <Link href={link?.path}>{link?.title}</Link>
                                    </motion.li>
                                )
                            })}
                        </ul>
                        <div className='mt-6 text-lg font-semibold'>
                            {user.login ? (
                                <Avatar>
                                    <div className='flex gap-2'>
                                        <AvatarImage className='w-8 h-8 rounded-full' src={user.photoURL} />
                                        <div>
                                            <h1 className='font-semibold text-base'>{user?.email}</h1>
                                            <h1 className='font-normal opacity-75 text-base'>{user?.displayName}</h1>
                                        </div>
                                    </div>
                                    <AvatarFallback>
                                        <Spin></Spin>
                                    </AvatarFallback>
                                </Avatar>
                            ) : 'Guest'}
                        </div>
                    </motion.div>
                </>
            )}
        </div>
    )
}

export default Navbar
