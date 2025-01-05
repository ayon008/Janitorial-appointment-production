'use client'
import Image from 'next/image';
import React from 'react';
import woman from '@/../public/assets/vecteezy_business-woman-holding-tablet-pc_47656782 2.svg'
import profileImage from '@/../public/assets/Frame 1261153333.png'
import useAuth from '@/Hooks/useAuth';

const Profiled = () => {
    const { user } = useAuth();
    const name = user?.displayName;
    return (
        <div className='2xl:mt-14 xl:mt-14 mt-10 relative w-full rounded-xl'>
            <Image src={profileImage} className='w-full 2xl:max-h-[192px] xl:max-h-[192px] h-[192px]' alt='' />
            <Image src={woman} alt='' className='absolute bottom-0 2xl:left-52 xl:left-[134px] left-7' />
            <div className='absolute top-1/2 xl:right-28 2xl:right-64 right-8 transform -translate-y-1/2 2xl:w-fit xl:w-fit w-1/4'>
                <h3 className='2xl:text-4xl xl:text-4xl font-bold text-2xl 2xl:text-left xl:text-left text-center'>{name}</h3>
                <p className='text-base font-normal poppins text-center'>Welcome to your dashboard.</p>
            </div>
        </div>
    );
};

export default Profiled;