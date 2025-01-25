import DonateSection from '@/components/LadingPage/DonateSection'
import PageHeader from '@/components/PageHeader/PageHeader'
import Link from 'next/link'
import React from 'react'

function page() {
    const termsData = [
        {
            title: 'Information We Collect ',
            description: 'We may collect various types of personal information when you use our Website or services, including:',
            pointer: [
                'Personal Identification Information: Name, email address, phone number, and any other information you provide to us directly.',
                'Technical Data: IP address, browser type and version, operating system, referral sources, visit times, pages viewed, and device identifiers.',
                'Cookies and Tracking Technologies: We use cookies, web beacons, and similar technologies to collect information about your interactions with our Website. This includes information on your preferences, behavior, and how you use our services.',
                'Payment Information: If you make a purchase, we collect billing information, credit card details, and transaction history (payment data is processed through secure third-party services).',
            ]
        },
        {
            title: 'How We Use Your Information',
            description: 'We use the collected information for various purposes, including:',
            pointer: [
                'Providing and improving services: To operate and enhance our Website and services.',
                'Customer support: To respond to your inquiries, provide customer service, and process requests.',
                'Personalization: To personalize your experience and offer content or services that may be of interest to you.',
                'Marketing and communications: To send you updates, promotions, and other marketing materials, if you have opted-in to receive them.',
                'Legal compliance: To comply with applicable laws and regulations, and to respond to legal requests.',
            ]
        },
        {
            title: 'Legal Basis for Processing (Applicable in Certain Jurisdictions)',
            description: 'In some jurisdictions, including the European Union, we are required to explain the legal basis for processing personal data. We rely on the following legal bases:',
            pointer: [
                'Consent: When you provide your consent (e.g., signing up for newsletters).',
                'Contractual necessity: To fulfill the contract between you and us, such as providing requested services or processing payments.',
                'Legal obligation: When we are legally required to process your data, such as for tax or accounting purposes.',
                'Legitimate interests: Where processing is necessary for our legitimate business interests, such as improving our services, fraud prevention, and direct marketing.',
            ]
        },
        {
            title: 'Sharing Your Information',
            description: 'We may share your information in the following situations:',
            pointer: [
                'Service providers: We may share your information with trusted third-party vendors who assist us in operating our Website, providing services, or processing payments (e.g., hosting providers, payment processors).',
                'Business transfers: If we merge with or are acquired by another company, your information may be transferred as part of the transaction.',
                'Legal compliance: We may disclose your information if required by law, court order, or government request, or to protect our rights and property.',
            ]
        },

        {
            title: 'International Data Transfers ',
            description: 'As a global business, your personal information may be transferred, stored, and processed outside of your country of residence, including in countries that may have different data protection laws. By using our services, you consent to such transfers, including to countries that may not offer the same level of data protection as your home country.'
        },
        {
            title: 'Data Retention ',
            description: 'We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law. The retention period may vary depending on the type of information and the purpose for which it was collected.'
        },
        {
            title: 'Your Rights and Choices',
            description: 'Depending on your location, you may have the following rights regarding your personal data:',
            pointer: [
                'Access: You have the right to request copies of your personal data.',
                'Correction: You have the right to correct any inaccuracies in your personal data.',
                'Deletion: You have the right to request the deletion of your personal data, subject to certain conditions.',
                'Portability: You have the right to request the transfer of your personal data to another service provider, where applicable.',
                'Opt-out of marketing: You can opt-out of receiving marketing communications at any time by following the unsubscribe instructions in the emails or contacting us directly.',
                'Restriction of processing: You can request the restriction of processing of your personal data under certain conditions.',
                'To exercise your rights, please contact us at support@findyourwhy.com We will respond to your request in accordance with applicable law.',
            ]
        },
        {
            title: 'Security ',
            description: 'We take reasonable steps to protect your personal information from unauthorized access, use, disclosure, and alteration. However, no method of transmission over the Internet or electronic storage is completely secure. While we strive to protect your personal data, we cannot guarantee its absolute security.',
        },
        {
            title: 'Cookies and Tracking Technologies ',
            description: 'Our Website uses cookies and similar tracking technologies to improve your browsing experience, analyze trends, administer the site, and gather demographic information. You can control the use of cookies at the individual browser level. For more information about cookies, please refer to our [ Cookie Policy ].',
        },
        {
            title: 'Children’s Privacy ',
            description: 'Our Website is not intended for individuals under the age of 13 (or under 16 in the EU), and we do not knowingly collect personal data from children. If we become aware that we have inadvertently collected personal data from a child, we will take steps to delete such data.',
        },
        {
            title: 'Contact Us ',
            description: 'If you have any questions about this Privacy Policy or our privacy practices, please contact us at:',
        },
    ]


    return (
        <div>
            <PageHeader
                title={`Privacy Policy`}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center my-12">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold">
                        <span className="text-[#00b0f2]">FindYourWhy.com</span>Privacy Policy
                    </h1>
                    <p className="text-base mt-4">Effective Date: <span className="text-[#00b0f2]">Updated 12-24-2024</span></p>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed">
                        FindYourWhy.com ("we", "our", or "us") values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data when you visit our website www.findyourwhy.com ("the Website") and use our services. This policy applies to all visitors, users, and others who access the Website or use our services, regardless of location.
                    </p>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed">
                        By using our Website or services, you agree to the collection and use of information in accordance with this Privacy Policy.
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
                                {data.description.split(' ').map((word, index) => (
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
