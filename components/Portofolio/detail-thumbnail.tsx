import React from "react";

interface IDetailThumbProps {
  imgUrl: string;
}

export const DetailThumbnail: React.FC<IDetailThumbProps> = ({ imgUrl }) => {
  return (
    <>
      <div className="thumb-item rounded-xl hover-image-effect">
        <img
          src={`${process.env.URL_MEDIA + imgUrl}`}
          alt=""
          className="rounded-xl"
        />
      </div>
    </>
  );
};
