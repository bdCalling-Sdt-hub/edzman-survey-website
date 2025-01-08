'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

// Register Swiper modules
SwiperCore.use([Navigation, Pagination]);

import SectionHeader from '../SectionHeader/SectionHeader';

function Testimonials() {
  const testimonials = [
    {
      name: 'Emma R.',
      feedback: "Flowing step by step on FindYourWhy.com was an eye-opening journey. The questions were thought-provoking, and the personalized insights truly helped me identify what drives me. I feel more confident and inspired to pursue my goals.",
      avatar: 'https://static.vecteezy.com/system/resources/previews/038/974/578/non_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg',
      question: 'A Life WHY Is About Finding Your FYW',
    },
    {
      name: 'John Doe',
      feedback: "This service is amazing! Highly recommend it to everyone.",
      avatar: 'https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?semt=ais_hybrid',
      question: 'Software Engineer',
    },
    {
      name: 'Jane Smith',
      feedback: "Outstanding experience. Customer service was top-notch!",
      avatar: 'https://freeparalegal.org/wp-content/uploads/2023/08/July-1536x1024-1.jpg',
      question: 'Project Manager',
    },
  ];

  return (
    <div className="md:py-16">
      {/* Section Header */}
      <SectionHeader
        title={'What Our Clients Are Saying'}
        subTitle={`Discover how our platform has empowered individuals to uncover their FYW, gain clarity, and take actionable steps toward a more meaningful life.`}
      />

      <div className="max-w-screen-xl mx-auto px-6">
        {/* Swiper Carousel */}
        <Swiper
        swipeHandler={false}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="mt-12"
        >
          {testimonials.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className=" p-8 flex flex-col md:flex-row items-center gap-6">
                {/* Avatar */}
                <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                  <img
                    className="w-full h-full object-cover rounded-full border-4 border-[#00b0f2]"
                    src={review?.avatar}
                    alt={review?.name}
                  />
                </div>
                {/* Testimonial Content */}
                <div className="text-center md:text-left flex-grow">
                  <p className="text-lg font-semibold text-gray-800">{review?.question}</p>
                  <p className="text-gray-600 italic mt-2">"{review?.feedback}"</p>
                  <p className="text-blue-500 font-bold mt-4">- {review?.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;

//TODO : make swiper more style