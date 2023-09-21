import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return <h2 className="text-3-xl font-medium mb-8 text-center uppercase">{children}</h2>;
};

export default SectionHeading;
