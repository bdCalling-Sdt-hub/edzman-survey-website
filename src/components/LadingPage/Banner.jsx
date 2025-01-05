'use-client';
import PrimaryButton from '@/lib/button/PrimaryButton';
import React from 'react';

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-16 py-8 lg:py-16 gap-2 md:gap-8">
      {/* Left Content */}
      <div className="flex-1 flex flex-col gap-3 text-center lg:text-start">
        <h1 className="text-[#1D3557] text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Find Your WHY, Transform Your Life
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600">
          Unlock your potential and Find Your "Why" with personalized guidance and expert insights. Our platform helps you discover the core WHY that drives you, creating a fulfilling and meaningful life journey.
        </p>
        <div className="flex gap-6 sm:gap-12 items-center  justify-center lg:justify-start">
          <div>
            <h1 className="text-[#1D3557] text-2xl sm:text-3xl font-bold">50K+</h1>
            <p className="text-sm sm:text-base"><b>FYWS</b> Created</p>
          </div>
          <div>
            <h1 className="text-[#1D3557] text-2xl sm:text-3xl font-bold">100K+</h1>
            <p className="text-sm sm:text-base">Lives Impacted</p>
          </div>
        </div>
        <PrimaryButton text={'How to Find Your Why'} />
      </div>

      {/* Right Content */}
      <div className="flex-1 flex justify-center animate-bounce items-center">
        <img 
          src="/image/landing.png" 
          alt="landing page image" 
          className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </div>
  );
}

export default Banner;
