import React, {useEffect, useState} from 'react';
import axios from "axios";
import {selectPopup, togglePopup} from "../../redux/slices/popupSlice";
import {useAppDispatch, useAppSelector} from "../../redux/store";

interface Props {
    title: string;
    image: string;
    id: number;
}

const Popup = ({title, image, id}: Props) => {
    const [input, setInput] = useState('');
    const [enabled, setEnabled] = useState(false);
    const popup = useAppSelector(selectPopup);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (input === title) {
            setEnabled(true);
        } else {
            setEnabled(false);
        }
    })

    const deleteProject = async (id: number) => {
        await axios.delete(`/api/project/delete/${id}`).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="absolute top-0 w-screen h-screen flex items-center justify-center">
            <div
                className="scale-75 z-50 lg:scale-90 md:w-2/3 xl:w-1/2 2xl:w-[35vw] 2xl:h-[60vh] bg-white text-black z-50">
                <div className="border-b p-5">
                    <p className="flex items-center">Delete Project <span
                        className="text-xl pl-3 pr-1 text-royal-blue">&lt;</span>{title}<span
                        className="text-royal-blue font-medium pl-1">&#47;</span><span
                        className="text-xl text-royal-blue">&gt;</span>
                    </p>
                </div>
                <div className="m-7 space-y-7">
                    <div className="bg-[#FEFBED] rounded-lg p-5 flex items-center gap-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D9A339"
                             className="w-10 h-10">
                            <path fillRule="evenodd"
                                  d="M11.484 2.17a.75.75 0 011.032 0 11.209 11.209 0 007.877 3.08.75.75 0 01.722.515 12.74 12.74 0 01.635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 01-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 01.722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zM12 15a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75H12z"
                                  clipRule="evenodd"/>
                        </svg>
                        <p className="text-xs text-[#854E20]">All the data for this project will be removed. The
                            changes will be permanent and cannot be rolled back</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium">Are you sure you want to delete this project?</p>
                    </div>
                    <div
                        className="flex gap-5 items-center ring ring-gray-50/5 drop-shadow rounded-lg p-2 bg-white">
                        <img src={image} alt={"project image of" + title}
                             className="w-12 h-12 object-fill object-center rounded-lg"/>
                        <div className="space-y-0.5">
                            <p className="font-medium">{title}</p>
                            <p className="text-xs opacity-50">{title}</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p className="text-sm">Please type <span className="font-bold">{title}</span> to confirm</p>
                        <input type="text"
                               onChange={(e) => setInput(e.target.value)}
                               className="w-full border border-2 border-gray-300 p-2 focus-visible:outline-none text-sm focus:outline-none focus:ring-transparent"/>
                    </div>
                    <div className="flex justify-end gap-10">
                        <button className="text-xs" onClick={() => dispatch(togglePopup())}>
                            Cancel
                        </button>
                        <button
                            disabled={enabled ? false : true}
                            onClick={() => (deleteProject(id), dispatch(togglePopup()))}
                            className={`text-xs bg-red-500 text-white py-3 px-5 rounded-md font-medium disabled:opacity-50 ${enabled ? "hover:cursor-pointer " : "hover:cursor-not-allowed"}`}>Delete
                            Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
