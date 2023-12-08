import Image from "next/image";
import Vicon from "../../public/assets/img/about/icon-vue-light.svg";
import Link from "next/link";
export const HomeService = ({
  servicesBlockTitle,
  servicesBlockSubtitle,
  serviceBlocks,
}) => {
  return (
    <>
      <div className="homeservice-outer">
        <div className="container">
          <h2>{servicesBlockTitle}</h2>
          <p>{servicesBlockSubtitle}</p>
          <div className="row">
            {(serviceBlocks || []).map((data, key) => (
              <>
                <div className={`col-md-${key == 0 ? "12" : "6"}`}>
                  <div className="service-half">
                    <div className="service-full card-left">
                      <div className="card-content">
                        <div className="img-icon">
                          <Image
                            src={data.serviceBlockImage.guid}
                            width={42}
                            height={36}
                            alt={data.serviceBlockImage.alt}
                          />
                        </div>
                        <span>{data.serviceBlockSubtitle}</span>
                        <h4>{data.serviceBlockTitle}</h4>
                        <p>{data.serviceBlockContent}</p>
                        {(data.serviceBlockButtons || []).map((btnData, key) => (
                          <>
                            <Link href={btnData.serviceBlockButtonLink}>
                              <a className="home-service-btn">{btnData.serviceBlockButtonText}</a>
                            </Link>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}


          </div>
        </div>
        <div className="shape1"></div>
        <div className="shape6"><i className="fa-light fa-triangle"></i></div>
        <div className="shape7"><i className="fa-solid fa-xmark"></i></div>
        <div className="shape8"><i className="fa-light fa-triangle"></i></div>
        <div className="shape9"><i className="fa-solid fa-xmark"></i></div>
        <div className="shape10"><i className="fa-light fa-circle"></i></div>
        <div className="shape11"><i className="fa-light fa-triangle"></i></div>
      </div>
    </>
  );
};
