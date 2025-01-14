import { useEffect, useRef, useState } from "react";

interface UseScrollCounterParams {
  targetNumber: number;
  duration: number;
  threshold?: number;
}

const useScrollCounter = ({
  targetNumber,
  duration,
  threshold = 0.5,
}: UseScrollCounterParams) => {
  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isAnimating = useRef<boolean>(false);

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
      if (isAnimating.current) return;
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
          isAnimating.current = false;
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
        threshold, //Trigger when 50% of the element is visible
      }
    );

    const currentRef = elementRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [targetNumber, duration, threshold]);

  return { currentNumber, elementRef };
};

export default useScrollCounter;
