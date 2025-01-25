import Examples from "@/components/Example/Examples";
import DonateSection from "@/components/LadingPage/DonateSection";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

function FindYourWhyExamples() {
  const datas = [
    {
      image: '/ExampleImage/img1.png',
      title: [
        "To Make a Positive Impact on Others",
        "To Pursue Personal Growth and Self-Actualization",
        "To Experience and Enjoy Life Fully",
        "To Create Meaningful Connections",
      ],
      example: [
        "My purpose is to help people improve their lives, whether through my career, relationships, or community service.",
        "I want to continue learning, growing, and becoming the best version of myself.",
        "My why is to experience the richness of life through travel, relationships, and embracing new challenges.",
        "I aim to build deep, loving relationships with family and friends, offering support, love, and empathy.",
      ],
    },
    {
      image: '/ExampleImage/img2.png',
      title: [
        "To Inspire Others and Lead by Example",
        "To Contribute to a Greater Cause or Community",
        "To Leave a Legacy",
        "To Build a Life of Freedom and Independence",
      ],
      example: [
        "My purpose is to inspire others by living authentically and demonstrating resilience, courage, and compassion.",
        "I want to make a difference in the world by working toward sustainability and advocating for social justice.",
        "I strive to create something lasting—whether through my children, my work, or my contributions—that can have a positive influence long after I'm gone.",
        "My why is to create a life where I can be free to pursue my passions and make my own choices without external constraints.",
      ],
    },
    {
      image: '/ExampleImage/img3.png',
      title: [
        "To Promote Health and Well-Being",
        "To Seek Spiritual Fulfillment",
        "To Achieve Success and Financial Independence",
        "To Be Creative and Express Oneself",
      ],

      example: [
        "I am driven by the desire to help others lead healthier lives, both mentally and physically.",
        "My purpose is to connect with a higher power and live in alignment with my faith and spiritual beliefs.",
        "My why is to work hard to build a secure and successful career that allows me to provide for my family and give back to others.",
        "I am passionate about creating—whether through art, writing, music, or other forms of self-expression—and sharing that creativity with the world.",
      ],
    },
    {
      image: '/ExampleImage/img4.png',
      title: [
        "To Find and Maintain Happiness",
        "To Overcome Challenges and Grow Stronger",
        "To Serve Others",
        "To Raise and Nurture a Family",
      ],

      example: [
        "My purpose is to focus on finding joy in the small moments of life and creating a fulfilling, happy existence.",
        "I am determined to face adversity with resilience, using challenges as opportunities to grow and learn.",
        "My why is to give back through acts of service, whether that’s through my profession or volunteering.",
        "My purpose is to raise my children with love, wisdom, and guidance, so they can grow into kind, strong, and compassionate individuals.",
      ],
    },
    {
      image: '/ExampleImage/img5.png',
      title: [
        "To Advocate for Change",
        "To Seek Adventure and Exploration",
        "To Heal and Help Others Overcome Pain",
        "To Be Creative and Express Oneself",
      ],

      example: [
        "My reason for living is to stand up for those who don’t have a voice and to push for social, environmental, and political change.",
        "I live to explore the world, experience new cultures, and push the limits of my comfort zone.",
        "My purpose is to work in the medical or mental health field, helping people heal physically and emotionally.",
        "My why is to create a safe, loving, and supportive home environment for my family, where everyone can thrive.",
      ],
    },
  ];

  return (
    <>
        <PageHeader
          title={'Find Your Why Examples'}
          subTitle={"Discover your 'Why' with our free personality WHY's and gain personalized insights and actionable steps to live a more fulfilling life."}
        ></PageHeader>
      <div className="container mx-auto px-2 py-12">
        <Examples></Examples>

        {/* Examples Section */}
        {datas.map((data, dataIndex) => (
          <div
            key={dataIndex}
            className={`flex flex-col ${dataIndex % 2 === 0 ? '' : 'lg:flex-row-reverse'} lg:flex-row justify-between items-start lg:items-center gap-8 mb-16`}
          >
            <img className="w-full md:w-[400px] lg:w-1/2" src={data?.image} alt="image" />
            {/* Text Section */}
            <div className="basis-2/3 flex flex-col items-start h-full gap-8 justify-between lg:basis-3/4">
              {data?.title.map((title, index) => (
                <div
                  key={index}
                  className="mb-2 flex md:flex-row flex-col items-start md:items-center gap-2"
                >
                  <img className="border-2 p-2 rounded-md  border-[#00b0f2] bg-[#00b0f2]/20" src="/Icon/solidarity.png" alt="solidarity icon" />
                  <div>
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="text-sm lg:text-base"><b>Example :-</b>{data?.example[index]}</p>
                  </div>

                </div>
              ))}
              <div className="flex items-center gap-3">
                <h1 className="font-semibold">To Find Your Why –</h1><button className="bg-[#00b0f2] font-semibold  text-white px-6 py-2 rounded-md  hover:bg-[#00b0f2]/70 transition">
                  Start HereF
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
      <DonateSection></DonateSection>
    </>
  );
}

export default FindYourWhyExamples;
