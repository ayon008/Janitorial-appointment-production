'use client'
import Lottie from "lottie-react";
import animation from '../../public/assets/Animation - 1720847116099.json'

const FireIcon = ({ width }) => {
    return (
        <Lottie animationData={animation} loop={true} title="popular" className={`h-auto w-[${width}px]`} />
    );
};

export default FireIcon;