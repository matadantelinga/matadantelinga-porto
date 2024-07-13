"use client";

import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
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
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

const signInSchema = z.object({
    email: z
        .string()
        .email({ message: "Email tidak valid" })
        .max(254, { message: "Maksimal karakter untuk email yaitu 254 huruf" }),
    password: z
        .string()
        .min(6, { message: "Kata sandi minimal 6 karakter" })
        .max(64, { message: "Maksimal karakter untuk kata sandi yaitu 64 huruf" }),
});

export default function LoginPage() {
    const { data: session, status } = useSession()
    const router = useRouter();
    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const Login = async (values: z.infer<typeof signInSchema>) => {
        const { email, password } = values;
        const result = await signIn("credentials", {
            email: email,
            password: password,
            callbackUrl: "/",
        });

        if (result?.error) {
            console.error('Login failed:', result.error);
        } else {
            router.push("/");
        }

    };
    console.log({ session })
    useEffect(() => {
        if (status === "authenticated") {
            router.push("/")
        } else {
            router.push("/auth/login")
        }
    })
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
                <h2 className="font-hind font-semibold text-[24px] text-white">Login</h2>
                <div className="mt-2">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(Login)} className="space-y-8">
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
                            <div className="flex justify-end mt-2">
                                <Link
                                    href={"/"}
                                    className="font-hind font-semibold text-[12px] text-c-orange"
                                >
                                    Lupa Kata Sandi?
                                </Link>
                            </div>

                            <div className="mt-7 flex justify-center">
                                <div className="flex flex-col gap-2 justify-center">
                                    <Button
                                        type="submit"
                                    >
                                        Login
                                    </Button>
                                    <p className="font-hind font-semibold text-white text-[12px]">
                                        Belum punya akun?{" "}
                                        <Link href={"/register"} className="text-c-orange">
                                            Registrasi
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

