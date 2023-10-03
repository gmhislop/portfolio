'use client';

import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const StickyCursor = () => {
  const cursorSize = 15;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  React.useEffect(() => {
    const manageMouseMove = (e: CursorProps) => {
      const { clientX, clientY } = e;
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    };

    window.addEventListener('mousemove', manageMouseMove);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
    };
  }, [mouse.x, mouse.y]);

  return (
    <section>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        className="fixed hidden w-4 h-4 bg-black rounded-full pointer-events-none lg:flex dark:bg-accent"
      />
    </section>
  );
};

type CursorProps = {
  clientY: number;
  clientX: number;
};
