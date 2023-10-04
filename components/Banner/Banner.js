import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import banner from "../../public/assets/img/banner/hero-home-right.png";
export const Banner = ({ bannerTitle, bannerContent, bannerCta }) => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
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
                <button className="lets-talk">Let's start a project</button>
            </div>
            <div className="col-lg-6">
              <Image src={banner} alt="images"></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


