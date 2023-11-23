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
                          ></Image>
                        </div>
                        <span>{data.serviceBlockSubtitle}</span>
                        <h6>{data.serviceBlockTitle}</h6>
                        <p>{data.serviceBlockContent}</p>
                        {(data.serviceBlockButtons || []).map((btnData, key) => (
                          <>
                            <Link href={btnData.serviceBlockButtonLink}>
                              <a className="homebtn1">{btnData.serviceBlockButtonText}</a>
                            </Link>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}

            {/* <div className="col-md-6">
              <div className="service-half">
                <div className="card-left">
                  <div className="card-content">
                    <div className="img-icon">
                      <Image src={Vicon} />
                    </div>
                    <span>SERVICES</span>
                    <h6>Website Design & Development</h6>
                    <p>
                      Create fluid and mobile-first website with UX based
                      website design, development, and engaging content with the
                      best website design and development company. We are a
                      trusted website design and development agency in India
                      offering custom website solutions to help you communicate
                      effectively with your target audience, strengthen your
                      brand and generate leads.
                    </p>
                    <button className="homebtn1">Design</button>
                    <button className="homebtn1">Development</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-half">
                <div className="card-left">
                  <div className="card-content pl-0">
                    <div className="left-direc">
                      <Image src={Vicon} />
                    </div>
                    <span>SERVICES</span>
                    <h6>Salesforce Consulting</h6>
                    <p>
                      We are a trusted Salesforce consulting partner, to
                      automate and improve organizational efficiency by
                      rendering a range of Salesforce implementation and support
                      services for Sales Cloud, Marketing Cloud, and Service
                      Cloud. We have been servicing clients in the US, Europe,
                      Australia, and India across Industry Verticals including
                      Pharmaceuticals, Technology, Education, Real Estate,
                      Manufacturing, Telecommunications, Banking, Financial
                      Services, & Insurance, Verticals Industry .
                    </p>
                    <button className="homebtn1">
                      Salesforce Implementation
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="shape1"></div>
        <div className="shape6"><i class="fa-light fa-triangle"></i></div>
        <div className="shape7"><i class="fa-solid fa-xmark"></i></div>
        <div className="shape8"><i class="fa-light fa-triangle"></i></div>
        <div className="shape9"><i class="fa-light fa-triangle"></i></div>
      </div>
    </>
  );
};
