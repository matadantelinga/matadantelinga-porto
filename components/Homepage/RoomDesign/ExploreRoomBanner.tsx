"use client";
import { Button } from "@/components/ui/button";
import router from "next/router";
import React from "react";

interface IExploreRoomProps {
  imgUrl: string;
  bannerText: string;
  linkUrl: string;
  linkLabel: string;
}

export const ExploreRoomBanner: React.FC<IExploreRoomProps> = ({
  imgUrl,
  bannerText,
  linkUrl,
  linkLabel,
}) => {
  return (
    <div className="explore-banner banner-container">
      <img src={imgUrl} alt="Banner Explore" />
      <div className="explore-banner__detail">
        <h2 className="title">{bannerText}</h2>
        <Button variant={"black"} onClick={() => router.push(`/${linkUrl}`)}>
          {linkLabel}
        </Button>
      </div>
    </div>
  );
};
