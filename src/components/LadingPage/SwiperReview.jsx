'use client';
import { Spin } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'; // Import the Pagination module
import 'swiper/swiper-bundle.min.css';

function SwiperReview() {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'This service is amazing! Highly recommend it to everyone.',
      avatar: 'https://static.vecteezy.com/system/resources/previews/038/974/578/non_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg',
      position: 'Software Engineer',
    },
    {
      name: 'Jane Smith',
      feedback: 'Outstanding experience. Customer service was top-notch!',
      avatar: 'https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?semt=ais_hybrid',
      position: 'Project Manager',
    },
    {
      name: 'Alice Johnson',
      feedback: 'Great quality and quick delivery. I am super impressed!',
      avatar: 'https://freeparalegal.org/wp-content/uploads/2023/08/July-1536x1024-1.jpg',
      position: 'UI/UX Designer',
    },
    // Add more testimonials here
  ];

  if (testimonials?.length === 0) {
    return <Spin />;
  }

  return (
    <div>
      <div className="w-full">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          className="swiper-container"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 rounded-lg shadow-lg text-center">
                <img
                  src={testimonial?.avatar}
                  alt={testimonial?.name}
                  className="w-16 h-16 mx-auto rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold">{testimonial?.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{testimonial?.position}</p>
                <p className="text-gray-700">{testimonial?.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SwiperReview;
