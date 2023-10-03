import parse from "html-react-parser";
import Link from "next/link";

export const Footer = ({ items }) => {
  let footerSocialLinks = items.footerSocialLinks.footerSocialLinks;
  let footerQuickLinks = items.footerQuickLinks.footerQuickLinks;

  return (
    <>
      <footer className="footer">
        <section className="footer-outer">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-lg-3">
                <h6>Our Services</h6>
                <ul>
                  <li>
                    <Link href="#">Seo Services</Link>
                  </li>
                  <li>
                    <Link href="#">Social Media Marketing Services</Link>
                  </li>
                  <li>
                    <Link href="#">Paid Marketing Services</Link>
                  </li>
                  <li>
                    <Link href="#">ORM Services</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-lg-3">
                <h6>Development</h6>
                <ul>
                  <li>
                    <Link href="#">Laravel</Link>
                  </li>
                  <li>
                    <Link href="#">React Js</Link>
                  </li>
                  <li>
                    <Link href="#">Wordpress</Link>
                  </li>
                  <li>
                    <Link href="#">View All</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-lg-3">
                <h6>Others</h6>
                <ul>
                  <li>
                    <Link href="#">About Us</Link>
                  </li>
                  <li>
                    <Link href="#">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="#">Blog</Link>
                  </li>
                  <li>
                    <Link href="#">Careers</Link>
                  </li>
                  <li>
                    <Link href="#">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-lg-3">
                <p>Copyright © 2023 TIS. All rights reserved.</p>
                <ul className="terms">
                  <li>
                    <Link href="#">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li></li>
                </ul>
                <p>
                  <strong>Like/Follow Us</strong>
                </p>
                <ul className="social-icons">
                  <li>
                    <Link href="#"><i class="fa-brands fa-linkedin-in"></i></Link>
                  </li>
                  <li>
                    <Link href="#"><i class="fa-brands fa-facebook-f"></i></Link>
                  </li>
                  <li>
                    <Link href=""><i class="fa-brands fa-twitter"></i></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="footer-inner">
          <div className="container">
          <div className="inner-section">
            <p>
              <strong>WebReinvent</strong> a software development company that provides a range
              of end-to-end software product development services. We have
              delivered MVP, multi-tenant SaaS, enterprise-level web
              applications from startup to MSME. We are one of the most
              process-driven companies and we love to follow the industry
              standards. Some of them are managing git repo, code review,
              release deployments via CI/CD, automated software testing,
              maintaining detailed technical documentation, application
              performance monitoring, etc. |
            </p>
          </div>
          </div>
        </section>
      </footer>
    </>
  );
};
