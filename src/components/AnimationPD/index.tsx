import React, { useEffect, useRef, useState } from "react";
import { AnimationElementProps } from "./type/AnimationProps";

export const AnimationPD: React.FC<AnimationElementProps> = ({
  classElement, // your class item.
  idElement,
  as: Component = "div",
  index = 0, // includes total item for delay
  totalItem, // total item in your loop function.
  animation, // fadeIn, fadeInUp, ... Require
  duration = 1, // seconds.
  delayBase = 0, // seconds.
  delayStepMore = 0, // seconds.
  children, //Require
}) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

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
    index !== 0 && totalItem
      ? index / totalItem + delayBase + delayStepMore
      : delayBase
  }s`;

  return (
    <Component
      ref={elementRef}
      {...(idElement && { id: idElement })}
      className={`${classElement || ""} animate__animated ${
        isVisible ? `animate__${animation}` : ""
      }`}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: calculatedDelay,
        visibility: isVisible ? "visible" : "hidden",
      }}
    >
      {children}
    </Component>
  );
};
