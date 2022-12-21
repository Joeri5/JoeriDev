import React, {useState} from 'react';
import {useAppSelector} from "../../redux/store";
import {selectMenu} from "../../redux/slices/menuSlice";

const Options = () => {
    const [openOptions, setOpenOptions] = useState(false);
    const menu = useAppSelector(selectMenu);
    const [options, setOptions] = useState([
        {
            name: "contacts",
            active: false,
            content: [
                {
                    name: "email",
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-5 h-5 text-lynch group-hover:text-white">
                            <path
                                d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                            <path
                                d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                        </svg>
                    ),
                    content: 'email',
                    link: 'mailto:',
                },
                {
                    name: "email",
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                             stroke="currentColor" className="w-5 h-5 text-lynch group-hover:text-white">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                        </svg>

                    ),
                    content: 'phone',
                    link: 'mailto:',
                }
            ]
        },
        {
            name: "also-find-me-on",
            active: false,
            content: [
                {
                    name: "email",
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                             stroke="currentColor" className="w-5 h-5 text-lynch group-hover:text-white">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                        </svg>
                    ),
                    content: 'link',
                    link: 'mailto:',
                }
            ]
        }
    ]);

    const handleOptions = (name: string) => {
        const newOptions = options.map(item => {
            if (item.name === name) {
                item.active = !item.active;  // toggle the active state
            } else {
                item.active = false;
            }
            return item;
        });
        setOptions(newOptions);
    }

    return (
        <div className="space-y-1">
            {options.map((option, index) => (
                <>
                    <div
                        key={index}
                        className={`w-full lg:w-[20.425rem] h-[30px] px-5 lg:py-5 flex bg-mirage lg:bg-midnight lg:border-b-2 lg:border-b-mirage items-center space-x-5 ${menu ? "hidden lg:flex" : ""}`}
                        onClick={() => handleOptions(option.name)}
                    >
                        <img src="/arrow.svg" alt="arrow svg"
                             className={`h-2.5 w-2.5 ${option.active ? "" : "-rotate-90"}`}/>
                        <p className="text-white">
                            {option.name}
                        </p>
                    </div>
                    {option.active && (
                        <div className="lg:border-b-2 lg:border-mirage">
                            {option.content.map((content, index) => (
                                <a
                                    href={content.link}
                                    className={`h-[30px] w-fit ml-12 items-center group py-5 flex items-center space-x-3 ${menu ? "hidden lg:flex" : ""}`}
                                    key={index}
                                >
                                    {content.icon}
                                    <p className="text-lynch group-hover:text-white">
                                        {content.content}
                                    </p>
                                </a>
                            ))}
                        </div>
                    )}
                </>
            ))}
        </div>
    );
};

export default Options;
