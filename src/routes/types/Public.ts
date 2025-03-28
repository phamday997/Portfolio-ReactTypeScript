import { LazyExoticComponent } from "react";

export interface PublicRouter {
  component: LazyExoticComponent<React.FC<any>>;
  path: string;
}
