import React, { useEffect, useRef, useState } from "react";
import "./ScrollProgressBar.scss";
import { ScrollCounter } from "../ScrollCounter";

interface ProgressBarProps {
  labelBar?: string;
  percentBar: number;
  duration: number;
  background?: string;
  backgroundBar?: string;
  repeat: boolean;
}

export const ScrollProgressBars: React.FC<ProgressBarProps> = ({
  labelBar,
  percentBar,
  duration = 2000,
  background = "#dee1e6",
  backgroundBar = "#142eb5",
  repeat = false,
}) => {
  const [percentCurrent, setPercentCurrent] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true); // Trigger animation when visible
          setPercentCurrent(percentBar);
        } else if (!entry.isIntersecting && repeat) {
          setIsVisible(false); // Reset animation if repeat is true
          setPercentCurrent(0);
        }
      },
      { root: null, threshold: 0.5 }
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
  }, [percentBar, repeat, isVisible]);

  return (
    <div
      className={`scroll-progress-bars ${isVisible ? "animate-start" : ""}`}
      ref={elementRef}
    >
      {labelBar && <div className="label-bar">{labelBar}</div>}
      <div
        className="label-percent"
        style={
          {
            "--label-position": `${percentCurrent}%`,
            transitionDuration: `${duration}ms`, // Dynamic duration
          } as React.CSSProperties
        }
      >
        <ScrollCounter
          targetNumber={percentCurrent}
          duration={120}
          repeat={true}
        ></ScrollCounter>
        %
      </div>
      <div className="progress" style={{ background: background }}>
        <div
          className="progress-bar"
          style={
            {
              "--progress-value": `${percentCurrent}%`,
              background: backgroundBar,
              transitionDuration: `${duration}ms`, // Dynamic duration
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
};
