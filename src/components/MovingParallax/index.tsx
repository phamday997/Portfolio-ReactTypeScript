import React, { useCallback, useEffect, useId, useRef } from "react";
import "./MovingParallax.scss";
import { useTheme } from "../../context";

interface Parallax {
  direction: "Y" | "X";
  speed?: number;
  style?: React.CSSProperties;
  align?: "left" | "right";
  lightmodeBg?: string;
  darkmodeBg?: string;
}
export const MovingParallax: React.FC<Parallax> = ({
  direction = "Y",
  speed = 10,
  style = {},
  align = "right",
  lightmodeBg = "#6e7fd1",
  darkmodeBg = "#2c314b", // Background at Darkmode (Hex,Rgb,..)
}) => {
  const { theme } = useTheme();
  const shapRef = useRef<HTMLDivElement | null>(null);
  const handleScreenScroll = useCallback(() => {
    const shapeMoving = shapRef.current!;
    const scrollTop = window.scrollY;
    const pos = scrollTop / speed;
    shapeMoving.style.transform = `translate${direction}(${pos}px)`;
  }, [speed, direction]);

  useEffect(() => {
    handleScreenScroll();
    document.addEventListener("scroll", handleScreenScroll);
    return () => {
      document.removeEventListener("scroll", handleScreenScroll);
    };
  }, [handleScreenScroll]);

  return (
    <div
      className={`shape moving-parallax parallax-effect ${align}`}
      ref={shapRef}
      style={{
        ...style,
        backgroundColor: theme === "dark" ? darkmodeBg : lightmodeBg,
      }}
    ></div>
  );
};
