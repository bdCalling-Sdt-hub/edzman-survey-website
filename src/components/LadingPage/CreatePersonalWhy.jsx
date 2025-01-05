'use-client'
import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';


const datas = [
    {
        img: '/image/image1.png',
        alt: 'Create Your Why',
        title: 'Take the Seps to create Your Personal -',
        description: 'Start by answering a series of thoughtful questions designed to help you discover what truly drives you. Your answers will guide you toward finding your "Why."',
        buttonText: 'Learn More'
    },
    {
        img: '/image/image2.png',
        alt: 'Create Your Why',
        title: 'Take the Seps to create Your Personal -',
        description: 'Start by answering a series of thoughtful questions designed to help you discover what truly drives you. Your answers will guide you toward finding your "Why."',
        buttonText: 'Learn More'
    },
    {
        img: '/image/image3.png',
        alt: 'Create Your Why',
        title: 'Take the Seps to create Your Personal -',
        description: 'Start by answering a series of thoughtful questions designed to help you discover what truly drives you. Your answers will guide you toward finding your "Why."',
        buttonText: 'Learn More'
    },
]
function CreatePersonalWhy() {
    return (
        <div className="create-personal-why">
            <SectionHeader
                title="Discover Your WHY Through a Step-by-Step Process"
                subTitle="Uncover Your 'Why' with Personalized Support, Thoughtful Insights, and Actionable Steps Tailored to Assist You Find Your Life's WHY."
            />
            <div className='flex md:flex-row flex-col items-center gap-3 justify-center'>
                <div>
                    {
                        datas.map((data, idx) => (
                            <div className={`flex ${idx % 2 === 0 ? '' : 'flex-row-reverse'} items-center gap-12 justify-center`}>
                                <img className='w-full flex-1' src={data.img} alt={data.alt} />
                                <div className='flex-1'>
                                    <h1 className='text-4xl font-bold'>{data.title}</h1>
                                    <p className='opacity-75'>{data.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    );
}

export default CreatePersonalWhy;

