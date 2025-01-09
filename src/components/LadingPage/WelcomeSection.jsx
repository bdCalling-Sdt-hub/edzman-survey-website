'use client'
import PrimaryButton from '@/lib/button/PrimaryButton';
import React from 'react';
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
];

function WelcomeSection() {
    return (
        <div className='container mx-auto flex flex-col md:flex-col lg:flex-row items-center justify-center gap-6 px-4 lg:px-16 py-8'>
            <div className='flex-1 flex items-center justify-start'>
                <img
                    src='/image/Group.png'
                    alt='landing page image'
                    className='w-full max-w-sm md:max-w-md lg:max-w-lg object-contain'
                />
            </div>
            <div className='flex-1 flex flex-col items-start gap-6 text-center md:text-left'>
                <h3 className='text-[#00B0F2] text-lg font-medium'>Welcome to FYW.com</h3>
                <div className='flex flex-col text-start gap-4'>
                    <h1 className='text-2xl md:text-4xl text-[#1D3557] font-semibold leading-snug'>
                        This site is dedicated to assisting you to <span className="text-[#00B0F2]">Find Your Why</span>.
                    </h1>
                    <p className='text-sm md:text-lg text-gray-600 opacity-75'>
                        There is a reason you are here on earth. You have a destiny, and a “<span className="text-[#00B0F2]">WHY</span>”.
                    </p>
                    <p className='text-sm md:text-lg text-gray-600'>
                        Once you have a clear “<span className="text-[#00B0F2]">Why</span>” the “How” falls into place. This site will allow you to take extremely focused action to achieve your “<span className="text-[#00B0F2]">WHY</span>”.
                    </p>

                    <div className='mt-4 space-y-3'>
                        {data.map((item, idx) => (
                            <div key={idx} className='flex items-start gap-3'>
                                <span className='text-[#00B0F2] text-lg'>{item?.icon}</span>
                                 <p className='text-sm md:text-base text-gray-700'>{item?.details}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mt-6'>
                    <PrimaryButton text={'Start Now'} />
                </div>
            </div>
        </div>
    );
}

export default WelcomeSection;
