"use client";
import { getHomePage } from "@/lib/data";
import { IHomepageContent } from "@/lib/interfaces/ihomepage";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import DreamDesign from "./DreamDesign/DreamDesign";
import LatestProject from "./LatestProject/LatestProject";
import MainSlider from "./MainSlider";
import RoomDesign from "./RoomDesign/RoomDesign";
import SearchMain from "./SearchMain";
import WhyChoose from "./WhyChoose/WhyChoose";
import { LoaderSpinner } from "../Shared/LoaderSpinner";

export default function HomepageIndex() {
  const query = useQuery({
    queryKey: ["qHomePage"],
    queryFn: getHomePage,
  });

  if (query.isLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  const dataContent: IHomepageContent = query?.data?.data.data.attributes;

  return (
    <>
      <section className="relative">
        <MainSlider />
        <SearchMain />
      </section>
      <section className="wrapper py-10">
        <RoomDesign data={dataContent?.design_room} />
      </section>
      <section className="bg-c-black2 py-10">
        <div className="wrapper">
          <DreamDesign
            data={dataContent?.dream_design}
            itemSliderDream={dataContent?.item_slider_dream}
          />
        </div>
      </section>
      <section className="half-bg-black why-us">
        <div className="wrapper py-10">
          <WhyChoose data={dataContent?.why_us}></WhyChoose>
        </div>
      </section>
      <section className="wrapper py-10">
        <LatestProject></LatestProject>
      </section>
    </>
  );
}
