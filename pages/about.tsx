import React, {useState} from 'react';
import Head from "next/head";
import Layout from "../components/layout/layout";
import {useAppSelector} from "../redux/store";
import {selectMenu} from "../redux/slices/menuSlice";
import Folder from "../components/about/folder";
import {selectFile} from "../redux/slices/fileSlice";

const About = () => {
    const file = useAppSelector(selectFile);

    return (
        <>
            <Head>
                <title>joeri - about</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <main className="h-full min-h-screen lg:h-screen bg-midnight">
                    <div className="pt-20 pb-6 px-5 lg:hidden">
                        <p className="text-white">_about-me</p>
                    </div>
                    <div className="lg:pt-14 lg:flex">
                        <div
                            className="w-20 border-r-2 h-[calc(100vh-7rem)] border-mirage hidden lg:flex flex-col items-center py-5 space-y-10">
                            <div>
                                <img src="/terminal.svg" alt="terminal icon"/>
                            </div>
                            <div>
                                <img src="/light.svg" alt="light icon"/>
                            </div>
                            <div>
                                <img src="/game_icon.svg" alt="game controller icon"/>
                            </div>
                        </div>
                        <div className="border-r-2 border-r-mirage">
                            <Folder/>
                            {/*comment*/}
                        </div>
                        <div
                            className={`translate-x-[45vw] ${file ? "" : "border-l-2 border-l-mirage"} hidden lg:flex lg:flex-col w-[calc(100vw-15.425rem-5.25rem-45vw)]`}>
                            <div
                                className="h-[2.6375rem] w-full border-b-2 border-b-mirage w-full">
                            </div>
                            <div className="py-5 px-10 w-full whitespace-normal">
                                <p className="text-lynch">&#47;&#47; code snippet showcase:</p>
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
};

export default About;
