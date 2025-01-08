import AnswerQuestions from '@/components/answer-Questions/AnswerQuestions'
import PageHeader from '@/components/PageHeader/PageHeader'
import React from 'react'

function page() {
  const cardData = [
    {
      icon: "/icon/answer1.png",
      title: `Copmleate The WHY's`,
      subTitle: 'Be yourself and answer honestly to find out your personality type.',
      styling: 'from-[#17b4ec] to-[#fff]'
    },
    {
      icon: "/icon/answer2.png",
      title: `View The Detail Result`,
      subTitle: 'Learn how your personality type influences many areas of your life.',
      styling: 'from-[#2397f3] to-[#ced7f6]'
    },
    {
      icon: "/icon/answer3.png",
      title: `Unlock Your Potential`,
      subTitle: 'Grow into the person you want to be with your optional Premium Suite.',
      styling: 'from-[#2397f3] to-[#ced7f6]'
    },
  ]
  return (
    <div>
      <div className='relative mb-12'>
        <PageHeader
          title={'Discover Your WHY'}
          subTitle={`Take our free personality WHY's to uncover your 'Why' and receive personalized guidance and actionable steps to help you live a fulfilling life.`}
        ></PageHeader>
        <div className='absolute -bottom-48 transition-transform  -translate-x-1/2 left-1/2 container mx-auto'>
          <div className='flex items-center md:flex-row flex-col rounded-md gap-6 justify-between'>
            {
              cardData.map((card, idx) => (
                <div className={`flex flex-col p-12 rounded-md bg-gradient-to-bl  ${card.styling} text-center z-[999]  items-center justify-center`} key={idx}>
                  <img className='w-24' src={card.icon} alt={`icon${idx + 1}`} />
                  <h1>{card?.title}</h1>
                  <p>{card?.subTitle}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
 
      <AnswerQuestions />

    </div>
  )
}

export default page