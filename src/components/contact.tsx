'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';

const Contact = () => {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="text-gray-700">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:hello@giovannihislop.com">
          hello@giovannihislop.com
        </a>{' '}
        or through this form
      </p>

      <form className="mt-10 flex flex-col" action={sendEmail}>
        <input
          className="h-14 rounded-lg borderBlack px-4 outline-gray-900"
          name="senderEmail"
          type="email"
          placeholder="Email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 outline-gray-900"
          name="message"
          placeholder="Message"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="group flex h-[3rem] w-[8rem] bg-gray-900 text-white justify-center items-center rounded-full hover:bg-gray-950 outline-none transition-all gap-2 focus:scale-110 hover:scale-110 active:scale-105"
        >
          Submit{' '}
          <FaPaperPlane
            className="text-xs opacity-90 transition-all 
            group-hover:translate-x-1
            group-hover:-translate-y-1"
          />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
