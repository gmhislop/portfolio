import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';

type LinksProps = {
  name: string;
  hash: string;
};

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      if (open) {
        e.preventDefault();
      }
    };

    if (open) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('scroll', handleScroll);
    } else {
      document.body.style.overflow = 'visible';
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [open]);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  // const mobileLinkVars = {
  //   initial: {
  //     y: '30vh',
  //     transition: {
  //       duration: 0.5,
  //       ease: [0.37, 0, 0.63, 1],
  //     },
  //   },
  //   open: {
  //     y: 0,
  //     transition: {
  //       ease: [0, 0.55, 0.45, 1],
  //       duration: 0.7,
  //     },
  //   },
  // };

  return (
    <nav className="lg:hidden justify-between items-center py-1 px-2 z-[999]">
      <button className="text-black dark:text-white" onClick={toggleMenu}>
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-0 left-0 w-full h-screen p-10 overflow-hidden text-white origin-top bg-accent dark:bg-black"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between">
                <h1 className="text-lg text-white">Portfolio</h1>
                <p className="text-white cursor-pointer text-md" onClick={toggleMenu}>
                  Close
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col items-center justify-center h-full gap-4 font-lora "
              >
                {links.map((link) => {
                  return (
                    <div key={link.name} className="overflow-hidden" onClick={toggleMenu}>
                      <MobileNavLink name={link.name} hash={link.hash} />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const MobileNavLink = ({ name, hash }: LinksProps) => {
  return (
    <motion.div className="text-5xl text-white">
      <Link href={hash}>{name}</Link>
    </motion.div>
  );
};
