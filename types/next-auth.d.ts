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
        }
    }

    interface User {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
    }

}

declare module "next-auth/jwt" {
    interface JWT {
        sub: number;
        email: string;
        firstName: string;
        lastName: string;
    }
}

declare module "next-auth/core" {
    interface Profile {
        sub: number;
        email: string;
        firstName: string;
        lastName: string;
    }
}