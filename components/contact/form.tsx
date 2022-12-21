import React from 'react';

const Form = () => {
    return (
        <form className="lg:space-y-5">
            <div>
                <label htmlFor="name" className="block text-white mb-2 text-lynch">_name:</label>
                <input type="text" name="name" id="name"
                       className="w-full bg-[#011221] border-2 focus-visible:outline-none focus:outline-none focus:ring-transparent border-mirage rounded-md px-4 py-2 mb-4 text-lynch"/>
            </div>
            <div>
                <label htmlFor="email" className="block text-white mb-2 text-lynch">_email:</label>
                <input type="email" name="email" id="email"
                       className="w-full bg-[#011221] border-2 focus-visible:outline-none focus:outline-none focus:ring-transparent border-mirage rounded-md px-4 py-2 mb-4 text-lynch"/>
            </div>
            <div>
                <label htmlFor="message" className="block text-white mb-2 text-lynch">_message:</label>
                <textarea name="message" id="message"
                          className="w-full bg-[#011221] resize-none h-[15rem] border-2 focus-visible:outline-none focus:outline-none focus:ring-transparent border-mirage rounded-md px-4 py-2 mb-4 text-lynch"/>
            </div>
        </form>
    );
};

export default Form;
