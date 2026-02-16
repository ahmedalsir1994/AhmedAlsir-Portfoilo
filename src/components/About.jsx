import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, isMobile }) => {
  const cardContent = (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
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
  );

  return isMobile ? (
    <div className='xs:w-[250px] w-full'>
      {cardContent}
    </div>
  ) : (
    <Tilt 
      className='xs:w-[250px] w-full'
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
    >
      {cardContent}
    </Tilt>
  );
};

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640 || window.matchMedia("(hover: none)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I’m a skilled Senior Web Developer and IT Specialist with over 10 years of experience in PHP,
         Laravel, WordPress, and JavaScript, building scalable and high-performance web applications. 
         I’m a quick learner and collaborate closely with clients to develop efficient, secure, and user friendly
          solutions that solve real world business problems. 
        Let’s work together to turn your ideas into powerful digital solutions!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} isMobile={isMobile} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
