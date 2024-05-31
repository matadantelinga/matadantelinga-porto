"use client"
import React from 'react'
import { Button } from "../ui/button"

export default function Ask() {
    return (
        <div className="relative 
        before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[50%] before:bg-[#EBEBEB] 
        ">
            <div className="wrapper relative z-10">
                <div className="bg-c-black2 w-full min-h-150px px-10 py-10 text-white rounded-3xl">
                    <h4 className="font-bold text-[36px] mb-5">Tanya Harga Sekarang</h4>
                    <form>
                        <div className="flex justify-between gap-5
                [&_label]:text-sm [&_label]:mb-2 [&_label]:block
                [&_input]:w-full [&_input]:rounded-lg [&_input]:p-2
                ">
                            <div className="relative flex-1">
                                <label>Nama</label>
                                <input type="text" />
                            </div>
                            <div className="relative flex-1">
                                <label>No. Telepon</label>
                                <input type="text" />
                            </div>
                            <div className="relative flex-1">
                                <label>Email (optional)</label>
                                <input type="email" />
                            </div>
                        </div>
                        <div className="text-right mt-7 block">
                            <Button variant="white">Tanya Harga</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
