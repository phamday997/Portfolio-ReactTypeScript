import React, { ReactNode } from "react";

interface HeroHeaderBaseProps {
  classEle?: string;
  backgroundImg: string;
  children: ReactNode;
}

export const HeroHeaderBase: React.FC<HeroHeaderBaseProps> = ({
  classEle,
  backgroundImg,
  children,
}) => {
  return (
    <section className={`hero-header-base ${classEle}`}>
      <div className="background-image">
        <img src={backgroundImg} alt="heroHeader" />
      </div>
      {children}
    </section>
  );
};
