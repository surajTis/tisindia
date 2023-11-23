import React  from "react";
import Slider from "react-slick";
import parse from "html-react-parser";
import Image from "next/image";
import icon1 from "../../public/assets/img/icon/icon-arrow-down.png";
import icon2 from "../../public/assets/img/icon/icon-laravel.png";
import services1 from "../../public/assets/img/services/we-build-web.png";
import Link from "next/link";

export const DevelopmentServices = () => {
  return (
    <>
        <div className="development-services-outer">
            <div className="container">
                <div className="devlopemnt-services-main">
                    <div className="head">
                        <h2>Software Development</h2>
                        <p>Our processes are proven, the expertise is there and our tools are top notch.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 services-devlopment-bx-left">
                            <div className="services-devlopemnt">
                                <h5>Web</h5>
                                <div className="border-1">
                                    <div className="has-arrow arrow-1">
                                        <Image src={icon1} alt="Picture of the author" />
                                    </div>
                                </div>
                                <div className="border-2">
                                    <div className="has-arrow arrow-2">
                                        <Image src={icon1} alt="Picture of the author" />
                                    </div>
                                </div>
                                <div className="figure-img">
                                    <Image src={services1} alt="Picture of the author" />
                                </div>
                                <h6>Tech Stack</h6>
                            </div>
                            <div className="services-devlopemnt-box2">
                                <div className="col-lg-6 is-relative">
                                    <h6>APPS</h6>
                                    <div className="services-listing-dv">
                                        <div className="services-dv-bx">
                                            <ul>
                                                <li>
                                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on top">
                                                        <span className="servic-ico">
                                                           
                                                            <Image src={icon2} alt="Picture of the author" />
                                                        </span>
                                                        <span>Laravel</span>
                                                    </a>
                                                    <div class="tooltip-content"><div class="card"><div class="card-content"><p>Laravel is a web application framework for backend development.</p></div></div></div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="servic-ico">
                                                            <Image src={icon2} alt="Picture of the author" />
                                                        </span>
                                                        <span>Laravel</span>
                                                    </a>
                                                    <div class="tooltip-content"><div class="card"><div class="card-content"><p>Laravel is a web application framework for backend development.</p></div></div></div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="servic-ico">
                                                            <Image src={icon2} alt="Picture of the author" />
                                                        </span>
                                                        <span>Laravel</span>
                                                    </a>
                                                    <div class="tooltip-content"><div class="card"><div class="card-content"><p>Laravel is a web application framework for backend development.</p></div></div></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <p class="has-text-vertical">BACKEND</p>
                                    </div>
                                    <div className="services-listing-dv">
                                        <div className="services-dv-bx">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span className="servic-ico">
                                                           
                                                            <Image src={icon2} alt="Picture of the author" />
                                                        </span>
                                                        <span>Laravel</span>
                                                    </a>
                                                    <div class="tooltip-content"><div class="card"><div class="card-content"><p>Laravel is a web application framework for backend development.</p></div></div></div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="servic-ico">
                                                            <Image src={icon2} alt="Picture of the author" />
                                                        </span>
                                                        <span>Laravel</span>
                                                    </a>
                                                    <div class="tooltip-content"><div class="card"><div class="card-content"><p>Laravel is a web application framework for backend development.</p></div></div></div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="servic-ico">
                                                            <Image src={icon2} alt="Picture of the author" />
                                                        </span>
                                                        <span>Laravel</span>
                                                    </a>
                                                    <div class="tooltip-content"><div class="card"><div class="card-content"><p>Laravel is a web application framework for backend development.</p></div></div></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <p class="has-text-vertical">FRONTEND</p>
                                    </div>
                                    <div className="services-listing-dv">
                                        <div className="services-dv-bx">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span className="servic-ico">
                                                           
                                                            <Image src={icon2} alt="Picture of the author" />
                                                        </span>
                                                        
                                                        
                                                        <span>Laravel</span>
                                                    </a>
                                                    <div class="tooltip-content"><div class="card"><div class="card-content"><p>Laravel is a web application framework for backend development.</p></div></div></div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="servic-ico">
                                                            <Image src={icon2} alt="Picture of the author" />
                                                        </span>
                                                        <span>Laravel</span>
                                                    </a>
                                                    <div class="tooltip-content"><div class="card"><div class="card-content"><p>Laravel is a web application framework for backend development.</p></div></div></div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="servic-ico">
                                                            <Image src={icon2} alt="Picture of the author" />
                                                        </span>
                                                        <span>Laravel</span>
                                                    </a>
                                                    <div class="tooltip-content"><div class="card"><div class="card-content"><p>Laravel is a web application framework for backend development.</p></div></div></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <p class="has-text-vertical">DATABASE</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 is-relative">
                                    <h6>API</h6>
                                    <div className="services-listing-dv">
                                        <div className="services-dv-bx">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span className="servic-ico">
                                                            <Image src={icon2} alt="Picture of the author" />
                                                        </span>
                                                        <span>Laravel</span>
                                                    </a>
                                                    <div class="tooltip-content"><div class="card"><div class="card-content"><p>Laravel is a web application framework for backend development.</p></div></div></div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="servic-ico">
                                                            <Image src={icon2} alt="Picture of the author" />
                                                        </span>
                                                        <span>Laravel</span>
                                                    </a>
                                                    <div class="tooltip-content"><div class="card"><div class="card-content"><p>Laravel is a web application framework for backend development.</p></div></div></div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="servic-ico">
                                                            <Image src={icon2} alt="Picture of the author" />
                                                        </span>
                                                        <span>Laravel</span>
                                                    </a>
                                                    <div class="tooltip-content"><div class="card"><div class="card-content"><p>Laravel is a web application framework for backend development.</p></div></div></div>
                                                </li>
                                            </ul>
                                        </div>
                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 services-devlopment-bx-right">
                            <div className="services-devlopemnt">
                                <h5>Mobile</h5>
                                <div className="border-1">
                                    <div className="has-arrow arrow-1">
                                        <Image src={icon1} alt="Picture of the author" />
                                    </div>
                                </div>
                                <div className="border-2">
                                    <div className="has-arrow arrow-2">
                                        <Image src={icon1} alt="Picture of the author" />
                                    </div>
                                </div>
                                <div className="figure-img">
                                    <Image src={services1} alt="Picture of the author" />
                                </div>
                                <h6>Tech Stack</h6>
                            </div>
                            <div className="services-devlopemnt-box2">
                                <div class="has-dashed-border border-6"></div>
                                <div className="col-lg-6 is-relative">
                                    <h6>APPS</h6>
                                    <div className="services-listing-dv">
                                        <div className="services-dv-bx">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span className="servic-ico">
                                                            <Image src={icon2} alt="Picture of the author" />
                                                        </span>
                                                        <span>Swift</span>
                                                    </a>
                                                    <div class="tooltip-content"><div class="card"><div class="card-content"><p>Laravel is a web application framework for backend development.</p></div></div></div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 is-relative">
                                    <h6>iOS</h6>
                                    <div className="services-listing-dv">
                                        <div className="services-dv-bx">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span className="servic-ico">
                                                            <Image src={icon2} alt="Picture of the author" />
                                                        </span>
                                                        <span>Dart</span>
                                                    </a>
                                                    <div class="tooltip-content"><div class="card"><div class="card-content"><p>Laravel is a web application framework for backend development.</p></div></div></div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="servic-ico">
                                                            <Image src={icon2} alt="Picture of the author" />
                                                        </span>
                                                        <span>Kotlin</span>
                                                    </a>
                                                    <div class="tooltip-content"><div class="card"><div class="card-content"><p>Laravel is a web application framework for backend development.</p></div></div></div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="services-devlopemnt-box2 services-devlopemnt-box3">
                            <div className="col-lg-6 is-relative">
                                    <h6>Hybrid Apps Tech Stack</h6>
                                    <div className="services-listing-dv">
                                        <div className="services-dv-bx">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span className="servic-ico">
                                                            <Image src={icon2} alt="Picture of the author" />
                                                        </span>
                                                        <span>Dart</span>
                                                    </a>
                                                    <div class="tooltip-content"><div class="card"><div class="card-content"><p>Laravel is a web application framework for backend development.</p></div></div></div>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="servic-ico">
                                                            <Image src={icon2} alt="Picture of the author" />
                                                        </span>
                                                        <span>Kotlin</span>
                                                    </a>
                                                    <div class="tooltip-content"><div class="card"><div class="card-content"><p>Laravel is a web application framework for backend development.</p></div></div></div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};
