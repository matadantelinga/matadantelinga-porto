"use client";

import { GridWrapper } from "@/components/Shared/GridWrapper";
import { ProductCard } from "@/components/Shared/ProductCard";
import { SectionTitle } from "@/components/Shared/SectionTitle";
import { IProductQueryParams } from "@/lib/interfaces/icategory";
import { IProduct } from "@/lib/interfaces/iproduct";
import { getAllProducts } from "@/lib/services/productServices";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ProjectTabWrapper } from "./ProjectTabWrapper";
import {
  ILatestProjectMenu,
  StaticLatestProjectMenu,
} from "@/lib/staticDataObjects/latestProject";

const LatestProject = () => {
  const [menus, setMenus] = useState<ILatestProjectMenu[]>(
    StaticLatestProjectMenu
  );

  const [queryParams, setQueryParams] = useState<IProductQueryParams>({
    size: 12,
    room: "kitchen-set",
    type: "",
    style: "",
  });

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["qHomeProducts", queryParams], // Add queryParams to the queryKey
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
          ? { ...menu, isActive: true }
          : { ...menu, isActive: false }
      )
    );
    setActiveFilter(selectedMenu.type, selectedMenu.value);
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
      <div className="w-full">
        <SectionTitle className="text-center">Proyek Terbaru Kami</SectionTitle>
      </div>
      <GridWrapper className="place-items-center">
        <ProjectTabWrapper
          onMenuClick={(menu: ILatestProjectMenu) => {
            handleMenuClick(menu);
          }}
          menus={menus}
        ></ProjectTabWrapper>
      </GridWrapper>
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

export default LatestProject;
