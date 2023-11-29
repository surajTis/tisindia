import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/img/logo/sticky-logo-white-01.svg";
import Laravel from "../../public/assets/img/logo/laravel.svg";
import View from "../../public/assets/img/logo/view.svg";
import Next from "../../public/assets/img/logo/next-js.svg";
import Cms from "../../public/assets/img/logo/cms.svg";
import useSticky from "hooks/use-sticky";
import Sidebar from "../../common/sidebar";



export const MainMenu = ({
  items,
  callToActionLabel,
  callToActionDestination,
}) => {
  const { sticky } = useSticky();


  const [isActive, setIsActive] = useState(false);



  return (
    <>
    
      <header className={`header ${sticky ? "header-sticky" : ""}`}>
      <nav className="upper-nav">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-ul">
            <p>
              <span>
                <strong>Official Partner of </strong>
                <i class="fa-solid fa-angle-right"></i>
              </span>
              <span></span>
            </p>
            <a href="#">
            <Image
                    src={Laravel}
                    width={20}
                    height={20}
                    alt="Picture of the author"
                  />
              <span class="has-margin-left-5">Laravel</span>
            </a>
            <a href="#">
            <Image
                    src={View}
                    width={20}
                    height={20}
                    alt="Picture of the author"
                  />
              <span class="has-margin-left-5">VueJs</span>
            </a>
            <a href="#">
            <Image
                    src={Next}
                    alt="Picture of the author"
                  />
              <span class="has-margin-left-5">NuxtJs</span>
            </a>
            <a href="#">
            <Image
                    src={Cms}
                    width={20}
                    height={20}
                    alt="Picture of the author"
                  />
              <span class="has-margin-left-5">vaah<strong>cms</strong></span>
            </a>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-menu-end">
            <a href="#">
              New
            </a>
            <span>we're hiring!</span>
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
    </nav>
        <div className="container">
          <div className="header-row">
            <div className="logo">
              <Link href="/">
                <a>
                  <Image
                    src={Logo}
                    width={160}
                    height={60}
                    alt="Picture of the author"
                  />
                </a>
              </Link>
            </div>
            <div className="navbar-toggler"   onClick={() => setIsActive(true)}>
                <span className="hum-ico"></span>
                <span className="hum-ico"></span>
                <span className="hum-ico"></span>
            </div>
           

            <div className={`nav-area`}>
              <div className="main-menu">
                <ul>
                  {(items || []).map((item) => (
                    <li
                      key={item.id}
                      className={item.submenu ? styles.submenuItem : ""}
                    >
                      <Link href={item.destination}>
                        <a>{item.label}</a>
                      </Link>

                      {!!item.subMenuItems?.length && (
                        <ul className="group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3">
                          {item.subMenuItems.map((subMenuItem) => (
                            <Link
                              key={subMenuItem.id}
                              href={subMenuItem.destination}
                            >
                              <a className="block whitespace-nowrap p-5 hover:bg-slate-700">
                                {subMenuItem.label}
                              </a>
                            </Link>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="socail-area">
                <div className="mobile-no">
                  <Link href="tel:+91 9811747579">+91 9811747579</Link>
                </div>
                <div className="contact-btn">
                  <Link href="/">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};
