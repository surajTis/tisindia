import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import banner from "../../public/assets/img/banner/hero-home-right.png";

export const Banner = ({
  bannerTitle,
  bannerImage,
  bannerContent,
  bannerCta,
}) => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 banner-left">
              <h1 data-aos="fade-up" className="aos-init aos-animate">
                {parse(bannerTitle)}
              </h1>
              <h2>Digital Agency in india</h2>
              <p>
                <Link href="/" className="list-anch">
                  #Website design
                </Link>
                <Link href="/" className="list-anch">
                  #eCommerce
                </Link>
                <Link href="/" className="list-anch">
                  #WebApp
                </Link>
                <Link href="/" className="list-anch">
                  #API
                </Link>
                <Link href="/" className="list-anch">
                  #CMS
                </Link>
              </p>
              <button className="lets-talk">Let&apos;s start a project</button>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 banner-right">
              <Image priority={true} src={banner} alt="images"></Image>
            </div>
          </div>
        </div>
        <span className="circle-banner-top"></span>
        <span className="circle-banner-bottom"></span>
        <div className="shape1"></div>
        <div className="shape2"><i className="fa-light fa-triangle"></i></div>
        <div className="shape3"><i className="fa-solid fa-xmark"></i></div>
        <div className="shape4"><i className="fa-light fa-triangle"></i></div>
        <div className="shape5"><i className="fa-light fa-triangle"></i></div>
      </div>
    </>
  );
};
