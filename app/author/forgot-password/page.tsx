"use client";
import Image from "next/image";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

const forgotSchema = z.object({
    email: z
        .string()
        .email({ message: "Email tidak valid" })
        .max(254, { message: "Maksimal karakter untuk email yaitu 254 huruf" }),
});

export default function FOrgotPassword() {
    const [message, setMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | boolean | null>(
        false
    );
    const form = useForm<z.infer<typeof forgotSchema>>({
        resolver: zodResolver(forgotSchema),
        defaultValues: {
            email: "",
        },
    });
    const sendForgot = async (values: z.infer<typeof forgotSchema>) => {
        const sendNow = async () => {
            try {
                const data = {
                    email: values.email,
                };
                const response = await axios.post(
                    `${process.env.URL_API}/auth/forgot-password/`,
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
                        src={"/images/logo.svg"}
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
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Masukkan email anda"
                                                className="text-black"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-[9px]" />
                                    </FormItem>
                                )}
                            />
                            <div className="mt-0 flex justify-start items-center gap-3">
                                <Button type="submit">Submit</Button>

                                <Link href="/author/login">Login</Link>
                            </div>
                        </form>
                    </Form>
                    {message ? (
                        <div className="mt-2 text-green-500">
                            Silahkan cek email anda
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
