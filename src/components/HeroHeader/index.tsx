import React from "react";
import { Button, ScrollCounter } from "../../components";
import "./HeroHeader.scss";
import heroImg from "./images/hero-header.jpg";
import avatarImg from "./images/avatart-man.jpg";
import iconWin from "./images/icon-win.png";
import circleCreative from "./images/circle-createtive.png";

export const HeroHeader: React.FC = () => {
  return (
    <section className="section-hero-header">
      <div className="background-image">
        <img src={heroImg} alt="heroHeader" />
      </div>
      <div className="group-contents">
        <div className="container">
          <div className="content">
            <div className="content--left">
              <div className="inner">
                <h2 className="hello">Hello I'm</h2>
                <h1 className="name">James Smith</h1>
                <h2 className="job">Web Developer from New York</h2>
                <p className="text">
                  Jodi kokhono vul hoye jai tumi oporadh nio na ptate velit esse
                  cillum dolore
                </p>
                <div className="buttons">
                  <Button typeEle="link" href="#contact">
                    Get a Quote
                  </Button>
                  <div className="simple_button">
                    <a className="anchor" href="#about">
                      About Me
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="stroke_1">James</h3>
              <h3 className="stroke_2">Smith</h3>
            </div>
            <div className="content--right">
              <div className="main-avatar">
                <div className="main-img">
                  <img src={avatarImg} alt="avatar man" />
                </div>
                <div className="win">
                  <img src={iconWin} alt="icon win" />
                </div>
                <div className="numbers year-of-success">
                  <ScrollCounter
                    className="dp-counter-nummber"
                    targetNumber={12}
                    duration={200}
                  />
                  <span className="text">
                    Years of <br /> Success
                  </span>
                </div>
                <div className="numbers project-completed">
                  <ScrollCounter
                    className="dp-counter-nummber has-plus"
                    targetNumber={800}
                    duration={1500}
                  />
                  <span className="text">
                    Projects <br /> completed
                  </span>
                </div>
                <div className="circle-creative animate-rotate">
                  <img src={circleCreative} alt="circle creative" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
