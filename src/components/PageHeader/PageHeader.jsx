import React from 'react'

function PageHeader({title,subTitle}) {
    return (
        <div className='relative bg-[#00b0f2] py-12 px-3 md:py-28'>
            <div className="container mx-auto">
                <img className='absolute top-0 left-0 w-full h-full object-cover' src="/image/mask.png" alt="" />
                <h1 className='text-3xl md:text-5xl font-semibold text-[#1d3557]'>{title}</h1>
                <p className='text-white text-sm w-3/4 md:text-xl opacity-80 md:w-1/2'>{subTitle}</p>
            </div>
        </div>
    )
}

export default PageHeader