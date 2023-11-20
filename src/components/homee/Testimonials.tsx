"use client";

import React, { useState } from "react";
import { Testimony } from "../../../types/testimony";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const testimonials: Testimony[] = [
  {
    id: 1,
    name: "Gizaw Dori",
    location: "Yirgacheffe, Idido",
    testimony:
      "Lorem ipsum dolor sit amet consectetur. Massa rhoncus cursus iaculis turpis egestas egestas sem. Neque ligula vel id varius imperdiet pellentesque. Ullamcorper amet dignissim volutpat tortor lobortis. Volutpat",
  },
];
const Testimonials = (props: Props) => {
  const [currentTestimony, setCurrentTestimony] = useState(0);

  const handlePrev = () => {
    setCurrentTestimony((prevIndex) =>
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentTestimony((prevIndex) =>
      prevIndex + 1 === testimonials.length ? 0 : prevIndex + 1,
    );
  };

  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    speed: 500,
    // autoplay: true,
    // autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    arrows: true,
    centerMode: true,
    autoplay: true,
    rows: 1,
    slidesToScroll: 1,
    slidesToShow: 3,
  };

  return (
    <div className="w-full bg-primary flex flex-col items-center py-16">
      <img className="w-12 h-10 mb-8" src="/icons/quotes.svg" />
      {/* <Testimonial testimony={testimonials[currentTestimony]} /> */}
      {/* <div className="w-full flex wow fadeInUp" data-wow-delay=".5s">
        <div className="w-full border-8">
          <Slider
            className="slic-item"
            {...{
              ref: sliderRef,
              dots: false,
              infinite: true,
              arrows: true,
              centerMode: true,
              autoplay: true,
              rows: 1,
              slidesToScroll: 1,
              slidesToShow: 3,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    centerMode: false,
                  },
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    centerMode: false,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    centerMode: false,
                  },
                },
              ],
            }}
          >
            {
              testimonials.map((item, index) => (
                <div key={index} className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/1.jpg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          {item.name}
                        </h6>
                        <span className="author-details">
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    {item.testimony}
                  </p>
                </div>
              ))
            }
          </Slider>
        </div>
      </div> */}
      <div className="relative testimonials !text-black">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="item">
              <div className="info valign">
                <div className="cont">
                  <div className="author">
                    <div className="img">
                      <img src="/img/clients/1.jpg" alt="" />
                    </div>
                    <h6 className="author-name color-font">{item.name}</h6>
                    <span className="author-details">{item.location}</span>
                  </div>
                </div>
              </div>
              <p>{item.testimony}</p>
            </div>
          ))}
          <div>
            <h3>Slide 1</h3>
          </div>
          <div>
            <h3>Slide 2</h3>
          </div>
          <div>
            <h3>Slide 3</h3>
          </div>
          <div>
            <h3>Slide 4</h3>
          </div>
          <div>
            <h3>Slide 5</h3>
          </div>
        </Slider>
      </div>
      <div className="flex gap-x-2 my-4">
        <img
          onClick={handlePrev}
          className="w-8 h-8 cursor-pointer"
          src="/icons/chevron-left.svg"
        />
        <img
          onClick={handleNext}
          className="w-8 h-8 cursor-pointer"
          src="/icons/chevron-right.svg"
        />
      </div>
    </div>
  );
};

export default Testimonials;
