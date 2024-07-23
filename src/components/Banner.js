import React from 'react';
// images
import Image from '../assets/autorretrato-removebg.png';
// icons 
import { FaGithub, FaLinkedinIn, FaLinkedin } from  'react-icons/fa'
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.3)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={ {once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[35px]'>
                Sou o joaovasc
            </motion.h1>
            <motion.div 
              variants={fadeIn('up', 0.3)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={ {once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold leading-[1]'
            >
              <span className='text-white mr-4'>Web FullStack Developer</span>
              <br/>

              <TypeAnimation sequence={[
                'e Fotógrafo 📷',
                2000,
                'e Videomaker 📹',
                2000,
                'e Ciclista 🚴',
                2000,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
              variants={fadeIn('up', 0.3)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={ {once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
                Desenvolvedor web há 2 anos.
            </motion.p>
            <motion.div 
              variants={fadeIn('up', 0.3)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={ {once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>
                Trabalhe comigo
              </button>
              <a href='/assets/Currículo-pt.pdf' download='Currículo-pt.pdf' className='text-gradient btn-link'>
                Currículo
              </a>
            </motion.div>
            {/* social */}
            <motion.div 
              variants={fadeIn('up', 0.7)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={ {once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://github.com/joaovasc10' target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} className='text-white' />
              </a>
              <a href='https://www.linkedin.com/in/joaovasc10/' target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} className='text-white' />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div 
            variants={fadeIn('up', 0.7)} 
            initial="hidden" 
            whileInView={'show'} 
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto mix-blend-lighten translate-y-500'>
            <img src={ Image } alt='avatar'/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
