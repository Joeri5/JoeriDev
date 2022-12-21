import React from 'react';
import Head from "next/head";
import Layout from "../components/layout/layout";
import Options from "../components/contact/options";
import Form from "../components/contact/form";

const Contact = () => {
    return (
        <>
            <Head>
                <title>joeri - contact</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/icon.svg"/>
            </Head>
            <Layout>
                <main className="h-full min-h-screen lg:w-screen overflow-x-hidden lg:h-screen bg-midnight">
                    <div className="lg:pt-14 pb-6 lg:flex">
                        <div className="pt-20 lg:pt-14 pb-6 lg:flex">
                            <p className="text-white px-5 lg:hidden">_contact</p>
                        </div>
                        <div className="lg:border-r-2 border-mirage lg:h-[calc(100vh-7rem)]">
                            <Options/>
                        </div>
                        <div className="lg:flex lg:flex-col">
                            <div
                                className="hidden lg:flex h-[2.6375rem] border-b-2 border-mirage px-5 w-[calc(100vw-20.425rem)]">
                                <div className="flex gap-14 items-center border-r-2 pr-5 border-mirage">
                                    <p className={``}>
                                        <span className="text-lynch">contacts</span>
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor"
                                         className="w-5 h-5 text-lynch hover:cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="lg:p-20 px-10 py-10">
                                <Form/>
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
};

export default Contact;
