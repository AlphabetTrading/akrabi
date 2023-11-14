"use client";

import React, { useEffect, useRef, useState } from "react";

const CountUp: React.FC<{ end: number; duration: number }> = ({
  end,
  duration,
}) => {
  const [count, setCount] = useState(0);
  const start = useRef<number>(0);
  const seconds = duration * 1000; // Convert seconds to milliseconds
  const increment = (end / seconds) * (1000 / 60); // Increment per frame (assuming 60fps)
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let startTime: number;
    let raf: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;
      const nextCount = start.current + progress * increment;

      if (nextCount < end) {
        setCount(nextCount);
        raf = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    if (count < end && isVisible) {
      start.current = count;
      raf = requestAnimationFrame(animate);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }, // Adjust the threshold as needed
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [count, end, increment, isVisible]);

  return <span ref={countRef}>{Math.floor(count)}</span>;
};

export default CountUp;
