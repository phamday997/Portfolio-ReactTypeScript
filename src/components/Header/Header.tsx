import React, { useRef, useState, useEffect, useCallback } from "react";
import ThemeMode from "../ThemeMode";
import logo from "../../assets/images/logo/logo.png";

import { Link, useLocation } from "react-router-dom";
import { Navigation } from "./Navigation";

const Header: React.FC = () => {
  const [show, setShow] = useState<string>("");
  const [shrink, setShrink] = useState<string>("");
  const headerRef = useRef<HTMLDivElement | null>(null);
  const navMbRef = useRef<HTMLDivElement | null>(null);
  const navChildMbRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const themeModeRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleNavMobile = (): void => {
    const header = headerRef.current;
    const headerHeight = header?.scrollHeight || 0;

    setShow((prev) => (prev === "active" ? "" : "active"));

    if (window.scrollY > headerHeight) {
      setShrink("shrink");
    } else {
      setShrink("");
    }
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
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
  }, []);

  const handleScreenResize = useCallback((): void => {
    const header = headerRef.current;
    const navMobile = navMbRef.current;
    const navChildMobile = navChildMbRef.current!;
    const headerHeight = header?.scrollHeight || 0;

    if (header && navMobile) {
      navMobile.style.paddingTop = `${headerHeight - 40}px`;
      navChildMobile.style.maxHeight = `calc(100vh - ${headerHeight + 45}px)`;
    }

    if (window.innerWidth > 991) {
      setShow("");
    }
  }, []);

  const handleScreenScroll = useCallback((): void => {
    const header = headerRef.current;
    const navMobile = navMbRef.current;
    const navChildMobile = navChildMbRef.current!;
    const headerHeight = header?.scrollHeight || 0;

    if (header && navMobile && navChildMbRef) {
      navChildMobile.style.maxHeight = `calc(100vh - ${headerHeight + 45}px)`;
      navMobile.style.paddingTop = `${headerHeight - 40}px`;

      if (window.scrollY > headerHeight) {
        setShrink("shrink");
      } else {
        setShrink("");
      }
    }
  }, []);

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
  }, [handleClickOutside, handleScreenResize, handleScreenScroll]);

  return (
    <div className="header-all-wraper">
      <header
        id="masthead"
        className={`site-header ${show} ${shrink}`}
        ref={headerRef}
      >
        <div className="container">
          <div className="site-header--wraper">
            {location.pathname === "/" ? (
              <div className="site-logo">
                <img src={logo} alt="logo daypham portfolio" />
                <span>DevMan</span>
              </div>
            ) : (
              <div className="site-logo">
                <Link to="/">
                  <img src={logo} alt="logo daypham portfolio" />
                  <span>DevMan</span>
                </Link>
              </div>
            )}
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
      <div
        className={`site-navigation-mobile ${show} ${shrink}`}
        ref={navMbRef}
      >
        <div className="container">
          <Navigation device="mobile" ref={navChildMbRef} setShow={setShow} />
        </div>
      </div>
    </div>
  );
};

export default Header;
