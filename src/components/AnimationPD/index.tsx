import React, { useEffect, useRef, useState } from "react";
import { AnimationElementProps } from "./type/AnimationProps";

export const AnimationPD: React.FC<AnimationElementProps> = ({
  classElement, // your class item
  index = 0,
  totalItem, // total item in your loop function.
  animation, // fadeIn, fadeInUp, ...
  duration = 1, // seconds.
  delayBase = 0, // seconds.
  delayStepMore = 0, // seconds.
  children,
}) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const isInViewport = (el: HTMLElement): boolean => {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current && isInViewport(elementRef.current)) {
        setIsVisible(true);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculatedDelay = `${
    index !== 0 ? index / totalItem + delayBase + delayStepMore : delayBase
  }s`;

  return (
    <div
      ref={elementRef}
      className={`${classElement} animate__animated ${
        isVisible ? `animate__${animation}` : ""
      } animate-pd-js`}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: calculatedDelay,
        visibility: isVisible ? "visible" : "hidden",
      }}
    >
      {children}
    </div>
  );
};
