import React from "react";
import { SectionTitle } from "@/components/ui/section-title";
import DreamStepper from "./DreamAccordion";
import { IDreamDesign, ItemSliderDream } from "@/lib/interfaces/ihomepage";

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
      <div className="w-full py-10 grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <div className="explore-banner banner-container">
            <img
              src={`${
                process.env.URL_MEDIA +
                itemSliderDream[0]?.image?.data?.attributes?.url
              }`}
              alt=""
            />
          </div>
        </div>
        <div className="col-span-6">
          <DreamStepper accordionItems={itemSliderDream[0]?.item} />
        </div>
      </div>
    </>
  );
};

export default DreamDesign;
