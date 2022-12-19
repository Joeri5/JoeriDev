import React, {useState} from 'react';
import {useAppSelector} from "../../redux/store";
import {selectMenu} from "../../redux/slices/menuSlice";
import {selectFile, toggleFile} from "../../redux/slices/fileSlice";
import {useDispatch} from "react-redux";

const Folder = () => {
    const [aboutFolders, setAboutFolders] = useState([
        {
            title: "personal-info", open: false, subFolders: [
                {
                    title: "bio", folderColor: "pink", open: false, subFiles: [
                        {
                            title: "bio.md", open: false, content: [
                                {
                                    content: `/**
                                                         * About me
                                                         * I have 5 years of еxperience in web
                                                         * development lorem ipsum dolor sit amet, 
                                                         * consectetur adipiscing elit, sed do eiusmod
                                                         * tempor incididunt ut labore et dolore
                                                         * magna aliqua. Ut enim ad minim veniam,
                                                         * quis nostrud exercitation ullamco laboris
                                                         * nisi ut aliquip ex ea commodo consequat.
                                                         * Duis aute irure dolor in reprehenderit in
                                                         *
                                                         * Duis aute irure dolor in reprehenderit in
                                                         * voluptate velit esse cillum dolore eu fugiat 
                                                         * nulla pariatur. Excepteur sint occaecat 
                                                         * officia deserunt mollit anim id est laborum.
                                                     */`,
                                    contentMobile: `/**
                                                         About me
                                                         I have 5 years of еxperience in web
                                                         development lorem ipsum dolor sit amet, 
                                                         consectetur adipiscing elit, sed do eiusmod
                                                         tempor incididunt ut labore et dolore
                                                         magna aliqua. Ut enim ad minim veniam,
                                                         quis nostrud exercitation ullamco laboris
                                                         nisi ut aliquip ex ea commodo consequat.
                                                         Duis aute irure dolor in reprehenderit in
                                                         Duis aute irure dolor in reprehenderit in
                                                         voluptate velit esse cillum dolore eu fugiat 
                                                         nulla pariatur. Excepteur sint occaecat 
                                                         officia deserunt mollit anim id est laborum.
                                                     */`,
                                }
                            ]
                        }
                    ]
                },
                {
                    title: "interests", folderColor: "turquoise", open: false, subFiles: [
                        {
                            title: "interests.md", open: false, content: [
                                {content: "title", contentMobile: ``}
                            ]
                        }
                    ]
                },
                {
                    title: "education", folderColor: "purple", open: false, subFiles: [
                        {
                            title: "education.md", open: false, content: [
                                {content: "title", contentMobile: ``}
                            ]
                        }
                    ]
                },
            ]
        },
        {
            title: "professional-info", open: false, subFolders: [
                {
                    title: "name", folderColor: "pink", open: false, subFiles: [
                        {
                            title: "name", open: false, content: [
                                {content: "title", contentMobile: ``}
                            ]
                        }
                    ]
                },
            ]
        },
        {
            title: "hobbies", open: false, subFolders: [
                {
                    title: "name", folderColor: "pink", open: false, subFiles: [
                        {
                            title: "name", open: false, content: [
                                {content: "title", contentMobile: ``}
                            ]
                        }
                    ]
                },
            ]
        },
        {
            title: "contacts", open: false, subFolders: [
                {
                    title: "name", folderColor: "pink", open: false, subFiles: [
                        {
                            title: "name", open: false, content: [
                                {content: "title", contentMobile: ``}
                            ]
                        }
                    ]
                },
            ]
        },
    ])
    const menu = useAppSelector(selectMenu);
    const file = useAppSelector(selectFile);
    const dispatch = useDispatch();

    const toggleFolder = (index: number) => {
        setAboutFolders(aboutFolders.map((folder, i) => {
                if (i === index) {
                    folder.open = !folder.open
                } else {
                    folder.open = false
                }
                return folder
            })
        );
    }

    const toggleSubFolder = (index: number, subIndex: number) => {
        setAboutFolders(aboutFolders.map((folder, i) => {
                if (i === index) {
                    folder.subFolders.map((subFolder, j) => {
                        if (j === subIndex) {
                            subFolder.open = !subFolder.open
                        } else {
                            subFolder.open = false
                        }
                        return subFolder
                    })
                }
                return folder
            })
        );
    }

    const toggleSubFile = (index: number, subIndex: number, subFileIndex: number) => {
        setAboutFolders(aboutFolders.map((folder, i) => {
                if (i === index) {
                    folder.subFolders.map((subFolder, j) => {
                        if (j === subIndex) {
                            subFolder.subFiles.map((subFile, k) => {
                                if (k === subFileIndex) {
                                    subFile.open = !subFile.open
                                    dispatch(toggleFile())
                                } else {
                                    // subFile.open = false
                                }
                                return subFile
                            })
                        }
                        return subFolder
                    })
                }
                return folder
            })
        );
    }

    return (
        <div className="lg:w-[15.425rem] lg:flex">
            <div className="space-y-1">
                {aboutFolders.map((folder, index) => (
                    <>
                        <div key={index}
                             className="w-full lg:w-[15.425rem] h-[30px] px-5 lg:py-5 bg-mirage lg:bg-midnight flex lg:border-b-2 lg:border-b-mirage items-center space-x-5"
                             onClick={() => toggleFolder(index)}>
                            <img src="/arrow.svg" alt="arrow svg"
                                 className={`h-2.5 w-2.5 ${folder.open ? "" : "-rotate-90"} ${menu ? "opacity-0" : ""}`}/>
                            <p className="text-white">
                                {folder.title}
                            </p>
                        </div>
                        {folder.open && (
                            <div className="px-12 lg:pl-12 lg:pr-0 py-2 lg:border-b-2 lg:border-b-mirage">
                                {folder.subFolders.map((subFolder, subIndex) => (
                                    <>
                                        <div key={subIndex}
                                             className="w-full h-[30px] flex items-center space-x-5"
                                             onClick={() => toggleSubFolder(index, subIndex)}>
                                            <img src="/arrow-right.svg" alt="arrow svg"
                                                 className={`h-2.5 w-2.5 ${subFolder.open ? "rotate-90" : ""} ${menu ? "opacity-0" : ""}`}/>
                                            {subFolder.folderColor === "pink" && (
                                                <img src="/folder-pink.svg" alt="pink folder"/>
                                            )}
                                            {subFolder.folderColor === "turquoise" && (
                                                <img src="/folder-turquoise.svg" alt="turquoise folder"/>
                                            )}
                                            {subFolder.folderColor === "purple" && (
                                                <img src="/folder-purple.svg" alt="purple folder"/>
                                            )}
                                            <p className={`${subFolder.open ? "text-white" : "text-lynch"} hover:text-white`}>
                                                {subFolder.title}
                                            </p>
                                        </div>
                                        {subFolder.open && (
                                            <>
                                                <div className="px-7">
                                                    {subFolder.subFiles.map((subFile, subFileIndex) => (
                                                        <div key={subFileIndex}
                                                             onClick={() => toggleSubFile(index, subIndex, subFileIndex)}
                                                             className="w-full h-[30px] flex items-center space-x-5">
                                                            <img src="/markdown.svg" alt=""/>
                                                            <p className={`${subFile.open ? "text-white" : "text-lynch"} hover:text-white`}>
                                                                {subFile.title}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </>
                                ))}
                            </div>
                        )}
                    </>
                ))}
            </div>
            {/*display content right here*/}
            <div className="lg:w-[calc(100vw-15.425rem-5rem)] border-r-2 lg:h-[calc(100vh-7rem)] lg:border-r-mirage">
                {aboutFolders.map((folder, index) => (
                    <>
                        {folder.open && (
                            <div className="px-5 lg:px-0 py-10 lg:py-0">
                                {folder.subFolders.map((subFolder, subIndex) => (
                                    <>
                                        {subFolder.open && (
                                            <>
                                                <div className="px-7 lg:px-0">
                                                    {subFolder.subFiles.map((subFile, subFileIndex) => (
                                                        <>
                                                            {subFile.open && (
                                                                <>
                                                                    <div key={subFileIndex}
                                                                         className="w-full lg:w-[45vw] flex items-center space-x-5 lg:space-x-0">
                                                                        <p className={`${subFile.open ? "text-white" : "text-lynch"} lg:hidden hover:text-white`}>
                                                                            &#47;&#47;{" "}{folder.title} <span
                                                                            className="text-lynch"> / {subFolder.title}</span>
                                                                        </p>
                                                                        <p className="border-b-2 border-mirage w-full px-5 py-[0.4125rem] text-lynch hidden lg:block">
                                                                            <span
                                                                                className="border-r-2 h-full lg:py-2.5 border-mirage pr-5 space-x-14">
                                                                                <span>
                                                                                {folder.title}
                                                                                </span>
                                                                                <button
                                                                                    onClick={() => toggleSubFile(index, subIndex, subFileIndex)}
                                                                                    className="translate-y-[0.3125rem]">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        fill="none" viewBox="0 0 24 24"
                                                                                        strokeWidth={1.5}
                                                                                        stroke="currentColor"
                                                                                        className="w-5 h-5">
                                                                                            <path strokeLinecap="round"
                                                                                                  strokeLinejoin="round"
                                                                                                  d="M6 18L18 6M6 6l12 12"/>
                                                                                    </svg>
                                                                                </button>
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    {subFile.content.map((content, contentIndex) => {
                                                                        const lines = content.content.split('\n');

                                                                        return (
                                                                            <div key={contentIndex} className="py-5">
                                                                                <div>
                                                                                    {lines.map((line, lineIndex) => (
                                                                                        <p key={lineIndex}
                                                                                           className="text-lynch lg:px-5 lg:flex lg:flex-row hidden">
                                                                                            <span
                                                                                                className={`hidden lg:flex ${lineIndex >= 9 ? "pr-[20px]" : "pr-[30px]"}`}>{lineIndex + 1}</span>
                                                                                            {line}
                                                                                        </p>
                                                                                    ))}
                                                                                </div>
                                                                            </div>
                                                                        );
                                                                    })}
                                                                    <p className="text-lynch lg:hidden">
                                                                        {subFile.content[0].contentMobile}
                                                                    </p>
                                                                </>
                                                            )}
                                                        </>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </>
                                ))}
                            </div>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
};

export default Folder;
