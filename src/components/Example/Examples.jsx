import React from 'react';

function Examples() {
    return (
        <div className="container justify-between flex  items-start md:items-center mx-auto my-12 md:my-28 md:px-0">
            {/* Image Section */}
            <div className="basis-3/4 -mt-4 h-[300px] md:h-full md:w-3/4 md:mx-auto">
                <img
                    className="w-full h-full object-center object-fill md:object-cover"
                    src="/ExampleImage/main.png"
                    alt="Example"
                />
            </div>

            {/* Text Overlay Section */}
            <div className="basis-2/3 -ml-48 bg-[#02a8e7]/60 rounded-md rounded-br-[70px] md:rounded-br-[100px] lg:rounded-br-[100px] p-6 md:px-4 lg:p-16 md:py-8 w-8/12 md:w-2/4 h-auto text-white">
                <h1 className="text-lg md:text-3xl lg:text-4xl text-[#1d3557] font-semibold md:text-left">
                    Find Your Why Example
                </h1>
                <p className="mt-1 md:mt-4 text-xs md:text-sm lg:text-base md:leading-loose md:tracking-wide font-medium md:text-left">
                    Your "Why" in life refers to YOUR core purpose or reason for living—ultimately, 
                    what drives and motivates YOU. It can be deeply personal and unique to just for 
                    you. Here are some examples of what YOUR "Why" can look like in life:
                </p>
            </div>
        </div>
    );
}

export default Examples;
