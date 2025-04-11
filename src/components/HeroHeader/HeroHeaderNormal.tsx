import React, { ReactNode } from "react";
import heroImg from "./images/page-header.jpg";
import "./HeroHeader.scss";
import { HeroHeaderBase } from "./HeroHeaderBase";
import { Link } from "react-router-dom";
import { getPlainText } from "../../helper";

interface dataBreadcrumb {
  label: string;
  url: string;
}

interface HeroHeaderNormalProps {
  bgImgOveride?: string;
  breadcrumb?: boolean;
  dataBreadcrumb?: dataBreadcrumb[];
  children: ReactNode;
}

export const HeroHeaderNormal: React.FC<HeroHeaderNormalProps> = ({
  bgImgOveride,
  breadcrumb = false,
  dataBreadcrumb,
  children,
}) => {
  return (
    <HeroHeaderBase
      backgroundImg={bgImgOveride ? bgImgOveride : heroImg}
      classEle={`hero-header-normal ${dataBreadcrumb ? "has-breadcrumb" : ""}`}
    >
      <div className="group-inner animate__animated animate__fadeIn animate__slow">
        <h1 className="title-h1">{children}</h1>
      </div>
      {breadcrumb && (
        <div className="breadcrumb-pd">
          <div className="list-breadcrumb-pd">
            <div className="item-breadcrumb">
              <div className="item-breadcrumb--item">
                <Link to={`/`}>Home</Link>
              </div>
              <div className="item-breadcrumb--item space">/</div>
            </div>
            {dataBreadcrumb &&
              dataBreadcrumb?.length > 0 &&
              dataBreadcrumb.map((item: dataBreadcrumb, index: number) => (
                <div className="item-breadcrumb" key={index}>
                  <div className="item-breadcrumb--item">
                    {item.url ? (
                      <Link to={`${item.url}`}>{getPlainText(item.label)}</Link>
                    ) : (
                      <span title={`${getPlainText(item.label)}`}>
                        {getPlainText(item.label)}
                      </span>
                    )}
                  </div>
                  {item.url ? (
                    <div className="item-breadcrumb--item space">/</div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </HeroHeaderBase>
  );
};
