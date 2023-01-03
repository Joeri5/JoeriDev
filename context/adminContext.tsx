import React, {useContext, useEffect} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

interface AdminContextProps {
    children: React.ReactNode;
}

export const AdminContext = React.createContext({});

export const AdminProvider = ({children}: AdminContextProps) => {
    const {data: session, status} = useSession();
    const router = useRouter();

    if (session?.user?.role === "ADMIN") {
        return (
            <AdminContext.Provider value={{}}>
                {children}
            </AdminContext.Provider>
        );
    } else {
        return null;
    }
};

export const useAdmin = () => {
    return useContext(AdminContext);
}
