"use client";

import { getProductDetail } from "@/lib/services/productServices";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Image from "next/image";
import { IProductDetail } from "@/lib/interfaces/iproduct";
import { DetailImage } from "./DetailImage";
import { DetailInfo } from "./DetailInfo";
import { LoaderSpinner } from "../Shared/LoaderSpinner";

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
    return <LoaderSpinner></LoaderSpinner>;
  }

  const dataContent: IProductDetail = query?.data?.data.data;

  return (
    <>
      <DetailImage
        dataImages={dataContent?.attributes.image.data}
      ></DetailImage>
      <DetailInfo data={dataContent}></DetailInfo>
    </>
  );
};
