import React, { ReactNode } from "react";
import "./SidebarPD.scss";

interface SidebarBaseProps {
  children: ReactNode;
}
export const SidebarBase: React.FC<SidebarBaseProps> = ({ children }) => {
  return (
    <div className="sidebarPD">
      <aside className="sidebar-wrapper">{children}</aside>
    </div>
  );
};
