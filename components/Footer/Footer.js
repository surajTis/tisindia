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
              <div className="col-md-3 col-lg-3 col-md-6 footer-bx">
                <h3>Our Services</h3>
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
              <div className="col-md-3 col-lg-3 col-md-6 footer-bx">
                <h3>Development</h3>
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
              <div className="col-md-2 col-lg-2 col-md-6 footer-bx">
                <h3>Others</h3>
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
              <div className="col-md-4 col-lg-4 col-md-6 footer-bx">
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
                    <Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                  </li>
                  <li>
                    <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                  </li>
                  <li>
                    <Link href=""><i className="fa-brands fa-twitter"></i></Link>
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
              <strong>TIS INDIA</strong> TIS is a result-driven digital marketing agency dedicated to helping businesses thrive in the ever-evolving online world. 
            </p>
          </div>
          </div>
        </section>
      </footer>
    </>
  );
};
