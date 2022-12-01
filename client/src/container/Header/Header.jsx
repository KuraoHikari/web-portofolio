import React from 'react';
import { motion } from 'framer-motion';



import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div 
      variants={scaleVariants} 
      whileInView={scaleVariants.whileInView} 
      className="app__header-info">
          <h2 className="banner-text">Hi, I'm <span>Kurao</span>Hikari</h2>
          <h4 className="p-text-banner">I'm from <span>Indonesia</span> and I have Hightly Skilled as <span>FullStack Developers</span>. Focused and efficient learner with practicial expertise in <span>mobile apps</span>  and seeking a fullstack developer. I have a lot of Expience in programing with <span>massive portofolio</span> and certificate as a programers</h4>

          <button type='button'>Email Me</button>
    </motion.div>

    <motion.div 
      whileInView={{ opacity: [0, 1] }} 
      transition={{ duration: 0.5, delayChildren: 0.5 }} 
      className="app__header-img">
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div 
      variants={scaleVariants} 
      whileInView={scaleVariants.whileInView} 
      className="app__header-circles">
      {[images.flutter, images.react,  images.javascript, images.vue, images.node].map((circle, index) => (
        <div className="app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
