import React from 'react';
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {clearUserMenu, selectUserMenu} from "../../redux/slices/userMenuSlice";

const UserMenu = () => {
    const {data: session} = useSession();
    const userMenu = useAppSelector(selectUserMenu);
    const dispatch = useAppDispatch();

    return (
        <div className={`${userMenu ? "" : "hidden"} absolute z-50 top-16 right-6 flex flex-col items-end`}>
            <div
                className="h-3.5 w-3.5 origin-bottom-left -translate-x-5 rotate-45 transform flex flex-col bg-mirage"></div>
            <div className="py-5 bg-mirage">
                <div className="flex items-center space-x-3 px-5 pb-3">
                    <img src={session?.user.profilePicture} alt={"profile picture of" + session?.user.name}
                         className="w-8 h-8 rounded-full"/>
                    <div className="space-y-1">
                        <p className="text-white text-xs">{session?.user.name}</p>
                        <p className="text-white text-xs opacity-50">{session?.user.email}</p>
                    </div>
                </div>
                <div>
                    <Link href="/auth/settings"
                          onClick={() => dispatch(clearUserMenu())}
                          className="px-6 py-3 text-xs w-ful    l flex gap-5 items-end text-white text-left hover:bg-[#011221]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"/>
                        </svg>
                        _settings
                    </Link>
                </div>
                {session?.user.role === "ADMIN" && (
                    <div>
                        <Link href="/admin"
                              onClick={() => dispatch(clearUserMenu())}
                              className="px-6 py-3 text-xs w-full flex gap-5 items-end text-white text-left hover:bg-[#011221]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/>
                            </svg>
                            _admin
                        </Link>
                    </div>
                )}
                <div>
                    <button onClick={() => signOut()}
                            className="px-6 py-3 text-xs w-full flex gap-5 items-end text-white text-left hover:bg-[#011221]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/>
                        </svg>
                        _logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserMenu;
