import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import SectionHeader from "../SectionHeader/SectionHeader";

const TestimonialData = [
  {
    id: 1,
    name: "John Doe",
    description:
      "Hye Gather helped me to find the perfect vendor for my event. The team is very helpful and responsive. They made sure that every detail was taken care of. I was very impressed with their service and would definitely recommend them to my friends and family.",
    img: "https://randomuser.me/api/portraits/men/82.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "James Smith",
    description:
      "I was very impressed with the service of Hye Gather. The team is very professional and helpful. They made sure that every detail was taken care of and the vendor they recommended was excellent. I would definitely recommend them to my friends and family.",
    img: "https://randomuser.me/api/portraits/men/83.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "William Brown",
    description:
      "Hye Gather helped me to find the perfect vendor for my event. The team is very helpful and responsive. They made sure that every detail was taken care of. I was very impressed with their service and would definitely recommend them to my friends and family.",
    img: "https://randomuser.me/api/portraits/men/84.jpg",
    rating: 5,
  },
];

const contentStyle = {
  maxWidth: "320px",
  color: "red",
  lineHeight: "320px",
  textAlign: "center",
  background: "red !important",
};

const Testimonial = () => (
  <div className="responsive-width ">
    <div className="testimonial-carousel mt-40 mb-20">
      <SectionHeader
        title={"What Our Clients Are Saying"}
        subTitle={
          "Discover how our platform has empowered individuals to uncover their FYW, gain clarity, and take actionable steps toward a more meaningful life."
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
                    {index < data.rating ? "★" : "☆"}
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
