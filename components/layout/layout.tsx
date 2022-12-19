import React from 'react';
import Navbar from "../menu/navbar";
import Footer from "../menu/footer";

interface Props {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
    return (
        <div>
            <Navbar/>
            {children}
            <div className="hidden lg:flex">
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;
