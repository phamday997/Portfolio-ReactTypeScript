import React, { useRef, useState, useEffect, useCallback } from "react";
import ThemeMode from "../ThemeMode";
import logo from "../../assets/images/logo/logo.png";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Link as ScrollLink, LinkProps, scroller } from "react-scroll";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ScrollLinkComponent: React.FC<LinkProps> = ScrollLink as any;
  const [show, setShow] = useState<string>("");
  const [shrink, setShrink] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const navMbRef = useRef<HTMLDivElement | null>(null);
  const navChildMbRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const themeModeRef = useRef<HTMLDivElement>(null);
  const [heightHeader, setHeightHeader] = useState<number>(
    headerRef?.current?.clientHeight || 0
  );

  const handleNavMobile = (): void => {
    const currentHeight = headerRef?.current?.clientHeight || 0;

    setHeightHeader(currentHeight);
    setShow((prev) => (prev === "active" ? "" : "active"));

    if (window.scrollY > currentHeight) {
      setShrink("shrink");
    } else {
      setShrink("");
    }
  };

  const handleClickOutside = useCallback((event: MouseEvent): void => {
    if (
      !navMbRef?.current?.contains(event.target as Node) &&
      !hamburgerRef?.current?.contains(event.target as Node) &&
      !themeModeRef?.current?.contains(event.target as Node)
    ) {
      setShow("");
    }
  }, []);

  const handleScreenResize = useCallback((): void => {
    const currentHeight = headerRef?.current?.clientHeight || 0;

    setHeightHeader(currentHeight);

    if (window.innerWidth > 991) {
      setShow("");
    }
  }, []);

  const handleScreenScroll = useCallback((): void => {
    const currentHeight = headerRef?.current?.clientHeight || 0;

    setHeightHeader(currentHeight);

    if (window.scrollY > currentHeight) {
      setShrink("shrink");
    } else {
      setShrink("");
    }
  }, []);

  const handleLogoClick = (): void => {
    setActiveIndex(0);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      scroller.scrollTo("top", {
        duration: 200,
        smooth: true,
        offset: -100,
      });
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
                <ScrollLinkComponent
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={handleLogoClick}
                >
                  <img src={logo} alt="logo daypham portfolio" />
                  <span>DevMan</span>
                </ScrollLinkComponent>
              </div>
            ) : (
              <div className="site-logo">
                <Link to={`/`} onClick={handleLogoClick}>
                  <img src={logo} alt="logo daypham portfolio" />
                  <span>DevMan</span>
                </Link>
              </div>
            )}
            <div className="site-navigation">
              <Navigation
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                device="desktop"
              />
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
        style={{
          paddingTop: `${heightHeader + 15}px`,
        }}
      >
        <div className="container">
          <Navigation
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            heightParent={heightHeader}
            device="mobile"
            ref={navChildMbRef}
            setShow={setShow}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
