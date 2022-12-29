import React from 'react';
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import {useAppSelector} from "../../redux/store";
import {selectUserMenu} from "../../redux/slices/userMenuSlice";

const UserMenu = () => {
    const {data: session} = useSession();
    const userMenu = useAppSelector(selectUserMenu);

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
                    <Link href="/auth/profile"
                          className="px-6 py-3 text-xs w-full flex gap-5 items-end text-white text-left hover:bg-[#011221]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"/>
                        </svg>
                        _settings
                    </Link>
                </div>
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
