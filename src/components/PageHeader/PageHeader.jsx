'use client';
import React from 'react';
import { motion } from 'framer-motion';

function PageHeader({ title, subTitle }) {
    // Define animation variants for text slicing
    const textVariant = {
        hidden: { y: '100%', opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: 'easeOut' }
        }
    };

    return (
        <div className="relative bg-[#00b0f2] py-12 px-3 md:py-28 overflow-hidden">
            <img className='absolute top-0 left-0 w-full h-full object-cover' src="/image/mask.png" alt="" />
            <div className="container mx-auto relative z-10">
                {/* Background image */}

                {/* Animated Title */}
                <motion.h1
                    className="text-3xl md:text-5xl font-semibold text-[#1d3557] mb-4"
                    initial="hidden"
                    animate="visible"
                    variants={textVariant}
                >
                    {title}
                </motion.h1>

                {/* Animated Subtitle */}
                <motion.p
                    className="text-white text-sm w-3/4 md:text-xl opacity-80 md:w-1/2"
                    initial="hidden"
                    animate="visible"
                    variants={textVariant}
                >
                    {subTitle}
                </motion.p>
            </div>
        </div>
    );
}

export default PageHeader;
