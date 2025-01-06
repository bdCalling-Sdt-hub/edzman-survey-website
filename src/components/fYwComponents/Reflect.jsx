import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import WhyQuestions from './WhyQuestions';
function Reflect() {
  const data = [
    {
      title: `Reflect on What Truly Matters to You`,
      items: [
        {
          subTitle: `Core Values`,
          details: `What are the values that resonate most deeply with you? These could be things like honesty, compassion, creativity, justice, or freedom. Your "why" is often rooted in your core values.`,
        },
        {
          subTitle: `Meaningful Moments`,
          details: `Reflect on moments in your life when you felt truly fulfilled or at peace. What were you doing? Who were you with? These moments can give you clues about what brings you purpose.`,
        },
        {
          subTitle: `Journaling`,
          details: `Write down your thoughts and feelings regularly. Journaling can help you process your inner world and begin to see patterns in what brings you joy and fulfillment.`,
        },
      ],
    },
    {
      title: `Examine What Energizes You`,
      items: [
        {
          subTitle: `Passions & Interests`,
          details: `Think about activities or subjects that make you feel alive and energized. This can range from hobbies, work, or causes you care deeply about. Your purpose often intersects with what excites and energizes you.`,
        },
        {
          subTitle: `Flow States`,
          details: `Reflect on times when you felt "in the zone" or deeply focused. What were you doing during these moments? These can be indicators of what you are naturally drawn to.`,
        },
      ],
    },
    {
      title: `Identify Your Strengths`,
      items: [
        {
          subTitle: `Natural Talents`,
          details: `What are you naturally good at? These could be skills, aptitudes, or talents that you may take for granted. Often, your purpose is linked to what you're naturally skilled at and how you can use those skills to serve others.`,
        },
        {
          subTitle: `Feedback from Others`,
          details: `Sometimes, others can see your strengths more clearly than you can. Ask people who know you well what they think you're good at or what they admire about you.`,
        },
      ],
    },
    {
      title: `Consider the Impact You Want to Have`,
      items: [
        {
          subTitle: `Contribution`,
          details: `Think about how you want to contribute to the world or those around you. Do you want to help others? Create something new? Inspire change? Your "why" often involves the positive impact you want to make, both for yourself and the people around you.`,
        },
        {
          subTitle: `Legacy`,
          details: `What do you want to leave behind in the world? It could be in the form of relationships, creative works, or even how you made others feel. Your legacy can be a powerful part of your "why."`,
        },
      ],
    },
  ];
  const Questions = [
    {
      title: 'Ask Yourself Meaningful Questions',
      question: [
        `What gets me out of bed in the morning ?`,
        `What would I do if I knew I couldn't fail ?`,
        `What does success look like to me ?`,
        `Who am I when I’m my most authentic self?`,
        `—————`
      ]
    }
  ];
  const dataSecondPart = [
    {
      title: `Look at Life’s Challenges`,
      items: [
        {
          subTitle: `Learn from Struggles`,
          details: ` Sometimes, your purpose is born out of hardship or personal challenges you've faced. How did you overcome obstacles, and what did those experiences teach you about yourself? Your story can often be the source of your "why."`,
        },
        {
          subTitle: `Empathy & Growth`,
          details: ` If you've experienced difficult times, you might feel compelled to help others going through similar struggles, which can be a form of purpose.`,
        }
      ],
    },
    {
      title: `Explore Different Paths`,
      items: [
        {
          subTitle: `Try New Things`,
          details: `It’s okay if your "why" isn’t clear right now. Experiment with different activities, volunteer opportunities, or career paths. You might discover new passions or interests that lead you closer to your purpose.`,
        },
        {
          subTitle: `Take Small Steps`,
          details: `Sometimes discovering your "why" is a gradual process. Start with what excites you in the moment, and build from there. The journey itself can be a path to clarity.`,
        }
      ],
    },
  ];
  const dataThirdPart = [
    {
      title: `Seek Inspiration from Others`,
      items: [
        {
          subTitle: `Read and Learn`,
          details: `Many people find their "why" by learning from others. Read biographies, listen to podcasts, or talk to mentors or people who inspire you. Often, learning about others’ journeys can help you find clarity on your own.`,
        },
        {
          subTitle: `Coaching or Therapy`,
          details: `If you're struggling to pinpoint your purpose, working with a coach or therapist can help you explore your deeper motivations and beliefs. They can guide you through self-discovery processes.`,
        }
      ],
    },
    {
      title: `Embrace the Process`,
      items: [
        {
          subTitle: `Be Patient`,
          details: `Finding your "why" is not always an immediate discovery. It can take time, and it’s normal for it to evolve over the years. Embrace the journey, and trust that your purpose will reveal itself in time.`,
        },
        {
          subTitle: `Stay Open`,
          details: `Be open to change. Sometimes your "why" might shift as you grow and experience new things. Flexibility is key.`,
        }
      ],
    },
  ];

  return (
    <div className='container mx-auto'>
      {data.map((section, idx) => (
        <div key={idx}>
          <div className="flex mt-12 items-center gap-3 mb-6">
            <img
              src="/icon/bullet-point.png"
              alt="icon"
              className="w-8 h-8"
            />
            <h1 className="text-base md:text-2xl font-bold text-[#000E4F]">
              {section.title}
            </h1>
          </div>

          <ul className="space-y-4 ml-3 md:ml-12">
            {section.items.map((item, index) => (
              <li key={index}>
                <h2 className="text-base md:text-2xl font-normal text-[#000E4F]">
                  • {item.subTitle} ——
                </h2>
                <p className="text-sm md:text-xl md:ml-28 tracking-wider text-[#232F65] mt-1 leading-relaxed">
                  {item.details}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <ul className="space-y-4 ml-3 md:ml-12">
        {Questions.map((item, index) => (
          <li key={index}>
            <div className="flex mt-12 items-center gap-3 mb-6">
              <img
                src="/icon/bullet-point.png"
                alt="icon"
                className="w-8 h-8"
              />
              <h1 className="text-base md:text-2xl font-bold text-[#000E4F]">
                {item.title}
              </h1>
            </div>
            {
              item.question.map((dets, idx) => (
                <p className="text-sm md:text-xl md:ml-28 tracking-wider text-[#232F65] mt-1 leading-relaxed" key={idx}>• {dets}</p>
              ))
            }
          </li>
        ))}
      </ul>
      <SectionHeader
        subTitle={`The answers to these questions can start to  aint a picture of what matters most to you and what your life's purpose could be.`}
      ></SectionHeader>
      {dataSecondPart.map((section, idx) => (
        <div key={idx}>
          <div className="flex mt-12 items-center gap-3 mb-6">
            <img
              src="/icon/bullet-point.png"
              alt="icon"
              className="w-8 h-8"
            />
            <h1 className="text-base md:text-2xl font-bold text-[#000E4F]">
              {section.title}
            </h1>
          </div>

          <ul className="space-y-4 ml-3 md:ml-12">
            {section.items.map((item, index) => (
              <li key={index}>
                <h2 className="text-base md:text-2xl font-normal text-[#000E4F]">
                  • {item.subTitle} ——
                </h2>
                <p className="text-sm md:text-xl md:ml-28 tracking-wider text-[#232F65] mt-1 leading-relaxed">
                  {item.details}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <SectionHeader
        title={`Align Your Actions with Your "Why"`}
        subTitle={`Once you start to get a sense of your purpose, think about how you can align your everyday life with it. If you find that you are deeply passionate about helping people, for instance, you could look for work or volunteer opportunities in that field. It’s important that your "why" isn’t just a thought but something you actively pursue.`}
      ></SectionHeader>
      {dataThirdPart.map((section, idx) => (
        <div key={idx}>
          <div className="flex mt-12 items-center gap-3 mb-6">
            <img
              src="/icon/bullet-point.png"
              alt="icon"
              className="w-8 h-8"
            />
            <h1 className="text-base md:text-2xl font-bold text-[#000E4F]">
              {section.title}
            </h1>
          </div>

          <ul className="space-y-4 ml-3 md:ml-12">
            {section.items.map((item, index) => (
              <li key={index}>
                <h2 className="text-base md:text-2xl font-normal text-[#000E4F]">
                  • {item.subTitle} ——
                </h2>
                <p className="text-sm md:text-xl md:ml-28 tracking-wider text-[#232F65] mt-1 leading-relaxed">
                  {item.details}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="w-full h-[1px] bg-[#dadada] my-12"></div>
      <div className='flex items-center justify-center flex-col mb-12'>
        <p className='text-[#00b0f2] font-bold '>• Remember  ── </p>
        <p className='text-sm px-2 md:text-base text-center'>Your "Why" is not necessarily one grand, fixed thing. It can be a combination of different passions, values, and ways you want to contribute to the world. The key is to start asking the right questions and engaging with life in a way that allows your purpose to emerge organically over time.</p>
      </div>
      <SectionHeader
        title={`Thought Provoking Items To Find Your "Why" In Life`}
        subTitle={`Finding your "Why" in life—your purpose or deeper sense of meaning—can be a transformative and fulfilling journey. Here are some items and tools that can help guide you on that path. You may use one, a few or all of them to create your Why.`}
      ></SectionHeader>
      <WhyQuestions></WhyQuestions>
    </div>
  );
}

export default Reflect;
