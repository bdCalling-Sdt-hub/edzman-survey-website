"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LinkOutlined } from "@ant-design/icons";
import SectionHeader from "../SectionHeader/SectionHeader";

const CourseSuggestions = ({ courseSuggestions }) => {
  const [showAll, setShowAll] = useState(false);

  const slicedCourses = courseSuggestions.slice(
    0,
    showAll ? courseSuggestions.length : 3
  );

  return (
    <>
      <SectionHeader
        title={`Explore Our Recommended Courses`}
        subTitle={`Enhance your skills and knowledge with our curated course suggestions!`}
      ></SectionHeader>
      <motion.div
        className="rounded-lg shadow-lg mt-6 p-6 bg-gradient-to-r from-[#2799F2] to-[#A1D2E8]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl md:text-2xl  font-semibold text-black">
            Recommended Courses
          </h4>
          <button
            className="text-black text-xs text-nowrap underline md:text-base font-medium"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
        {slicedCourses?.length > 0 && (
          <motion.ul
            className="grid sm:grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-2  rounded-md p-2 md:p-6 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {slicedCourses.map((course, index) => (
              <motion.li
                key={index}
                className="flex  flex-col gap-2 md:flex-row bg-black/10 shadow-xl backdrop-blur-2xl p-2 md:p-6 rounded-md items-start mb-6 pb-6  transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="flex-grow">
                  <h5 className="text-xl font-medium text-black mb-2">
                    {course.title}
                  </h5>
                  <p className="text-black text-sm mb-2">
                    {course.description}
                  </p>
                  <span className="font-semibold text-black">Platform: </span>
                  <span className="text-black">{course.platform}</span>
                </div>
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="bg-black text-[#2799F2] p-2 rounded-full shadow-md hover:bg-[#2799F2] hover:text-black transition-colors duration-300">
                      <LinkOutlined style={{ fontSize: 16 }} />
                    </button>
                  </motion.div>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </motion.div>
    </>
  );
};

export default CourseSuggestions;
