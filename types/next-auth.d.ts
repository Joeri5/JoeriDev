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
    }

    interface Profile {
        email: string;
        firstName: string;
        lastName: string;
        profilePicture: string;
    }

}

declare module "next-auth/jwt" {
    interface JWT {
        sub: number;
        email: string;
        firstName: string;
        lastName: string;
        profilePicture: string;
    }
}
