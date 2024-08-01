import { IProductDetail } from "@/lib/interfaces/iproduct";
import { GridWrapper } from "../Shared/GridWrapper";
import React from "react";
import { SectionTitle } from "../Shared/SectionTitle";
import { InfoPropsItem } from "./info-props-item";

interface IDetailInfoProps {
  data: IProductDetail;
}

export const DetailInfo: React.FC<IDetailInfoProps> = ({ data }) => {
  return (
    <>
      <section className="wrapper detail-info-wrapper">
        <GridWrapper>
          <div className="col-span-12 md:col-span-8">
            <SectionTitle>{data.attributes.title}</SectionTitle>
            <div className="price py-5">
              IDR. {data.attributes.price_total}{" "}
              <span className="text-c-black underline cursor-pointer">
                Lihat Detail
              </span>
            </div>
            <div className="bg-c-gray p-5 rounded-lg">
              <GridWrapper padding="pt-2 pb-2">
                <InfoPropsItem
                  icon="/icons/icon-home.svg"
                  data={"Kitchen Set"}
                ></InfoPropsItem>
                <InfoPropsItem
                  icon="/icons/icon-cat.svg"
                  data={"Rumah"}
                ></InfoPropsItem>
                <InfoPropsItem
                  icon="/icons/icon-pin.svg"
                  data={data.attributes.location}
                ></InfoPropsItem>
              </GridWrapper>
              <GridWrapper padding="pt-2 pb-2">
                <InfoPropsItem
                  icon="/icons/icon-size.svg"
                  data={data.attributes.luas}
                  isSize={true}
                ></InfoPropsItem>
                <InfoPropsItem
                  icon="/icons/icon-clock.svg"
                  data={data.attributes.timeline_project}
                ></InfoPropsItem>
              </GridWrapper>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4"></div>
        </GridWrapper>
      </section>
    </>
  );
};
