import parse from 'html-react-parser';
import React, { useEffect } from "react";
import Slider from "react-slick";
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const RecentResultsSlider = ({ recentResultsBlockTitle, recentResultsBlockSlider }) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    var settings = {
        arrows: true,
        centerPadding: "0px",
        dots: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'ease-in-out',
        infinite: true,
        className: 'result-slider'
    };
    return (
        <>
            <div className="our-recent-results" data-aos="fade-up">
                <div className="container">
                    <h2>{parse(recentResultsBlockTitle)}</h2>
                    <Slider {...settings}>
                        {(recentResultsBlockSlider || []).map((item, i) => (
                            <div className="slide-box" key={i}>
                                <Image src={item.recentResultsBlockSliderImage.sourceUrl} width={1150} height={498}></Image>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}