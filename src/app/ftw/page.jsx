import Reflect from '@/components/fYwComponents/Reflect'
import PageHeader from '@/components/PageHeader/PageHeader'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import React from 'react'

function page() {
  return (
    <div>
      <PageHeader
      title={'Discover Your WHY'}
      subTitle={"Take our free personality WHY's to uncover your 'Why' and receive personalized guidance and actionable steps to help you live a fulfilling life."}
      ></PageHeader>
      <SectionHeader
      title={'How To Find Your "Why"'}
      subTitle={`Finding your "Why" in life—your deeper purpose or sense of meaning—can be a transformative journey. It's the underlying reason that drives your actions, decisions, and relationships. Here are some steps you can take to help uncover your "Why":`}
      ></SectionHeader>
      <Reflect></Reflect>
    </div>
  )
}

export default page