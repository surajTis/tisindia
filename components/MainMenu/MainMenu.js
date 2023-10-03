import Link from "next/link";

export const MainMenu = ({
  items,
  callToActionLabel,
  callToActionDestination,
}) => {
  return (
    <>
      <header className="header">
        <ul>
          {(items || []).map((item) => (
            <li key={item.id}>
              <Link href={item.destination}>
              {item.label}
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
      </header>
    </>
  );
};
