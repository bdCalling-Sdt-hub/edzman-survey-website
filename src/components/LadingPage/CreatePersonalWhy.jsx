'use client';
import React, { memo } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import SectionHeader from '../SectionHeader/SectionHeader';
import Link from 'next/link';
import Image from 'next/image';

const datas = [
  {
    img: '/image/image1.png',
    alt: `Create Your Why `,
    title: 'Take the Seps to create Your Personal - ‘WHY’',
    description:
      'Start by answering a series of thoughtful questions designed to help you discover what truly drives you. Your answers will guide you toward finding your "Why."',
    buttonText: 'Learn More',
  },
  {
    img: '/image/Group1.png',
    alt: 'Create Your Why',
    title: 'Personalize Your ‘WHY’',
    description:
      'As you continue, additional questions help refine your journey by gathering key insights about your values and aspirations to craft a personalized experience. By finding your WHY, we can better align your goals with meaningful actions.',
    buttonText: 'Learn More',
  },
  {
    img: '/image/image3.png',
    alt: 'Create Your Why',
    title: 'Share Your ‘WHY’ Story',
    description:
      'Once you’ve found your "Why," you can make a public declaration and share your journey with others, inspiring those who are on their own path of self-discovery and finding their "Why."',
    buttonText: 'Learn More',
  },
];
function CreatePersonalWhy() {
  return (
    <div className="container mx-auto">
      <div className=" lg:w-8/12 mx-auto">
        <SectionHeader
          title="Discover Your WHY Through a Step-by-Step Process"
          subTitle="Uncover Your 'Why' with Personalized Support, Thoughtful Insights, and Actionable Steps Tailored to Assist You Find Your Life's WHY."
        ></SectionHeader>
      </div>
      <div className="flex  lg:flex-row flex-col items-center gap-12 justify-between">
        <div className="flex flex-col gap-12 px-2">
          {datas.map((data, idx) => (
            <div
              key={idx}
              className={`flex ${
                idx % 2 === 0
                  ? 'lg:flex-row flex-col'
                  : 'flex-col lg:flex-row-reverse'
              } items-center gap-16 justify-center z-[888] `}
            >
              <Image
                width={1500}
                height={1500}
                className="flex-1 lg:!w-1/2 h-full"
                src={data.img}
                alt={data.alt}
              />
              <div className="flex-1 gap-6 items-start flex flex-col relative z-9">
                <div
                  className={`-top-6 -left-4 -z-[999] w-12 h-12 ${
                    idx % 2 !== 0 ? 'bg-[#1D355799]' : 'bg-[#2196F399]/50'
                  } rounded-full  absolute`}
                ></div>
                <div className="bottom-0 right-12 -z-[999] w-8 h-8  rounded-full bg-[#00B0F2] absolute"></div>
                <p className="text-4xl z-[999] text-[#1D3557] font-bold">
                  {data.title.split(' ').map((word, index) =>
                    word?.toLowerCase() === '‘why’' ||
                    word?.toLowerCase() === 'story' ||
                    word?.toLowerCase() === 'your' ? (
                      <span key={index} className="text-[#00B0F2]">
                        {word}{' '}
                      </span>
                    ) : (
                      <span key={index}>{word} </span>
                    )
                  )}
                </p>
                <p className="opacity-75 z-[999]">{data?.description}</p>
                <Link href={'/example'}>
                  <div className="flex px-6 py-3 items-center border-[#00B0F2] hover:bg-[#00B0F2] transition-all hover:text-white rounded-md border-2 gap-2">
                    <button className="cursor-pointer">
                      {data?.buttonText}
                    </button>
                    <MdOutlineKeyboardArrowRight />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(CreatePersonalWhy);
