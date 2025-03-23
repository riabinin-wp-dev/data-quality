import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const AnimatedPathSecond = ({ path, duration = 8 }) => {
  const pathRef = useRef(null);
  const progress = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

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
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Если мобильный, не запускаем анимацию
      return;
    }

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
  }, [progress, duration, isMobile]);

  return (
    <>
      <path
        ref={pathRef}
        d={path}
        stroke="#D2DADE"
        fill="none"
        strokeWidth="2"
      />
      {!isMobile && (
        <motion.circle
          cx={x}
          cy={y}
          r="8"
          fill="#F2AB68"
        />
      )}
    </>
  );
};

export default AnimatedPathSecond;