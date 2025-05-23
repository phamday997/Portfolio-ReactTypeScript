import React from "react";
import { Button, ScrollCounter } from "..";
import "./HeroHeader.scss";
import heroImg from "./images/hero-header.jpg";
import avatarImg from "./images/avatart-man.jpg";
import iconWin from "./images/icon-win.png";
import circleCreative from "./images/circle-createtive.png";
import { Link as ScrollLink } from "react-scroll";
import { HeroHeaderBase } from "./HeroHeaderBase";

export const HeroHeaderIndex: React.FC = () => {
  const ScrollLinkComponent = ScrollLink as unknown as React.FC<any>;
  return (
    <HeroHeaderBase backgroundImg={heroImg} classEle="hero-header-index">
      <div className="group-contents">
        <div className="container">
          <div className="content">
            <div className="content--left animate__animated animate__fadeIn animate__slow">
              <div className="inner">
                <h2 className="hello">Hello I'm</h2>
                <h1 className="name">James Smith</h1>
                <h2 className="job">Web Developer from New York</h2>
                <p className="text">
                  Jodi kokhono vul hoye jai tumi oporadh nio na ptate velit esse
                  cillum dolore
                </p>
                <div className="buttons">
                  <Button
                    typeEle="link"
                    linkScroll={true}
                    linkSrollToId="contact"
                  >
                    Get a Quote
                  </Button>
                  <div className="simple_button">
                    <ScrollLinkComponent
                      to="about"
                      smooth={true}
                      duration={500}
                      offset={-150} // Adjust for fixed headers
                      className="anchor dp-btn-link-scroll"
                    >
                      About Me
                    </ScrollLinkComponent>
                  </div>
                </div>
              </div>
              <h3 className="stroke_1">James</h3>
              <h3 className="stroke_2">Smith</h3>
            </div>
            <div className="content--right">
              <div className="main-avatar">
                <div className="main-img animate__animated animate__fadeIn animate__slow">
                  <img src={avatarImg} alt="avatar man" />
                </div>
                <div className="win animate__animated animate__fadeInDown animate__faster">
                  <img src={iconWin} alt="icon win" />
                </div>
                <div className="numbers year-of-success animate__animated animate__fadeInLeft animate__delay-0_2s animate__faster">
                  <ScrollCounter
                    className="dp-counter-nummber"
                    targetNumber={12}
                    duration={200}
                    repeat={true}
                  />
                  <span className="text">
                    Years of <br /> Success
                  </span>
                </div>
                <div className="numbers project-completed animate__animated animate__fadeInRight animate__delay-0_3s animate__faster">
                  <ScrollCounter
                    className="dp-counter-nummber has-plus"
                    targetNumber={800}
                    duration={1500}
                    repeat={true}
                  />
                  <span className="text">
                    Projects <br /> completed
                  </span>
                </div>
                <div className="circle-creative animate-rotate">
                  <img
                    className="animate__animated animate__fadeIn animate__slow animate__delay-1s"
                    src={circleCreative}
                    alt="circle creative"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroHeaderBase>
  );
};
