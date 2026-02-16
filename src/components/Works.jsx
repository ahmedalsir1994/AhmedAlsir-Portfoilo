import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640 || window.matchMedia("(hover: none)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardContent = (
    <div className='bg-tertiary p-4 sm:p-5 rounded-2xl w-full h-full'>
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

      <div className='mt-4 sm:mt-5'>
        <h3 className='text-white font-bold text-[20px] sm:text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[13px] sm:text-[14px]'>{description}</p>
      </div>

      <div className='mt-3 sm:mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[12px] sm:text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='w-full sm:w-[360px] max-w-full'
    >
      {isMobile ? (
        cardContent
      ) : (
        <Tilt
          tiltMaxAngleX={45}
          tiltMaxAngleY={45}
          scale={1}
          transitionSpeed={450}
        >
          {cardContent}
        </Tilt>
      )}
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary sm:text-[17px] text-[14px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 w-full'>
        <div className='flex flex-wrap gap-3 sm:gap-7 w-full'>
          {projects && projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))
          ) : (
            <p className='text-secondary'>No projects available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
