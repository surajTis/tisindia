import React, { useState } from "react";
import Slider from "react-slick";
import parse from "html-react-parser";
import Image from "next/image";
import slider from "../../public/assets/img/slider/tis-portfolio-6.webp";
import slider1 from "../../public/assets/img/slider/perts-world-thum.png";
import hightlightpoint from "../../public/assets/img/shape/bulb-icon.png";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CaseStudy = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settings = {
    centerMode: true,
    draggable:true,
    centerPadding:'0px',
    autoplay:true,
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
              <div>
                <Image src={slider1} alt="Picture of the author" />
              </div>
              <div>
                <Image src={slider1} alt="Picture of the author" />
              </div>
              <div>
                <Image src={slider1} alt="Picture of the author" />
              </div>
              <div>
                <Image src={slider1} alt="Picture of the author" />
              </div>
              <div>
                <Image src={slider1} alt="Picture of the author" />
              </div>
              <div>
                <Image src={slider1} alt="Picture of the author" />
              </div>
            </Slider>
            <Slider className="case-study-two" asNavFor={nav2} autoplay={true} ref={(slider1) => setNav1(slider1)}>
              <div className="case-slide">
                <div className="case-slide-bx-left">
                   <h3> <Image src={hightlightpoint} alt="Picture of the author"  width={60}
                  height={60} /> Petsword</h3>
                  <ul>
                    <li>
                      <Link href="/">ecommerce website</Link>
                    </li>
                    <li>
                      <Link href="/">search engine optimization (seo)</Link>
                    </li>
                    <li>
                      <Link href="/">paid campaigns (ppc)</Link>
                    </li>
                    <li>social media management</li>
                  </ul>
                </div>
                <div className="case-slide-bx-right">
                  <Image src={slider} alt="Picture of the author" />
                </div>
              </div>
              <div className="case-slide">
                <div className="case-slide-bx-left">
                 <h3> <Image src={hightlightpoint} alt="Picture of the author"  width={60}
                  height={60} /> Petsword</h3>
                  <ul>
                    <li>
                      <Link href="/">eCOMMERCE WEBSITE</Link>
                    </li>
                    <li>
                      <Link href="/">SEARCH ENGINE OPTIMIZATION (SEO)</Link>
                    </li>
                    <li>
                      <Link href="/">PAID CAMPAIGNS (PPC)</Link>
                    </li>
                    <li>SOCIAL MEDIA MANAGEMENT</li>
                  </ul>
                </div>
                <div className="case-slide-bx-right">
                  <Image src={slider} alt="Picture of the author" />
                </div>
              </div>
              <div className="case-slide">
                <div className="case-slide-bx-left">
                  <h3> <Image src={hightlightpoint} alt="Picture of the author"  width={60}
                  height={60} /> Petsword</h3>
                  <ul>
                    <li>
                      <Link href="/">eCOMMERCE WEBSITE</Link>
                    </li>
                    <li>
                      <Link href="/">SEARCH ENGINE OPTIMIZATION (SEO)</Link>
                    </li>
                    <li>
                      <Link href="/">PAID CAMPAIGNS (PPC)</Link>
                    </li>
                    <li>SOCIAL MEDIA MANAGEMENT</li>
                  </ul>
                </div>
                <div className="case-slide-bx-right">
                  <Image src={slider} alt="Picture of the author" />
                </div>
              </div>
              <div className="case-slide">
                <div className="case-slide-bx-left">
                  <h3> <Image src={hightlightpoint} alt="Picture of the author"  width={60}
                  height={60} /> Petsword</h3>
                  <ul>
                    <li>
                      <Link href="/">eCOMMERCE WEBSITE</Link>
                    </li>
                    <li>
                      <Link href="/">SEARCH ENGINE OPTIMIZATION (SEO)</Link>
                    </li>
                    <li>
                      <Link href="/">PAID CAMPAIGNS (PPC)</Link>
                    </li>
                    <li>SOCIAL MEDIA MANAGEMENT</li>
                  </ul>
                </div>
                <div className="case-slide-bx-right">
                  <Image src={slider} alt="Picture of the author" />
                </div>
              </div>
              <div className="case-slide">
                <div className="case-slide-bx-left">
                  <h3> <Image src={hightlightpoint} alt="Picture of the author"  width={60}
                  height={60} /> Petsword</h3>
                  <ul>
                    <li>
                      <Link href="/">eCOMMERCE WEBSITE</Link>
                    </li>
                    <li>
                      <Link href="/">SEARCH ENGINE OPTIMIZATION (SEO)</Link>
                    </li>
                    <li>
                      <Link href="/">PAID CAMPAIGNS (PPC)</Link>
                    </li>
                    <li>SOCIAL MEDIA MANAGEMENT</li>
                  </ul>
                </div>
                <div className="case-slide-bx-right">
                  <Image src={slider} alt="Picture of the author" />
                </div>
              </div>
              <div className="case-slide">
                <div className="case-slide-bx-left">
                  <h3> <Image src={hightlightpoint} alt="Picture of the author"  width={60}
                  height={60} /> Petsword</h3>
                  <ul>
                    <li>
                      <Link href="/">eCOMMERCE WEBSITE</Link>
                    </li>
                    <li>
                      <Link href="/">SEARCH ENGINE OPTIMIZATION (SEO)</Link>
                    </li>
                    <li>
                      <Link href="/">PAID CAMPAIGNS (PPC)</Link>
                    </li>
                    <li>SOCIAL MEDIA MANAGEMENT</li>
                  </ul>
                </div>
                <div className="case-slide-bx-right">
                  <Image src={slider} alt="Picture of the author" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
