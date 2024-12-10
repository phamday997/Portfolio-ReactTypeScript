import React, {
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  InputHTMLAttributes,
} from "react";
import "./Button.scss";

interface ButtonProps {
  typeEle?: "button" | "link" | "submit-input";
  sizeEle?: "small" | "normal" | "large";
  className?: "priamry" | "secondary" | string;
  children?: ReactNode;
}

type CombinedProps = ButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  InputHTMLAttributes<HTMLInputElement>;

const Button: React.FC<CombinedProps> = ({
  typeEle = "button", // Default value
  sizeEle = "normal",
  className = "primary",
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
      return (
        <a className={`${className} dp-btn dp-btn--${sizeEle}`} {...props}>
          {children || "Your Label"}
        </a>
      );
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

export default Button;
