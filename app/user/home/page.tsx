"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import parse from "html-react-parser";
import { useQuery } from "@tanstack/react-query";
import { getProjectsByUser } from "@/lib/services/userService";
import Image from "next/image";
import { ItemData } from "@/components/Shared/UserItemData";
import { LoaderSpinner } from "@/components/Shared/LoaderSpinner";

export default function UserHome() {
  const { data: session } = useSession();

  const query = useQuery({
    queryKey: ["qGetProjectsByUser"],
    enabled: session?.user !== undefined,
    queryFn: () =>
      getProjectsByUser(`${(session?.user as { id: string })?.id}`),
  });

  if (query.isLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  if (query.isError) {
    return <div>Data Not Found</div>;
  }

  const dataContent = query?.data?.data.data;

  return (
    <div>
      {dataContent ? (
        dataContent?.map((item: any, i: number) => {
          return (
            <div key={i} className={`w-full mb-7 `}>
              <div className="bg-c-yellow2">
                <ItemData
                  bgcolor={false}
                  label="Judul"
                  value={item.attributes.title}
                />
              </div>
              <ItemData
                bgcolor={false}
                label="Status"
                value={parse(
                  `<div className="capitalize">${item.attributes.status}</div>`
                )}
              />
              <ItemData
                bgcolor={true}
                label="Harga"
                value={parseInt(item.attributes.price).toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              />
              <ItemData
                bgcolor={false}
                label="Description"
                value={parse(item.attributes.description)}
              />
            </div>
          );
        })
      ) : (
        <div>Data Not Found</div>
      )}
    </div>
  );
}
