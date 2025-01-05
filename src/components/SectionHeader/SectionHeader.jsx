import React from 'react'

function SectionHeader({ title, subTitle }) {
  return (
    <div className='w-6/12 mx-auto flex flex-col text-center items-center justify-center'>
      <h1 className='text-4xl text-[#1D3557] font-bold'>{title}</h1>
      <p>{subTitle}</p>
    </div>
  )
}

export default SectionHeader