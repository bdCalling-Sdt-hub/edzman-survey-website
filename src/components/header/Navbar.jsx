'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Navbar() {
    const path = usePathname()
    const navlinks = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Example Whys',
            path: '/example'
        },
        {
            title: 'How to FTW',
            path: '/ftw'
        },
        {
            title: 'Client Why',
            path: '/client-why'
        },
        {
            title: 'Blog',
            path: '/blog'
        },
        {
            title: 'Donate',
            path: '/donate'
        },
        {
            title: 'About Us',
            path: '/about'
        },
    ]

    const user = true

    return (
        <div className='container mx-auto flex items-center justify-between p-4'>
            <div>
                <img src="/logo/brandLogo.png" alt="brandLogo" className='h-10' />
            </div>
            <div className='flex items-center gap-4'>
                <ul className='flex items-center gap-4'>
                    {
                        navlinks.map((link, idx) => {
                            const isActive = path === link.path
                            return (
                                <li
                                    key={idx}
                                    className={`${isActive ? 'text-[#00b0f2] font-bold' : 'text-gray-600'
                                        } hover:text-[#00b0f2] transition`}
                                >
                                    <Link href={link.path} className='px-2'>{link.title}</Link>
                                    <div className={`${isActive ? 'block w-full h-1 bg-[#00b0f2] rounded-tl-full rounded-tr-full' : 'hidden'
                                        } hover:text-[#00b0f2] transition`}></div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    {user ? 'User' : 'Guest'}
                </div>
            </div>
        </div>
    )
}

export default Navbar
