"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import SessionWrapper from "./SessionWrapper";

export default function Header() {
  const { data: session, status } = useSession()

  console.log({ status })

  return (
    <div className="sticky top-0 bg-white z-20 ">
      <div className="wrapper flex items-center justify-between py-3">
        <div className="relative flex items-center gap-11">
          <Link href="/">
            <Image src="/images/logo.png" width={66} height={66} alt="logo" />
          </Link>
          <ul className="flex items-center font-medium text-sm gap-10">
            <li>
              <Link href="/">Portofolio</Link>
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
          <Button variant="outline">Login</Button>
          <Button>Create Account</Button>
        </div>
      </div>
    </div>
  );
}
