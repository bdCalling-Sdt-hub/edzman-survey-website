import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import SectionHeader from '../SectionHeader/SectionHeader';

const TestimonialData = [
  {
    id: 1,
    name: 'John Doe',
    description:
      'This platform provided insights that helped me improve my life with easy-to-use tools.',
    img: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Lee',
    description:
      'The platform made me reflect on my life goals and values, helping me feel focused and motivated.',
    img: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`,
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Brown',
    description:
      'I feel empowered to make positive changes with this platform’s transformative results.',
    img: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
    rating: 4,
  },
  {
    id: 4,
    name: 'Emily Wilson',
    description:
      'This service revealed areas for improvement, boosting my confidence in decision-making.',
    img: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`,
    rating: 5,
  },
  {
    id: 5,
    name: 'David Smith',
    description:
      'Skeptical at first, I learned a lot about myself using this insightful tool.',
    img: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
    rating: 4,
  },
  {
    id: 6,
    name: 'Sophia Clark',
    description:
      'The life survey was an eye-opener, guiding me toward personal growth with actionable steps.',
    img: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`,
    rating: 5,
  },
  {
    id: 7,
    name: 'James Miller',
    description:
      'After weeks of use, I see improvements in handling challenges, highly recommended.',
    img: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
    rating: 5,
  },
  {
    id: 8,
    name: 'Olivia Johnson',
    description:
      'The survey helped me discover hidden potential, aligning me with clearer life goals.',
    img: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`,
    rating: 4,
  },
  {
    id: 9,
    name: 'Robert Martinez',
    description:
      'The platform’s insights restructured my life goals, aiding real progress.',
    img: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
    rating: 5,
  },
  {
    id: 10,
    name: 'Ava Taylor',
    description:
      'This service offered me a fresh life perspective, making it a valuable experience.',
    img: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`,
    rating: 4,
  },
];

const contentStyle = {
  maxWidth: '320px',
  color: 'red',
  lineHeight: '320px',
  textAlign: 'center',
  background: 'red !important',
};

const Testimonial = () => (
  <div className="responsive-width ">
    <div className="testimonial-carousel mt-40 mb-20">
      <SectionHeader
        title={'What Our Clients Are Saying'}
        subTitle={
          'Discover how our platform has empowered individuals to uncover their FYW, gain clarity, and take actionable steps toward a more meaningful life.'
        }
      />

      <Carousel
        draggable={true}
        slidesToShow={3}
        autoplaySpeed={1200}
        autoplay
        responsive={[
          {
            breakpoint: 1524,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
        className="flex items-center p-3 md:p-10 justify-center gap-10  w-full mx-auto  text-black"
      >
        {TestimonialData.map((data) => (
          <div key={data.id} style={contentStyle}>
            <div className="md:ml-5 bg-[white] rounded-md  shadow-black p-4 testimonial-item ">
              <Image
                src={data.img}
                alt={data.name}
                className="rounded-full w-24 h-24 mx-auto mb-4 object-cover"
                width={1000}
                height={1000}
              />
              <h3 className="text-xl font-bold text-center">{data.name}</h3>
              <p className="text-sm text-gray-600 text-inherit text-center">
                {data.description}
              </p>
              <div className="flex justify-center text-yellow-500 mt-2 mb-10">
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} className="text-2xl">
                    {index < data.rating ? '★' : '☆'}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

export default Testimonial;
