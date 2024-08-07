import {
  ICategorySelectOption,
  IProductQueryParams,
} from "@/lib/interfaces/icategory";
import {
  getAllRoomsCategory,
  getAllStylesCategory,
  getAllTypesCategory,
} from "@/lib/services/categoryServices";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { SearchSelection } from "./SearchSelection";
import { useState } from "react";
import { eSearchSelectOption } from "@/lib/enums/eGeneral";
import { useQueryParamsStore } from "@/hooks/useQueryParams";
import { useRouter } from "next/navigation";

export default function SearchMain() {
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedStyle, setSelectedStyle] = useState<string>("");
  const [selectedRoom, setSelectedRoom] = useState<string>("");

  const router = useRouter();

  const queryTypes = useQuery({
    queryKey: ["qHomeTypes"],
    queryFn: getAllTypesCategory,
  });

  const queryStyles = useQuery({
    queryKey: ["qHomeStyles"],
    queryFn: getAllStylesCategory,
  });

  const queryRooms = useQuery({
    queryKey: ["qHomeRooms"],
    queryFn: getAllRoomsCategory,
  });

  const { queryParams, setQueryParams } = useQueryParamsStore((state) => ({
    queryParams: state.queryParams,
    setQueryParams: state.setQueryParams,
  }));

  const dataTypes: ICategorySelectOption[] = queryTypes?.data?.data?.data;
  const dataStyles: ICategorySelectOption[] = queryStyles?.data?.data?.data;
  const dataRooms: ICategorySelectOption[] = queryRooms?.data?.data?.data;

  const handleSelectOption = (
    option: string,
    optionType: eSearchSelectOption
  ) => {
    if (optionType === eSearchSelectOption.ROOM) {
      setSelectedRoom(option);
    } else if (optionType === eSearchSelectOption.STYLE) {
      setSelectedStyle(option);
    } else {
      setSelectedType(option);
    }
  };

  const submitSearch = () => {
    router.push(
      `/portofolio?type=${selectedType}&room=${selectedRoom}&style=${selectedStyle}`
    );
  };

  return (
    <div className="mb-[50px] search-bar-wrapper">
      <div className="bg-white py-5 absolute bottom-0 max-w-[1064px] w-full shadow-lg px-9 h-[100px]  mx-auto left-0 right-0  rounded-full -mb-[50px] flex items-center">
        <div className="flex justify-between w-full">
          <div className="search-item-btn flex align-items-start">
            <div className="icon">
              <img alt="icon-search" src="/icons/icon-building.svg" />
            </div>
            <SearchSelection
              label="Pilih Tipe Projek"
              labelOption="Pilih Projek"
              options={dataTypes}
              handleSelect={(option) =>
                handleSelectOption(option, eSearchSelectOption.TYPE)
              }
            ></SearchSelection>
          </div>

          <div className="search-item-btn flex align-items-start">
            <div className="icon">
              <img alt="icon-search" src="/icons/icon-home.svg" />
            </div>
            <SearchSelection
              label="Ruangan"
              labelOption="Pilih Ruangan"
              options={dataRooms}
              handleSelect={(option) =>
                handleSelectOption(option, eSearchSelectOption.ROOM)
              }
            ></SearchSelection>
          </div>

          <div className="search-item-btn flex align-items-start">
            <div className="icon">
              <img alt="icon-search" src="/icons/icon-paint.svg" />
            </div>
            <SearchSelection
              label="Style"
              labelOption="Pilih Style"
              options={dataStyles}
              handleSelect={(option) =>
                handleSelectOption(option, eSearchSelectOption.STYLE)
              }
            ></SearchSelection>
          </div>
          <Button onClick={submitSearch}>Search</Button>
        </div>
      </div>
    </div>
  );
}
