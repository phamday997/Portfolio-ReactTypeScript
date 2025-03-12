import React, { ReactNode } from "react";
import "./HeadingGroup.scss";

interface contentProps {
  maxWidth?: number | string;
  textAlign?: "center" | "right";
  subTitle?: string | TrustedHTML;
  mainTitle?: string | TrustedHTML;
  children?: ReactNode;
}
export const HeadingGroup: React.FC<contentProps> = ({
  maxWidth,
  textAlign,
  subTitle,
  mainTitle,
  children,
}) => {
  return (
    <div
      className={`heading-group ${textAlign ?? ""}`}
      style={{ textAlign: textAlign, maxWidth: maxWidth }}
    >
      {subTitle && (
        <div className="heading-group--subtitle">
          {<span dangerouslySetInnerHTML={{ __html: subTitle }} />}
        </div>
      )}
      {mainTitle && (
        <h2 className="heading-group--maintitle">
          {<span dangerouslySetInnerHTML={{ __html: mainTitle }} />}
        </h2>
      )}
      {children && <div className="heading-group--subdes">{children}</div>}
    </div>
  );
};
