import { useEffect, useRef, useState } from "react";

interface UseScrollCounterParams {
  targetNumber: number;
  duration: number;
  threshold?: number;
  repeat?: boolean; // New prop to control animation repetition
}

export const useScrollCounter = ({
  targetNumber,
  duration,
  threshold = 0.5,
  repeat = false, // Default is false (animation runs once)
}: UseScrollCounterParams) => {
  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isAnimating = useRef<boolean>(false);
  const hasAnimated = useRef<boolean>(false); // Tracks if animation has already run (when repeat is false)

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
      if (isAnimating.current || (!repeat && hasAnimated.current)) return;

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
          hasAnimated.current = true; // Mark as animated if repeat is false
        }
        setCurrentNumber(current);
      }, stepTime);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount();
        } else if (repeat) {
          hasAnimated.current = false; // Allow re-animation when scrolling up/down
        }
      },
      {
        root: null, // Observes the viewport
        threshold, // Trigger when `threshold` % of the element is visible
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
  }, [targetNumber, duration, threshold, repeat]);

  return { currentNumber, elementRef };
};
