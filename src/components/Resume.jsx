import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { coursework } from "../constants";
import { AiOutlinePaperClip } from "react-icons/ai";
import { IconContext } from "react-icons";
import {resume } from "../assets";
import { slideIn } from "../utils/motion";

const Resume = () => {
    return (
        <div className="text-center">
        <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText} style={{ display: 'inline-block', textAlign: 'center' }}>
          Resume
        </h2>
        <IconContext.Provider value={{ style: { display: 'inline-block', verticalAlign: 'middle', marginBottom: '30px', fontSize:'50px', marginLeft: '20px', color: 'white' } }}>
          <AiOutlinePaperClip />
        </IconContext.Provider>
        <p className="mb-10 italic">Click Below for a pdf copy</p>
      </motion.div>
        <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
            <img src={resume}
            onClick={() => window.open("https://drive.google.com/file/d/1fqiihUTOC-gQpeFqEha06wmM7jdiCaSA/view?usp=share_link", "_blank")}
            className="cursor-pointer"
            style={{ 

                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '50%',
            }}

            >
            </img>
        </motion.div>
    </div>
  );
};

export default SectionWrapper(Resume, "resume");
