import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const AnimatedPathSecond = ({ path, duration = 8 }) => {
  const pathRef = useRef(null);
  const progress = useMotionValue(0);

  // Преобразуем прогресс в координаты x и y
  const x = useTransform(progress, (value) => {
    if (!pathRef.current) return 0;
    const point = pathRef.current.getPointAtLength(value);
    return point.x;
  });

  const y = useTransform(progress, (value) => {
    if (!pathRef.current) return 0;
    const point = pathRef.current.getPointAtLength(value);
    return point.y;
  });

  useEffect(() => {
    if (!pathRef.current) return;

    const pathElement = pathRef.current;
    const pathLength = pathElement.getTotalLength();

    // Анимация прогресса
    const animation = animate(progress, pathLength, {
      duration,
      repeat: Infinity,
      ease: 'linear',
    });

    return () => animation.stop();
  }, [progress, duration]);

  return (
    <>
      <path
        ref={pathRef}
        d={path}
        stroke="#D2DADE"
        fill="none"
        strokeWidth="2"
      />
      <motion.circle
        cx={x}
        cy={y}
        r="8"
        fill="#F2AB68"
      />
    </>
  );
};

export default AnimatedPathSecond;