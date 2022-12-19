import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {selectFilter} from "../../redux/slices/filterSlice";

const Filter = () => {
    const [openFilter, setOpenFilter] = useState(false)
    const [filter, setFilter] = useState([
        {
            name: "React",
            active: false,
            icon: '/react.svg'
        },
        {
            name: "Next.js",
            active: false,
            icon: '/nextjs.svg'
        },
        {
            name: "Node.js",
            active: false,
            icon: '/nodejs.svg'
        },
        {
            name: "Express",
            active: false,
            icon: '/express.svg'
        },
        {
            name: "MongoDB",
            active: false,
            icon: '/mongodb.svg'
        },
        {
            name: "TypeScript",
            active: false,
            icon: '/typescript.svg'
        },
        {
            name: "JavaScript",
            active: false,
            icon: '/javascript.svg'
        },
        {
            name: "Java",
            active: false,
            icon: '/java.svg'
        },
    ])

    const activeFilter = useAppSelector(selectFilter)
    const dispatch = useAppDispatch()

    const handleFilter = (name: string) => {
        const newFilter = filter.map(item => {
            if (item.name === name) {
                item.active = !item.active;  // toggle the active state
                dispatch({
                    type: 'filter/setFilter',
                    payload: filter.map(item => item.active === true ? item.name : null).filter(item => item !== null)
                })
            }
            return item;
        });
        setFilter(newFilter);
    };


    // dispatch({type: 'filter/setFilter', payload: filter.map(item => item.active === true ? item.name : null)})

    return (
        <div>
            <div
                className="w-full lg:w-[15.425rem] h-[30px] px-5 lg:py-5 bg-mirage lg:bg-midnight flex lg:border-b-2 lg:border-b-mirage items-center space-x-5"
                onClick={() => setOpenFilter(!openFilter)}
            >
                <img src="/arrow.svg" alt="arrow svg"
                     className={`h-2.5 w-2.5 ${openFilter ? "" : "-rotate-90"}`}/>
                <p className="text-white">
                    projects
                </p>
            </div>
            {openFilter && (
                <div className="w-full flex flex-col space-y-4 py-5 px-7">
                    {filter.map((item, index) => (
                        <div
                            key={index}
                            className={`w-full h-[30px] px-5 flex items-center space-x-7 cursor-pointer ${item.active ? "bg-midnight" : ""}`}
                            onClick={() => handleFilter(item.name)}
                        >
                            <figure
                                className={`w-5 h-5 border-lynch border-2 rounded-sm flex items-center justify-center ${item.active ? "bg-lynch" : ""}`}>
                                {item.active && (
                                    <img src="/checkmark.svg" alt="checmark"/>
                                )}
                            </figure>
                            <div className="flex space-x-3 items-center">
                                <img src={item.icon} alt={item.name + "icon"} className="w-6 h-6"/>
                                <p className="text-white">
                                    {item.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Filter;
