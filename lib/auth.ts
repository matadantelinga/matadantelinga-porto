import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials"

interface iUser {
    id: string
    token: string
    data: any
    message: string
    user?: any
}

interface iUserResponse {
    token: string;
}

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
                    `https://superadmin.planetdekor.id/api/auth/local/`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(
                            {
                                "identifier": "pras_so_jo@yahoo.co.id",
                                "password": "123456"
                            }
                        ),
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
    ],

    pages: {
        signIn: "/auth/login",
        error: "*",
    },

    // callbacks: {
    //     async jwt({ token, user }: any) {
    //         if (user) {
    //             console.log({ user })
    //             token.accessToken = user.token;
    //             token.user = user.data.user;
    //             token.message = user.message;
    //         }
    //         return token;
    //     },
    //     async session({ session, token, user }) {
    //         session.user = token
    //         return {
    //             ...session,
    //             user: {
    //                 ...session.user,
    //                 accessToken: token.accessToken,
    //                 message: token.message,
    //                 user: token.user,
    //             },
    //             token: token.accessToken,
    //         };
    //     },
    // },


}
