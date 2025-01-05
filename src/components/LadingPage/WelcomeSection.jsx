'use-client'
import PrimaryButton from '@/lib/button/PrimaryButton';
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
const data = [
    {
        icon: <FaCheckCircle />,
        details: 'Freedom is on the other side when you Find Your Why!'
    },
    {
        icon: <FaCheckCircle />,
        details: 'Let’s get you started to Find Your Why and live your life on your terms.'
    },
    {
        icon: <FaCheckCircle />,
        details: 'If you already found and created your why then this site will assist you to enhance it.'
    },
    {
        icon: <FaCheckCircle />,
        details: 'Live full and die empty.'
    },
]

function WelcomeSection() {
    return (
        <>
            <div className='flex items-center flex-col md:flex-row justify-center gap-2'>
                <div className='flex-1 flex items-center justify-center'>
                    <img src='/image/Group.png' alt='landing page image' />
                </div>
                <div className='flex flex-1 items-start gap-12 justify-center flex-col'>
                    <h3 className='text-[#00B0F2]'>Welcome to FYW.com</h3>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-4xl text-[#1D3557] font-semibold'>This site is dedicated to assisting you to Find Your Why.</h1>
                        <p className='text-xl opacity-75'>There is a reason you are here on earth. You have a destiny, and a “WHY”</p>
                        <p>Once you have a clear “Why” the “How” falls into place. This site will allow you to take extremely focused action to achieve your “WHY”.</p>
                        <div className='mt-2'>
                            {
                                data.map((item, idx) => (
                                    <div key={idx} className='flex items-center gap-2'>
                                        <span className='text-[#00B0F2]'>{item.icon}</span>
                                        <h1 className='text-'>{item.details}</h1>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                    <div>
                        <PrimaryButton text={'Start Now'}></PrimaryButton>
                    </div>
                </div>
            </div >

        </>
    )
}

export default WelcomeSection