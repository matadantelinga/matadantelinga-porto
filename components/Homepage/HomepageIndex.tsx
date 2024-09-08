"use client";

import { MainSection } from "./MainSection";
import { WhatWeDo } from "./WhatWeDo";

export default function HomepageIndex() {
  return (
    <>
      <section className="wrapper">
        <MainSection></MainSection>
      </section>
      <section className="wrapper bg-c-grap py-10">
        <WhatWeDo></WhatWeDo>
      </section>
      <section className="bg-c-black2 py-10">
        <div className="wrapper"></div>
      </section>
      <section className="half-bg-black why-us">
        <div className="wrapper py-10"></div>
      </section>
      <section className="wrapper py-10"></section>
    </>
  );
}
