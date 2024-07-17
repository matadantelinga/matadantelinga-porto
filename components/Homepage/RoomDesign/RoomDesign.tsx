"use client";
import { GridWrapper } from "@/components/Shared/GridWrapper";
import { SectionTitle } from "@/components/Shared/SectionTitle";
import { IDesignRoom } from "@/lib/interfaces/ihomepage";
import React from "react";
import { ExploreRoomBanner } from "./ExploreRoomBanner";
import { ExploreRoomCategories } from "./ExploreRoomCategories";

interface IRoomDesignProps {
  data: IDesignRoom;
}

const RoomDesign: React.FC<IRoomDesignProps> = ({ data }) => {
  return (
    <>
      <div className="w-full">
        <SectionTitle>{data.title}</SectionTitle>
      </div>
      <GridWrapper>
        <div className="col-span-12 md:col-span-4">
          <ExploreRoomBanner
            imgUrl={`${
              process.env.URL_MEDIA + data?.image?.data.attributes.url
            }`}
          ></ExploreRoomBanner>
        </div>
        <div className="col-span-12 md:col-span-8">
          <ExploreRoomCategories></ExploreRoomCategories>
        </div>
      </GridWrapper>
    </>
  );
};

export default RoomDesign;
