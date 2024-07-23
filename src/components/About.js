import React from 'react';
// contup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* image */}
          <motion.div 
            variants={ fadeIn('right', 0.3) }
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          </motion.div>
          {/* text */}
          <motion.div 
            variants={ fadeIn('left', 0.5) }
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>
              Sobre mim
            </h2>
            <h3 className='h3 mb-4'>
              Desenvolvedor web há 2 anos 
            </h3>
            <p className='mb-6'>lorem </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ? <CountUp start={0} end={2} duration={7} /> : null
                  }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Anos de experiência
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      Sobre
    </section>
  );
};

export default About;
