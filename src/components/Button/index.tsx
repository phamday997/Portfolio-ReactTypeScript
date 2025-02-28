import React, {
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  InputHTMLAttributes,
} from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Button.scss";

interface ButtonProps {
  typeEle?: "button" | "link" | "submit-input";
  sizeEle?: "small" | "normal" | "large";
  className?: "priamry" | "secondary" | string;
  linkScroll?: boolean; // condition enable linkScroll
  linkSrollToId?: string; // id your section which you want to target
  children?: ReactNode;
}

type CombinedProps = ButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  InputHTMLAttributes<HTMLInputElement>;

export const Button: React.FC<CombinedProps> = ({
  typeEle = "button", // Default value
  sizeEle = "normal",
  className = "primary",
  linkScroll = false,
  linkSrollToId = "",
  children,
  ...props
}) => {
  switch (typeEle) {
    case "button":
      return (
        <button className={`${className} dp-btn dp-btn--${sizeEle}`} {...props}>
          {children || "Your Label"}
        </button>
      );
    case "link":
      if (linkScroll) {
        const ScrollLinkComponent = ScrollLink as unknown as React.FC<any>;
        return (
          <ScrollLinkComponent
            to={linkSrollToId}
            smooth={true}
            duration={500}
            offset={-70} // Adjust for fixed headers
            className={`${className} dp-btn dp-btn-link-scroll dp-btn--${sizeEle}`}
          >
            {children || "Your Label"}
          </ScrollLinkComponent>
        );
      } else {
        return (
          <a className={`${className} dp-btn dp-btn--${sizeEle}`} {...props}>
            {children || "Your Label"}
          </a>
        );
      }
    case "submit-input":
      return (
        <input
          type="submit"
          value={typeof children === "string" ? children : "Your Label"}
          className={`${className} dp-btn dp-btn--${sizeEle}`}
          {...props}
        />
      );
    default:
      return null;
  }
};
