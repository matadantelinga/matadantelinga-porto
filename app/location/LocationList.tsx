"use client";
import { getLocations } from "@/lib/services/locationServices";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Image from "next/image";
import { ILocation } from "@/lib/interfaces/ilocation";
import { LocationCard } from "./LocationCard";
import { SectionTitle } from "@/components/Shared/SectionTitle";
import { LoaderSpinner } from "@/components/Shared/LoaderSpinner";

export const LocationList: React.FC = () => {
  const query = useQuery({
    queryKey: ["qLocation"],
    queryFn: getLocations,
  });

  if (query.isLoading) {
    return <LoaderSpinner></LoaderSpinner>;
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
            <div className="col-span-12 md:col-span-6">
              <LocationCard data={loc}></LocationCard>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
