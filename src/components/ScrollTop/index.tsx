import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./ScrollTop.scss";

export const ScrollTop: React.FC = () => {
  const scrollTopRef = useRef<HTMLDivElement | null>(null);
  const ScrollLinkComponent = ScrollLink as unknown as React.FC<any>;
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  const handleScroll = (): void => {
    if (window.scrollY > 200) {
      scrollTopRef.current?.classList.add("active");
    } else {
      scrollTopRef.current?.classList.remove("active");
    }

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const totalScrollableHeight = documentHeight - windowHeight;
    const percentScrolled = totalScrollableHeight
      ? (scrollTop / totalScrollableHeight) * 100
      : 0;

    setScrollPercent(percentScrolled);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="progressbar-scroll" ref={scrollTopRef}>
      <ScrollLinkComponent
        to="top"
        smooth={true}
        duration={500}
        offset={-70} // Adjust for fixed headers
      >
        <span className="text">To Top</span>
      </ScrollLinkComponent>
      <span className="line" style={{ height: `${scrollPercent}px` }}></span>
    </div>
  );
};
