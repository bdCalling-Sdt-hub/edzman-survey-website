'use client';
import PrimaryButton from '@/lib/button/PrimaryButton';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Banner() {
  // Animation variants for slice reveal
  const sliceReveal = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center py-8 px-2 lg:py-24 gap-2 md:gap-8">
      {/* Left Content */}
      <div className="flex-1 flex flex-col gap-8 text-center lg:text-start">
        <motion.h1
          className="text-[#1D3557] text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold leading-tight overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={sliceReveal}
        >
          Find Your WHY, Transform Your Life
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base lg:text-lg text-gray-600 overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={sliceReveal}
        >
          Unlock your potential and Find Your "Why" with personalized guidance
          and expert insights. Our platform helps you discover the core WHY that
          drives you, creating a fulfilling and meaningful life journey.
        </motion.p>

        <motion.div
          className="flex gap-6 sm:gap-12 items-center justify-center lg:justify-start overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={sliceReveal}
        >
          <div>
            <h1 className="text-[#1D3557] text-2xl sm:text-3xl font-bold">
              50K+
            </h1>
            <p className="text-sm sm:text-base">
              <b>FYWS</b> Created
            </p>
          </div>
          <div>
            <h1 className="text-[#1D3557] text-2xl sm:text-3xl font-bold">
              100K+
            </h1>
            <p className="text-sm sm:text-base">Lives Impacted</p>
          </div>
        </motion.div>

        <motion.div
          className="overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={sliceReveal}
        >
          <Link href={'/ftw'}>
            <PrimaryButton text={'How to Find Your Why'} />
          </Link>
        </motion.div>
      </div>

      {/* Right Content */}
      <motion.div
        className="flex-1 flex animate-bounce justify-center items-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img
          src="/image/landing.png"
          alt="landing page image"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />
      </motion.div>
    </div>
  );
}

export default Banner;
