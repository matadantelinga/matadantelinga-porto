"use client";

import { GridWrapper } from "@/components/Shared/GridWrapper";
import { ProductCard } from "@/components/Shared/ProductCard";
import { SectionTitle } from "@/components/Shared/SectionTitle";
import { IProductQueryParams } from "@/lib/interfaces/icategory";
import { IProduct } from "@/lib/interfaces/iproduct";
import { getAllProducts } from "@/lib/services/productServices";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { useState } from "react";

export const PortofolioList = () => {
  const [queryParams, setQueryParams] = useState<IProductQueryParams>({
    size: 12,
  });

  const query = useQuery({
    queryKey: ["qAllProducts"],
    queryFn: () => {
      return getAllProducts(queryParams);
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

  const products: IProduct[] = query?.data?.data?.data;
  return (
    <>
      <div className="w-full">
        <SectionTitle>Proyek Pilihan Untukmu</SectionTitle>
      </div>
      <GridWrapper>
        {products?.map((prod) => (
          <React.Fragment>
            <div className="col-span-3 md:col-span-3">
              <ProductCard data={prod}></ProductCard>
            </div>
          </React.Fragment>
        ))}
      </GridWrapper>
    </>
  );
};
