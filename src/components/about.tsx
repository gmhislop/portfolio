'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

const About = () => {
  const { ref } = useSectionInView('About');

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
      <p className="mb-3">
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
    </motion.section>
  );
};

export default About;
