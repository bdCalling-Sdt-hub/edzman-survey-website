import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
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
    <>
      <SectionHeader
        title={'What Our Clients Are Saying'}
        subTitle={`Discover how our platform has empowered individuals to uncover their FYW, gain clarity, and take actionable steps toward a more meaningful life.`}
      />
      <div className='max-w-screen-2xl mx-auto py-16 px-4'>
        <Carousel>
          <CarouselContent>
            {
              testimonials.map((review, idx) => (
                <CarouselItem key={idx} className="flex flex-col md:flex-row  px-4 md:px-8 justify-center space-x-0 md:space-x-6 py-6">
                  <div className="w-32 h-32 md:w-48 md:h-48 mb-4 md:mb-0">
                    <img className="w-full h-full object-cover rounded-full border-4 border-[#00b0f2]" src={review?.avatar} alt={review?.name} />
                  </div>
                  <div className="text-start basis-4/12">
                    <p className="text-lg md:text-2xl text-gray-600 font-semibold">{review?.question}</p>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li className="text-sm md:text-base">"{review?.feedback}"</li>
                    </ul>
                    <p className="text-lg font-semibold text-[#00b0f2]">- {review?.name}</p>
                  </div>
                </CarouselItem>
              ))
            }
          </CarouselContent>
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <CarouselPrevious className="bg-teal-600 text-white rounded-full p-3 shadow-lg hover:bg-teal-700 transition duration-300" />
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <CarouselNext className="bg-teal-600 text-white rounded-full p-3 shadow-lg hover:bg-teal-700 transition duration-300" />
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Testimonials;
// TODO: new try