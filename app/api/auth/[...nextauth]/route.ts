import { authOptions } from "@/lib/auth"
import NextAuth from "next-auth/next"
import { NextResponse } from "next/server"

const handler = NextAuth(authOptions)

export async function GET() {
  return NextResponse.json("hello auth")
}


export { handler as POST }