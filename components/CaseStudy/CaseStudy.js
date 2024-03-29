import React, { useState } from "react";
import Slider from "react-slick";
import ReactHtmlParser from 'react-html-parser';
import Image from "next/image";
import hightlightpoint from "../../public/assets/img/shape/bulb-icon.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CaseStudy = ({ caseStudyTitle, caseStudySlider }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settings = {
    centerMode: true,
    draggable:true,
    centerPadding:'0px',
    cssEase: 'linear',
    speed: 2000,
    // rtl:true,
    responsive: [
      {
        breakpoint: 991, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className="case-studay-outer">
        <div className="container">
          <div className="case-studay-main">
            <h2>Case Studies</h2>
            <Slider className="case-study-one"
              {...settings}
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              slidesToShow={5}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              {(caseStudySlider || []).map((data, key) => (
                <div key={key}>
                  <Image
                    src={data.caseStudySlideNavigationImage.guid}
                    width={100}
                    height={70}
                    alt={data.caseStudySlideNavigationImage.alt}
                  />
                </div>
              ))}
            </Slider>
            <Slider className="case-study-two" cssEase={'linear'} speed={2000}  asNavFor={nav2}  ref={(slider1) => setNav1(slider1)}>
            {(caseStudySlider || []).map((data, key) => (
                <>
                  <div className="case-slide">
                    <div className="case-slide-bx-left">
                      <h3>
                        {" "}
                        <Image
                          src={hightlightpoint}
                          alt="Picture of the author"
                          width={60}
                          height={60}
                        />{" "}
                        {data.caseStudySlideTitle}
                      </h3>
                      {ReactHtmlParser(data.caseStudySlideContent)}
                    </div>
                    <div className="case-slide-bx-right">
                      <Image
                        src={data.caseStudySlideImage.guid}
                        width={700}
                        height={390}
                        alt={data.caseStudySlideImage.alt}
                      />
                    </div>
                  </div>
                </>
              ))}
              
            </Slider>
          </div>
        </div>
        <div className="shape1"></div>
        <div className="shape6"><i className="fa-light fa-triangle"></i></div>
        <div className="shape7"><i className="fa-solid fa-xmark"></i></div>
        <div className="shape8"><i className="fa-light fa-triangle"></i></div>
        <div className="shape9"><i className="fa-solid fa-xmark"></i></div>
        <div className="shape10"><i className="fa-light fa-circle"></i></div>
        <div className="shape11"><i className="fa-light fa-triangle"></i></div>
      </section>
    </>
  );
};
