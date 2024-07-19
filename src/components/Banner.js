import React from 'react';
// images
import Image from '../assets/autorretrato-removebg.png';
// icons 
import { FaGithub, FaYoutube, FaDribbble } from  'react-icons/fa'
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='section' id='home'>
      <div className="container mx-auto">
        <div>
          {/* text */}
          <div>
            <h1>Web FullStack Developer</h1>
          </div>
          {/* image */}
          <div>
            <img src={ Image } alt='avatar' style={{ width: '482px', height: 'auto' }} />
          </div>
        </div>
      </div>
      Home
    </section>
  );
};

export default Banner;
