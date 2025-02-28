import React, { useEffect, useRef, useCallback } from "react";
import "./MouseCursor.scss";

export const MouseCursor: React.FC = () => {
  const mouseOuter = useRef<HTMLDivElement | null>(null);
  const mouseInner = useRef<HTMLDivElement | null>(null);

  const setStyles = (
    element: HTMLDivElement | null,
    styles: React.CSSProperties
  ) => {
    if (element) {
      Object.assign(element.style, styles);
    }
  };

  const handleMouseMove = useCallback((e: MouseEvent): void => {
    setStyles(mouseOuter.current, {
      transform: `translate(${e.clientX}px, ${e.clientY}px)`,
      visibility: "visible",
    });
    setStyles(mouseInner.current, {
      transform: `translate(${e.clientX}px, ${e.clientY}px)`,
      visibility: "visible",
    });
  }, []);

  const handleMouseEnter = useCallback((): void => {
    setStyles(mouseOuter.current, { opacity: "0" });
    setStyles(mouseInner.current, {
      opacity: "0.3",
      width: "80px",
      height: "80px",
      marginTop: "-40px",
      marginLeft: "-40px",
    });
  }, []);

  const handleMouseLeave = useCallback((): void => {
    setStyles(mouseOuter.current, { opacity: "0.5" });
    setStyles(mouseInner.current, {
      opacity: "1",
      width: "6px",
      height: "6px",
      marginTop: "-3px",
      marginLeft: "-3px",
    });
  }, []);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll(
      "a,a[href],button,.overlay-action,.dp-btn-link-scroll"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseEnter, handleMouseLeave, handleMouseMove]);

  return (
    <div className="mouse-cursor-wrapper">
      <div className="mouse-cursor mouse-outer" ref={mouseOuter}></div>
      <div className="mouse-cursor mouse-inner" ref={mouseInner}></div>
    </div>
  );
};
