'use client';

import React from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { links } from '@/lib/data';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header id="home" className="z-[999]">
      <div className="flex fixed top-[0.15rem] gap-x-6 p-6 left-5 lg:flex-1">
        <p className="-m-1.5 p-1.5 text-3xl font-semibold">
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
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black opacity-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full sm:w-[320px] px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-red-900/10">
          <div className="flex justify-end">
            <button
              type="button"
              className="rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.hash}
                    className="block px-3 py-6 mt-20 -mx-3 text-3xl font-semibold leading-7 text-gray-900"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
