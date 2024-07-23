import Link from "next/link";

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    return (
        <section className="wrapper my-10">
            <div className="bg-white p-10 rounded-xl flex gap-7">
                <div className="bg-c-yellow rounded-xl min-w-[200px] p-5 
                [&_a]:block [&_a]:w-full  [&_a]:text-c-black2 [&_a]:py-1">
                    <ul>
                        <li><Link href="/user/home">Home</Link></li>
                        <li><Link href="/user/me">Profile</Link></li>
                        <li><Link href="/auth/login">Keluar</Link></li>
                    </ul>
                </div>
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </section>

    )
}
