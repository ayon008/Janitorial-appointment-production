'use client'
import Image from 'next/image';
import React from 'react';

const ServiceImg = ({ animation, src }) => {
    return (
        <div>
            <Image src={src} alt='janitorial-services-image' />
        </div>
    );
};

export default ServiceImg;