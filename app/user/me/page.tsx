"use client"
import React from 'react'
import { useSession } from "next-auth/react";
import parse from 'html-react-parser';
import Image from "next/image";

interface iUserMe {
    label: string,
    value: string | React.ReactNode,
    bgcolor?: boolean
}

export function ItemData({ label, value, bgcolor }: iUserMe) {
    return (
        <div className={`flex items-start gap-3 py-2 px-4 ${bgcolor ? "bg-slate-50" : "bg-white"}`}>
            <div className="w-[200px] font-bold">{label}</div>
            <div className="flex gap-1 flex-1 [&_p]:mt-0"><span></span>: {value}</div>
        </div>
    )
}
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
