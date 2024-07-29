"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { VscAccount } from "react-icons/vsc";

export default function Header() {
  const { data: session, status } = useSession({
    required: false,
  });

  const router = useRouter();
  return (
    <div className="sticky top-0 bg-white z-20 ">
      <div className="wrapper flex items-center justify-between py-3">
        <div className="relative flex items-center gap-11">
          <Link href="/">
            <Image src="/images/logo.png" width={66} height={66} alt="logo" />
          </Link>
          <ul className="flex items-center font-medium text-sm gap-10">
            <li>
              <Link href="/portofolio">Portofolio</Link>
            </li>
            <li>
              <Link href="/location">Area Jangkauan</Link>
            </li>
            <li>
              <Link href="/">Tanya Harga</Link>
            </li>
          </ul>
        </div>
        <div className="relative gap-3 flex">
          {
            status !== "loading" ?
              session ?
                <>
                  <Button onClick={() => router.push(`/user/home`)} className="flex items-center">
                    <div className="flex items-center gap-2"><VscAccount />Dashboard</div>
                  </Button>
                  <Button variant="outline" onClick={() => signOut()}>Logout</Button>
                </>
                :
                <>
                  <Button variant="outline" onClick={() => router.push(`/author/login`)}>
                    {" "}
                    Login
                  </Button>
                  <Button onClick={() => router.push(`/author/register`)}>
                    Create Account
                  </Button>
                </> : null
          }
        </div>
      </div>
    </div>
  );
}
