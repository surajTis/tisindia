import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Who1 from "../../public/assets/img/about/who1.webp";
import Who from "../../public/assets/img/about/who-serve.webp";
import Choose from "../../public/assets/img/about/choose.webp";
import Web from "../../public/assets/img/about/web.webp";
import Image from "next/image";

export const HomeAbout = () => {
  const [key, setKey] = useState("home");

  return (
    <>
      <section className="homeabout-outer">
        <div className="container">
          <div className="homeabout-content">
            <h2>Know Us Better</h2>
            <p>
              Clients Vision, Our Creations: Bespoke Software Products Showcase
            </p>
          </div>
          <div className="homeabout-inner">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="home" title="Who we are">
                <div className="home-inner-content">
                  <div className="row">
                    <div className="col-md-6 w-40">
                      <Image src={Who1} />
                    </div>
                    <div className="col-md-6 w-60">
                      <div className="about-home-content">
                        <h5>
                          The Most Trusted Website Design & Development, Digital
                          Marketing & Salesforce Consulting Partner in India
                        </h5>
                        <p>
                          We are a Digital Agency that specializes in website
                          design & development, digital marketing, marketing
                          automation, and salesforce consulting. Our team of
                          result-driven and passionate digital experts take
                          every assignment as their first and deliver the best
                          possible outcome every single time.
                        </p>
                        <p>
                          We have received global acclaim for our exceptional
                          strategies and have completed over 1500 projects for
                          our 1000+ clients across the globe. At TIS, we
                          integrate different marketing strategies and services
                          to redefine customer journeys across digital devices
                          and platforms for brands to attract and engage with
                          consumers effectively, spread their brand awareness,
                          and generate leads to attain higher returns on
                          investment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="home1" title="Why us?">
                <div className="home-inner-content">
                  <div className="row">
                    <div className="col-md-6 w-40">
                      <Image src={Choose} />
                    </div>
                    <div className="col-md-6 w-60">
                      <div className="about-home-content">
                        <h5>
                          Creative Website Design & Website Development Company
                          in India
                        </h5>
                        <p>
                          Our team understands the complexities involved in
                          providing website design and development and marketing
                          solutions. We also know that no two companies are the
                          same, and hence our solutions are not the same either.
                          We provide our clients with stunning interfaces that
                          are user-friendly, unique, and responsive at the
                          shortest turnaround time possible.
                        </p>
                        <p>
                          Our digital marketing strategies are customized based
                          on the client’s business requirements and target
                          audience. We treat every client as a unique entity,
                          and we endeavour to give the best possible solutions
                          at competitive prices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab eventKey="home2" title="Who We Serve">
                <div className="home-inner-content">
                  <div className="row">
                    <div className="col-md-6 w-40">
                      <Image src={Who} />
                    </div>
                    <div className="col-md-6 w-60">
                      <div className="about-home-content">
                        <h5>The Assets that keep us going</h5>
                        <p>
                          Who we associate with says a lot about us and our
                          clientele would give you a sneak-peek at our
                          expertise. We deal with clients from various
                          industries across the globe and our clients always
                          come back to us for more business. That’s the way we
                          do business.
                        </p>
                        <p>
                          We have promoted the products and services of a small,
                          medium, and large businesses spread across different
                          geographies and belonging to various industries with
                          our top-rated services. Also, many global brands have
                          partnered with us to avail of our best-in-class
                          website design and development, digital marketing,
                          marketing automation, and salesforce consulting
                          services. At TIS, we are proud to have a widespread
                          client base that we served, creating a win-win
                          situation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="home3" title="What do we offer?">
                <div className="home-inner-content">
                  <div className="row">
                    <div className="col-md-6 w-40">
                      <Image src={Web} />
                    </div>
                    <div className="col-md-6 w-60">
                      <div className="about-home-content">
                        <h5>
                          Get a 360º Website Design and Development & Marketing
                          Services
                        </h5>
                        <p>
                          Whether you want a custom website design &
                          development, support & maintenance, or digital
                          marketing services, we cover it all. We are your
                          one-stop destination for custom website design and
                          development services in India. Not only this, we
                          provide you complete digital marketing solutions to
                          keep your web application on the top of search engines
                          or social media platforms to enhance your sales and
                          traffic.
                        </p>
                        <p>
                          We keep our certified designers and developers abreast
                          with the latest website design trends, development
                          technologies, and frameworks to provide you with the
                          best available upgraded solutions. We cover all
                          languages, frameworks & libraries like PHP, .Net,
                          Laravel, Angular, React, Node.js, Java, etc. In
                          addition, we also provide front-end development
                          solutions, be it PSD to HTML conversion or
                          development. So, get amazing website design and
                          development services from India’s most trusted brand.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};
