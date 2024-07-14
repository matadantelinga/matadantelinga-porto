import { ILocation } from "@/lib/interfaces/ilocation";
import React from "react";

interface ICardProps {
  data: ILocation;
}

export const LocationCard: React.FC<ICardProps> = ({ data }) => {
  return (
    <>
      <article className="location-card flex align-items-center">
        <div className="post-image">
          <img
            src={`${
              process.env.URL_MEDIA + data?.image?.data?.attributes?.url
            }`}
            alt="location-image"
          />
        </div>
        <div className="post-detail">
          <h2 className="title">{data.title}</h2>
          <div className="flex gap-2 items-center pt-2">
            <i>
              <img src="/icons/icon-wa.svg" alt="" />
            </i>
            <div
              dangerouslySetInnerHTML={{
                __html: data.description,
              }}
            ></div>
          </div>
        </div>
      </article>
    </>
  );
};
