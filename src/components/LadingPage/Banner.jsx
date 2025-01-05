'use-client';
import PrimaryButton from '@/lib/button/PrimaryButton';
import React from 'react';

function Banner() {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex-1 flex flex-col items-start gap-3'>
        <h1 className='text-[#1D3557] sm:text-2xl md:text-6xl font-semibold'>
          Find Your WHY, Transform Your Life
        </h1>
        <p>
          Unlock your potential and Find Your "Why" with personalized guidance and expert insights. Our platform helps you discover the core WHY that drives you, creating a fulfilling and meaningful life journey.
        </p>
        <div className='flex gap-12 items-center'>
          <div>
            <h1 className='text-[#1D3557] text-3xl font-bold'>50K+</h1>
            <p><b>FYWS</b> Created</p>
          </div>
          <div>
            <h1 className='text-[#1D3557] text-3xl font-bold'>100K+</h1>
            <p>Live Impacted</p>
          </div>
        </div>
        <PrimaryButton text={'How to Find Your Why'}></PrimaryButton>
      </div>
      <div className='flex-1'>
        <img src='/image/landing.png' alt='landing page image' />
      </div>
    </div>
  );
}

export default Banner;
