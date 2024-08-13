"use client";
import { CategoryCard } from "@/components/Shared/CategoryCard";
import { GridWrapper } from "@/components/Shared/GridWrapper";
import { LoaderSpinner } from "@/components/Shared/LoaderSpinner";
import { IProductQueryParams, IRoomCategory } from "@/lib/interfaces/icategory";
import { getAllRoomCategory } from "@/lib/services/categoryServices";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const ExploreRoomCategories = () => {
  const router = useRouter();
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
    return <LoaderSpinner></LoaderSpinner>;
  }

  const categories: IRoomCategory[] = query?.data?.data?.data;

  const submitSearch = (selectedRoom: string) => {
    router.push(`/portofolio?&room=${selectedRoom}`);
  };

  return (
    <>
      <GridWrapper padding="py-0">
        {categories?.map((cat, index) => (
          <React.Fragment key={index}>
            <div
              className="col-span-6 md:col-span-6 room-cat-item"
              onClick={() => submitSearch(cat.attributes.slug)}
            >
              <CategoryCard data={cat.attributes}></CategoryCard>
            </div>
          </React.Fragment>
        ))}
      </GridWrapper>
    </>
  );
};
