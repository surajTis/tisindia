import React, { useEffect } from "react";
import parse from 'html-react-parser';
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const WhyChooseBlock = ({ whyChooseLeftContent, whyChooseRightImage, whyChooseBlocks }) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <div className="why-choose-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            {parse(whyChooseLeftContent)}
                        </div>
                        <div className="col-lg-6">
                            <Image src={parse(whyChooseRightImage.sourceUrl)} width={578} height={498} data-aos="fade-up" alt="seo-images"></Image>
                        </div>
                    </div>
                    <div className="row">
                        {(whyChooseBlocks || []).map((item, i) => (
                            <div className="col-lg-6" key={i}>
                                <div className="box">
                                    <h3 data-aos="fade-up">{parse(item.whyChooseBlockTitle)}</h3>
                                    <p data-aos="fade-up">{parse(item.whyChooseBlockContent)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}