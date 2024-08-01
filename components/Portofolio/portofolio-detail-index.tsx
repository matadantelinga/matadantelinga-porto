"use client";

import { getProductDetail } from "@/lib/services/productServices";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Image from "next/image";
import { IProductDetail } from "@/lib/interfaces/iproduct";
import { DetailImage } from "./detail-image";

interface IIndexProps {
  slug: string;
}

export const PortfolioDetailIndex: React.FC<IIndexProps> = ({ slug }) => {
  const query = useQuery({
    queryKey: ["qProdDetail"],
    queryFn: () => {
      return getProductDetail(slug);
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

  const dataContent: IProductDetail = query?.data?.data.data;

  return (
    <>
      <DetailImage
        dataImages={dataContent?.attributes.image.data}
      ></DetailImage>
    </>
  );
};
