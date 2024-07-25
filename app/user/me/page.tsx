"use client"
import React from 'react'
import { useSession } from "next-auth/react";
import parse from 'html-react-parser';
import Image from "next/image";
import { ItemData } from "@/components/Shared/UserItemData";



export default function UserMe() {
    const { data: session, status } = useSession();

    return (
        <div className="flex flex-col">
            {
                status !== "loading" ?
                    <>
                        <ItemData bgcolor={true} label={`User Name`} value={`${session?.user?.username}`} />
                        <ItemData bgcolor={false} label={`Email`} value={`${session?.user?.email}`} />
                        <ItemData bgcolor={true} label={`Nama Lengkap`} value={parse(`<div className="capitalize">${session?.user?.full_name}</div>`)} />
                        <ItemData bgcolor={false} label={`Alamat`} value={parse(session?.user?.address)} />
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
            }
        </div>
    )
}
