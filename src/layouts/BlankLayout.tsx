import React, { ReactNode } from "react";

interface BlankLayoutProps {
  children: ReactNode;
}

export const BlankLayout: React.FC<BlankLayoutProps> = ({ children }) => {
  return (
    <main id="main" className="site-main">
      {children}
    </main>
  );
};
