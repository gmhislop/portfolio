import Header from '@/components/header';
import './globals.css';
import type { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-contex';
import Footer from '@/components/footer';

const inconsolata = Inconsolata({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Giovanni | Portfolio',
  description: 'Giovanni is an creative developer based in the Netherlands.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inconsolata.className} bg-[#d0cfc5] text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
