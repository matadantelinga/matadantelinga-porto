"use client"
import Image from "next/image"
import React, { useState } from 'react'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import axios from "axios";

const registerSchema = z.object({
    username: z
        .string()
        .min(3, { message: "Username minimal 3 karakter" })
        .max(254, { message: "Maksimal karakter untuk username yaitu 254 huruf" }),
    fullname: z
        .string()
        .min(3, { message: "Isi Nama lengkap minimal 3 karakter" })
        .max(254, { message: "Maksimal karakter untuk fullname yaitu 254 huruf" }),
    email: z
        .string()
        .email({ message: "Email tidak valid" })
        .max(254, { message: "Maksimal karakter untuk email yaitu 254 huruf" }),
    password: z
        .string()
        .min(6, { message: "Kata sandi minimal 6 karakter" })
        .max(64, { message: "Maksimal karakter untuk kata sandi yaitu 64 huruf" }),
    address: z
        .string()
        .min(30, { message: "Isi alamat lengkap minimal 30 karakter" })
        .max(1000, { message: "Maksimal karakter untuk email yaitu 1000 huruf" }),

});

export default function Register() {
    const [message, setMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | boolean | null>(false)
    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: "",
            fullname: "",
            email: "",
            password: "",
            address: "",
        },
    });
    const sendRegister = async (values: z.infer<typeof registerSchema>) => {
        const sendNow = async () => {
            try {
                const data = {
                    username: values.username,
                    full_name: values.fullname,
                    email: values.email,
                    password: values.password,
                    address: values.address,
                }
                const response = await axios.post(`https://superadmin.planetdekor.id/api/auth/local/register`, data, {
                    headers: {
                        'Authorization': 'Bearer ' + "3a66368e134f55aca62058d052dc49d3aeeaeb24526468f6456c9d037b37486affe8ce786b0379cd8f2362a82141239aebced6c36af516479e01062792158272d166e5dc5cbd117bfbcbcb77fe23bebcb9b21ae7fc6ded8001d33d90152315a5fdd3e58ce56f4b32e8da8db3e5286947361382b5d4165e74f3a3b84cc0932124"
                    },
                })
                setErrorMessage(false)
                setMessage(true)

            } catch (error: any) {
                console.error("Error:", error?.response.data.error.message);
                setErrorMessage(error?.response.data.error.message)
            }
        }
        sendNow();
        form.reset();
    }
    return (
        <div className="relative wrapper py-7 bg-c-blue my-5 ">
            <div className="w-full max-w-[500px] mx-auto p-8 bg-white text-c-black rounded-lg">
                <div className="flex justify-center">
                    <Image
                        src={"/images/logo.png"}
                        width={90}
                        height={90}
                        alt="Planet Dekor"
                    />
                </div>
                <h1 className="text-[26px] text-center font-semibold ">Planet Dekor</h1>
                <h2 className="font-hind font-semibold text-[24px] text-white">Register</h2>
                <div className="mt-2">
                    <Form {...form}>
                        <form className="space-y-8" onSubmit={form.handleSubmit(sendRegister)}>
                            <FormField
                                control={form.control}
                                name="fullname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Nama Lengkap"
                                                className="text-black"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-[9px]" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="User Name"
                                                className="text-black"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-[9px]" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Alamat Email"
                                                className="text-black"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-[9px]" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Kata Sandi"
                                                className="text-black"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-[9px]" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Alamat Lengkap"
                                                className="text-black"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-[9px]" />
                                    </FormItem>
                                )}
                            />
                            <div className="mt-7 flex justify-center">
                                <div className="flex flex-col gap-2 justify-center">
                                    <Button
                                        type="submit"
                                    >
                                        Register
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Form>
                    {message ? <div className="mt-1 text-green-500">Terima kasih, data Registrasi terkirim</div> : null}
                    {errorMessage ? <div className="text-c-red mt-1">{errorMessage}</div> : null}
                </div>
            </div>
        </div>
    )
}
