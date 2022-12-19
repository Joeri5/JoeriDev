import React, {useState} from 'react';
import {navbarData} from "../../data/navbar.data";
import {useRouter} from "next/router";
import Footer from "./footer";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {menuSlice, selectMenu, toggleMenu} from "../../redux/slices/menuSlice";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menu = useAppSelector(selectMenu);
    const dispatch = useAppDispatch();
    const router = useRouter();

    return (
        <nav className="absolute h-14 w-screen flex justify-between items-center border-mirage border-b-2">
            <div className="lg:items-center lg:h-full flex">
                <div className="pl-5 lg:pr-48 lg:border-r-2 lg:items-center lg:h-full lg:flex border-mirage">
                    <h3 className="text-lynch">joeri-schenk</h3>
                </div>
                <div className="h-full hidden lg:flex">
                    <ul className="flex h-full">
                        {navbarData.map((item, index) => (
                            <li key={index}
                                className={`px-8 border-r-2 border-mirage h-full flex items-center ${router.pathname === item.href ? "text-white border-b-4 translate-y-[2px] border-b-atomic-tangerine" : "text-lynch"}`}>
                                <a href={item.href} onClick={() => dispatch(toggleMenu())}>
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="hidden lg:flex px-5 border-l-2 border-mirage h-full items-center">
                <a href="/contact" className="text-lynch">
                    _contact-me
                </a>
            </div>
            <button className="pr-5 lg:hidden" onClick={() => dispatch(toggleMenu())}>
                {menu ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6 text-lynch">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6 text-lynch">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"/>
                    </svg>
                )}
            </button>
            {menu && (
                <div className="fixed h-[calc(100vh-3.5rem)] w-screen lg:hidden bg-midnight top-14">
                    <ul className="w-full">
                        {navbarData.map((item, index) => (
                            <li key={index} className="w-full border-b-2 border-mirage py-4">
                                <a href={item.href} className="px-5 text-white">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                        <li className="w-full border-b-2 border-mirage py-4">
                            <a href="/contact" className="px-5 text-white">
                                _contact-me
                            </a>
                        </li>
                    </ul>
                    <Footer/>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
