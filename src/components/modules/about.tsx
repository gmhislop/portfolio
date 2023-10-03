'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsGithub } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { RiLinkedinFill } from 'react-icons/ri';
import { useActiveSectionContext } from '@/context/active-section-context';
import { SectionHeading } from '../common/section-heading';

export const About = () => {
  const { ref } = useSectionInView('About');
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-m-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        When I discovered programming, I was immediately drawn to the artistic aspect: the ability
        to make something out of nothing. Programming allows me to think outside the box, be
        creative and impact the world on a larger scale.
      </p>
      <br />
      <p>
        In the past I have worked on projects related to the development and implementation of
        various e-commerce websites for companies ranging from start-ups to established companies. I
        have experience developing and implementing solutions to help these companies build and
        market their own web-based products and strengthen their brand identity.
      </p>
      <br />
      <p>
        Always looking for new and better approaches and technologies that help me make a bigger
        impact and innovate. As an entrepreneurial creator, I see new opportunities every day. New
        technologies are added regularly that I need to master in order to succeed.
      </p>
      <motion.div
        className="flex gap-4 px-4 mt-10 text-lg font-medium sm:flex-row"
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
    </motion.section>
  );
};
