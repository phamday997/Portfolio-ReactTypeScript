import React, { ReactNode } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

interface MainLayoutProps {
  children: ReactNode;
}
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main id="main" className="site-main">
        {children}
      </main>
      <Footer />
    </>
  );
};
