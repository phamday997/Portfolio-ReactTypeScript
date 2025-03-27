import React from "react";
import {
  AnimationPD,
  HeadingGroup,
  MovingParallax,
  SliderSlickPD,
} from "../../../../components";
import "./Testimonials.scss";
import author0 from "./images/author-0.jpg";
import author1 from "./images/author-1.jpg";
import author2 from "./images/author-2.jpg";
import author3 from "./images/author-3.jpg";
import author4 from "./images/author-4.jpg";
import iconQuote from "./images/icon-quote.png";

interface TestimonialItem {
  avatartSrc: string;
  author: string;
  jobPosition: string;
  content: string;
}
export const Testimonial: React.FC = () => {
  const testimonialItem: TestimonialItem[] = [
    {
      avatartSrc: `${author0}`,
      author: "Adam Miller",
      jobPosition: "Envato Studio",
      content:
        "Duis aute irure dolor in repre hen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      avatartSrc: `${author1}`,
      author: "David Parker",
      jobPosition: "Designer",
      content:
        "Duis aute irure dolor in repre hen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      avatartSrc: `${author2}`,
      author: "Jessica Smith",
      jobPosition: "UX/UI Designer",
      content:
        "Duis aute irure dolor in repre hen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      avatartSrc: `${author3}`,
      author: "Kerri bull",
      jobPosition: "Designer",
      content:
        "Duis aute irure dolor in repre hen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      avatartSrc: `${author4}`,
      author: "Collin Mattew",
      jobPosition: "Photographer",
      content:
        "Duis aute irure dolor in repre hen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];
  return (
    <section className="section-testimonial">
      <MovingParallax
        classCustom="shape-testimonials"
        direction="Y"
        speed={20}
        align="left"
        lightmodeBg="#6b97d3"
        style={{
          top: -400,
          width: "20%",
          height: "450px",
        }}
      />
      <div className="container">
        <AnimationPD animation="fadeIn" delayBase={0.2} duration={1.2}>
          <HeadingGroup
            subTitle="Testimonials"
            mainTitle="What Clients Say"
            maxWidth={750}
            textAlign="center"
          >
            <p>
              Dliquip ex ea commo do conse namber onequa ute irure dolor in
              reprehen derit in voluptate
            </p>
          </HeadingGroup>
        </AnimationPD>
        <div className="testimonial-list-warraper">
          <SliderSlickPD
            dot={true}
            slidesShow={3}
            arrows={false}
            slidesScroll={1}
            infinity={true}
            autoplay={true}
            autoplaySpeed={3000}
          >
            {testimonialItem.length > 0 &&
              testimonialItem.map((item: TestimonialItem, index: number) => (
                <AnimationPD
                  key={index}
                  animation="fadeInUp"
                  delayBase={0.4}
                  index={index}
                  totalItem={testimonialItem.length}
                  classElement="testimonial-item"
                >
                  <div className="testimonial-inner">
                    <div className="icon-quote">
                      <img
                        src={iconQuote}
                        width={48}
                        height={48}
                        alt="icon-quote"
                      />
                    </div>
                    <div className="description">
                      <p>{item.content}</p>
                    </div>
                    <div className="group-author-info">
                      <div className="avt">
                        <img
                          width={60}
                          height={60}
                          src={item.avatartSrc}
                          alt={item.author}
                        />
                      </div>
                      <div className="infor">
                        <div className="author">{item.author}</div>
                        <div className="position">{item.jobPosition}</div>
                      </div>
                    </div>
                  </div>
                </AnimationPD>
              ))}
          </SliderSlickPD>
        </div>
      </div>
      <MovingParallax
        classCustom="shape-testimonial-square"
        direction="Y"
        speed={20}
        align="right"
        lightmodeBg="#6e7fd1"
        style={{
          bottom: "144px",
          width: "164px",
          height: "164px",
          marginRight: "3%",
          borderRadius: "12px",
        }}
      />
    </section>
  );
};
