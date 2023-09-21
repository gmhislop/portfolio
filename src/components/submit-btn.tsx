import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[#d0cfc5] text-gray-950 border border-gray-950 rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 dark:bg-white dark:bg-opacity-80 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          SUBMIT{' '}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{' '}
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
