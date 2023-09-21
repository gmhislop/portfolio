'use client';

import { sendEmail } from '@/actions/sendEmail';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

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
      <p className="text-gray-700 mt-6 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:hello@giovannihislop.com">
          hello@giovannihislop.com
        </a>{' '}
        or through this form
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}
      >
        <input
          className="h-14 rounded-lg bg-[#d0cfc5] border border-black px-4 outline-gray-900 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 tramsition-all dark:outline-none"
          name="senderEmail"
          type="email"
          placeholder="ENTER YOUR EMAIL"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg bg-[#d0cfc5] border border-black p-4 outline-gray-900 dark:text-black  dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="ENTER YOUR MESSAGE"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
