import React, { useEffect, ForwardedRef, useCallback, useMemo } from "react";
import cvPdf from "../../assets/files/cv.pdf";
import { LinkProps, scroller, Link as ScrollLink } from "react-scroll";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import { MenuItems, NavigationProps } from "./type";
import { Button } from "../Button";
import { useGlobalStateZustand } from "../../hooks/useGlobalStateZustand";

export const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  (
    { device = "desktop", heightParent, setShow },
    ref: ForwardedRef<HTMLElement>
  ) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { activeIndex, setActiveIndex } = useGlobalStateZustand();
    const ScrollLinkComponent: React.FC<LinkProps> = ScrollLink as any;

    const menuItems: MenuItems[] = useMemo(
      () => [
        { label: "Home", url: "top" },
        { label: "About", url: "about" },
        { label: "Portfolio", url: "portfolio" },
        { label: "Service", url: "service" },
        { label: "Contact", url: "contact" },
        { label: "Blog", url: "blog" },
      ],
      []
    );

    const handleClick = useDebouncedCallback((to: string, index: number) => {
      if (device === "mobile" && setShow) {
        setShow("");
      }

      if (to === "top" && typeof setActiveIndex === "function") {
        setActiveIndex(0);
      } else if (typeof setActiveIndex === "function") {
        setActiveIndex(index);
      }

      if (location.pathname !== "/") {
        sessionStorage.setItem("scrollTo", to);
        navigate("/");
      } else {
        scroller.scrollTo(to, {
          duration: 200,
          smooth: true,
          offset: -100,
        });
      }
    }, 200);

    const handleScroll = useCallback(() => {
      menuItems.forEach((item: MenuItems, index: number) => {
        const sectionId = item.url.toLowerCase();
        const element = document.getElementById(sectionId);

        if (element) {
          const elementTop = element.getBoundingClientRect().top;
          const elementBottom = element.getBoundingClientRect().bottom;

          if (elementBottom > 0 && elementTop < window.innerHeight / 2) {
            setActiveIndex(index);
          }
        }
      });
    }, [menuItems]);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [handleScroll]);

    return (
      <nav
        id={`navigation-${device}`}
        className={`navigation navigation-${device}`}
        ref={ref}
        style={{
          maxHeight: `calc(100dvh - ${
            heightParent ? heightParent + 45 : ""
          }px)`,
        }}
      >
        <ul className="navigation-list">
          {menuItems.map((item: MenuItems, index: number) => (
            <li key={index} className="navigation-list--item">
              {location.pathname === "/" ? (
                <ScrollLinkComponent
                  to={item.url}
                  smooth={true}
                  duration={200}
                  offset={-100}
                  className={activeIndex === index ? "current" : ""}
                  onClick={() => handleClick(item.url, index)}
                >
                  {item.label}
                </ScrollLinkComponent>
              ) : (
                <Link to="/" onClick={() => handleClick(item.url, index)}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
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
