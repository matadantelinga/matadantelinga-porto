import Image from "next/image";
import { Button } from "../ui/button";

export default function SearchMain() {
  return (
    <div className="mb-[50px]">
      <div className="bg-white py-5 absolute bottom-0 max-w-[1064px] w-full shadow-lg px-9 h-[100px]  mx-auto left-0 right-0  rounded-full -mb-[50px] flex items-center">
        <div className="flex justify-between w-full">
          <div className="search-item-btn flex align-items-start">
            <div className="icon">
              <img alt="icon-search" src="/icons/icon-building.svg" />
            </div>
            <div className="selection-btn ml-2">
              <label className="font-bold block">Tipe Projek</label>
              <select>
                <option>Pilih Projek</option>
              </select>
            </div>
          </div>

          <div className="search-item-btn flex align-items-start">
            <div className="icon">
              <img alt="icon-search" src="/icons/icon-home.svg" />
            </div>
            <div className="selection-btn ml-2">
              <label className="font-bold block">Ruangan</label>
              <select>
                <option>Pilih Ruangan</option>
              </select>
            </div>
          </div>

          <div className="search-item-btn flex align-items-start">
            <div className="icon">
              <img alt="icon-search" src="/icons/icon-paint.svg" />
            </div>
            <div className="selection-btn ml-2">
              <label className="font-bold block">Style</label>
              <select>
                <option>Pilih Style</option>
              </select>
            </div>
          </div>
          <Button>Search</Button>
        </div>
      </div>
    </div>
  );
}
