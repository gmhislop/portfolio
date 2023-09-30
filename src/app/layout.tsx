import './globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-contex';
import Footer from '@/components/footer';
import { Header } from '@/components/header';

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
