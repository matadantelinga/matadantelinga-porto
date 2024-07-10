import React from "react";
import { SectionTitle } from "@/components/ui/section-title";
import DreamStepper from "./DreamStepper";

export default function DreamDesign() {
  return (
    <>
      <div className="w-full">
        <SectionTitle color="white">Wujudkan Desain Impianmu</SectionTitle>
      </div>
      <div className="w-full py-10 grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <div className="explore-banner banner-container">
            <img src="/images/img-slider-dream.png" alt="" />
          </div>
        </div>
        <div className="col-span-6">
          <DreamStepper />
        </div>
      </div>
    </>
  );
}
