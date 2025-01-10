import GrowthChart from '@/components/Charts/GrowthChart'
import DonateTable from '@/components/table/DonateTable'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

function page() {
    

    const data = [
        {
            title: 'Total Users',
            icon: '/userIcon.svg',
            number: 144061
        },
        {
            title: 'Total Users',
            icon: '/blogIcon.svg',
            number: 144061
        },
        {
            title: 'Total Clients Story',
            icon: '/storyIcon.svg',
            number: 144061
        },
        {
            title: 'Total WHY Finds',
            icon: '/why.svg',
            number: 144061
        },
        {
            title: 'Total Earning',
            icon: '/donateIcon.svg',
            number: "$ 144061"
        }
    ]
    return (
        <div className='flex items-center flex-col justify-center gap-12'>
            <div className='flex items-center justify-center gap-12'>
                {
                    data.map((card, idx) => (
                        <Card key={idx} className='flex flex-col items-center gap-4 w-48 h-48'>
                            <CardHeader>
                                <CardTitle className='font-semibold '>{card.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <img src={card.icon}></img>
                            </CardContent>
                            <CardFooter>
                                <p className='font-semibold'>{card.number}</p>
                            </CardFooter>
                        </Card>
                    ))
                }


            </div>
            <GrowthChart></GrowthChart>
            <DonateTable/>
        </div>
    )
}

export default page