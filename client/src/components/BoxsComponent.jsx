import React from 'react';

const BoxsComponent = ({ title, amount, progress, iconColor, Icon }) => {
    return (
        <div className="relative flex flex-col mb-4 bg-white shadow-md border border-slate-200  w-full">
            <div className="p-4">
                <h4 className="flex items-center">
                    <span><strong>{title}</strong></span>
                </h4>
                <br />
                <h1 className="font-thin flex items-center gap-5 text-[30px]">
                    {Icon && <Icon style={{ color: iconColor }} />}
                    <span>{amount}</span>
                </h1>
                <br />
                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-white-700 ">
                    <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-1.5 rounded-full  "
                        style={{ width: `${progress}%`, boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}
                    ></div>
                </div>
            </div>
        </div>
    );
};


export default BoxsComponent;
