import React from "react";
import { ExploreRoomBanner } from "./ExploreRoomBanner";
import { SectionTitle } from "@/components/ui/section-title";

export default function RoomDesign() {
  return (
    <>
      <div className="w-full">
        <SectionTitle>Desain Sesuai Ruangan</SectionTitle>
      </div>
      <div className="w-full rounded-lg py-10 flex items-center justify-center">
        <div className="w-4/12">
          <ExploreRoomBanner></ExploreRoomBanner>
        </div>
        <div className="w-8/12">b</div>
      </div>
    </>
  );
}
