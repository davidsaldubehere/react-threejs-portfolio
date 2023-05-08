import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { coursework } from "../constants";
import { AiOutlinePaperClip } from "react-icons/ai";
import { IconContext } from "react-icons";
const Course = ({
  course,
}) => (
  <motion.div
    variants={fadeIn("", "spring", 0.5, 0.75)}
    className='bg-[#1d1836] p-10 rounded-3xl xs:w-[400px] xs:h-full w-full mb-10'
  >
    <p className='text-white font-black text-[20px]'>{course.title}</p>

    <div className='mt-5'>
      <p className='text-white tracking-wider text-[15px]'>{course.description}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {course.location}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {course.date}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Courses = () => {
    const [courses, setCourses] = useState(0);
  return (
    <div className={`mb-12 rounded-[20px]`}>
      <div
        className={`rounded-2xl ${styles.padding} min-h-[300px]`}
      >
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText} style={{ display: 'inline-block' }}>
          Relevant Course Work
        </h2>
        <IconContext.Provider value={{ style: { display: 'inline-block', verticalAlign: 'middle', marginBottom: '30px', fontSize:'50px', marginLeft: '20px', color: 'white' } }}>
          <AiOutlinePaperClip />
        </IconContext.Provider>
        <p className="italic">Click On Courses</p>
      </motion.div>

      </div>
      <div className = "flex md:flex-row flex-col justify-around">
        <Course course={coursework[courses]}  />
        <div className= "mb-20 flex flex-col gap-7">
          {coursework.map((course, index) => (
              <div className={index == courses ? "bg-[#1d1836] cursor-pointer rounded-lg p-4 text-2xl color: rgb(0 0 0)": "bg-[#FFFFF] cursor-pointer rounded-lg p-4 text-2xl color: rgb(0 0 0)"} key = {index} onClick={() => setCourses(index)}>{course.title}</div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SectionWrapper(Courses, "courses");
