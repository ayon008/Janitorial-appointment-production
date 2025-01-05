'use client'
import Lottie from 'lottie-react';
import animation from '../../public/assets/Animation - 1722287102834.json'
const Dot = ({ width }) => {
    return (
        <Lottie animationData={animation} loop={true} className={`h-auto ${width}`} />
    );
};

export default Dot;