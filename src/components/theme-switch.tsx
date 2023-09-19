'use client';

import { useTheme } from '@/context/theme-contex';
import { BsMoon, BsSun } from 'react-icons/bs';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="flex items-center justify-center fixed bottom-5 
    right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl
     rounded-full hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
      title="Toggle theme"
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
