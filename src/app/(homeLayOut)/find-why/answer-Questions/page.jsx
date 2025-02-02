import AnswerQuestions from '@/components/answer-Questions/AnswerQuestions'
import PageHeader from '@/components/PageHeader/PageHeader'
import React from 'react'

function page() {
 
  return (
    <div>
      <div className='relative mb-12'>
        <PageHeader
          title={'Discover Your WHY'}
          subTitle={`Take our free personality WHY's to uncover your 'Why' and receive personalized guidance and actionable steps to help you live a fulfilling life.`}
        ></PageHeader>
       
      </div>
 
      <AnswerQuestions />

    </div>
  )
}

export default page