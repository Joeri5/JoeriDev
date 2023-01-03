import React from 'react';
import Link from "next/link";

const Navigation = () => {
    return (
        <nav className="h-14 w-screen flex justify-between px-5 border-mirage border-b-2 bg-midnight">
            <ul>
                <li className="text-lynch lg:w-[25vw] flex items-center h-full lg:border-r-2 border-mirage">
                    <Link href={'/'}>
                        joeri-schenk
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
