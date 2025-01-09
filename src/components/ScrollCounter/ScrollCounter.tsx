import React, { useEffect, useRef, useState } from "react";

interface CounterProps {
  className?: string;
  targetNumber: number;
  duration?: number; // Optional duration in milliseconds
}

const ScrollCounter: React.FC<CounterProps> = ({
  className,
  targetNumber,
  duration = 2000,
}) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    const getIncrement = (target: number): number => {
      if (target < 10) return 1;
      if (target >= 10 && target < 100) return 1;
      if (target >= 100 && target < 1000) return 10;
      if (target >= 1000 && target < 10000) return 50;
      if (target >= 10000 && target < 1000000) return 100;
      if (target >= 1000000 && target < 1000000000) return 10000;
      return 1000000;
    };

    const animateCount = () => {
      if (isAnimating.current) return; // Prevent overlapping animations
      isAnimating.current = true;

      setCurrentNumber(0); // Reset the counter
      const stepTime = Math.abs(Math.floor(duration / (targetNumber / 10)));
      const increment = getIncrement(targetNumber);
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          current = targetNumber;
          clearInterval(interval);
          isAnimating.current = false; // Reset animation flag
        }
        setCurrentNumber(current);
      }, stepTime);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimating.current) {
          animateCount();
        }
      },
      {
        root: null, // Observes the viewport
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    const currentRef = counterRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [targetNumber, duration]);

  return (
    <span
      ref={counterRef}
      className={`animate-counter-display ${className}`}
      data-target={targetNumber}
    >
      {currentNumber.toLocaleString("de-DE")}
    </span>
  );
};

export default ScrollCounter;
