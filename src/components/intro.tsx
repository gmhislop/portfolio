'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const Intro = () => {
  const { ref } = useSectionInView('Home');
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="mb-28 mt-80 max-w-[50rem] sm:mb-0 scroll-mt-[100rem]">
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl !leading-[1.5] sm:text-6xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Giovanni.</span> I'm a{' '}
        <span className="font-bold">frontend developer</span> with{' '}
        <span className="font-bold">{new Date().getFullYear() - 2021} years</span> of experience.
      </motion.h1>
    </section>
  );
};

export default Intro;
