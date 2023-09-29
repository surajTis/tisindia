import React, { useEffect } from "react";
import parse from 'html-react-parser';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const FaqBlock = ({ FaqBlockTitle, FaqBlocks }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <div className="guide faq">
                <div className="container">
                    <h2></h2>

                    <div id="accordion" className="accordion-container">
                        {(FaqBlocks || []).map((item, i) => (
                            <article className="content-entry" data-aos="fade-down" key={i}>
                                <h4 className="article-title"><i></i>Why Choose TIS India for SEO services?</h4>
                                <div className="accordion-content">
                                    <p>At Online SEO India, we pride ourselves on being one of the top Indian SEO agencies in this field. Our team has over ten years of experience working with companies to help them grow their business and improve their online presence. Have a look at some of our USPs: </p>
                                    <ul>
                                        <li>● Team of experts with over a decade of expertise</li>
                                        <li>● Multiple SEO packages to suit your budget</li>
                                        <li>● Flexible engagement to cater to your business needs</li>
                                        <li>● Strict NDA to ensure complete copyright protection</li>
                                        <li>● Result-oriented approach for maximum RoI</li>
                                    </ul>
                                </div>

                            </article>
                        ))}
                        
                    </div>

                </div>
            </div>
        </>
    );
}