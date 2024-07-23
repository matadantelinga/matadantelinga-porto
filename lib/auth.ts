import type { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"

interface iUser {
    id: string
    token: string
    data: any
    message: string
    user?: any
}


export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        Credentials({
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials) {
                const res = await fetch(
                    `${process.env.URL_API}/auth/local/`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${process.env.KEY_API_POST}`,
                        },
                        body: JSON.stringify(credentials),
                    }
                );


                const user: iUser = await res.json();
                if (res.ok) {
                    return user;
                }
                return user;
            }
        }

        ),
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        })

    ],
    pages: {
        signIn: "/author/login",
        error: "*",
    },
}