import React from "react";
import DreamStepper from "./DreamAccordion";
import { IDreamDesign, ItemSliderDream } from "@/lib/interfaces/ihomepage";
import { GridWrapper } from "@/components/Shared/GridWrapper";
import { SectionTitle } from "@/components/Shared/SectionTitle";

interface IDreamDesignProps {
  data: IDreamDesign;
  itemSliderDream: ItemSliderDream[];
}

const DreamDesign: React.FC<IDreamDesignProps> = ({
  data,
  itemSliderDream,
}) => {
  return (
    <>
      <div className="w-full">
        <SectionTitle color="white">{data.main_title}</SectionTitle>
      </div>
      <GridWrapper>
        <div className="col-span-12 md:col-span-7">
          <div className="explore-banner banner-container">
            <img
              src={`${
                process.env.URL_MEDIA +
                itemSliderDream[0]?.image?.data?.attributes?.url
              }`}
              alt="item-slider"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <DreamStepper accordionItems={itemSliderDream[0]?.item} />
        </div>
      </GridWrapper>
    </>
  );
};

export default DreamDesign;
