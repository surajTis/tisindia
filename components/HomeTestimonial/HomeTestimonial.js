import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Client1 from "../../public/assets/img/testimonial/new-home-profile-img.png";
import Client2 from "../../public/assets/img/testimonial/fatima.png";
import Client3 from "../../public/assets/img/testimonial/apoorva-carrier-wheels.webp";
import Client4 from "../../public/assets/img/testimonial/raghav-tone-tag.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HomeTestimonial = () => {
  var settings = {
    centerMode: true,
    draggable: true,
    Arrows: false,
    dots: true,
    centerPadding: "0px",
    // autoplay: true,

    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint to your needs
        settings: {
          slidesToShow: 1,
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
      <section className="testimonial-outer">
        <div className="container">
          <div className="awards-inner">
            <div className="head">
              <h2>Testimonial</h2>
              <p>Globally Trusted Digital Partner</p>
            </div>

            <Slider
              {...settings}
              slidesToShow={1}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              <div className="award-slide testimonial-slide">
                <div className="testimonial-content">
                  <Image src={Client1} alt="Picture of the author" />
                  <h3>RAKAN KARIM</h3>
                  <span>Managing Director</span>
                  <span>Saudi Basic Technology Company, Saudi Arabia</span>
                </div>
                <h4>Great work on our website TIS</h4>
                <p>
                  Our engagement with TIS started with a revamp of our company
                  website, which had some very specific requirements pertaining
                  to design and functionality. Really appreciate the engagement
                  manager allocated to me who has always listened to our
                  requirements and acted accordingly. Great work team!
                </p>
                <div className="rating">
                  
                </div>
              </div>
              <div className="award-slide testimonial-slide">
                <div className="testimonial-content">
                  <Image src={Client2} alt="Picture of the author" />
                  <h3>Fatima Saif Al-Qahtani,</h3>
                  <span>Omron </span>
                </div>
                <h4>
                  Have chosen to work with TIS in multiple projects as they
                  always go above
                </h4>
                <p>
                  Thorough professional in the true sense of the word, TIS never
                  fails to impress with their consulting approach and eager to
                  listen attitude.
                </p>
                <div className="rating">
                 
                </div>
              </div>
              <div className="award-slide testimonial-slide">
                <div className="testimonial-content">
                  <Image src={Client3} alt="Picture of the author" />
                  <h3>Apoorva Jain</h3>
                  <span>Director</span>
                  <span>at Carrier Wheels Pvt. Ltd.</span>
                </div>
                <h4>
                  TIS Team are industry experts in building excellent corporate
                  websites
                </h4>
                <p>
                  We have been very happy with the way their UX Design Team has
                  put together the user engaging design and information flow to
                  ensure that the users visiting the website should have a
                  world-class customer experience.
                </p>
                <div className="rating">
                  
                </div>
              </div>
              <div className="award-slide testimonial-slide">
                <div className="testimonial-content">
                  <Image src={Client4} alt="Picture of the author" />
                  <h3>Raghav Daga</h3>
                  <span>AGM</span>
                  <span>Marketing</span>
                </div>
                <h4>A great team to work with for all</h4>
                <p>
                  website related requirements The team at TIS plane the
                  deliverables very well. We really like the way, they married
                  the principles of UX with a functional design which is what we
                  intended for.
                </p>
                <div className="rating">
                 
                </div>
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
