import React from 'react';

interface Props {
    title: string;
    tag: string;
    image: string;
    description: string;
    link: string;
    icon: string;
    color: string;
    github: string;
}

const Project = ({title, tag, image, description, link, icon, color, github}: Props) => {
    return (
        <div className="px-5 py-5 space-y-3">
            <div className="flex">
                <p className="text-royal-blue font-semibold">{title}</p>
                <p className="text-lynch">&nbsp;&#47; {tag}</p>
            </div>
            <div>
                <div className="relative">
                    <div
                        className="absolute text-white mt-5 mr-5 right-0">
                        <div className={`w-8 h-8 flex items-center justify-center rounded-md`}
                             style={{background: color}}>
                            <img src={icon} alt={tag + "icon"} className="w-6 h-6"/>
                        </div>
                    </div>
                    <img src={image} alt={title}
                         className="h-[12.5rem] w-full object-cover object-center rounded-t-2xl"/>
                </div>
                <div className="h-[15rem] w-full bg-[#011221] rounded-b-2xl p-10 flex flex-col justify-between">
                    <p className="text-lynch">{description}</p>
                    <div className="flex justify-between w-full">
                        <a href={link}
                           target={"_blank"}
                           rel={"noreferrer"}
                           className="bg-[#1C2B3A] px-5 py-2 flex items-center justify-center rounded-lg text-white">view-project</a>
                        <a href={github} target={"_blank"} rel={"noreferrer"}
                           className="bg-[#1C2B3A] px-5 py-2 flex items-center justify-center rounded-lg text-white">
                            github
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
