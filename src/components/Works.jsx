import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import HeadphoneCanvas from "./canvas/Headphones";
import KeyboardCanvas from "./canvas/Keyboard";
import  RaspberryCanvas  from "./canvas/Raspberry";
import  PhoneCanvas  from "./canvas/Phone";
import {AiOutlineProject} from "react-icons/ai"
import { IconContext } from "react-icons";
import { useState, useEffect } from "react";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  asset
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={5}
        titlMaxAngleY={5}
        className='bg-tertiary p-5 rounded-2xl sm:w-[400px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
      {asset == "headphones" && window.innerWidth > 1000 &&
      <div className = "h-[400px]  hover:cursor-pointer">
        <HeadphoneCanvas />
      </div>
      }
      {asset == "keyboard" &&  window.innerWidth > 1000 &&
      <div className = "h-[400px] hover:cursor-pointer">
        <KeyboardCanvas/>
      </div>
      }
      {asset == "raspberry" &&  window.innerWidth > 1000 &&
      <div className = "h-[400px] hover:cursor-pointer">
        <RaspberryCanvas />
      </div>
      }
      {asset == "phone" &&  window.innerWidth > 1000 &&
      <div className = "h-[400px] hover:cursor-pointer">
        <PhoneCanvas />
      </div>
      }
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="w-full">
      <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText} style={{ display: 'inline-block' }}>
          Projects
        </h2>
        <IconContext.Provider value={{ style: { display: 'inline-block', verticalAlign: 'middle', marginBottom: '30px', fontSize:'50px', marginLeft: '20px', color: 'white' } }}>
          <AiOutlineProject />
        </IconContext.Provider>
      </motion.div>

      <div className='w-full flex mt-10'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects were created in my free time and were not academic assignments. By working on each project, I learned multiple new skills and technologies with real-world applications. 
          Each project is briefly described with links to my code repositories on GitHub in the top right corner.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-10 justify-around'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "works");
