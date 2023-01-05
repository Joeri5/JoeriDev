import React from 'react';
import Link from "next/link";
import {useAppDispatch} from "../../redux/store";
import {toggleAddProject} from "../../redux/slices/addProjectSlice";

const Navigation = () => {
    const dispatch = useAppDispatch();

    return (
        <nav className="h-14 w-screen flex justify-between items-center px-5 border-mirage border-b-2 bg-midnight">
            <ul className="flex w-full justify-between h-full items-center">
                <li className="text-lynch lg:w-[25vw] flex items-center h-full lg:border-r-2 border-mirage">
                    <Link href={'/'}>
                        joeri-schenk
                    </Link>
                </li>
                <button className="bg-lynch h-8 w-16 text-sm text-white" onClick={() => dispatch(toggleAddProject())}>
                    new
                </button>
            </ul>
        </nav>
    );
};

export default Navigation;
