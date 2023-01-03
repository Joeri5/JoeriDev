import "next-auth";
import "next-auth/jwt";
import "next-auth/core";

declare module "next-auth" {

    interface Session {
        user: {
            id: number;
            email: string;
            firstName: string;
            lastName: string;
            name: string;
            profilePicture: string;
            role: string;
            accessToken: string;
        }
    }

    interface DefaultUser {
        id: number;
    }

    interface User {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        profilePicture: string;
        role: string;
        accessToken: string;
    }

    interface Profile {
        email: string;
        firstName: string;
        lastName: string;
        profilePicture: string;
        role: string;
        accessToken: string;
    }

}

declare module "next-auth/jwt" {
    interface JWT {
        sub: number;
        email: string;
        firstName: string;
        lastName: string;
        profilePicture: string;
        role: string;
        accessToken: string;
    }
}
