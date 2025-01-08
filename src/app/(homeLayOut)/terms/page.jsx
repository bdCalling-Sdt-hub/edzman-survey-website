import DonateSection from '@/components/LadingPage/DonateSection'
import PageHeader from '@/components/PageHeader/PageHeader'
import Link from 'next/link'
import React from 'react'

function page() {
    const termsData = [
        {
            title: 'Acceptance of Terms',
            description: 'By accessing or using the Site, you agree to comply with and be bound by these Terms, as well as any additional guidelines, rules, or policies that may apply to specific sections of the Site. If you do not agree to these Terms, please discontinue your use of the Site immediately.'
        },
        {
            title: 'Eligibility',
            description: 'You must be at least 18 years old to use this Site. By using this Site, you represent and warrant that you are at least the minimum age required by law in your jurisdiction to use the services provided on the Site.'
        },
        {
            title: 'Account Registration',
            description: 'To access certain features of the Site, you may be required to create an account. You agree to provide accurate, complete, and current information during the registration process and to keep your account details up to date. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.'
        },
        {
            title: 'Use of the Site',
            description: 'You agree to use the Site only for lawful purposes and in accordance with these Terms. You will not engage in any activity that may harm, disrupt, or interfere with the operation of the Site or the enjoyment of other users. Prohibited actions include, but are not limited to:',
            pointer: [
                'Violating applicable laws or regulations',
                'Uploading or transmitting viruses, malware, or other harmful code',
                'Attempting to gain unauthorized access to the Site or its systems',
                'Engaging in any fraudulent or deceptive activities',
            ]
        },
        {
            title: 'Intellectual Property',
            description: 'The content, design, text, graphics, logos, images, and other materials on the Site are owned by or licensed to [Website Name] and are protected by intellectual property laws. You may not copy, reproduce, distribute, transmit, display, or create derivative works based on any part of the Site without prior written consent from us, except as permitted by applicable law or as expressly authorized on the Site.',
        },
        {
            title: 'Privacy and Data Collection',
            description: 'Your use of the Site is governed by our [ Privacy_Policy ], which outlines how we collect, use, and protect your personal information. By using the Site, you consent to our data collection practices as described in the Privacy Policy.',
        },
        {
            title: 'Third-Party Links and Content',
            description: 'The Site may contain links to third-party websites, advertisements, or content. We do not control, endorse, or assume responsibility for the content, privacy practices, or practices of any third-party website. You agree that your use of any third-party content is at your own risk.',
        },
        {
            title: 'Disclaimers',
            description: 'The Site and its content are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the Site will be free from errors, interruptions, or security breaches. We disclaim all warranties, including but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
        },
        {
            title: 'Limitation of Liability',
            description: 'To the fullest extent permitted by law, FindYourWhy.com shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Site, including but not limited to any loss of data, loss of business, or damages caused by viruses or other harmful components.',
        },
        {
            title: 'Indemnification',
            description: 'You agree to indemnify, defend, and hold harmless FindYourWhy.com its affiliates, directors, officers, employees, agents, and licensors from and against any claims, damages, losses, liabilities, costs, or expenses (including legal fees) arising from your use of the Site, your violation of these Terms, or your infringement of any third-party rights.',
        },
        {
            title: 'Termination',
            description: 'We reserve the right to suspend or terminate your access to the Site at our sole discretion, without notice, for any violation of these Terms or for any other reason. Upon termination, your right to use the Site will immediately cease, and you must promptly stop using the Site.',
        },
        {
            title: 'Governing Law',
            description: 'These Terms shall be governed by and construed in accordance with the laws of Florida. Any dispute arising from or relating to these Terms or your use of the Site shall be subject to the exclusive jurisdiction of the courts in Sarasota County.',
        },
        {
            title: 'Dispute Resolution',
            description: 'Any disputes between you and FindYourWhy.com arising out of or in connection with these Terms shall be resolved through mediation/arbitration before filing any legal action. ',
        },
        {
            title: 'Severability',
            description: 'If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall remain in full force and effect.',
        },
        {
            title: 'Changes to Terms',
            description: 'We reserve the right to update, modify, or revise these Terms at any time. Any changes will be posted on this page with an updated effective date. Your continued use of the Site after the effective date of any changes constitutes your acceptance of the revised Terms.',
        },
        {
            title: 'Contact Information',
            description: 'If you have any questions or concerns about these Terms, please contact us at:',
        },
    ]

    return (
        <div>
            <PageHeader
                title={`Terms and Conditions`}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center my-12">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold">
                        <span className="text-[#00b0f2]">FindYourWhy.com</span> General Terms and Conditions
                    </h1>
                    <p className="text-base mt-4">Effective Date: <span className="text-[#00b0f2]">Updated 12-24-2024</span></p>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed">
                        Welcome to FindYourWhy.com ("we", "us", "our"). By accessing and using this website (the "Site"), you agree to comply with and be bound by the following terms and conditions ("Terms"). If you do not agree to these Terms, please do not use or access the Site. We reserve the right to change, modify, or revise these Terms at any time, and such changes will be effective immediately upon posting. You should review these Terms regularly to stay informed of any updates.
                    </p>
                </div>
                <div>
                    {termsData.map((data, idx) => (
                        <div key={idx} className="mt-8">
                            <div className="flex items-start gap-3 mb-4">
                                <img
                                    src="/icon/bullet-point.png"
                                    alt="icon"
                                    className="w-6 h-6 sm:w-8 sm:h-8"
                                />
                                <h1 className="text-base sm:text-lg md:text-xl font-bold text-[#000E4F]">
                                    {data?.title} ──
                                </h1>
                            </div>

                            <p className="text-sm sm:text-base leading-relaxed text-[#232F65] ml-8 sm:ml-12">
                                {data.description.split(' ').map((word, index) => (
                                    word?.toLowerCase() === "privacy_policy" ? (
                                        <span key={index} className='text-[#00B0F2] hover:underline'>
                                            <Link href={'/policy'}>{word}</Link>
                                        </span>
                                    ) : (
                                        <span key={index}>{word} </span>
                                    )
                                ))}
                            </p>
                            {data?.pointer && (
                                <ul className="mt-4 ml-12 sm:ml-16 text-sm sm:text-base list-disc text-[#232F65] space-y-2">
                                    {data?.pointer.map((point, idx) => (
                                        <li key={idx}>{point}</li>
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
