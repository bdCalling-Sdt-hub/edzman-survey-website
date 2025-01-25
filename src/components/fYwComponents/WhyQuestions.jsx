import React from 'react';

function WhyQuestions() {
    const data = [
        {
            title: `Thought Provoking Items`,
            items: [
                {
                    subTitle: `Journaling Notebook`,
                    details: [
                        `Writing your thoughts, reflections, and questions can help you clarify your values, passions, and goals.`,
                        `Prompts to get you started: What makes me feel most alive? What are the times in my life when I’ve felt most proud? What would I do if I couldn’t fail?`
                    ]
                },
                {
                    subTitle: `Vision Board`,
                    details: [
                        `A visual representation of your dreams, goals, and values. It can help you focus on what truly matters to you and inspire action toward your purpose.`,
                    ]
                },
                {
                    subTitle: `Books on Purpose and Self-Discovery`,
                    info: 'Books like :- ',
                    details: [
                        `"Man's Search for Meaning" by Viktor Frankl`,
                        `"Start with Why" by Simon Sinek`,
                        `"The Purpose Driven Life" by Rick Warren`,
                        `"The Alchemist" by Paulo Coelho`,
                        `"Atomic Habits" by James Clear (for building habits that align with your "why")`,
                    ]
                },
                {
                    subTitle: `Meditation Apps (e.g., Headspace, Calm, Insight Timer)`,
                    details: [
                        `Tools like the Myers-Briggs Type Indicator (MBTI), StrengthsFinder (CliftonStrengths), or The Enneagram can provide valuable insights into your natural preferences, strengths, and tendencies, guiding you toward what might fulfill you.`,
                    ]
                },
                {
                    subTitle: `Mind Mapping Tools`,
                    details: [
                        `Digital tools like MindMeister or XMind, or even a simple pen and paper, can help you visually explore your ideas, passions, and life goals. This can help clarify how different aspects of your life connect and where your true passions lie.`,
                    ]
                },
                {
                    subTitle: `Vision or Life Coaching`,
                    details: [
                        `Working with a professional coach can provide clarity and accountability on your journey to discover your "why." Coaches can help you uncover your values, passions, and strengths while guiding you in setting goals aligned with your purpose.`,
                    ]
                },
                {
                    subTitle: `Personal Mission Statement Worksheet`,
                    details: [
                        `A step-by-step guide to developing your own personal mission statement. This exercise encourages you to define your core values, purpose, and the legacy you wish to create.`,
                    ]
                },
                {
                    subTitle: `Inspirational Podcasts or YouTube Channels`,
                    details: [
                        `Podcasts like "The Tim Ferriss Show", "The School of Greatness" by Lewis Howes, or "On Purpose with Jay Shetty" feature interviews with people who have found their “Why” and share insights on how you can do the same.`,
                        `Watching TED Talks or listening to motivational speakers can also spark new perspectives and ideas.`,
                    ]
                },
                {
                    subTitle: `Retreats and Workshops`,
                    details: [
                        `Attending personal growth workshops or spiritual retreats can give you the space and guidance needed to reflect deeply and find direction`,
                    ]
                },
                {
                    subTitle: `Mentor or Role Models`,
                    details: [
                        `Surrounding yourself with people who inspire you can provide insight into your own desires and motivations. A mentor can offer wisdom based on their experiences and encourage you to discover your own purpose.`,
                    ]
                },
                {
                    subTitle: `Life Timeline or Story Mapping`,
                    details: [
                        `Create a timeline of significant events in your life. Reflect on key moments, challenges, successes, and turning points. This can help identify patterns, recurring themes, or interests that guide you toward your "why."`,
                    ]
                },
                {
                    subTitle: `Volunteer Work or Social Impact Activities`,
                    details: [
                        `Engaging in volunteer work or social impact projects can help you connect with what’s meaningful on a deeper level. It can also provide clarity on the type of contributions you want to make to the world.`,
                    ]
                },
                {
                    subTitle: `Creative Tools (Art Supplies, Music, Writing)`,
                    details: [
                        `Engaging in creative activities like painting, drawing, writing poetry, or playing an instrument can tap into your subconscious and help you express aspects of yourself that might reveal your purpose.`,
                    ]
                },
                {
                    subTitle: `Travel and Exploration`,
                    details: [
                        `Traveling to new places and immersing yourself in different cultures can offer new perspectives and insights, helping you to clarify your values and find a sense of direction.`,
                    ]
                },
                {
                    subTitle: `Self-Reflection Prompts & Worksheets`,
                    info:'Use questions or worksheets designed to promote self-discovery:',
                    details: [
                        `What would I do if money was no object?`,
                        `If I could solve one problem in the world, what would it be?`,
                        `When have I felt most fulfilled in my life?`,
                    ]
                },
                {
                    subTitle: `Fitness & Physical Well-being Tools`,
                    details: [
                        `Maintaining physical health through activities like yoga, running, or gym workouts can help balance your mind and body, creating the space for self-reflection and clarity on your purpose.`,
                    ]
                },
                {
                    subTitle: `Guided Affirmations or Visualizations`,
                    details: [
                        `Use guided affirmation audio tracks or visualizations to reinforce your beliefs, shift limiting mindsets, and start aligning your actions with your higher purpose.`,
                    ]
                },
                {
                    subTitle: `Time-Tracking Tools (e.g., Toggl, Rescue Time)`,
                    details: [
                        `Tracking how you spend your time can reveal where your attention naturally gravitates, helping you identify areas of life that feel most fulfilling and meaningful.`,
                    ]
                },
                {
                    subTitle: `Feedback from Trusted Friends or Family`,
                    details: [
                        `Sometimes others can see things about you that you might not be aware of. Asking trusted people what they think your strengths are, or what they see as your natural gifts, can provide valuable insights. `,
                    ]
                },
                {
                    subTitle: `Spiritual Practices (Prayer, Reading Sacred Texts)`,
                    details: [
                        `For many, spirituality plays an important role in discovering their "why." Whether through prayer, reading religious texts, or engaging in spiritual practices, these tools can help you connect with a deeper sense of purpose.`,
                    ]
                },
                {
                    subTitle: `Digital Detox or "Unplug" Time`,
                    details: [
                        `Disconnecting from the noise of technology and social media can help you tune into your own thoughts and desires, free from external influences and distractions.`,
                    ]
                },
                {
                    subTitle: `Deep Conversations with Yourself (Silent Retreats)`,
                    details: [
                        `Taking time for solitude, even if it’s just for an afternoon, to have deep self-reflection without distractions can lead to profound insights about your purpose.`,
                    ]
                },
                {
                    subTitle: `Actionable Planning Tools (e.g., SMART Goals Framework)`,
                    details: [
                        `Once you’ve identified potential purposes or life goals, planning how to take actionable steps with clear goals and timelines can bring a sense of structure to your journey.`,
                    ]
                },
            ]
        }
    ];

    return (
        <div>
            {data.map((section, idx) => (
                <div key={idx}>
                    <div className="flex mt-12 items-center gap-3 mb-6">
                        <img
                            src="/Icon/bullet-point.png"
                            alt="icon"
                            className="w-8 h-8"
                        />
                        <h1 className="text-base md:text-xl font-bold text-[#000E4F]">
                            {section?.title}
                        </h1>
                    </div>

                    <ul className="space-y-4 ml-3 md:ml-12">
                        {section?.items.map((item, index) => (
                            <li key={index}>
                                <h2 className="text-base mt-6 md:text-xl font-normal text-[#000E4F]">
                                    • {item?.subTitle} ——
                                </h2>
                                {
                                    item?.info &&
                                    <h2 className="text-base md:text-xl md:ml-12 font-normal text-[#000E4F]">
                                        {item?.info}
                                    </h2>
                                }
                                <ul className='px-3'>
                                    {item?.details.map((detail, idx) => (
                                        <li key={idx} className={`text-sm  ${idx > 0 ? "list-disc":""} md:text-base md:ml-28 tracking-wider text-[#232F65] mt-1 leading-relaxed`}>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default WhyQuestions;
