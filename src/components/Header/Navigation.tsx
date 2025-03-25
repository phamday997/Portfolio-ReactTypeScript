import React, {
  useState,
  useEffect,
  ForwardedRef,
  useCallback,
  useMemo,
} from "react";
import cvPdf from "../../assets/files/cv.pdf";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import { MenuItemProps, NavigationProps } from "./type";
import { Button } from "../Button";

export const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ device = "desktop", setShow }, ref: ForwardedRef<HTMLElement>) => {
    const ScrollLinkComponent = ScrollLink as unknown as React.FC<any>;
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const menuItems: MenuItemProps[] = useMemo(
      () => [
        { label: "Home", url: "home" },
        { label: "About", url: "about" },
        { label: "Portfolio", url: "portfolio" },
        { label: "Service", url: "service" },
        { label: "Contact", url: "contact" },
        { label: "Blog", url: "blog" },
      ],
      []
    );
    const location = useLocation();

    const handleClick = useDebouncedCallback((): void => {
      if (device === "mobile" && setShow) {
        setShow("");
      }
    }, 1000);

    const handleScroll = useCallback(() => {
      menuItems.forEach((item, index) => {
        const sectionId = item.label.toLowerCase();
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
      >
        <ul className="navigation-list">
          {menuItems.map((item, index) => (
            <li key={index} className="navigation-list--item">
              {index === 0 ? (
                location.pathname === "/" ? (
                  <ScrollLinkComponent
                    to={item.url}
                    smooth={true}
                    duration={500}
                    offset={-70} // Adjust for fixed headers
                    className={activeIndex === index ? "current" : ""}
                    onClick={handleClick}
                  >
                    {item.label}
                  </ScrollLinkComponent>
                ) : (
                  <Link to="/">{item.label}</Link>
                )
              ) : (
                <ScrollLinkComponent
                  to={item.url}
                  smooth={true}
                  duration={500}
                  offset={-70} // Adjust for fixed headers
                  className={activeIndex === index ? "current" : ""}
                  onClick={handleClick}
                >
                  {item.label}
                </ScrollLinkComponent>
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
