import React from "react";

const Footer: React.FC = () => {
  const date = new Date();
  const currenYear = date?.getFullYear();

  return (
    <div className="footer-all-wraper">
      <div className="container">
        <footer id="colophon" className="site-footer">
          <div className="copyright">
            <span>Developed by </span>
            <a href="www.linkedin.com/in/phamvanday" target="_blank">
              <strong>Phamday</strong>
            </a>
            <span> © {currenYear}</span>
          </div>
          <div className="footer-links">
            <ul className="footer-list-links">
              <li className="footer-list-links--item">
                <a href="/#">Terms & Condition</a>
              </li>
              <li className="footer-list-links--item">
                <a href="/#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
