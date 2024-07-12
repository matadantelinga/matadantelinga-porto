// mark as client component
"use client";
import { SessionProvider, useSession } from "next-auth/react"
import React from 'react'
import { Session } from 'next-auth'

const SessionWrapper = ({ children, session }: { children: React.ReactNode, session?: Session }) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}

export default SessionWrapper