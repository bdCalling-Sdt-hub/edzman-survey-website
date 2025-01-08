import UserInformationForm from '@/components/authentication-component/UserInformationForm';
import DonateSection from '@/components/LadingPage/DonateSection';
import PageHeader from '@/components/PageHeader/PageHeader';
import { IoIosCheckmarkCircle } from 'react-icons/io';

function Page() {
    return (
        <>
            <PageHeader
                title={'Discover Your WHY'}
                subTitle={
                    "Take our free personality WHY's to uncover your 'Why' and receive personalized guidance and actionable steps to help you live a fulfilling life."
                }
            />
            <div className="container mx-auto px-4 flex flex-col gap-12 sm:px-6 lg:px-8 lg:py-12">
                {/* Introduction Section */}
                <div className="flex flex-col items-center gap-6 sm:gap-4">
                    <img
                        className="w-12 sm:w-10 md:w-14 lg:w-16"
                        src="/bullet-point 1.svg"
                        alt="bullet-point icon"
                    />
                    <h1 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl max-w-screen-md text-center font-bold leading-snug">
                        Answer These Questions Which Will Create & Find Your Why In Life
                    </h1>
                    <h2 className="text-lg sm:text-base md:text-xl max-w-screen-lg text-center font-semibold opacity-80">
                        Finding your "Why" in life is a deeply personal and reflective process. It requires introspection and a willingness to explore what truly drives you.
                    </h2>
                    <p className="text-sm sm:text-xs md:text-base max-w-screen-lg text-center opacity-75 leading-relaxed">
                        These following questions are meant to help you explore various dimensions of your life, and the answers may evolve over time. The goal is not necessarily to find a single, fixed "Why" but to uncover deeper insights that guide your decisions and actions moving forward.
                    </p>
                </div>

                {/* Instructions Section */}
                <div className="flex flex-col gap-3 sm:gap-2 text-sm sm:text-xs md:text-base">
                    <h1 className="flex gap-2 items-center">
                        <span className="text-[#00b0f2]">
                            <IoIosCheckmarkCircle size={20} />
                        </span>
                        Enter your name
                    </h1>
                    <h1 className="flex gap-2 items-center">
                        <span className="text-[#00b0f2]">
                            <IoIosCheckmarkCircle size={20} />
                        </span>
                        Valid email and phone to authenticate yourself, and we’ll send you a message to confirm.
                    </h1>
                    <h1 className="flex gap-2 items-center">
                        <span className="text-[#00b0f2]">
                            <IoIosCheckmarkCircle size={20} />
                        </span>
                        Then you will have full access to all the questions that will assist you to Find Your Why or enhance your current Why.
                    </h1>
                </div>
                <div className="flex justify-center w-full">
                    <UserInformationForm />
                </div>
            </div>
            <DonateSection></DonateSection>
        </>
    );
}

export default Page;
