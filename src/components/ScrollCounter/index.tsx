import useScrollCounter from "../../hooks/useScrollCounter";
interface CounterProps {
  className?: string;
  targetNumber: number;
  duration?: number;
}

export const ScrollCounter: React.FC<CounterProps> = ({
  className,
  targetNumber,
  duration = 2000,
}) => {
  const { currentNumber, elementRef } = useScrollCounter({
    targetNumber,
    duration,
  });

  return (
    <span
      ref={elementRef}
      className={`animate-counter-display ${className}`}
      data-target={targetNumber}
    >
      {currentNumber.toLocaleString("de-DE")}
    </span>
  );
};
