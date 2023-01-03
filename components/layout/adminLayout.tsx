import React from 'react';
import Navigation from "../admin/navigation";

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout = ({children}: AdminLayoutProps) => {
    return (
        <div>
            <Navigation/>
            <div className="h-[calc(100vh-3.5rem)] bg-midnight">
                {children}
            </div>
        </div>
    );
};

export default AdminLayout;
