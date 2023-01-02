import React, {useEffect} from 'react';
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
                <div className="lg:items-center lg:h-full flex">
                    <div className="pl-5 lg:pr-48 lg:border-r-2 lg:items-center lg:h-full lg:flex border-mirage">
                        <Link href="/" onClick={() => dispatch(clearUserMenu())}>
                            <h3 className="text-lynch">joeri-schenk</h3>
                        </Link>
                    </div>
                    <div className="h-full hidden lg:flex">
                        <ul className="flex h-full">
                            {navbarData.map((item, index) => (
                                <li key={index}
                                    className={`xl:px-8 px-4 border-r-2 border-mirage h-full flex items-center ${router.pathname === item.href ? "text-white border-b-4 translate-y-[2px] border-b-atomic-tangerine" : "text-lynch"}`}>
                                    <Link href={item.href} onClick={() => dispatch(clearUserMenu())}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <button onClick={() => dispatch(toggleUserMenu())}
                        className={`hidden h-full ${status === "authenticated" ? "lg:flex" : "hidden"}`}>
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
                            <li className={`py-5 px-5 flex items-center space-x-5 border-b-2 border-mirage ${status === "authenticated" ? "" : "hidden"}`}>
                                <img src={session?.user.profilePicture} alt={"Profile image of" + session?.user.name}
                                     className="w-10 h-10 rounded-full object-fill object-center"/>
                                <div className="space-y-1">
                                    <p className="text-sm text-white">{session?.user.name}</p>
                                    <p className="text-xs text-white opacity-50">{session?.user.email}</p>
                                </div>
                            </li>
                            {navbarData.map((item, index) => (
                                <li key={index} className="w-full border-b-2 border-mirage py-4">
                                    <Link href={item.href}
                                          onClick={() => dispatch(toggleMenu())}
                                          className={`px-5 text-white`}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                            <li className={`w-full border-b-2 border-mirage py-4 ${status === "authenticated" ? "" : "hidden"}`}>
                                <button onClick={() => dispatch(toggleMenu()) && signOut()}
                                        className="px-5 text-white flex gap-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"/>
                                    </svg>
                                    _settings
                                </button>
                            </li>
                            <li className={`w-full border-b-2 border-mirage py-4 ${status === "authenticated" ? "" : "hidden"}`}>
                                <button onClick={() => dispatch(toggleMenu()) && signOut()}
                                        className="px-5 text-white flex gap-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/>
                                    </svg>
                                    _logout
                                </button>
                            </li>
                            <li className={`w-full border-b-2 border-mirage py-4 ${status === "authenticated" ? "hidden" : ""}`}>
                                <Link onClick={() => dispatch(toggleMenu())} href="/auth/login"
                                      className="px-5 text-white">
                                    _login
                                </Link>
                            </li>
                            <li className={`w-full border-b-2 border-mirage py-4 ${status === "authenticated" ? "hidden" : ""}`}>
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
