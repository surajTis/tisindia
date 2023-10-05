import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import banner from "../../public/assets/img/banner/hero-home-right.png";
import { ThreeDots } from "react-loader-spinner";

export const Banner = ({ bannerTitle,bannerImage, bannerContent, bannerCta }) => {
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
              <button className="lets-talk">Let&apos;s start a project</button>
            </div>
            <div className="col-lg-6">
              {banner ? (
                <Image src={banner} alt="images"></Image>
              ) : (
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="#fff"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
