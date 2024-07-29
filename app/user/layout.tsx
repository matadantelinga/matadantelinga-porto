"use client"
import Basecontent from "@/components/basecontent";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    const router = useRouter();
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/auth/login");
        }
    });

    return (
        <section className="wrapper my-10">
            <div className="bg-white p-10 rounded-xl flex gap-7">
                <div className="relative">
                    <div className="bg-c-yellow rounded-xl min-w-[200px] p-5 
                [&_a]:block [&_a]:w-full  [&_a]:text-c-black2 [&_a]:py-1">
                        <ul className="flex flex-col gap-2">
                            <li><Link href="/user/home">Home</Link></li>
                            <li><Link href="/user/me">Projects</Link></li>
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
