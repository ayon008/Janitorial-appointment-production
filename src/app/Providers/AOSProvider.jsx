'use client'
import React, { createContext } from 'react';
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';

const AOSProvider = ({ children }) => {
    useEffect(() => {
        AOS.init({
            duration: 500, // Animation duration
            once: true, // Whether animation should happen only once
        });

    }, []);
    return (
        <div>
            {children}
        </div>
    );
};

export default AOSProvider;