import {
  ILatestProjectMenu,
  StaticLatestProjectMenu,
} from "@/lib/staticDataObjects/latestProject";
import React from "react";

export const ProjectTabWrapper = () => {
  const menus: ILatestProjectMenu[] = StaticLatestProjectMenu;
  return (
    <>
      <div className="col-span-12 md:col-span-6 md:col-start-4">
        <ul className="flex icon-menu-list">
          {menus.map((menu) => (
            <React.Fragment key={menu.id}>
              <li
                className={`menu-item px-5 text-center ${
                  menu.isActive ? "active" : "inactive"
                }`}
              >
                <img src={menu.icon} className="m-auto" alt="" />
                <label className="block">{menu.label}</label>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </>
  );
};
