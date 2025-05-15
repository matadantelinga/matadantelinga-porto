"use client";

import { Contact } from "./ContactSection";
import { MainSection } from "./MainSection";
import { SelectedProject } from "./SelectedProject/SelectedProject";
import { WhatWeDo } from "./WhatWeDo";

export default function HomepageIndex() {
  return (
    <>
      <section className="wrapper py-10">
        <MainSection></MainSection>
      </section>
      <section className="bg-c-gray py-10">
        <div className="wrapper">
          <WhatWeDo></WhatWeDo>
        </div>
      </section>
      <section className="wrapper">
        <SelectedProject></SelectedProject>
      </section>
      <section className="bg-c-light-blue py-10">
        <div className="wrapper ">
          <Contact />
        </div>
      </section>
      <section className="wrapper py-10"></section>
    </>
  );
}
