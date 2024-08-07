"use client";
import { GridWrapper } from "@/components/Shared/GridWrapper";
import { ProductCard } from "@/components/Shared/ProductCard";
import { SectionTitle } from "@/components/Shared/SectionTitle";
import { usePaginationStore } from "@/hooks/usePagination";
import { IProductQueryParams } from "@/lib/interfaces/icategory";
import { IProduct } from "@/lib/interfaces/iproduct";
import { getAllProducts } from "@/lib/services/productServices";
import {
  ILatestProjectMenu,
  StaticLatestProjectMenu,
} from "@/lib/staticDataObjects/latestProject";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PaginationNav } from "../Shared/PaginationNav";
import { FilterNav } from "./FilterNav";
import { useQueryParamsStore } from "@/hooks/useQueryParams";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { eSearchSelectOption } from "@/lib/enums/eGeneral";

export const PortofolioList = () => {
  const params = useSearchParams();
  const router = useRouter();

  const style = params.get(eSearchSelectOption.STYLE);
  const room = params.get(eSearchSelectOption.ROOM);
  const type = params.get(eSearchSelectOption.TYPE);

  const initialQueryParams: IProductQueryParams = {
    room: room ?? "",
    style: style ?? "",
    type: type ?? "",
    size: 12,
    page: 1,
  };

  const [urlParams, setUrlParams] =
    useState<IProductQueryParams>(initialQueryParams);
  const [menus, setMenus] = useState<ILatestProjectMenu[]>(
    StaticLatestProjectMenu
  );

  useEffect(() => {
    const urlQueryParams: IProductQueryParams = {
      room: room ?? "",
      style: style ?? "",
      type: type ?? "",
      size: 12,
      page: 1,
    };

    setUrlParams(urlQueryParams);
  }, [room, type, style]);

  const { paginationProps, setPaginationProps, setLoading, loading } =
    usePaginationStore();

  const { queryParams, setQueryParams } = useQueryParamsStore((state) => ({
    queryParams: urlParams ?? state.queryParams,
    setQueryParams: state.setQueryParams,
  }));

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["qAllProducts", queryParams], // Add queryParams to the queryKey
    queryFn: () => getAllProducts(queryParams), // Fetch products based on queryParams
  });

  useEffect(() => {
    refetch();
  }, [queryParams, refetch]);

  const setActiveFilter = (type: string, value: string) => {
    setQueryParams({ page: 1, [type]: value });
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

  const resetFilter = () => {
    // Reset urlParams and queryParams
    setUrlParams(initialQueryParams);
    setQueryParams(initialQueryParams);
    setMenus(StaticLatestProjectMenu); // Reset menus to initial state

    // Update the URL to reflect the reset state
    router.push("/portofolio");
  };

  useEffect(() => {
    if (data?.data.meta?.pagination) {
      setPaginationProps(data.data.meta.pagination);
    }
  }, [data?.data.meta?.pagination, setPaginationProps]);

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
            <FilterNav
              onMenuClick={handleMenuClick}
              menus={menus}
              resetFilter={resetFilter}
            ></FilterNav>
          </div>
        </GridWrapper>
      </section>

      <section className="wrapper">
        <GridWrapper padding="pt-0 pb-10">
          {products?.map((prod) => (
            <React.Fragment key={prod.id}>
              <div className="col-span-6 md:col-span-3">
                <ProductCard data={prod}></ProductCard>
              </div>
            </React.Fragment>
          ))}
        </GridWrapper>
      </section>
      <section className="wrapper">
        <PaginationNav></PaginationNav>
      </section>
    </>
  );
};
