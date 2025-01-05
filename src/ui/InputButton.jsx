/* eslint-disable react/display-name */
// components/CustomFileInput.js
'use client';

import React, { useState, forwardRef } from 'react';

const CustomFileInput = forwardRef(({ onChange, onBlur, name, ...props }, ref) => {

    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file ? file.name : '');
        if (onChange) {
            onChange(event); // Call onChange to integrate with react-hook-form
        }
    };

    const handleCross = () => {
        setFileName('');
        if (ref && ref.current) {
            ref.current.value = ''; // Reset file input
        }
    };

    return (
        <div className={`text-[#666968] poppins text-sm font-normal rounded-[10px] ${props.bg} border border-[#5C6272] ${props.width} flex items-center justify-between px-4 py-1`}>
            {/* Hidden file input */}
            <input
                type="file"
                id={name}
                className="hidden"
                onChange={handleFileChange}
                onBlur={onBlur}
                name={name}
                ref={ref} // Forward the ref here
                {...props} // Spread props to pass register and other props
            />
            {fileName ?
                <div className='relative'>
                    <p className="poppins border border-black w-fit px-4">
                        Selected file: {fileName}
                    </p>
                    <span onClick={handleCross} className='absolute -top-[10px] -right-[2px] cursor-pointer'>x</span>
                </div>
                :
                <span>
                    {props.label}
                </span>
            }
            {/* Custom label styled as a button */}
            <label
                htmlFor={name}
                className="ml-auto cursor-pointer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <path d="M21.1587 15.5743V25.8634M26.3032 20.7188H16.0141M36.5923 20.7188C36.5923 22.7456 36.1931 24.7525 35.4175 26.625C34.6419 28.4975 33.5051 30.1989 32.0719 31.6321C30.6388 33.0652 28.9374 34.2021 27.0649 34.9777C25.1924 35.7533 23.1854 36.1525 21.1587 36.1525C19.1319 36.1525 17.125 35.7533 15.2525 34.9777C13.38 34.2021 11.6786 33.0652 10.2454 31.6321C8.81227 30.1989 7.67544 28.4975 6.89982 26.625C6.12421 24.7525 5.72501 22.7456 5.72501 20.7188C5.72501 16.6256 7.35105 12.6999 10.2454 9.80557C13.1398 6.9112 17.0654 5.28516 21.1587 5.28516C25.2519 5.28516 29.1775 6.9112 32.0719 9.80557C34.9663 12.6999 36.5923 16.6256 36.5923 20.7188Z" stroke="#878787" strokeWidth="2.57228" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </label>
        </div>
    );
});

export default CustomFileInput;
