"use client";
import React, { useEffect } from "react";
import { ExploreRoomBanner } from "./ExploreRoomBanner";
import { SectionTitle } from "@/components/ui/section-title";
import useHomepageContentStore from "@/hooks/useHomepage";

export default function RoomDesign() {
  const { homepageContent, setHomepageContent } = useHomepageContentStore();

  useEffect(() => {
    console.log(homepageContent);
  }, []);
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
