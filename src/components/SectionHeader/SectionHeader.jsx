import React from 'react'

function SectionHeader({ title, subTitle }) {
  return (
    <div className='py-12 md:w-6/12 mx-auto flex flex-col text-center items-center justify-center'>
      <h1 className='text-2xl md:text-4xl text-[#1D3557] font-bold'>{title}</h1>
      <p className='text-sm opacity-75 md:text-base mt-3'>{subTitle}</p>
    </div>
  )
}

export default SectionHeader