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
          {/* coluna esquerda: sobre */}
          <motion.div 
            variants={ fadeIn('right', 0.3) }
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            
            <h2 className='h2 text-accent'>
              Sobre mim
            </h2>
            <h3 className='h3 mb-4'>
              Sou um Desenvolvedor Web FullStack construindo e gerenciando aplicações web diariamente.  
            </h3>
            <p className='mb-6'>
              Minha primeira experiência com programação foi no Insituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul, onde me formei técnico em Automação Industrial. 
              
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ? <CountUp start={0} end={2} duration={8} /> : null
                  }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Anos de experiência
                </div>
              </div>
            </div>
          </motion.div>

          {/* coluna direita: stacks */}
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
                    inView ? <CountUp start={0} end={2} duration={8} /> : null
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
    </section>
  );
};

export default About;
