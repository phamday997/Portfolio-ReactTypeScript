import React, { useEffect, useRef, useState } from "react";
import "./ScrollTop.scss";

const ScrollTop: React.FC = () => {
  const scrollTopRef = useRef<HTMLDivElement | null>(null);
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
      <a href="/#">
        <span className="text">To Top</span>
      </a>
      <span className="line" style={{ height: `${scrollPercent}px` }}></span>
    </div>
  );
};

export default ScrollTop;
