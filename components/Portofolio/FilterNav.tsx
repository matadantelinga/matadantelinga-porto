import { ILatestProjectMenu } from "@/lib/staticDataObjects/latestProject";
import React from "react";
import { GridWrapper } from "../Shared/GridWrapper";

interface IFilterNavProps {
  onMenuClick: (selectedMenu: ILatestProjectMenu) => void;
  menus: ILatestProjectMenu[];
}

export const FilterNav: React.FC<IFilterNavProps> = ({
  onMenuClick,
  menus,
}) => {
  return (
    <>
      <div className="filterNavWrapper">
        <GridWrapper padding="py-5">
          <div className="col-span-12 md:col-span-6">
            <GridWrapper
              padding="p-0"
              className="icon-menu-list col-divider has-divider"
            >
              {menus.map((menu) => (
                <React.Fragment key={menu.id}>
                  <div className="col-span-2">
                    <li
                      className={`menu-item px-5 text-center ${
                        menu.isActive ? "active" : "inactive"
                      }`}
                      onClick={() => onMenuClick(menu)}
                    >
                      <img src={menu.icon} className="m-auto" alt="" />
                      <label className="block">{menu.label}</label>
                    </li>
                  </div>
                </React.Fragment>
              ))}
            </GridWrapper>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="filter-dropdown">
              <div className="w-1/2">
                <div className="filter-dropdown-item">
                  <select className="bordered-select">
                    <option>Tipe Ruangan</option>
                  </select>
                </div>
              </div>
              <div className="w-1/2">
                <div className="filter-dropdown-item">
                  <select className="bordered-select">
                    <option>Style</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>
      </div>
    </>
  );
};
