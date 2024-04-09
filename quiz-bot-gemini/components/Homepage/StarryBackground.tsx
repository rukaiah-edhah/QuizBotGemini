"use client";
import { motion } from 'framer-motion';
import { useMemo } from 'react';


const generateStars = (count: number) => {
  return Array.from({ length: count }).map(() => ({
    id: Math.random(), 
    x: Math.random() * 100, 
    y: Math.random() * 100, 
  }));
};

export default function StarryBackground() {
  const stars = useMemo(() => generateStars(480), []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        backgroundColor: '--background-color',
        overflow: 'hidden',
        top: 0,
        left: 0,
        zIndex: -1, 
      }}
    >
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{
            x: `${star.x}vw`,
            y: `${star.y}vh`,
          }}
          animate={{
            x: [`${star.x}vw`, `${star.x + (Math.random() - 1)}vw`],
            y: [`${star.y}vh`, `${star.y + (Math.random() - 1.5)}vh`],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: Math.random() * 2 + 1, 
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '50%',
          }} />
      ))}
    </motion.div>
  );
}
