import { useQueryParamsStore } from "@/hooks/useQueryParams";
import { ILatestProjectMenu } from "@/lib/staticDataObjects/latestProject";
import React, { useEffect } from "react";
import { GridWrapper } from "../Shared/GridWrapper";
import { ICategorySelectOption } from "@/lib/interfaces/icategory";
import { eSearchSelectOption } from "@/lib/enums/eGeneral";

interface IFilterNavProps {
  onMenuClick: (selectedMenu: ILatestProjectMenu) => void;
  menus: ILatestProjectMenu[];
  resetFilter: () => void;
  urlParams: string | null;
  dataTypeOptions: ICategorySelectOption[];
  dataStyleOptions: ICategorySelectOption[];
  handleSelectOption: (option: string, optionType: eSearchSelectOption) => void;
}

export const FilterNav: React.FC<IFilterNavProps> = ({
  onMenuClick,
  menus,
  resetFilter,
  urlParams,
  dataTypeOptions,
  dataStyleOptions,
  handleSelectOption,
}) => {
  const { queryParams, setQueryParams } = useQueryParamsStore((state) => ({
    queryParams: state.queryParams,
    setQueryParams: state.setQueryParams,
  }));

  return (
    <>
      <div className="filterNavWrapper relative">
        <GridWrapper padding="py-5">
          <div className="col-span-12 md:col-span-6">
            <GridWrapper
              padding="p-0"
              className="icon-menu-list col-divider has-divider"
              gridCols="grid-cols-5"
            >
              {menus.map((menu) => (
                <React.Fragment key={menu.id}>
                  <div className="col-span-2 md:col-span-1">
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
                  <select
                    className="bordered-select"
                    onChange={(e) =>
                      handleSelectOption(
                        e.target.value,
                        eSearchSelectOption.ROOM
                      )
                    }
                  >
                    <option value={""}>Tipe Ruangan</option>
                    {dataTypeOptions &&
                      dataTypeOptions.map((option) => (
                        <React.Fragment key={option.id}>
                          <option value={option.attributes.slug}>
                            {option.attributes.title}
                          </option>
                        </React.Fragment>
                      ))}
                  </select>
                </div>
              </div>
              <div className="w-1/2">
                <div className="filter-dropdown-item">
                  <select
                    className="bordered-select"
                    onChange={(e) =>
                      handleSelectOption(
                        e.target.value,
                        eSearchSelectOption.STYLE
                      )
                    }
                  >
                    <option value={""}>Style</option>
                    {dataStyleOptions &&
                      dataStyleOptions.map((option) => (
                        <React.Fragment key={option.id}>
                          <option value={option.attributes.slug}>
                            {option.attributes.title}
                          </option>
                        </React.Fragment>
                      ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          {(queryParams.room ||
            queryParams.style ||
            queryParams.type ||
            urlParams) && (
            <button
              onClick={resetFilter}
              className="flex button-reset items-center bg-c-red text-c-white px-3 py-1 hover:bg-c-yellow2 hover:text-c-black rounded-md"
            >
              <span className="text-sm">Reset</span>{" "}
              <span className="text-xl block ml-1">&times;</span>
            </button>
          )}
        </GridWrapper>
      </div>
    </>
  );
};
