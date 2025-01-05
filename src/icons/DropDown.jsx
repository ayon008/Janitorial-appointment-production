import React from 'react';

const DropDown = () => {
    return (
        <div className='dropdown-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path className='dropdown-path' d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="url(#paint0_linear_2001_682)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <defs>
                    <linearGradient id="paint0_linear_2001_682" x1="12" y1="9" x2="12" y2="15" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0B286D" />
                        <stop offset="1" stop-color="#0F172A" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default DropDown;