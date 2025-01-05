'use client'
import useAuth from '@/Hooks/useAuth';
import Link from 'next/link';
import React from 'react';

const BannerButton = () => {
    const { user } = useAuth()
    return (
        <button className='btn bg-primary rounded-[70px] nunito font-semibold text-white border-none text-lg hover:bg-green-600 px-6'><Link href={user ? '/profile' : '/register'}>Sign Up</Link></button>
    );
};

export default BannerButton;