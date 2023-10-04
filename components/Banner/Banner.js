import parse from 'html-react-parser';
import Image from "next/image";
import banner from "../../public/assets/img/banner/hero-home-right.webp";
export const Banner = ({ bannerTitle, bannerContent, bannerCta }) => {

    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 data-aos="fade-up" className="aos-init aos-animate">{parse(bannerTitle)}</h1>
                            <h2>Digital Agency in india</h2>
                            <p  className="aos-init">
                            <a href="/services/saas-product-development" class="is-size-7 has-text-grey-lighter has-margin-right-10">
                                #Website design
                                </a> <a href="/services/ecommerce-development" class="is-size-7 has-text-grey-lighter has-margin-right-10">
                                #eCommerce
                                </a> <a href="/services/application-development" class="is-size-7 has-text-grey-lighter has-margin-right-10">
                                #WebApp
                                </a> <a href="/services/api-development" class="is-size-7 has-text-grey-lighter has-margin-right-10">
                                #API
                                </a> <a href="/services/cms-development" class="is-size-7 has-text-grey-lighter has-margin-right-10">
                                #CMS
                                </a>
                            </p>
                            <a href="#" className="btn aos-init" data-aos="fade-up">Let's start a project</a>
                            <p  className="aos-init"></p>
                            <a href="#" className="btn aos-init" data-aos="fade-up">Contact Us</a>
                        </div>
                        <div className="col-lg-6">
                            <Image src={banner} alt='images'></Image>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}