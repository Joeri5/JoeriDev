import NextAuth, {NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {spring} from "../../_app";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(credentials) {
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
            }
        })
    ],

    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.firstName = user.firstName;
                token.lastName = user.lastName;
                token.name = user.firstName + " " + user.lastName;
            }

            return token;
        },
        async session({ session, token }) {
            session.user.id = token.sub;
            session.user.email = token.email;
            session.user.firstName = token.firstName;
            session.user.lastName = token.lastName;
            return session
        }
    }
}

export default NextAuth(authOptions)
