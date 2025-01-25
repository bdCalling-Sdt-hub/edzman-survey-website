import DonateSection from '@/components/LadingPage/DonateSection'
import PageHeader from '@/components/PageHeader/PageHeader'
import Link from 'next/link'
import React from 'react'

function page() {
    const termsData = [
        {
            title: 'What are Cookies?  ',
            description: `Cookies are small text files that are placed on your device (computer, tablet, or mobile device) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and enable website owners to track website usage.
Cookies can be either "first-party" cookies, set by the website you are visiting, or "third-party" cookies, set by services or organizations other than the website owner.`,
        },
        {
            title: 'How We Use Cookies',
            description: 'We use cookies for a variety of reasons, including:',
            pointer: [
                'Essential Cookies: These are necessary for the website to function properly, such as enabling you to log in or navigate secure areas.',
                'Performance Cookies: These cookies collect information about how you use our website (e.g., which pages you visit most often) to help us improve the performance and design of our site.',
                'Functional Cookies: These allow us to remember your preferences (e.g., language, region) to provide a more personalized experience.',
                'Advertising and Targeting Cookies: These cookies are used to deliver advertisements that are more relevant to you and your interests, based on your online activity.',
                'Analytics Cookies: We use third-party services like Google Analytics to collect anonymous data about how visitors use our site, so we can analyze trends and improve our content and design.',
            ]
        },
        {
            title: 'Types of Cookies We Use   ',
            pointer: [
                `Session Cookies: These are temporary cookies that expire once you close your browser.`,
                `Persistent Cookies: These cookies remain on your device for a set period or until you manually delete them. They help us remember your preferences across sessions.`,
                `First-Party Cookies: Cookies that we set directly on our Website.`,
                `Third-Party Cookies: Cookies that are set by third-party services that are integrated into our Website (e.g., Google Analytics, social media buttons).`,
            ]
        },
        {
            title: 'Managing Cookies   ',
            description: `You have control over the cookies set on your device. You can manage cookie settings through your browser settings. Most web browsers allow you to block or delete cookies, but please note that doing so may affect the functionality of the Website.
                            Here’s how you can manage cookies in some popular browsers:`,
            pointer: [
                `Google Chrome: Go to Settings → Privacy and Security → Cookies and other site data → See all cookies and site data.`,
                `Mozilla Firefox: Go to Options → Privacy & Security → Cookies and Site Data.`,
                `Safari: Go to Preferences → Privacy → Cookies and Website Data.`,
                `Microsoft Edge: Go to Settings → Cookies and Site Permissions → Manage and delete cookies.
                You can also set your browser to notify you whenever a cookie is set or updated, giving you the choice to accept or reject cookies on a case -by -case basis.`
            ]
        },

        {
            title: 'Third-Party Cookies and Analytics  ',
            description: `Our Website may include third-party content and services, such as social media features (e.g., Facebook, Twitter) or analytics services (e.g., Google Analytics). These third parties may place cookies on your device, and they may collect and process data about your use of our Website.
We do not control the cookies placed by third parties. You should review the privacy policies and cookie policies of third-party websites and services to understand how they use cookies and handle your personal data.`,

        },
        {
            title: 'International Data Transfers  ',
            description: `As part of the services we use (e.g., Google Analytics), information collected through cookies may be transferred to and stored on servers located outside of your country or region, including the United States. By using our Website, you consent to the transfer of your data to countries outside your jurisdiction.
If you are in the European Economic Area (EEA) or another jurisdiction with data protection laws, please be aware that data transferred to the United States may not be subject to the same data protection standards.
`,

        },
        {
            title: 'Your Rights and Choices   ',
            description: `If you are located in the European Union, European Economic Area, or other jurisdictions with similar data protection laws, you have the right to:`,
            pointer: [
                `Access: Request information about the cookies we use and the data we collect.`,
                `Rectification: Correct any incorrect or outdated information we hold.`,
                `Erasure: Request deletion of your data under certain circumstances.`,
                `Object: Opt-out of certain types of data collection, such as analytics or targeted advertising.
    For more information on how we process your personal data, please review our [ Privacy_Policy ].`,
            ]
        },
        {
            title: 'Changes to This Cookie Policy  ',
            description: `We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. When we update the policy, we will post the revised version on this page with a new "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we use cookies.`,

        },
        {
            title: 'Contact Us  ',
            description: `If you have any questions or concerns about this Cookie Policy or our use of cookies, please contact us at:`,

        },
    ]






    return (
        <div>
            <PageHeader
                title={`Cookie Policy`}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center my-12">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold">
                        <span className="text-[#00b0f2]">FindYourWhy.com</span>Website Cookie Policy
                    </h1>
                    <p className="text-base mt-4">Effective Date: <span className="text-[#00b0f2]">Updated 12-24-2024</span></p>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed">
                        This Cookie Policy explains how FindYourWhy.com ("we", "us", "our") uses cookies and similar technologies to enhance your experience when you visit our website <span>www.findyourwhy.com</span> ("Website"). By continuing to use our Website, you consent to our use of cookies in accordance with this policy.
                    </p>
                </div>
                <div>
                    {termsData.map((data, idx) => (
                        <div key={idx} className="mt-8">
                            <div className="flex items-start gap-3 mb-4">
                                <img
                                    src="/Icon/bullet-point.png"
                                    alt="icon"
                                    className="w-6 h-6 sm:w-8 sm:h-8"
                                />
                                <h1 className="text-base sm:text-lg md:text-xl font-bold text-[#000E4F]">
                                    {data?.title} ──
                                </h1>
                            </div>

                            <p className="text-sm sm:text-base leading-relaxed text-[#232F65] ml-8 sm:ml-12">
                                {data.description?.split(' ').map((word, index) => (
                                    word?.toLowerCase() === "privacy_policy" ? (
                                        <span key={index} className='text-[#00B0F2] hover:underline'>
                                            <Link href={'/'}>{word}</Link>
                                        </span>
                                    ) : (
                                        <span key={index}>{word} </span>
                                    )
                                ))}
                            </p>
                            {data?.pointer && (
                                <ul className="mt-4 ml-12 sm:ml-16 text-sm sm:text-base list-disc text-[#232F65] space-y-2">
                                    {data?.pointer.map((point, idx) => (
                                        <li key={idx}>
                                            {point?.split(' ').map((word, index) => (
                                                word?.toLowerCase() === "privacy_policy" ? (
                                                    <span key={index} className='text-[#00B0F2] hover:underline'>
                                                        <Link href={'/policy'}>{word}</Link>
                                                    </span>
                                                ) : (
                                                    <span key={index}>{word} </span>
                                                )
                                            ))}
                                        </li>
                                    ))}

                                </ul>
                            )}
                        </div>
                    ))}
                </div>
                <p className='ml-12 underline text-[#00b0f2]'>support@findyourwhy.com</p>
            </div>
            <DonateSection></DonateSection>
        </div>
    )
}

export default page






