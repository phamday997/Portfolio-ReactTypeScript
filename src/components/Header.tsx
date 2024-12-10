import React, { useRef, useState, useEffect } from "react";
import logo from "../assets/images/logo/logo.png";
import ThemeMode from "./ThemeMode";
import Button from "./Button/Button";

const Header: React.FC = () => {
  const [show, setShow] = useState<string>("");
  const headerRef = useRef<HTMLDivElement | null>(null);
  const navMbRef = useRef<HTMLDivElement | null>(null);
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
    if (window.innerWidth > 991) {
      setShow("");
    }
  };

  const handleScreenScroll = (): void => {
    const header = headerRef.current;
    const headerHeight = header?.scrollHeight || 0;

    if (header) {
      if (window.scrollY > headerHeight) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    }
  };

  useEffect(() => {
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
      <header id="masthead" className="site-header" ref={headerRef}>
        <div className="container">
          <div className="site-header--wraper">
            <div className="site-logo">
              <img src={logo} alt="logo daypham portfolio" />
              <span>DevMan</span>
            </div>
            <div className="site-navigation">
              <nav id="navigation" className="navigation navigation-desktop">
                <ul className="navigation-list">
                  <li className="navigation-list--item">home</li>
                  <li className="navigation-list--item">About</li>
                  <li className="navigation-list--item">Portfolio</li>
                  <li className="navigation-list--item">Service</li>
                  <li className="navigation-list--item">Contact</li>
                  <li className="navigation-list--item">Blog</li>
                  <li className="navigation-list--item">
                    <Button
                      typeEle="link"
                      sizeEle="small"
                      className="secondary"
                      href="#"
                    >
                      Download CV
                    </Button>
                  </li>
                </ul>
              </nav>
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
      <div className={`site-navigation-mb ${show}`} ref={navMbRef}>
        <div className="container">
          <nav id="navigation-mb" className="navigation navigation-mb">
            <ul className="navigation-list">
              <li className="navigation-list--item">home</li>
              <li className="navigation-list--item">About</li>
              <li className="navigation-list--item">Portfolio</li>
              <li className="navigation-list--item">Service</li>
              <li className="navigation-list--item">Contact</li>
              <li className="navigation-list--item">Blog</li>
              <li className="navigation-list--item">
                <Button
                  typeEle="link"
                  sizeEle="small"
                  className="secondary"
                  href="#"
                >
                  Download CV
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
