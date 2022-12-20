import React from 'react';

const Footer = () => {
    return (
        <footer
            className="h-14 sm:px-5 absolute bottom-0 border-t-2 border-mirage w-screen flex justify-between items-center">
            <div className="h-full flex">
                <div className="pl-3 sm:pl-0 h-full border-r-2 border-mirage pr-5 flex items-center">
                    <p className="text-lynch">find me on:</p>
                </div>
                <div className="h-full border-r-2 border-mirage px-5 flex items-center">
                    <a href="">
                        <img src="/twitter.svg" alt="twitter icon" className="w-5 h-5"/>
                    </a>
                </div>
                <div className="h-full border-r-2 border-mirage px-5 justify-center flex items-center">
                    <a href="">
                        <img src="/facebook.svg" alt="facebook icon" className="w-5 h-5"/>
                    </a>
                </div>
            </div>
            <div
                className="h-full border-l-2 border-mirage pr-3 sm:pr-0 pl-5 sm:px-5 justify-center flex items-center">
                <a href="" className="flex gap-5 text-lynch">
                    <span className="hidden sm:flex">
                        @joeri157
                    </span>
                    <img src="/github.svg" alt="github icon" className="w-5 h-5"/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
