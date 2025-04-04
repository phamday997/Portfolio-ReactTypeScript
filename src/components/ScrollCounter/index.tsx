import styled from "styled-components";
import "./ScrollCounter.scss";
import { useScrollCounter } from "../../hooks";

interface CounterProps {
  className?: string;
  targetNumber: number;
  unit?: "M" | "B" | string;
  duration?: number;
  repeat?: boolean;
}

const SpanCounter = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "unit",
})<{ unit?: string }>`
  &.has-unit {
    &::after {
      content: "${(props) => props.unit || ""}" !important;
      top: 3px;
    }
  }
`;

export const ScrollCounter: React.FC<CounterProps> = ({
  className,
  targetNumber,
  unit,
  duration = 2000,
  repeat = false,
}) => {
  const { currentNumber, elementRef } = useScrollCounter({
    targetNumber,
    duration,
    repeat,
  });

  return (
    <SpanCounter
      ref={elementRef}
      className={`animate-counter-display ${className}`}
      unit={unit}
    >
      {currentNumber.toLocaleString("de-DE")}
    </SpanCounter>
  );
};
