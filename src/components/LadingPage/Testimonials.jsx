'use client';

import React, { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "../SectionHeader/SectionHeader";

const Testimonial = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const testimonials = [
    {
      _id: 1212,
      name: 'Emma R.',
      feedback: `"Flowing The step by step on FindYourWhy.com was an eye-opening journey. The questions were thought-provoking, and the personalized insights truly helped me identify what drives me. I feel more confident and inspired to pursue my goals."`,
      avatar: 'https://static.vecteezy.com/system/resources/previews/038/974/578/non_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg',
      question: 'A Life WHY Is About Finding Your FYW',
    },
    {
      _id: 1221312,
      name: 'John Doe',
      feedback: "This platform has transformed my perspective and given me clarity like never before.",
      avatar: 'https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?semt=ais_hybrid',
      question: 'Software Engineer',
    },
    {
      _id: 134566212,
      name: 'Jane Smith',
      feedback: "Exceptional experience! The insights were eye-opening, and I feel empowered to take actionable steps toward my goals.",
      avatar: 'https://freeparalegal.org/wp-content/uploads/2023/08/July-1536x1024-1.jpg',
      question: 'Project Manager',
    },
  ];

  return (
    <>
      <SectionHeader
        title={'What Our Clients Are Saying'}
        subTitle={
          'Discover how our platform has empowered individuals to uncover their FYW, gain clarity, and take actionable steps toward a more meaningful life.'
        }
      />
      <section style={{ backgroundImage: `url(/image/tesimonialBg.png)` }} className=" bg-no-repeat bg-center bg-cover max-w-[90vw] rounded-md pb-20 pt-20 dark:bg-dark lg:pb-[120px] lg:pt-[120px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Swiper
            slidesPerView={1}
            ref={sliderRef}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial._id}>
                <SingleTestimonial
                  image={testimonial.avatar}
                  reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                  reviewAlt="lineicon"
                  details={testimonial.feedback}
                  name={testimonial.name}
                  position={testimonial.question}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center mt-8 gap-4">
            <button
              className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
              onClick={handlePrev}
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-gray-800 dark:text-gray-200"
              >
                <path
                  d="M17.5 9.5H4.15625L9.46875 4.09375C9.75 3.8125 9.75 3.375 9.46875 3.09375C9.1875 2.8125 8.75 2.8125 8.46875 3.09375L2 9.65625C1.71875 9.9375 1.71875 10.375 2 10.6562L8.46875 17.2188C8.59375 17.3438 8.78125 17.4375 8.96875 17.4375C9.15625 17.4375 9.3125 17.375 9.46875 17.25C9.75 16.9687 9.75 16.5313 9.46875 16.25L4.1875 10.9062H17.5C17.875 10.9062 18.1875 10.5937 18.1875 10.2187C18.1875 9.8125 17.875 9.5 17.5 9.5Z"
                  fill=""
                />
              </svg>
            </button>
            <button
              className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
              onClick={handleNext}
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-gray-800 dark:text-gray-200"
              >
                <path
                  d="M18 9.6875L11.5312 3.125C11.25 2.84375 10.8125 2.84375 10.5312 3.125C10.25 3.40625 10.25 3.84375 10.5312 4.125L15.7812 9.46875H2.5C2.125 9.46875 1.8125 9.78125 1.8125 10.1562C1.8125 10.5312 2.125 10.875 2.5 10.875H15.8437L10.5312 16.2813C10.25 16.5625 10.25 17 10.5312 17.2813C10.6562 17.4063 10.8437 17.4688 11.0312 17.4688C11.2187 17.4688 11.4062 17.4062 11.5312 17.25L18 10.6875C18.2812 10.4062 18.2812 9.96875 18 9.6875Z"
                  fill=""
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;

const SingleTestimonial = ({ image, reviewImg, reviewAlt, details, name, position }) => {
  return (
    <div className="relative w-full flex justify-center">
      <div className="relative w-[90vw] pb-8 md:w-11/12 lg:w-10/12 xl:w-8/12">
        <div className="w-full flex flex-col items-center md:flex-row">
          <div className="relative mb-8 w-[100px] h-[100px] md:w-[250px]  md:h-[200px] border-4 rounded-full border-[#dadada]">
            <img src={image} alt="image" className="w-full object-cover  h-full rounded-full" />
          </div>
          <div className="w-full text-center ml-4 md:text-left">
            <div>
              <h1 className="md:text-3xl font-semibold text-gray-900 dark:text-white">A Life WHY Is About Finding Your FYW</h1>
              <p className="mb-4 md:text-xl my-3 italic text-gray-600 dark:text-gray-300">{details}</p>
              <h4 className="md:text-2xl font-semibold text-gray-900 dark:text-white">{name}</h4>
              <p className="md:text-xl text-gray-500 dark:text-gray-400">{position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
