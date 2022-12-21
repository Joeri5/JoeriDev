import React, {useEffect, useState} from 'react';
import Highlight from "react-highlight";

interface Props {
    code: string
    timeStamp: string
    detailsContent: string
}

const Code = ({code, timeStamp, detailsContent}: Props) => {

    const [timeAgo, setTimeAgo] = useState("");
    const [details, setDetails] = useState(false);

    const getTimeAgo = (date: Date) => {
        const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

        let interval = Math.floor(seconds / 31536000);

        if (interval >= 1) {
            return interval + " years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            return interval + " months";
        }
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
            return interval + `${interval === 1 ? " day" : " days"}`;
        }
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
            return interval + " hours";
        }
        interval = Math.floor(seconds / 60);
        if (interval >= 1) {
            return interval + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeAgo(getTimeAgo(new Date(timeStamp)));
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    console.log(getTimeAgo(new Date(timeStamp)))

    console.log(timeStamp)

    return (
        <div className="space-y-5">
            <div className="flex w-full justify-between">
                <div className="flex space-x-5 items-center">
                    <img src="/profile-image.png" alt="profile image" className="w-10 h-10 rounded-full"/>
                    <div>
                        <p className="text-royal-blue">@joeri</p>
                        <p className="text-sm text-lynch">
                            {timeAgo} ago
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-5" onClick={() => setDetails(!details)}>
                    <img src="/details.svg" alt="details icon" className="w-5 h-5"/>
                    <p className="text-lynch">details</p>
                </div>
            </div>
            <div className="text-xs 2xl:text-sm">
                <Highlight className="typescript">
                    {code}
                </Highlight>
            </div>
            {details && (
                <div className="border-t-2 border-mirage flex justify-between py-5 space-x-16">
                    <p className="text-lynch">
                        {detailsContent}
                    </p>
                    <button onClick={() => setDetails(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6 text-lynch">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Code;
