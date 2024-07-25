import type { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"

// interface iUser {
//     id: string
//     token: string
//     data: any
//     message: string
//     user?: any
// }


export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        Credentials({
            credentials: {
                identifier: {
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


                const user: any = await res.json();
                if (res.ok) {
                    return user;
                }
                return user;
            }
        }
        ),

    ],

    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.accessToken = user?.jwt;
                token.user = user?.user;
            }
            return token;
        },
        async session({ session, token }: any) {
            session.jwt = token?.accessToken;
            session.user = token?.user;
            return session;
        },
    },
    pages: {
        signIn: "/author/login",
        error: "*",
    },
}