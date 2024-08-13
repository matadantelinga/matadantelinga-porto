import { ILocation } from "@/lib/interfaces/ilocation";
import React from "react";

interface ICardProps {
  data: ILocation;
}

export const LocationCard: React.FC<ICardProps> = ({ data }) => {
  // function to parse number since the value is html format
  const parseNumber = (value: string): string => {
    return decodeURIComponent(value).replace(/\s+/g, "");
  };

  const openWhatsApp = (phoneNumber: string, location: string) => {
    let url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Halo%20Planet%20Dekor%2C%20saya%20ingin%20menanyakan%20beberapa%20hal%20terkait%20projek%20desain%20di%20wilayah%20${location}.`;
    return window.open(url, "_blank");
  };
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
          <div
            className="flex gap-2 items-center pt-2 cursor-pointer"
            onClick={() =>
              openWhatsApp(parseNumber(data.description), data.title)
            }
          >
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
