import React from 'react'

function WhyQuestions() {
    const data = [
        {
            title: `Thought Provoking Items `,
            items: [
                {
                    subTitle: `Journaling Notebookt`,
                    details: [
                        `Writing your thoughts, reflections, and questions can help you clarify your values, passions, and goals.`,
                        `Prompts to get you started: What makes me feel most alive? What are the times in my life when I’ve felt most proud? What would I do if I couldn’t fail?`
                    ]
                }
            ],
            items: [
                {
                    subTitle: `Vision Board`,
                    details: [
                        `A visual representation of your dreams, goals, and values. It can help you focus on what truly matters to you and inspire action toward your purpose.`,
                    ]
                }
            ],
            items: [
                {
                    subTitle: `Books on Purpose and Self-Discovery`,
                    details: [
                        `"Man's Search for Meaning" by Viktor Frankl`,
                        `"Start with Why" by Simon Sinek`,
                        `"The Purpose Driven Life" by Rick Warren`,
                        `"The Alchemist" by Paulo Coelho`,
                        `"Atomic Habits" by James Clear (for building habits that align with your "why")`,
                    ]
                }
            ],
        }
    ];
    return (
        <div>
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
                                <ul>
                                    {item.details.map((item, idx) => (
                                        <li key={idx} className="text-sm list-disc md:text-xl md:ml-28 tracking-wider text-[#232F65] mt-1 leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default WhyQuestions
