import React, { ReactNode, useState } from "react";
import { HeroHeaderNormal } from "../../components";
import { DataBreadcrumb } from "../../components/HeroHeader/types";
import "./Blog.scss";

interface BlogBaseProps {
  classEle?: string;
  titlePage: string;
  dataBreadcrumb: DataBreadcrumb[];
  children: ReactNode;
}

export const BlogBase: React.FC<BlogBaseProps> = ({
  classEle,
  titlePage,
  dataBreadcrumb,
  children,
}) => {
  return (
    <div className={`blog-page blog-page-base ${classEle}`}>
      <HeroHeaderNormal breadcrumb={true} dataBreadcrumb={dataBreadcrumb}>
        <span className="text">{titlePage}</span>
      </HeroHeaderNormal>
      <section className="section-my-post-list padding-bottom-page">
        <div className="container">{children}</div>
      </section>
    </div>
  );
};
