import React, { useRef, useState, useEffect } from "react";
import logo from "../assets/images/logo/logo.png";
import ThemeMode from "./ThemeMode";
import Button from "./Button/Button";

const Header: React.FC = () => {
  const [show, setShow] = useState<string>("");
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

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="header-all-wraper">
      <header id="masthead" className="site-header">
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
        <nav id="navigation-mb" className="navigation navigation-mb">
          <ul className="navigation-list">
            <li className="navigation-list--item">home</li>
            <li className="navigation-list--item">About</li>
            <li className="navigation-list--item">Portfolio</li>
            <li className="navigation-list--item">Service</li>
            <li className="navigation-list--item">Contact</li>
            <li className="navigation-list--item">Blog</li>
            <li className="navigation-list--item">
              <a href="/" className="daypham-btn">
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
