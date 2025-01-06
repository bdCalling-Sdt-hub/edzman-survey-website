// 'use-client';

// import React from 'react';
// import SectionHeader from '../SectionHeader/SectionHeader';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/pagination';


// function Testimonials() {
//     const testimonials = [
//         {
//             name: 'John Doe',
//             feedback: 'This service is amazing! Highly recommend it to everyone.',
//             avatar: '/avatar1.jpg',
//             position: 'Software Engineer',
//         },
//         {
//             name: 'Jane Smith',
//             feedback: 'Outstanding experience. Customer service was top-notch!',
//             avatar: '/avatar2.jpg',
//             position: 'Project Manager',
//         },
//         {
//             name: 'Alice Johnson',
//             feedback: 'Great quality and quick delivery. I am super impressed!',
//             avatar: '/avatar3.jpg',
//             position: 'UI/UX Designer',
//         },
//         // Add more testimonials here
//     ];
//     return (
//         <div>
//             <SectionHeader
//                 title="What Our Clients Are Saying"
//                 subTitle="Discover how our platform has empowered individuals to uncover their FYW, gain clarity, and take actionable steps toward a more meaningful life."
//             />

//             <div className="w-full px-6 py-12 bg-gray-100">
//                 <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
//                 <Swiper
//                     modules={[Pagination]}
//                     spaceBetween={20}
//                     slidesPerView={1}
//                     pagination={{ clickable: true }}
//                     breakpoints={{
//                         640: { slidesPerView: 1 },
//                         768: { slidesPerView: 2 },
//                         1024: { slidesPerView: 3 },
//                     }}
//                     className="swiper-container"
//                 >
//                     {testimonials.map((testimonial, index) => (
//                         <SwiperSlide key={index}>
//                             <div className="p-6 bg-white rounded-lg shadow-lg text-center">
//                                 <img
//                                     src={testimonial.avatar}
//                                     alt={testimonial.name}
//                                     className="w-16 h-16 mx-auto rounded-full mb-4"
//                                 />
//                                 <h3 className="text-lg font-semibold">{testimonial.name}</h3>
//                                 <p className="text-sm text-gray-500 mb-2">{testimonial.position}</p>
//                                 <p className="text-gray-700">{testimonial.feedback}</p>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// }

// export default Testimonials;

import React from 'react'

function Testimonials() {
  return (
    <div>Testimonials</div>
  )
}

export default Testimonials
