"use client";
import Image from "next/image";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";

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
import Link from "next/link";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const forgotSchema = z.object({
    password: z
        .string()
        .min(6, { message: "Kata sandi minimal 6 karakter" })
        .max(64, { message: "Maksimal karakter untuk kata sandi yaitu 64 huruf" }),
    confirm: z
        .string()
        .min(6, { message: "Kata sandi minimal 6 karakter" })
        .max(64, { message: "Maksimal karakter untuk kata sandi yaitu 64 huruf" }),

}).superRefine(({ confirm, password }, ctx) => {
    if (confirm !== password) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Password tidak cocok",
            path: ["confirm"],
        });
    }
});

export default function ChangePassword() {
    const [message, setMessage] = useState(false);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const param = useSearchParams()
    const code = param.get('code')
    const [errorMessage, setErrorMessage] = useState<string | boolean | null>(
        false
    );
    const form = useForm<z.infer<typeof forgotSchema>>({
        resolver: zodResolver(forgotSchema),
        defaultValues: {
            password: "",
            confirm: "",
        },
    });
    console.log(code)
    const sendForgot = async (values: z.infer<typeof forgotSchema>) => {
        const sendNow = async () => {
            try {
                const data = {
                    code: code,
                    email: values.password,
                    confirm: values.confirm,
                };
                const response = await axios.post(
                    `${process.env.URL_API}/auth/reset-password/`,
                    data
                );
                setErrorMessage(false);
                setMessage(true);
            } catch (error: any) {
                console.error("Error:", error?.response.data.error.message);
                setErrorMessage(error?.response.data.error.message);
            }
        };
        sendNow();
        form.reset();
    };
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
                <h2 className="font-hind font-semibold text-[24px] text-white">
                    Register
                </h2>
                <div className="mt-2">
                    <Form {...form}>
                        <form
                            className="space-y-4"
                            onSubmit={form.handleSubmit(sendForgot)}
                        >

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    placeholder="Masukkan password baru"
                                                    className="text-black"
                                                    type={show ? "text" : "password"}
                                                    {...field}
                                                />
                                                <div className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer" onClick={() => setShow(!show)}>
                                                    {show ? <IoIosEye /> : <IoIosEyeOff />}
                                                </div>
                                            </div>
                                        </FormControl>
                                        <FormMessage className="text-[9px]" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirm"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    placeholder="Konfirmasi password"
                                                    className="text-black"
                                                    type={show2 ? "text" : "password"}
                                                    {...field}
                                                />
                                                <div className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer" onClick={() => setShow2(!show2)}>
                                                    {show2 ? <IoIosEye /> : <IoIosEyeOff />}
                                                </div>

                                            </div>
                                        </FormControl>
                                        <FormMessage className="text-[9px]" />
                                    </FormItem>
                                )}
                            />
                            <div className="mt-0 flex justify-start items-center gap-3">
                                <Button type="submit">Submit</Button>

                            </div>
                        </form>
                    </Form>
                    {message ? (
                        <div className="mt-2 text-green-500">
                            Password Diubah, silahkan <Link href="/author/login">login</Link>
                        </div>
                    ) : null}
                    {errorMessage ? (
                        <div className="text-c-red mt-1">{errorMessage}</div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
