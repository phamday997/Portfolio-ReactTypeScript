import React, { ReactNode, useRef } from "react";
import "./SliderSlickPD.scss";
const Slider = require("react-slick").default;

interface SliderSlickProps {
  children: ReactNode;
  dot?: boolean;
  arrows?: boolean;
  autoplay?: boolean;
  infinity?: boolean;
  speed?: number;
  autoplaySpeed?: number;
  slidesShow?: number;
  slidesScroll?: number;
}

export const SliderSlickPD: React.FC<SliderSlickProps> = ({
  children,
  dot = true,
  arrows = false,
  autoplay = false,
  infinity = false,
  speed = 500,
  autoplaySpeed = 2000,
  slidesScroll = 1,
  slidesShow = 3,
}) => {
  const sliderRef = useRef<any>(null);

  const generateResponsiveSettings = () => {
    const responsiveSettings = [];

    if (slidesShow >= 5) {
      responsiveSettings.push({
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
          speed: 500,
          autoplaySpeed: 2000,
          autoplay: false,
        },
      });
    }

    if (slidesShow >= 3) {
      responsiveSettings.push({
        breakpoint: 992,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      });
    }

    if (slidesShow >= 2) {
      responsiveSettings.push({
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      });
    }

    return responsiveSettings;
  };

  const settings = {
    dots: dot,
    arrows: arrows,
    autoplay: autoplay,
    infinite: infinity,
    speed: speed,
    autoplaySpeed: autoplaySpeed,
    slidesToShow: slidesShow,
    slidesToScroll: slidesScroll,
    initialSlide: 0,
    responsive: generateResponsiveSettings(),
  };

  return (
    <div className="slider-slick-pd">
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
};
