import React, {
  useRef,
  useState,
  useEffect,
  ForwardedRef,
  useCallback,
  useMemo,
} from "react";
import ThemeMode from "./ThemeMode";
import { Button } from "../components";
import logo from "../assets/images/logo/logo.png";
import cvPdf from "../assets/files/cv.pdf";

interface NavigationProps {
  device: "desktop" | "mobile";
}
interface MenuItem {
  label: string;
  url: string;
}
const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ device = "desktop" }, ref: ForwardedRef<HTMLElement>) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const menuItems: MenuItem[] = useMemo(
      () => [
        { label: "Home", url: "/#home" },
        { label: "About", url: "/#about" },
        { label: "Portfolio", url: "/#portfolio" },
        { label: "Service", url: "/#service" },
        { label: "Contact", url: "/#contact" },
        { label: "Blog", url: "/#blog" },
      ],
      []
    );

    const handleClick = (index: number, label: string): void => {
      setActiveIndex(index);

      const sectionId = label.toLowerCase();
      const element = document.getElementById(sectionId);

      if (element) {
        window.scrollTo({
          top: element.offsetTop - 70,
          behavior: "smooth",
        });
      }
    };

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
            <li
              key={index}
              className="navigation-list--item"
              onClick={() => handleClick(index, item.url)}
            >
              <a
                href={item.url}
                className={activeIndex === index ? "current" : ""}
              >
                {item.label}
              </a>
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
