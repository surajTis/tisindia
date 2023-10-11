import Image from "next/image";
import Vicon from "../../public/assets/img/about/icon-vue-light.svg";
import Link from "next/link";
export const HomeService = () => {
  return (
    <>
      <div className="homeservice-outer">
        <div className="container">
          <h2>Service</h2>
          <p>
            Clients Vision, Our Creations: Bespoke Software Products Showcase
          </p>
          <div className="row">
            <div className="homeservice-inner">
              <div className="col-md-12">
                <div className="service-half">
                  <div className="service-full card-left">
                    <div className="card-content">
                      <div className="img-icon">
                        <Image src={Vicon} />
                      </div>
                      <span>SERVICES</span>
                      <h3>Digital Marketing</h3>
                      <p>
                        Get comprehensive solutions and expert guidance on
                        Search Engine Optimization, PPC Campaigns, Social Media,
                        Online Reputation, and other digital marketing campaigns
                        based on your business objectives. We are one of the
                        best digital marketing companies in India offering
                        result-oriented digital marketing services to
                        effectively promote your products and services on
                        various digital platforms.
                      </p>
                      <Link href="/"><a className="home-service-btn">Digital Marketing</a></Link>
                      <Link href="/"><a className="home-service-btn">SEO</a></Link>
                      <Link href="/"><a className="home-service-btn">PPC</a></Link>
                      <Link href="/"><a className="home-service-btn">Social Media</a></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-half">
                <div className="card-left">
                  <div className="card-content">
                    <div className="img-icon">
                      <Image src={Vicon} />
                    </div>
                    <span>SERVICES</span>
                    <h3>Website Design & Development</h3>
                    <p>
                      Create fluid and mobile-first website with UX based
                      website design, development, and engaging content with the
                      best website design and development company. We are a
                      trusted website design and development agency in India
                      offering custom website solutions to help you communicate
                      effectively with your target audience, strengthen your
                      brand and generate leads.
                    </p>
                    <Link href="/"><a className="home-service-btn">Design</a></Link>
                    <Link href="/"><a className="home-service-btn">Development</a></Link>
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
                    <h3>Salesforce Consulting</h3>
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
                    <Link href="/"><a className="home-service-btn">Salesforce Implementation</a></Link>
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
