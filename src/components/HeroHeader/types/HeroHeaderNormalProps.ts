import { ReactNode } from "react";
import { DataBreadcrumb } from "./DataBreadcrumb";

export interface HeroHeaderNormalProps {
  bgImgOveride?: string;
  breadcrumb?: boolean;
  dataBreadcrumb?: DataBreadcrumb[];
  children: ReactNode;
}
