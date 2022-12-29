import React, {useEffect, useState} from 'react';
import {navbarData} from "../../data/navbar.data";
import {useRouter} from "next/router";
import Footer from "./footer";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {selectMenu, toggleMenu} from "../../redux/slices/menuSlice";
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import UserMenu from "./userMenu";
import {clearUserMenu, selectUserMenu, toggleUserMenu} from "../../redux/slices/userMenuSlice";

const Navbar = () => {
    const menu = useAppSelector(selectMenu);
    const {data: session, status} = useSession();
    const dispatch = useAppDispatch();
    const router = useRouter();
    const userMenu = useAppSelector(selectUserMenu);

    useEffect(() => {
        if (menu) {
            document.body.classList.add('overflow-hidden');
            dispatch(clearUserMenu());

        } else {
            document.body.classList.remove('overflow-hidden');
        }
    })

    return (
        <>
            <nav
                className={`h-14 w-screen flex justify-between items-center border-mirage border-b-2 ${menu ? "fixed" : "absolute"}`}>
                <button className="pl-5 lg:hidden" onClick={() => dispatch(toggleMenu())}>
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
                <div className="lg:items-center lg:h-full flex">
                    <div className="pl-5 lg:pr-48 lg:border-r-2 lg:items-center lg:h-full lg:flex border-mirage">
                        <Link href="/">
                            <h3 className="text-lynch">joeri-schenk</h3>
                        </Link>
                    </div>
                    <div className="h-full hidden lg:flex">
                        <ul className="flex h-full">
                            {navbarData.map((item, index) => (
                                <li key={index}
                                    className={`xl:px-8 px-4 border-r-2 border-mirage h-full flex items-center ${router.pathname === item.href ? "text-white border-b-4 translate-y-[2px] border-b-atomic-tangerine" : "text-lynch"}`}>
                                    <Link href={item.href}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <button onClick={() => dispatch(toggleUserMenu())}
                        className={`flex h-full ${status === "authenticated" ? "" : "hidden"}`}>
                    <div
                        className={`group flex xl:px-8 gap-x-2 px-4 lg:border-l-2 border-mirage h-full items-center text-lynch`}>
                        <img src={session?.user.profilePicture} alt={"Profile picture of" + session?.user.name}
                             className="w-7 h-7 object-fill rounded-full"/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor"
                             className={`w-3.5 h-3.5 group-hover:translate-y-1 transition-all duration-500 ${userMenu ? "translate-y-1" : "translate-y-0"}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                        </svg>
                    </div>
                </button>
                <div className={`flex h-full ${status === "authenticated" ? "hidden" : ""}`}>
                    <div
                        className={`hidden lg:flex xl:px-8 px-4 border-l-2 border-mirage h-full items-center ${router.pathname === '/auth/login' ? "text-white border-b-4 translate-y-[2px] border-b-atomic-tangerine" : "text-lynch"}`}>
                        <Link href="/auth/login"
                              className={`text-lynch`}>
                            _login
                        </Link>
                    </div>
                    <div
                        className={`hidden lg:flex xl:px-8 px-4 border-l-2 border-mirage h-full items-center ${router.pathname === '/auth/sign-up' ? "text-white border-b-4 translate-y-[2px] border-b-atomic-tangerine" : "text-lynch"}`}>
                        <Link href="/auth/sign-up"
                              className={`text-lynch`}>
                            _sign-up
                        </Link>
                    </div>
                </div>
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
                                <Link onClick={() => dispatch(toggleMenu())} href="/auth/login"
                                      className="px-5 text-white">
                                    _login
                                </Link>
                            </li>
                            <li className="w-full border-b-2 border-mirage py-4">
                                <Link onClick={() => dispatch(toggleMenu())} href="/auth/sign-up"
                                      className="px-5 text-white">
                                    _sign-up
                                </Link>
                            </li>
                        </ul>
                        <Footer/>
                    </div>
                )}
            </nav>
            <UserMenu/>
        </>
    );
};

export default Navbar;
