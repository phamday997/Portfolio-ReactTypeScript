import React, { useCallback, useEffect, useState } from "react";
import "./MovingParallax.scss";
import { useTheme } from "../../context";

interface Parallax {
  classCustom?: string;
  direction: "Y" | "X";
  speed?: number;
  style?: React.CSSProperties;
  align?: "left" | "right";
  lightmodeBg?: string;
  darkmodeBg?: string;
}
export const MovingParallax: React.FC<Parallax> = ({
  classCustom = "",
  direction = "Y",
  speed = 10,
  style = {},
  align = "right",
  lightmodeBg = "#6e7fd1",
  darkmodeBg = "#2c314b", // Background at Darkmode (Hex,Rgb,..)
}) => {
  const { theme } = useTheme();
  const [pos, setPos] = useState<number>(0);
  const handleScreenScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    setPos(scrollTop / speed);
  }, [speed]);

  useEffect(() => {
    document.addEventListener("scroll", handleScreenScroll);
    return () => {
      document.removeEventListener("scroll", handleScreenScroll);
    };
  }, [handleScreenScroll, pos]);

  return (
    <div
      className={`shape moving-parallax parallax-effect ${align} ${classCustom}`}
      style={{
        ...style,
        transform: `translate${direction}(${pos}px)`,
        backgroundColor: theme === "dark" ? darkmodeBg : lightmodeBg,
      }}
    ></div>
  );
};
