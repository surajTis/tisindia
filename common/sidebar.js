import Link from 'next/link';
import React, { useState } from "react";
import Logo from "../public/assets/img/logo/sticky-logo-white-01.svg";
import Image from "next/image";
import MobileMenus from './layout/mobile-menus';
const images = [
    {
        img: "/assets/img/blog/blog-in-01.jpg",
    },
    {
        img: "/assets/img/blog/blog-in-02.jpg",
    },
    {
        img: "/assets/img/blog/blog-in-03.jpg",
    }
];




const Sidebar = ({ isActive, setIsActive }) => {

    const [isOpen, setIsopen] = useState(false);

    return (
        <>
            <div
                className={`tpsideinfo tp-side-info-area ${isActive ? "tp-sidebar-opened" : ""
                    }`}
            >
                <button
                    onClick={() => setIsActive(false)}
                    className="tpsideinfo__close"
                >
                    <i className="fal fa-times"></i>
                </button>
                <div className="tpsideinfo__logo mb-40">
                    <Link href="/">
                        <Image
                            src={Logo}
                            width={160}
                            height={60}
                            alt="Picture of the author"
                        />
                    </Link>
                </div>

                <div className="mobile-menu mean-container d-block">
                    <div className="mean-bar">
                        <MobileMenus />
                    </div>
                </div>
            </div>

            <div
                onClick={() => setIsActive(false)}
                className={`body-overlay ${isActive ? "opened" : ""}`}
            ></div>


        </>
    );
};

export default Sidebar;