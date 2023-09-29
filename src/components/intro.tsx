'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsGithub } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { RiLinkedinFill } from 'react-icons/ri';

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

      <motion.div
        className="flex gap-4 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-2 py-3 font-medium text-gray-500 transition rounded-full outline-none cursor-pointer group borderBlack px-7 focus:outline-none focus:scale-110 hover:scale-110 active:scale-105 dark:border-white/10"
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          CONTACT ME HERE{' '}
          <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
        </Link>

        <a
          className="group flex items-center gap-2 bg-[#d0cfc5] text-gray-500 px-7 py-3 rounded-full font-medium
        outline-none focus:outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="/CV.pdf"
          download
        >
          DOWNLOAD CV <HiDownload className="transition opacity-80 group-hover:translate-y-1" />
        </a>

        <a
          className="flex items-center bg-[#d0cfc5] p-4 text-gray-500 hover:text-gray-950 gap-2 rounded-full cursor-pointer focus:scale-115 hover:scale-110 active:scale-105 borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/giovanni-hislop/"
          target="_blank"
          title="My LinkedIn profile"
        >
          <RiLinkedinFill />
        </a>

        <a
          className="flex items-center bg-[#d0cfc5] p-4 text-gray-500 hover:text-gray-950 gap-2 rounded-full cursor-pointer focus:scale-115 hover:scale-110 active:scale-105 borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/gmhislop"
          target="_blank"
          title="My GitHub profile"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
