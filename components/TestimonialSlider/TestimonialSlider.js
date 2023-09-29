import parse from 'html-react-parser';
import React, { useEffect } from "react";
import Slider from "react-slick";
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const TestimonialSlider = ({ testimonialBlockTitle, testimonialBlockSlider }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    var settings = {
        arrows: false,
        centerPadding: "0px",
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'ease-in-out',
        infinite: true,
        className: 'testimonial-slider'
    };
    return (
        <>
            <div className="testimonial-section" data-aos="fade-up">
                <div className="container">
                    <h2>{parse(testimonialBlockTitle)}</h2>
                </div>
                <div className="testimonial-slider-box">
                    <div className="container">
                        <Slider {...settings}>
                            {(testimonialBlockSlider || []).map((item, i) => (
                                <div className="testimonial-box" key={i}>
                                    <figure data-aos="fade-right">
                                        <Image src={item.testimonialBlockSliderImage.sourceUrl} width={355} height={300}></Image>
                                    </figure>
                                    <div className="testimonial-content" data-aos="fade-left">
                                        {parse(item.testimonialBlockSliderContent)}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}