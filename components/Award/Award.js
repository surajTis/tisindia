import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import AwardLogo from "../../public/assets/img/logo/logo2.png";
import AwardLogo1 from "../../public/assets/img/logo/new-barand-logo-4.png";
import AwardLogo2 from "../../public/assets/img/logo/logo3.webp";
import AwardLogo3 from "../../public/assets/img/logo/logo4.webp";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Award = () => {
  var settings = {
    centerMode: true,
    draggable: true,
    Arrows: true,
    centerPadding: "0px",
    // autoplay: true,
    
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
      <section className="Award-outer">
        <div className="container">
          <div className="awards-inner">
            <h2>Awards & Accolades</h2>
           
            <Slider
              {...settings}
              slidesToShow={5}
              swipeToSlide={true}
              focusOnSelect={true}
              
            >
              <div className="award-slide">
                <Image src={AwardLogo} alt="Picture of the author"/>
              </div>
              <div className="award-slide">
                <Image src={AwardLogo1} alt="Picture of the author"/>
              </div>
              <div className="award-slide">
                <Image src={AwardLogo2} alt="Picture of the author"/>
              </div>
              <div className="award-slide">
                <Image src={AwardLogo3} alt="Picture of the author"/>
              </div>
              <div className="award-slide">
                <Image src={AwardLogo1} alt="Picture of the author"/>
              </div>
              <div className="award-slide">
                <Image src={AwardLogo2} alt="Picture of the author"/>
              </div>
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
