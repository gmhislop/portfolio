'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const Intro = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="Home"
      className="pb-80 mt-40 w-full pt-40 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="sm:max-w-lg">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className="dark:text-accent">Bridging the gap between</span>{' '}
            <span className="text-gray-400">design</span>{' '}
            <span className="dark:text-accent">and</span>
            <span className="text-gray-400"> code.</span>
          </h1>
          <motion.p
            className="mt-4 text-xl text-gray-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            I'm Giovanni, an experienced frontend developer and a creative interactive designer.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
