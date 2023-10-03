import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

import { StickyCursor } from '@/components/common/sticky-cursor';
import ThemeSwitch from '@/components/common/theme-switch';
import { Footer } from '@/components/modules/footer';
import { Header } from '@/components/modules/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-contex';

const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });

export const metadata: Metadata = {
  title: 'Giovanni | Portfolio',
  description: 'Giovanni is an creative developer based in the Netherlands.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${rubik.variable} bg-background text-color-1 relative pt-5 sm:pt-5 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <StickyCursor />
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            {/* <ThemeSwitch /> */}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
