'use client';

import { useState } from 'react';
import { links } from '@/lib/data';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className=" px-3 py-1 text-green-400" onClick={toggleMenu}>
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <>
          <div className=" h-full w-full fixed inset-y-0 right-0 top-14 bg-white py-3 px-5 shadow-lg">
            <div className="fixed inset-0 z-40 bg-black opacity-50" />
            {links.map((link) => (
              <a key={link.name} href={link.hash} className="block py-1">
                {link.name}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HamburgerMenu;
