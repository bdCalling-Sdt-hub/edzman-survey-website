import Examples from '@/components/Example/Examples'
import PageHeader from '@/components/PageHeader/PageHeader'
import React from 'react'

function page() {
  const datas =[
    {
      image:'',
      title:'',
      example:[
        
      ]
    }
  ]
  return (
    <div>
      <PageHeader
        title={'Find Your Why Examples'}
        subTitle={`"Discover your 'Why' with our free personality WHY's and gain personalized insights and actionable steps to live a more fulfilling life."`}
      ></PageHeader>
      <Examples></Examples>


    </div>
  )
}

export default page