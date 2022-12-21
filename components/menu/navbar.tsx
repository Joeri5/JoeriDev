import React, {useEffect, useState} from 'react';
import {navbarData} from "../../data/navbar.data";
import {useRouter} from "next/router";
import Footer from "./footer";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {clearMenu, menuSlice, selectMenu, toggleMenu} from "../../redux/slices/menuSlice";
import Link from "next/link";

const Navbar = () => {
    const menu = useAppSelector(selectMenu);
    const dispatch = useAppDispatch();
    const router = useRouter();


    useEffect(() => {
        if (menu) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    })

    return (
        <nav
            className={`h-14 w-screen flex justify-between items-center border-mirage border-b-2 ${menu ? "fixed" : "absolute"}`}>
            <div className="lg:items-center lg:h-full flex">
                <div className="pl-5 lg:pr-48 lg:border-r-2 lg:items-center lg:h-full lg:flex border-mirage">
                    <h3 className="text-lynch">joeri-schenk</h3>
                </div>
                <div className="h-full hidden lg:flex">
                    <ul className="flex h-full">
                        {navbarData.map((item, index) => (
                            <li key={index}
                                className={`px-8 border-r-2 border-mirage h-full flex items-center ${router.pathname === item.href ? "text-white border-b-4 translate-y-[2px] border-b-atomic-tangerine" : "text-lynch"}`}>
                                <Link href={item.href}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div
                className={`hidden lg:flex px-5 border-l-2 border-mirage h-full items-center ${router.pathname === '/contact' ? "text-white border-b-4 translate-y-[2px] border-b-atomic-tangerine" : "text-lynch"}`}>
                <Link href="/contact"
                      className={`text-lynch`}>
                    _contact-me
                </Link>
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
                                <Link href={item.href}
                                      onClick={() => dispatch(toggleMenu())}
                                      className={`px-5 text-white`}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        <li className="w-full border-b-2 border-mirage py-4">
                            <Link onClick={() => dispatch(toggleMenu())} href="/contact" className="px-5 text-white">
                                _contact-me
                            </Link>
                        </li>
                    </ul>
                    <Footer/>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
