import { NavMenus } from "@/lib/staticDataObjects/navMenus";
import Link from "next/link";
import React from "react";

export const MobileNav = () => {
  return (
    <>
      <section className="wrapper xs-only">
        <nav className="mobile-nav">
          <ul className="flex items-center justify-center font-medium text-sm gap-10 ">
            {NavMenus.map((menu, index) => (
              <React.Fragment key={index}>
                <li>
                  <Link href={menu.link}>{menu.name}</Link>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
};
