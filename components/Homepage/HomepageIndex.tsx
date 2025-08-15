"use client";

import { SectionWrapper } from "../Shared/SectionWrapper";
import { Contact } from "./ContactSection";
import { MainSection } from "./MainSection";
import { SelectedProject } from "./SelectedProject/SelectedProject";
import { WhatWeDo } from "./WhatWeDo";

export default function HomepageIndex() {
  return (
    <>
      <SectionWrapper className="py-10">
        <MainSection></MainSection>
      </SectionWrapper>
      <SectionWrapper isMainWrapper={false} className="bg-c-gray py-10">
        <div className="wrapper">
          <WhatWeDo></WhatWeDo>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <SelectedProject></SelectedProject>
      </SectionWrapper>
      <SectionWrapper isMainWrapper={false} className="bg-c-light-blue py-10">
        <div className="wrapper">
          <Contact />
        </div>
      </SectionWrapper>
    </>
  );
}
