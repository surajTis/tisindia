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
                            <Link href="/" class="">
                                #Website design
                                </Link> 
                                <Link href="/" class="">
                                #eCommerce
                                </Link> 
                                <Link href="/" class="">
                                #WebApp
                                </Link> 
                                <Link href="/" class="">
                                #API
                                </Link> 
                                <Link href="/" class="">
                                #CMS
                                </Link>
                            </p>
                            <Link href="/" className="btn aos-init" data-aos="fade-up">Let's start a project</Link>
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