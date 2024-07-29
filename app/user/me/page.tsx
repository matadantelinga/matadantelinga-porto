"use client"
import React from 'react'
import { useSession } from "next-auth/react";
import parse from 'html-react-parser';
import Image from "next/image";
import { ItemData } from "@/components/Shared/UserItemData";


export default function UserMe() {
    const { data: session, status } = useSession();
    console.log(session?.user)
    return (
        <div className="flex flex-col">
            {
                session?.user !== undefined ?
                    status !== "loading" ?
                        <>
                            <ItemData bgcolor={true} label={`User Name`} value={`${(session?.user as { username: string })?.username}`} />
                            <ItemData bgcolor={false} label={`Email`} value={`${(session?.user?.email)}`} />
                            <ItemData bgcolor={true} label={`Nama Lengkap`} value={parse(`<div className="capitalize">${`${(session?.user as { full_name: string })?.full_name}`}</div>`)} />
                            <ItemData bgcolor={false} label={`Alamat`}
                                value={parse(`${(session?.user as { address: string })?.address}`)}
                            />


                        </>
                        : <div className="flex items-center justify-center">
                            <Image
                                src="/images/loading.svg"
                                width={100}
                                height={100}
                                alt="loading"
                                className="mx-auto"
                            />
                        </div>
                    : <div className="flex">Data Not Found</div>
            }
        </div>
    )
}
