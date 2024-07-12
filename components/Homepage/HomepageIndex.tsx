"use client";
import { useQuery } from "@tanstack/react-query";
import Basecontent from "../basecontent";
import DreamDesign from "./DreamDesign/DreamDesign";
import MainSlider from "./MainSlider";
import RoomDesign from "./RoomDesign/RoomDesign";
import SearchMain from "./SearchMain";
import { getAllHomepageContents } from "@/lib/services/homePageServices";
import { useEffect } from "react";
import useHomepageContentStore from "@/hooks/useHomepage";

export default function HomepageIndex() {
  const { homepageContent, setHomepageContent } = useHomepageContentStore();

  const query = useQuery({
    queryKey: ["qHomeAllContents"],
    queryFn: getAllHomepageContents,
  });


  useEffect(() => {
    const data = query?.data?.data;
    setHomepageContent(data);
    console.log(data);
  }, []);

  return (
    <>
      <section className="relative">
        <MainSlider />
        <SearchMain />
      </section>
      <section className="wrapper py-10">
        <RoomDesign />
      </section>
      <section className="bg-black">
        <div className="wrapper py-10">
          <DreamDesign />
        </div>
      </section>
    </>
  );
}
