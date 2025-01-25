import Link from 'next/link';
import React from 'react';

function DonateSection() {
    return (
        <div className=" flex w-full py-16 mt-12 items-center bg-gradient-to-r from-[#2397f3] to-[#acd7e7] justify-center text-center px-4">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <img
                    src="/Icon/icon.png"
                    alt="Donate Icon"
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                />
                <div className="flex flex-col items-center md:items-start gap-4 md:gap-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-gray-800 text-center md:text-start">
                        "Redefining Self-Discovery and WHY: Finding Your Why, One Insight at a Time."
                    </h1>
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <Link href={'/donate-page'}>
                            <button className="rounded-lg text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 font-semibold text-white border-2 border-[#1d3557] bg-[#1d3557] hover:bg-white hover:text-[#16344f] hover:border-white transition-all">
                                Donate
                            </button>
                        </Link>
                        <Link href={'/ftw'}>
                        <button className="rounded-lg hover:bg-[#1d3557] bg-white text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 font-semibold  text-[#1d3557] border-2 hover:text-white hover:border-[#16344f] transition-all">
                            How To Find Your Why
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonateSection;
