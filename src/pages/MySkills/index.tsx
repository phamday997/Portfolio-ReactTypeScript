import React from "react";
import { HeadingGroup, ScrollProgressBars } from "../../components";
import "./MySkills.scss";

interface SkillItem {
  labelBar: string;
  percentBar: number;
}

export const MySkills: React.FC = () => {
  const skillItem: SkillItem[] = [
    {
      labelBar: "Wordpress",
      percentBar: 90,
    },
    {
      labelBar: "Laravel",
      percentBar: 80,
    },
    {
      labelBar: "ReactJS",
      percentBar: 70,
    },
    {
      labelBar: "PHP",
      percentBar: 80,
    },
    {
      labelBar: "JavaScript",
      percentBar: 70,
    },
    {
      labelBar: "Jquery",
      percentBar: 85,
    },
  ];
  return (
    <section className="section-my-skill" id="service">
      <div className="container">
        <div className="content">
          <HeadingGroup
            maxWidth={850}
            subTitle="My Skills"
            mainTitle="I Develop Skills Regularly"
            textAlign="center"
          >
            <p>
              Dliquip ex ea commo do conse namber onequa ute irure dolor in
              reprehen derit in <br /> voluptate
            </p>
          </HeadingGroup>
          <div className="skill-wrapper">
            {skillItem.length > 0 &&
              skillItem.map((item: SkillItem, index: number) => (
                <div className="skill-wrapper--item" key={index}>
                  <ScrollProgressBars
                    duration={2000}
                    percentBar={item.percentBar}
                    labelBar={item.labelBar}
                    repeat={true}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
