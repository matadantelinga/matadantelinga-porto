"use client"
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ConfirmUser() {
    const searchParams = useSearchParams()
    const myConfirm = searchParams && searchParams.get('confirmation')
    const router = useRouter()
    useEffect(() => {
        if (myConfirm) {
            const data: any = {
                confirmation: myConfirm
            }
            axios.get(`${process.env.URL_API}/auth/email-confirmation?confirmation=${myConfirm}`, data)
                .then((res) => {
                    console.log(res.data)
                })
            setTimeout(() => {
                router.push("/")
            }, 5000)
        }
    }, [])
    return (
        <>
            {
                myConfirm ?
                    <div className="w-full flex text-center justify-center p-3 items-center">
                        <div>Akun terkonfirmasi</div>
                    </div>
                    : null
            }
        </>
    )
}
