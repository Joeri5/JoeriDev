import React, {FormEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {
    clearForm,
    selectEmail,
    selectMessage,
    selectName,
    setEmail,
    setMessage,
    setName
} from "../../redux/slices/formSlice";
import {spring} from "../../pages/_app";
import axios from "axios";
import {useSession} from "next-auth/react";

const Form = () => {
    const {data: session, status} = useSession();
    const name = useAppSelector(selectName);
    const email = useAppSelector(selectEmail);
    const message = useAppSelector(selectMessage);
    const dispatch = useAppDispatch();
    const [response, setResponse] = useState({status: 0, message: null});

    //create a function to handle the form submission
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        //create a new object to hold the data
        const data = {
            name,
            email,
            message
        };

        //send the data to the server
        await axios.post('/api/contact', data).then((response) => {
            console.log(response);
            setResponse({status: response.status, message: response.data.message});
        }).catch((error) => {
            console.log(error);
        });

        //clear the form
        dispatch(clearForm());
    }

    if (status === "authenticated") {
        dispatch(setName(session.user.name));
        dispatch(setEmail(session.user.email));
    }

    return (
        <>
            {response.status === 200 && (
                <div className="flex flex-col pt-20 items-center space-y-2">
                    <div className="flex space-x-5 items-center">
                        <h1 className="text-3xl text-white">Thank you!</h1>
                        <img src="sign-of-the-horns.png" alt="sign of the horns emoji apple" className="w-8 h-8"/>
                    </div>
                    <p className="text-lynch text-lg text-center max-w-md">
                        Your message has been accepted. You will receive answer really soon!
                    </p>
                </div>
            )}
            {response.status === 400 && (
                <div className="flex flex-col pt-20 items-center space-y-2">
                    <div className="flex space-x-5 items-center">
                        <h1 className="text-3xl text-white">I&#39;m sorry!</h1>
                        <img src="thumbs-down.png" alt="sign of the horns emoji apple" className="w-8 h-8"/>
                    </div>
                    <p className="text-lynch text-lg text-center max-w-md">
                        Your message has not been accepted. Please try again later, if this problem keeps occurring
                        please contact me at my <a
                        href="mailto:joerischenk@icloud.com" className="text-lynch underline">email</a>!
                    </p>
                </div>
            )}
            <form className={`${response.status != 0 ? 'hidden' : ''} lg:space-y-5`} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-white mb-2 text-lynch">_name:</label>
                    <input type="text" name="name" id="name"
                           value={status === 'authenticated' ? session?.user.name : name}
                           onChange={(e) => dispatch(setName(e.target.value))}
                           className="w-full max-w-full bg-[#011221] text-opacity-50 border-2 focus-visible:outline-none focus:border-[#607B96] transition-colors duration-300 focus:outline-none focus:ring-transparent border-mirage rounded-md px-4 py-2 mb-4 text-lynch"/>
                </div>
                <div>
                    <label htmlFor="email" className="block text-white mb-2 text-lynch">_email:</label>
                    <input type="email" name="email" id="email"
                           value={status === 'authenticated' ? session?.user.email : email}
                           onChange={(e) => dispatch(setEmail(e.target.value))}
                           className="w-full bg-[#011221] text-opacity-50 border-2 focus-visible:outline-none focus:border-[#607B96] transition-colors duration-300 focus:outline-none focus:ring-transparent border-mirage rounded-md px-4 py-2 mb-4 text-lynch"/>
                </div>
                <div>
                    <label htmlFor="message" className="block text-white mb-2 text-lynch">_message:</label>
                    <textarea name="message" id="message"
                              value={message}
                              onChange={(e) => dispatch(setMessage(e.target.value))}
                              className="w-full bg-[#011221] text-opacity-50 resize-none h-[15rem] focus:border-[#607B96] transition-colors duration-300 border-2 focus-visible:outline-none focus:outline-none focus:ring-transparent border-mirage rounded-md px-4 py-2 mb-4 text-lynch"/>
                </div>
                <div>
                    <button type="submit" id="sendBtn"
                            className="text-white px-3 py-2 rounded-md bg-lynch bg-[#1C2B3A]">
                        submit-message
                    </button>
                </div>
            </form>
        </>
    );
};

export default Form;
