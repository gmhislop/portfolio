import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return <h2 className="mb-8 font-medium text-center uppercase text-3-xl">{children}</h2>;
};
