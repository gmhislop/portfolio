'use client';

import React from 'react';

import { links } from '@/lib/data';
import { HamburgerMenu } from '../common/hamburger-menu';

export const Header = () => {
  return (
    <header id="home" className="z-[999]">
      <div className="fixed flex p-2 gap-x-6 left-7 lg:flex-1">
        <p className="text-3xl font-semibold">
          <span className="sr-only">Giovanni</span>
          Giovanni
        </p>
      </div>
      <nav
        className="flex fixed top-[0.15rem] mx-auto right-5 max-w-8xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="hidden lg:flex lg:gap-x-12">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.hash}
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-500"
            >
              {link.name}
            </a>
          ))}
        </div>
        <HamburgerMenu />
      </nav>
    </header>
  );
};
