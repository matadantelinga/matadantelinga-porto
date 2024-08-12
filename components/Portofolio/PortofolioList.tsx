"use client";

import { GridWrapper } from "@/components/Shared/GridWrapper";
import { ProductCard } from "@/components/Shared/ProductCard";
import { SectionTitle } from "@/components/Shared/SectionTitle";
import { usePaginationStore } from "@/hooks/usePagination";
import {
  ICategorySelectOption,
  IProductQueryParams,
} from "@/lib/interfaces/icategory";
import { IProduct } from "@/lib/interfaces/iproduct";
import { getAllProducts } from "@/lib/services/productServices";
import {
  ILatestProjectMenu,
  StaticLatestProjectMenu,
} from "@/lib/staticDataObjects/latestProject";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import { PaginationNav } from "../Shared/PaginationNav";
import { FilterNav } from "./FilterNav";
import { useQueryParamsStore } from "@/hooks/useQueryParams";
import {
  getAllTypesCategory,
  getAllStylesCategory,
  getAllRoomsCategory,
} from "@/lib/services/categoryServices";
import { eSearchSelectOption } from "@/lib/enums/eGeneral";
import { useRouter, useSearchParams } from "next/navigation";

export const PortofolioListContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [style, setStyle] = useState<string | null>(null);
  const [room, setRoom] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);

  const [menus, setMenus] = useState<ILatestProjectMenu[]>(
    StaticLatestProjectMenu
  );

  const initialQueryParams: IProductQueryParams = {
    room: room ?? "",
    style: style ?? "",
    type: type ?? "",
    size: 12,
    page: 1,
  };

  const { paginationProps, setPaginationProps, setLoading, loading } =
    usePaginationStore();

  const { queryParams, setQueryParams } = useQueryParamsStore((state) => ({
    queryParams: state.queryParams,
    setQueryParams: state.setQueryParams,
  }));

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["qAllProducts", queryParams], // Add queryParams to the queryKey
    queryFn: () => getAllProducts(queryParams), // Fetch products based on queryParams
  });

  const queryRooms = useQuery({
    queryKey: ["qPortoRooms"],
    queryFn: getAllRoomsCategory,
  });

  const queryStyles = useQuery({
    queryKey: ["qPortoStyles"],
    queryFn: getAllStylesCategory,
  });

  // Set url search params
  useEffect(() => {
    if (searchParams) {
      const style = searchParams.get(eSearchSelectOption.STYLE);
      const room = searchParams.get(eSearchSelectOption.ROOM);
      const type = searchParams.get(eSearchSelectOption.TYPE);

      // Set the filters based on the search parameters
      if (style) {
        setActiveFilter("style", style);
      }
      if (room) {
        setActiveFilter("room", room);
      }
      if (type) {
        setActiveFilter("type", type);
      }
    }
  }, [searchParams, setQueryParams]);

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

  useEffect(() => {
    if (data?.data.meta?.pagination) {
      setPaginationProps(data.data.meta.pagination);
    }
  }, [data?.data.meta?.pagination, setPaginationProps]);

  const handleSelectOption = (
    option: string,
    optionType: eSearchSelectOption
  ) => {
    setActiveFilter(optionType, option);
  };

  const resetFilter = () => {
    // Reset urlParams and queryParams
    setStyle("");
    setRoom("");
    setType("");
    // setUrlParams(initialQueryParams);
    setQueryParams(initialQueryParams);
    setMenus(StaticLatestProjectMenu); // Reset menus to initial state

    // Update the URL to reflect the reset state
    router.push("/portofolio");
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
  const dataRooms: ICategorySelectOption[] = queryRooms?.data?.data?.data;
  const dataStyles: ICategorySelectOption[] = queryStyles?.data?.data?.data;

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
              urlParams={style || room || type}
              dataTypeOptions={dataRooms}
              dataStyleOptions={dataStyles}
              handleSelectOption={(option, optionType) =>
                handleSelectOption(option, optionType)
              }
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
      {paginationProps.total > 12 && (
        <section className="wrapper">
          <PaginationNav></PaginationNav>
        </section>
      )}
    </>
  );
};

export const PortofolioList = () => {
  return (
    <Suspense>
      <PortofolioListContent />
    </Suspense>
  );
};
