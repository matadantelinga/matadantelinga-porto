"use client";
import { CategoryCard } from "@/components/Shared/CategoryCard";
import { GridWrapper } from "@/components/Shared/GridWrapper";
import { IProductQueryParams, IRoomCategory } from "@/lib/interfaces/icategory";
import { getAllRoomCategory } from "@/lib/services/categoryServices";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";

export const ExploreRoomCategories = () => {
  const [queryParams, setQueryParams] = useState<IProductQueryParams>({
    size: 4,
    page: 1,
  });

  const query = useQuery({
    queryKey: ["qAllRoomCategory"],
    queryFn: () => {
      return getAllRoomCategory(queryParams);
      // return getRoomCategoryFilter("kitchen-set"); // If you want pass parameter
    },
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

  const categories: IRoomCategory[] = query?.data?.data?.data;

  return (
    <>
      <GridWrapper padding="py-0">
        {categories?.map((cat, index) => (
          <React.Fragment key={index}>
            <div className="col-span-6 md:col-span-6 room-cat-item">
              <CategoryCard data={cat.attributes}></CategoryCard>
            </div>
          </React.Fragment>
        ))}
      </GridWrapper>
    </>
  );
};
