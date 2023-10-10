import React, { useState } from "react";
import Slider from "react-slick";
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
    autoplay:true,
    cssEase: 'linear',
    speed: 2000,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint to your needs
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Adjust the breakpoint to your needs
        settings: {
          slidesToShow: 1,
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
                    width={120}
                    height={70}
                    alt={data.caseStudySlideNavigationImage.alt}
                  />
                </div>
              ))}
            </Slider>
            <Slider className="case-study-two" cssEase={'linear'} speed={2000}  asNavFor={nav2} autoplay={true} ref={(slider1) => setNav1(slider1)}>
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
      </section>
    </>
  );
};
