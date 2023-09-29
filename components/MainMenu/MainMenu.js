import Link from "next/link";

export const MainMenu = ({
  items,
  callToActionLabel,
  callToActionDestination,
}) => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <a href="#">
              <img src="images/logo.svg" alt="logo" />
            </a>
          </div>
          <div className="menu-box">
            <div className="quick-info">
              <ul>
                <li><a href="#"> +91-9810572967</a></li>
                <li>|</li>
                <li><a href="#">sales@seoindiaonline.com</a></li>
                <li>|</li>
                <li><a href="#">Free Website Audit</a></li>
              </ul>
            </div>
            <nav className="nav-menu">
              <ul>
                {(items || []).map((item) => (
                  <li
                    key={item.id}
                  >

                    <Link href={item.destination}>
                      <a>{item.label}</a>
                    </Link>

                    {!!item.subMenuItems?.length && (
                      <ul className="group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3">
                        {item.subMenuItems.map((subMenuItem) => (
                          <Link key={subMenuItem.id} href={subMenuItem.destination}>
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
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
