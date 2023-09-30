import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: JSX.Element;
}

export const Reveal = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      // Fire the animation
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div className="relative overflow-hidden" ref={ref}>
      <motion.div
        variants={{
          visible: { opacity: 1, y: 0 },
        }}
        initial="visible"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        className="absolute top-1 bottom-1 left-0 right-0 bg-gray-400 z-20"
      />
    </div>
  );
};
