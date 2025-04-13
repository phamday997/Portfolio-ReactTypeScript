import React, { ReactNode, useState } from "react";
import { HeroHeaderNormal } from "../../components";
import { DataBreadcrumb } from "../../components/HeroHeader/types";

interface BlogPageBaseProps {
  titlePage: string;
  dataBreadcrumb: DataBreadcrumb[];
  children: ReactNode;
}

export const BlogPageBase: React.FC<BlogPageBaseProps> = ({
  titlePage,
  dataBreadcrumb,
  children,
}) => {
  return (
    <div className="blog-page blog-page-base">
      <HeroHeaderNormal breadcrumb={true} dataBreadcrumb={dataBreadcrumb}>
        <span className="text">{titlePage}</span>
      </HeroHeaderNormal>
      <section className="section-my-post-list padding-bottom-page">
        <div className="container">{children}</div>
      </section>
    </div>
  );
};
