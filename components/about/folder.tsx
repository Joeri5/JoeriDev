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
                                                         * Hi there! My name is Joeri Schenk
                                                         * and I am a software engineer
                                                         * specializing in web development. I
                                                         * have a strong background in
                                                         * Javascript and Typescript, and have
                                                         * experience working with various web
                                                         * frameworks such as Java Spring,
                                                         * ReactJS and NextJS. With over 5 years
                                                         * of experience in the field, I am
                                                         * confident in my abilities to deliver
                                                         * high-quality software solutions. In my
                                                         * past projects, I have consistently
                                                         * demonstrated my ability to learn
                                                         * new technologies quickly and work
                                                         * effectively in team environments. I am
                                                         * excited to bring my skills and
                                                         * experience to new challenges and
                                                         * opportunities.
                                                     **/`,
                                    contentMobile: `/**
                                                         About me
                                                         Hi there! My name is Joeri Schenk
                                                         in web development. I have a strong
                                                         background in Javascript and Typescript,
                                                         and have experience working with various
                                                         web frameworks such as Java Spring, ReactJS
                                                         and NextJS. With over 5 years of experience
                                                         in the field, I am confident in my abilities
                                                         to deliver high-quality software solutions.
                                                         In my past projects, I have consistently
                                                         demonstrated my ability to learn new technologies
                                                         quickly and work effectively in team environments.
                                                         I am excited to bring my skills and experience to
                                                         new challenges and opportunities.
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
                                {
                                    content: `/**
                                                         * Interests
                                                         * In my free time, I enjoy 
                                                         * participating in a variety of 
                                                         * activities that allow me to relax and 
                                                         * unwind. One of my favorite hobbies is 
                                                         * playing on my Xbox, as it allows me 
                                                         * to disconnect from the stresses of 
                                                         * work and have some fun. I also value 
                                                         * my relationships with my friends and 
                                                         * family, and enjoy spending time with 
                                                         * them at social events and gatherings.
                                                         *
                                                         * In addition to these more leisurely 
                                                         * pursuits, I am also passionate about 
                                                         * continuing to learn and grow in my
                                                         * field as a software engineer. I enjoy 
                                                         * self-study, and frequently seek out 
                                                         * new technologies and opportunities to 
                                                         * broaden my horizon and deepen my 
                                                         * knowledge. Lastly, I am a big believer 
                                                         * in the importance of physical fitness, 
                                                         * and enjoy working out at the gym to 
                                                         * maintain my health and well-being.
                                                     **/`,
                                    contentMobile: ``
                                }
                            ]
                        }
                    ]
                },
                {
                    title: "education", folderColor: "purple", open: false, subFiles: [
                        {
                            title: "education.md", open: false, content: [
                                {
                                    content: `/**
                                                         * Education
                                                         * In my formal education, I have 
                                                         * completed an informatics class at 
                                                         * High School and am currently enrolled
                                                         * in the Software Development course at 
                                                         * Mediacollege Amsterdam. This four-
                                                         * year program is designed to provide a 
                                                         * comprehensive education in software 
                                                         * development, and I have been able to 
                                                         * complete the first two years in just 
                                                         * one year, reducing the total length of 
                                                         * the program to three years.
                                                         * 
                                                         * In addition to my formal education, I 
                                                         * have also gained valuable experience 
                                                         * through self-study and personal 
                                                         * projects. I have spent many hours 
                                                         * learning through online courses and 
                                                         * watching YouTube tutorials, and have 
                                                         * completed several projects on my own 
                                                         * time. This self-directed learning has 
                                                         * allowed me to develop a strong 
                                                         * foundation in software development and 
                                                         * continuously improve my skills.
                                                     **/`,
                                    contentMobile: ``
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            title: "professional-info", open: false, subFolders: [
                {
                    title: "career", folderColor: "pink", open: false, subFiles: [
                        {
                            title: "career.md", open: false, content: [
                                {
                                    content: `/**
                                                         * Professional information
                                                         * Hi there! My name is Joeri Schenk
                                                         * and I am a software engineer
                                                         *  with a strong background in web
                                                         * development. I began my career by
                                                         * writing simple HTML websites, and
                                                         * later pursued a formal education at
                                                         * High School Since then, I have been 
                                                         * continuously learning and expanding my 
                                                         * skillset, with a focus on languages 
                                                         * such as Javascript, Typescript, Java, 
                                                         * and Nodejs.
                                                         *
                                                         * I am currently enrolled in the 
                                                         * Software Development course at 
                                                         * Mediacollege Amsterdam, where I am 
                                                         * learning the latest best practices and 
                                                         * technologies in the field. My ultimate 
                                                         * goal is to become a proficient and 
                                                         * experienced software developer, 
                                                         * constantly learning and growing in my 
                                                         * career.
                                                     **/`,
                                    contentMobile: ``
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            title: "hobby's", open: false, subFolders: [
                {
                    title: "hobby", folderColor: "pink", open: false, subFiles: [
                        {
                            title: "hobby.md", open: false, content: [
                                {
                                    content: `/**
                                                         * Professional information
                                                         * In my free time, I enjoy a variety of 
                                                         * hobbies and interests that allow me 
                                                         * to relax and unwind. One of my 
                                                         * favorite activities is spending time 
                                                         * with friends and family, whether it's 
                                                         * hosting a game night at home or 
                                                         * planning a day out to a local museum 
                                                         * or attraction. I am also an avid 
                                                         * fitness enthusiast, and enjoy working 
                                                         * out at the gym or going for runs in my 
                                                         * spare time.
                                                         * 
                                                         * Another passion of mine is travel, and 
                                                         * I love exploring new places and 
                                                         * cultures. I also have a strong 
                                                         * interest in computers and technology, 
                                                         * and enjoy tinkering with computers, 
                                                         * learning about how they work both 
                                                         * internally and externally. Whether I'm 
                                                         * building a new system from scratch or 
                                                         * simply troubleshooting an issue, I 
                                                         * find working with computers to be a 
                                                         * rewarding and enjoyable hobby.
                                                     **/`,
                                    contentMobile: ``
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            title: "contacts", open: false, subFolders: [
                {
                    title: "contact", folderColor: "pink", open: false, subFiles: [
                        {
                            title: "contact", open: false, content: [
                                {
                                    content: `/**
                                                         * Contact
                                                         *
                                                         * email: joerischenk@icloud.com
                                                         * phone: +31 6 24 77 87 97
                                                         * linkedin: Joeri Schenk
                                                         * github: Joeri5
                                                         *
                                                     **/`,
                                    contentMobile: ``
                                }
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
            <div className="lg:w-[calc(100vw-15.425rem-5rem)] lg:h-[calc(100vh-7rem)] ">
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
                                                                         className="w-full lg:w-[35vw] flex items-center space-x-5 lg:space-x-0">
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
                                                                            <div key={contentIndex}
                                                                                 className="py-10 text-[0.75rem] xl:text-sm">
                                                                                <div>
                                                                                    {lines.map((line, lineIndex) => (
                                                                                        <p key={lineIndex}
                                                                                           className="text-lynch lg:px-10 lg:flex lg:flex-row hidden">
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
