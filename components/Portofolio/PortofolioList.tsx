"use client";

import { GridWrapper } from "@/components/Shared/GridWrapper";
import { ProductCard } from "@/components/Shared/ProductCard";
import { SectionTitle } from "@/components/Shared/SectionTitle";
import { IProductQueryParams } from "@/lib/interfaces/icategory";
import { IProduct } from "@/lib/interfaces/iproduct";
import { getAllProducts } from "@/lib/services/productServices";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { FilterNav } from "./FilterNav";
import {
  ILatestProjectMenu,
  StaticLatestProjectMenu,
} from "@/lib/staticDataObjects/latestProject";

export const PortofolioList = () => {
  const [menus, setMenus] = useState<ILatestProjectMenu[]>(
    StaticLatestProjectMenu
  );

  const [queryParams, setQueryParams] = useState<IProductQueryParams>({
    size: 12,
    room: "",
    type: "",
    style: "",
  });

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["qAllProducts", queryParams], // Add queryParams to the queryKey
    queryFn: () => getAllProducts(queryParams), // Fetch products based on queryParams
  });

  useEffect(() => {
    refetch();
  }, [queryParams, refetch]);

  const setActiveFilter = (type: string, value: string) => {
    setQueryParams((prevParams) => ({
      size: prevParams.size,
      [type]: value,
    }));
  };

  const handleMenuClick = (selectedMenu: ILatestProjectMenu) => {
    setMenus((prevMenus) =>
      prevMenus.map((menu) =>
        menu.id === selectedMenu.id
          ? { ...menu, isActive: !menu.isActive }
          : { ...menu, isActive: false }
      )
    );
    if (selectedMenu.isActive) {
      setActiveFilter("", ""); // or handle the filter reset as needed
    } else {
      setActiveFilter(selectedMenu.type, selectedMenu.value);
    }
  };

  if (isLoading) {
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

  const products: IProduct[] = data?.data.data;
  return (
    <>
      <section className="wrapper py-10">
        <GridWrapper padding="pb-0">
          <div className="col-span-12">
            <SectionTitle>Proyek Pilihan Untukmu</SectionTitle>
          </div>
          <div className="col-span-12">
            <FilterNav onMenuClick={handleMenuClick} menus={menus}></FilterNav>
          </div>
        </GridWrapper>
      </section>

      <section className="wrapper">
        <GridWrapper padding="pt-0 pb-10">
          {products?.map((prod) => (
            <React.Fragment>
              <div className="col-span-3 md:col-span-3">
                <ProductCard data={prod}></ProductCard>
              </div>
            </React.Fragment>
          ))}
        </GridWrapper>
      </section>
    </>
  );
};
