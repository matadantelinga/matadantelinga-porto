import React from "react";

interface IExploreRoomProps {
  imgUrl: string;
}

export const ExploreRoomBanner: React.FC<IExploreRoomProps> = ({ imgUrl }) => {
  return (
    <div className="explore-banner banner-container">
      <img src={imgUrl} alt="Banner Explore" />
    </div>
  );
};
