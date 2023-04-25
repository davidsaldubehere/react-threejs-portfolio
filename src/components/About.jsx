import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {profile} from "../assets"
const ServiceCard = ({ index, title, icon,link }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      
      <div
        onClick={() => window.open(link, "_blank")}
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=' cursor-pointer bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Introduction</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] w-full leading-[30px]'
      >
      <div className="flex md:flex-row flex-col gap-20 justify-center">
      I am a Schreyer Scholar at Penn State majoring in computer science and mathematics with a specialization in computational mathematics.
      Currently, I work for Penn State's Computer Science Department as a grader for the CMPSC 132 Data Structures and Algorithms course. I am also an avid 3D printing hobbyist and hold the position of treasurer in the Penn State 3D Printing Club.
      In addition, I am founding a website development club which will be active by the Fall of 2023.
      After graduation, I hope to work as a software engineer at a company where I can continue to learn and grow. Please feel free to view my other online profiles below.
      <img
          src={profile}
          alt="profile"
          className='w-[200px] h-[200px] rounded-full object-cover'
        />
      </div>

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
