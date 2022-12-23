import NextAuth, {NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {spring} from "../../_app";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(credentials) {
                try {
                    const response = await spring.post('/v1/auth/login', credentials);
                    if (response.status === 200) {
                        const token = response.data.accessToken;
                        const identify = await spring.get('/v1/users/identify', {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        });
                        if (identify.status === 200) {
                            return identify.data;
                        }
                        return null;
                    }
                    return null;
                } catch (error) {
                    console.error(error);
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async signIn({ user, profile }) {
            if (user) {

            }

            return user != null;
        },
        async jwt({ token, account, profile }) {
            console.log({token, account, profile})
            return token
        }
    }
}

export default NextAuth(authOptions)