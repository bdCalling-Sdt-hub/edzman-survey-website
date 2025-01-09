'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

// Import required modules
import { Pagination } from 'swiper/modules';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Emma R.',
      feedback: "FindYourWhy.com helped me uncover my life's purpose. I feel more confident and inspired to achieve my goals.",
      avatar: 'https://static.vecteezy.com/system/resources/previews/038/974/578/non_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg',
      question: 'A Life WHY Is About Finding Your FYW',
    },
    {
      name: 'John Doe',
      feedback: "This platform has transformed my perspective and given me clarity like never before.",
      avatar: 'https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?semt=ais_hybrid',
      question: 'Software Engineer',
    },
    {
      name: 'Jane Smith',
      feedback: "Exceptional experience! The insights were eye-opening, and I feel empowered to take actionable steps toward my goals.",
      avatar: 'https://freeparalegal.org/wp-content/uploads/2023/08/July-1536x1024-1.jpg',
      question: 'Project Manager',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#1d3557]">
          What Our Clients Are Saying
        </h2>
        <p className="text-gray-600 text-center mt-4 mb-10">
          Hear inspiring stories from people who have discovered their "Why" and transformed their lives.
        </p>

        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white shadow-md rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
                {/* Avatar Section */}
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full border-4 border-[#00b0f2]"
                  />
                </div>
                {/* Content Section */}
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-semibold text-wrap text-[#1d3557] mb-2">
                    {testimonial.question}
                  </h3>
                  <p className="text-gray-600 italic">{testimonial.feedback}</p>
                  <p className="text-blue-500 font-bold mt-4">- {testimonial.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
