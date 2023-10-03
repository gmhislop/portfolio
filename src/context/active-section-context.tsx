'use client';

import React from 'react';
import type { SectionName } from '@/lib/types';

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = React.createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({ children }: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = React.useState<SectionName>('Work');
  const [timeOfLastClick, setTimeOfLastClick] = React.useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

// custom hook to use the activeSection context and throw an error if it's not used within the ActiveSectionContextProvider
export const useActiveSectionContext = () => {
  const context = React.useContext(ActiveSectionContext);

  if (!context) {
    throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider');
  }

  return context;
};

export default ActiveSectionContextProvider;
