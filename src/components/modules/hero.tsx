'use client';

import { motion } from 'framer-motion';

export const Hero = () => (
  <section
    aria-labelledby="hero"
    className="pb-70 mb-36 mt-40 pt-40 sm:pb-40 sm:pt-50 lg:pb-48 lg:pt-60 w-full sm:p-40 p-20"
  >
    <h1 title="hero" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
      <span className="dark:text-accent">
        Bridging the gap <br /> between
      </span>{' '}
      <span className="text-gray-400">design</span>
      <br /> <span className="dark:text-accent">and</span>
      <span className="text-gray-400"> code.</span>
    </h1>
    <motion.p
      className="mt-4 sm:text-xl text-gray-500"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      I'm Giovanni, an experienced frontend developer and a creative interactive designer.
    </motion.p>
  </section>
);
