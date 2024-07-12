"use client";
import { useQuery } from "@tanstack/react-query";
import Basecontent from "../basecontent";
import DreamDesign from "./DreamDesign/DreamDesign";
import MainSlider from "./MainSlider";
import RoomDesign from "./RoomDesign/RoomDesign";
import SearchMain from "./SearchMain";
import { getAllHomepageContents } from "@/lib/services/homePageServices";
import { useEffect } from "react";
import { getHomePage } from "@/lib/data";
import Image from "next/image";

export default function HomepageIndex() {
  const query = useQuery({
    queryKey: ["qHomePage"],
    queryFn: getHomePage,
  });


  if (query.isLoading) {
    return (
      <div className=" relative flex justify-center ">
        <div className="animate-pulse w-full">
          <div className="rounded-sm bg-slate-200 h-[calc(100vh-89px)] w-full flex justify-center items-center ">
            <Image
              src="/images/loading.svg"
              width={100}
              height={100}
              alt="loading"
            />
          </div>
        </div>
      </div>
    );
  }


  const dataContent = query?.data?.data.data.attributes;

  console.log(dataContent)

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
