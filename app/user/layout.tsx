"use client"
import Basecontent from "@/components/basecontent";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    const router = useRouter();
    const pathName = usePathname();
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/auth/login");
        }
    });


    return (
        <section className="wrapper my-10">
            <div className="bg-white md:p-10 rounded-xl flex flex-col md:flex-row gap-7 overflow-hidden">
                <div className="relative">
                    <div className="bg-c-yellow md:rounded-xl min-w-[200px] p-5 
                [&_a]:block [&_a]:w-full  [&_a]:text-c-black2 [&_a]:py-1">
                        <ul className="flex md:flex-col gap-2">
                            <li><Link href="/user/home" className={` ${pathName == "/user/home" ? "font-bold" : null}`}>Projects</Link></li>
                            <li><Link href="/user/me" className={` ${pathName == "/user/me" ? "font-bold" : null}`}>Profile</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1 w-full">
                    <Basecontent>
                        {children}
                    </Basecontent>
                </div>
            </div>
        </section>

    )
}
