"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from "next-auth/react";
import parse from 'html-react-parser';
import { useQuery } from "@tanstack/react-query";
import { getProjectsByUser } from "@/lib/services/userService";
import Image from "next/image";
import { ItemData } from "../me/page";


export default function UserHome() {
    const { data: session } = useSession();

    const query = useQuery({
        queryKey: ["qGetProjectsByUser"],
        enabled: session?.user !== undefined,
        queryFn: () => getProjectsByUser(`${session?.user?.id}`)
    });


    if (query.isLoading) {
        return (
            <div className="w-full relative flex justify-center items-center ">
                <div className="animate-pulse w-full text-center">
                    <Image
                        className="mx-auto"
                        src="/images/loading.svg"
                        width={100}
                        height={100}
                        alt="loading"
                    />
                    Loading
                </div>
            </div>
        );
    }

    if (query.isError) {
        return (
            <div>Data Not Found</div>
        )
    }

    const dataContent = query?.data?.data.data
    console.log(dataContent)


    return (
        <div>
            {
                dataContent?.map((item: any, i: number) => {
                    return (
                        <div key={i}>
                            <ItemData label="Judul" value={item.attributes.title} />
                            <ItemData label="Status" value={parse(`<div className="capitalize">${item.attributes.status}</div>`)} />
                            <ItemData label="Harga" value={parseInt(item.attributes.price).toLocaleString("id-ID", { style: "currency", currency: "IDR" })} />
                            <ItemData label="Description" value={parse(item.attributes.description)} />
                        </div>
                    )
                })
            }
        </div>
    )
}

