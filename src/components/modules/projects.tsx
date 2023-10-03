'use client';

import React from 'react';
import { projectsData } from '@/lib/data';

import { useSectionInView } from '@/lib/hooks';
import { SectionHeading } from '../common/section-heading';
import { Project } from './project';

export const Projects = () => {
  const { ref } = useSectionInView('Work');

  return (
    <section ref={ref} id="work" className="scroll-mt-28 mb-28 z-[-10]">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
