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
      I am a Schreyer Scholar at Penn State majoring in computer science. Currently, I work as a software engineering intern for Sheetz with experience utilizing Red Hat's OpenShift platform to deploy industry grade Java Spring apps. I am also an avid 3D printing hobbyist and hold the position of treasurer in the Penn State 3D printing club where I teach lectures on C++ firmware programming.
      In addition, I am the founder and president of the Penn State website development club which focuses on providing the resources and instruction to build members' website development skills. Thanks to Penn State funding, the club now has access to multiple servers and cloud hosting platforms for the member's to experiment with. The club has grown to 70 registered members since its creation in the Spring of 2023.
      After graduation, I hope to work as a software engineer at a company where I can continue to learn new skills and grow as an engineer. 
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
