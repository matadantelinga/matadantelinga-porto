"use client";
import { SectionTitle } from "@/components/ui/section-title";
import { IWhyUs } from "@/lib/interfaces/ihomepage";
import React from "react";
import { WhyChooseCard } from "./WhyChooseCard";
import { GridWrapper } from "@/components/Shared/GridWrapper";

interface IWhyChooseProps {
  data: IWhyUs;
}

const WhyChoose: React.FC<IWhyChooseProps> = ({ data }) => {
  return (
    <>
      <div className="w-full">
        <SectionTitle color="white">{data.main_title}</SectionTitle>
      </div>
      <GridWrapper>
        {data.item_why?.map((item) => (
          <React.Fragment key={item.id}>
            <div className="col-span-12 md:col-span-4">
              <WhyChooseCard data={item}></WhyChooseCard>
            </div>
          </React.Fragment>
        ))}
      </GridWrapper>
    </>
  );
};

export default WhyChoose;
