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
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.2,
          }}
        >
          <Image
            src="/images/giovanni.jpg"
            alt="Giovanni portrait"
            width={200}
            height={200}
            quality={95}
            priority={true}
            className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </motion.div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Giovanni.</span> I'm a{' '}
        <span className="font-bold">frontend developer</span> with{' '}
        <span className="font-bold">{new Date().getFullYear() - 2021} years</span> of experience. I
        enjoy building <span className="italic">web- and mobile applications</span>. My focus is{' '}
        <span className="underline">React (Next.js)</span> and I'm currently learning React Native,
        WebXR, VR and AR.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row
      items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 bg-gray-900 text-white px-7
            py-3 rounded-full font-medium hover:bg-gray-800 transition
            outline-none focus:outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer"
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group flex items-center gap-2 bg-white text-gray-500 px-7 py-3 rounded-full font-medium
        outline-none focus:outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="/CV.pdf"
          download
        >
          Download CV <HiDownload className="opacity-80 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="flex items-center bg-white p-4 text-gray-500 hover:text-gray-950 gap-2 rounded-full cursor-pointer focus:scale-115 hover:scale-110 active:scale-105 borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/giovanni-hislop/"
          target="_blank"
          title="My LinkedIn profile"
        >
          <RiLinkedinFill />
        </a>

        <a
          className="flex items-center bg-white p-4 text-gray-500 hover:text-gray-950 gap-2 rounded-full cursor-pointer focus:scale-115 hover:scale-110 active:scale-105 borderBlack dark:bg-white/10 dark:text-white/60"
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
