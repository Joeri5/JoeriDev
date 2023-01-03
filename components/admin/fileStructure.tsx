import React, {useState} from 'react';

const FileStructure = () => {
    const [fileStructure, setFileStructure] = useState([
        {
            title: "_projects",
            open: false,
            children: [
                {
                    title: "project1",
                    open: false,
                    content: [
                        {
                            title: "fileStructure.tsx",
                            open: false,
                            content: [
                                {
                                    title: "FileStructure",
                                    open: false,
                                }
                            ]
                        },
                    ],
                },
            ],
        },
    ]);

    const toggle = (index: number) => {
        setFileStructure((prev) => {
            return prev.map((item, i) => {
                if (i === index) {
                    return {...item, open: !item.open};
                } else {
                    return item;
                }
            });
        });
    };

    const toggleContent = (index: number, index2: number) => {
        setFileStructure((prev) => {
            return prev.map((item, i) => {
                if (i === index) {
                    return {
                        ...item,
                        children: item.children.map((item, i) => {
                            if (i === index2) {
                                return {...item, open: !item.open};
                            } else {
                                return item;
                            }
                        }),
                    };
                } else {
                    return item;
                }
            });
        });
    }

    const toggleContent2 = (index: number, index2: number, index3: number) => {
        setFileStructure((prev) => {
            return prev.map((item, i) => {
                if (i === index) {
                    return {
                        ...item,
                        children: item.children.map((item, i) => {
                            if (i === index2) {
                                return {
                                    ...item,
                                    content: item.content.map((item, i) => {
                                        if (i === index3) {
                                            return {...item, open: !item.open};
                                        } else {
                                            return item;
                                        }
                                    }),
                                };
                            } else {
                                return item;
                            }
                        }),
                    };
                } else {
                    return item;
                }
            });
        });
    }


    return (
        <div className="">
            <div className="lg:w-[26.2vw] border-r-2 border-mirage py-5 h-[calc(100vh-3.5rem)]">
                {fileStructure.map((file, index) => (
                    <div key={index}>
                        <div className="flex items-center" onClick={() => toggle(index)}>
                            <p>{file.title}</p>
                        </div>
                        {file.open && (
                            <div>
                                {file.children.map((child, index2) => (
                                    <div key={index2}>
                                        <div className="flex items-center" onClick={() => toggleContent(index, index2)}>
                                            <p>{child.title}</p>
                                        </div>
                                        {child.open && (
                                            <div>
                                                {child.content.map((content, index3) => (
                                                    <div key={index3}>
                                                        <div className="flex items-center"
                                                             onClick={() => toggleContent2(index, index2, index3)}>
                                                            <p>{content.title}</p>
                                                        </div>
                                                        {content.open && (
                                                            <div>
                                                                {content.content.map((content2, index4) => (
                                                                    <div key={index4}>
                                                                        <div className="flex items-center">
                                                                            <p>{content2.title}</p>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FileStructure;
