'use client'
import { useEffect, useState } from "react";
function Examples() {
    const [imageSrc, setImageSrc] = useState("/ExampleImage/main.png");
    useEffect(() => {
        const updateImageSrc = () => {
            if (window.innerWidth < 768) {
                setImageSrc("/ExampleImage/main2.png");
            } else {
                setImageSrc("/ExampleImage/main.png");
            }
        };
        updateImageSrc();
        window.addEventListener("resize", updateImageSrc);
        return () => window.removeEventListener("resize", updateImageSrc);
    }, []);
    return (
        <div className="container justify-between flex items-start md:items-center mx-auto my-12 md:px-0">
            {/* Image Section */}
            <div className="basis-11/12 -mt-4 h-[400px]  md:h-full md:w-full md:mx-auto">
                <img
                    className="w-full h-full object-top object-cover"
                    src={imageSrc}
                    alt="Example"
                />
            </div>

            {/* Text Overlay Section */}
            <div className="basis-2/3 -ml-48 mt-12 md:mt-0 bg-[#02a8e7]/60 rounded-md rounded-br-[40px] md:rounded-br-[100px] lg:rounded-br-[100px] p-3 md:px-4 lg:p-12 md:py-8 w-8/12 md:w-2/4 h-auto text-white">
                <h1 className="text-xl md:text-xl lg:text-4xl text-[#1d3557] font-semibold md:text-left">
                    Find Your Why Example
                </h1>
                <p className="mt-1 md:mt-4 text-xs sm:text-sm md:text-sm lg:text-base  md:tracking-wide font-medium md:text-left">
                    Your "Why" in life refers to YOUR core purpose or reason for living—ultimately,
                    what drives and motivates YOU. It can be deeply personal and unique to just for
                    you. Here are some examples of what YOUR "Why" can look like in life:
                </p>
            </div>
        </div>
    );
}

export default Examples;
