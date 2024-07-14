"use client";
import { getLocations } from "@/lib/services/locationServices";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Image from "next/image";
import { ILocation } from "@/lib/interfaces/ilocation";
import { SectionTitle } from "@/components/ui/section-title";
import { LocationCard } from "./LocationCard";

export const LocationList: React.FC = () => {
  const query = useQuery({
    queryKey: ["qLocation"],
    queryFn: getLocations,
  });

  if (query.isLoading) {
    return (
      <div className="relative flex justify-center ">
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

  const dataContent: ILocation[] = query?.data?.data.data.attributes.item_area;

  return (
    <>
      <div className="w-full pb-5">
        <SectionTitle color="black">Lokasi Jangkauan Kami</SectionTitle>
      </div>
      <div className="w-full py-10 grid grid-cols-12 gap-4">
        {dataContent?.map((loc) => (
          <React.Fragment key={loc.id}>
            <div className="col-span-6">
              <LocationCard data={loc}></LocationCard>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
