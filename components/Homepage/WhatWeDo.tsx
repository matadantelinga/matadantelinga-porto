import { WhatWeDos } from "@/lib/staticDataObjects/whatWeDo";
import { GridWrapper } from "../Shared/GridWrapper";
import { SectionTitle } from "../Shared/SectionTitle";
import React from "react";

export const WhatWeDo = () => {
  return (
    <>
      <GridWrapper>
        <div className="col-span-12">
          <SectionTitle className="font-medium text-center">
            What Do I Do
          </SectionTitle>
        </div>
      </GridWrapper>
      <div className="items-wrapper">
        <GridWrapper>
          {WhatWeDos.map((wedo, index) => (
            <React.Fragment key={index}>
              <div className="col-span-12 md:col-span-4">
                <div className="item flex gap-1">
                  <div className="icon">
                    <img src={wedo.icon} alt="" />
                  </div>
                  <div className="detail">
                    <div className="title font-medium text-lg">{wedo.name}</div>
                    <div className="desc">{wedo.desc}</div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </GridWrapper>
      </div>
    </>
  );
};
