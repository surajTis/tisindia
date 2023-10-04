
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/img/logo/sticky-logo-white-01.svg";
import useSticky from "hooks/use-sticky";
export const MainMenu = ({
  items,
  callToActionLabel,
  callToActionDestination,
}) => {

  const { sticky } = useSticky();
  
  return (
    <>
      <header className={`header ${sticky ? "header-sticky" : ""}`}>
        <div className="container">
          <div className="header-row">
            <div className="logo">
              <Link href="#">
                <Image
                  src={Logo}
                  width={160}
                  height={60}
                  alt="Picture of the author"
                />
              </Link>
            </div>
            <div className="nav-area">
              <div className="main-menu">
                <ul>
                  {(items || []).map((item) => (
                    <li key={item.id} className={item.submenu ? styles.submenuItem : ''}>
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
    </>
  );
};
