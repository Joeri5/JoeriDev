import React, {FormEvent, useState} from 'react';
import {AdminProvider} from "../../context/adminContext";
import Head from "next/head";
import AdminLayout from "../../components/layout/adminLayout";
import axios from "axios";
import {useSession} from "next-auth/react";

const Project = () => {
    const {data: session, status} = useSession();
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [slug, setSlug] = useState("");
    const [githubLink, setGithubLink] = useState("");
    const [demoLink, setDemoLink] = useState("");
    const [response, setResponse] = useState({status: 0, message: null});

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        //create a new object to hold the data
        const data = {
            title,
            tag,
            image,
            description,
            slug,
            githubLink,
            demoLink
        };

        //send the data to the server
        await axios.post('/api/project/create', data, {headers: {token: session?.user.accessToken}}).then((response) => {
            console.log(response);
            setResponse({status: response.status, message: response.data.message});
        }).catch((error) => {
            console.log(error);
        });
    }


    return (
        <>
            <AdminProvider>
                <Head>
                    <title>joeri - admin</title>
                    <meta name="description" content="Generated by create next app"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/icon.svg"/>
                </Head>
                <AdminLayout>
                    <main className="h-full bg-midnight text-lynch">
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
                            <input type="text" placeholder="tag" onChange={(e) => setTag(e.target.value)}/>
                            <input type="text" placeholder="image" onChange={(e) => setImage(e.target.value)}/>
                            <input type="text" placeholder="description"
                                   onChange={(e) => setDescription(e.target.value)}/>
                            <input type="text" placeholder="slug" onChange={(e) => setSlug(e.target.value)}/>
                            <input type="text" placeholder="githublink"
                                   onChange={(e) => setGithubLink(e.target.value)}/>
                            <input type="text" placeholder="demolink" onChange={(e) => setDemoLink(e.target.value)}/>
                            <button type="submit">submit</button>
                        </form>
                    </main>
                </AdminLayout>
            </AdminProvider>
        </>
    );
};

export default Project;
