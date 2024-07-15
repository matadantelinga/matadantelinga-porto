"use client";
import { SectionTitle } from "@/components/ui/section-title";
import { IDesignRoom } from "@/lib/interfaces/ihomepage";
import React from "react";
import { ExploreRoomBanner } from "./ExploreRoomBanner";

interface IRoomDesignProps {
  data: IDesignRoom;
}

const RoomDesign: React.FC<IRoomDesignProps> = ({ data }) => {
  return (
    <>
      <div className="w-full">
        <SectionTitle>{data.title}</SectionTitle>
      </div>
      <div className="w-full py-10 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-4">
          <ExploreRoomBanner
            imgUrl={`${
              process.env.URL_MEDIA + data?.image?.data.attributes.url
            }`}
          ></ExploreRoomBanner>
        </div>
        <div className="col-span-12 md:col-span-8">b</div>
      </div>
    </>
  );
};

export default RoomDesign;
