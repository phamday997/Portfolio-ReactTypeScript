import React, { useRef, useState, useEffect, ForwardedRef } from "react";
import logo from "../assets/images/logo/logo.png";
import ThemeMode from "./ThemeMode";
import Button from "./Button/Button";
import cvPdf from "../assets/files/cv.pdf";

interface NavigationProps {
  device: "desktop" | "mobile";
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ device = "desktop" }, ref: ForwardedRef<HTMLElement>) => {
    return (
      <nav
        id={`navigation-${device}`}
        className={`navigation navigation-${device}`}
        ref={ref}
      >
        <ul className="navigation-list">
          <li className="navigation-list--item">
            <a href="/#" className="current">
              Home
            </a>
          </li>
          <li className="navigation-list--item">
            <a href="/#about">About</a>
          </li>
          <li className="navigation-list--item">
            <a href="/#portfolio">Portfolio</a>
          </li>
          <li className="navigation-list--item">
            <a href="/#service">Service</a>
          </li>
          <li className="navigation-list--item">
            <a href="/#contact">Contact</a>
          </li>
          <li className="navigation-list--item">
            <a href="/#blog">Blog</a>
          </li>
          <li className="navigation-list--item">
            {device === "mobile" ? (
              <Button
                download
                typeEle="link"
                sizeEle="small"
                className="secondary"
                href={cvPdf}
                style={{
                  marginTop: "15px",
                  padding: "7px 40px 10px",
                }}
              >
                Download CV
              </Button>
            ) : (
              <Button
                download
                typeEle="link"
                sizeEle="small"
                className="secondary"
                href={cvPdf}
              >
                Download CV
              </Button>
            )}
          </li>
        </ul>
      </nav>
    );
  }
);

const Header: React.FC = () => {
  const [show, setShow] = useState<string>("");
  const headerRef = useRef<HTMLDivElement | null>(null);
  const navMbRef = useRef<HTMLDivElement | null>(null);
  const navChildMbRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const themeModeRef = useRef<HTMLButtonElement | null>(null);

  const handleNavMobile = () => {
    setShow((prev) => (prev === "active" ? "" : "active"));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navMbRef.current &&
      !navMbRef.current.contains(event.target as Node) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target as Node) &&
      themeModeRef.current &&
      !themeModeRef.current.contains(event.target as Node)
    ) {
      setShow("");
    }
  };

  const handleScreenResize = (): void => {
    const header = headerRef.current;
    const navMobile = navMbRef.current;
    const navChildMobile = navChildMbRef.current!;
    const headerHeight = header?.scrollHeight || 0;

    if (header && navMobile) {
      navMobile.style.paddingTop = `${headerHeight + 15}px`;
      navChildMobile.style.maxHeight = `calc(100vh - ${headerHeight + 45}px)`;
    }

    if (window.innerWidth > 991) {
      setShow("");
    }
  };

  const handleScreenScroll = (): void => {
    const header = headerRef.current;
    const navMobile = navMbRef.current;
    const navChildMobile = navChildMbRef.current!;
    const headerHeight = header?.scrollHeight || 0;

    if (header && navMobile && navChildMbRef) {
      navChildMobile.style.maxHeight = `calc(100vh - ${headerHeight + 45}px)`;
      navMobile.style.paddingTop = `${headerHeight + 15}px`;

      if (window.scrollY > headerHeight) {
        header.classList.add("shrink");
        navMobile.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
        navMobile.classList.remove("shrink");
      }
    }
  };

  useEffect(() => {
    handleScreenResize();
    handleScreenScroll();
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleScreenResize);
    window.addEventListener("scroll", handleScreenScroll);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleScreenResize);
      window.removeEventListener("scroll", handleScreenScroll);
    };
  }, []);

  return (
    <div className="header-all-wraper">
      <header id="masthead" className={`site-header ${show}`} ref={headerRef}>
        <div className="container">
          <div className="site-header--wraper">
            <div className="site-logo">
              <img src={logo} alt="logo daypham portfolio" />
              <span>DevMan</span>
            </div>
            <div className="site-navigation">
              <Navigation device="desktop" />
              <ThemeMode ref={themeModeRef} />
              <div
                className={`hamburger-toggle ${show}`}
                onClick={handleNavMobile}
                ref={hamburgerRef}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`site-navigation-mobile ${show}`} ref={navMbRef}>
        <div className="container">
          <Navigation device="mobile" ref={navChildMbRef} />
        </div>
      </div>
    </div>
  );
};

export default Header;
