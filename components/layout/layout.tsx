import React from 'react';
import Navbar from "../menu/navbar";
import Footer from "../menu/footer";
import {useAppDispatch} from "../../redux/store";
import {clearUserMenu} from "../../redux/slices/userMenuSlice";

interface Props {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
    const dispatch = useAppDispatch();

    return (
        <div>
            <Navbar/>
            <div onClick={() => dispatch(clearUserMenu())}>
                {children}
            </div>
            <div className="hidden lg:flex">
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;
