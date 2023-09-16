import React from 'react';

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return <h2 className="text-3-xl font-medium capitalize mb-8 text-center">{children}</h2>;
};

export default SectionHeading;

type SectionHeadingProps = {
  children: React.ReactNode;
};
