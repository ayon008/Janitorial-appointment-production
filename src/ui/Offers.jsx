'use client'
import Image from 'next/image';
import React from 'react';
import img1 from '../../public/assets/acquisition-_1_.svg'
import img2 from '../../public/assets/magnet.svg'
import img3 from '../../public/assets/appointment.svg'

const Offers = () => {
    return (
        <div className='grid grid-cols-3 gap-10 mt-10' data-aos="fade-up">
            <div className="card card-compact shadow-xl py-4">
                <figure className='px-10 pt-4'>
                    <Image src={img1} className='2xl:w-[150px] xl:w-[120px] h-auto mx-auto' alt='sales' />
                </figure>
                <div className="card-body mx-auto mt-6">
                    <h2 className="card-title text-center 2xl:text-3xl xl:text-2xl  text-white font-bold poppins opacity-90">Optimized Sales Conversions</h2>
                    <p className='text-center font-semibold inter text-white 2xl:text-lg xl:text-base opacity-90 px-4'>Achieve sales conversion rates of 20% to 30%, customized based on your service needs and target areas, maximizing revenue opportunities.</p>
                </div>
            </div>
            <div className="card card-compact shadow-xl pt-4 pb-10">
                <figure className='px-10 pt-4'>
                    <Image src={img2} className='2xl:w-[150px] xl:w-[120px] h-auto mx-auto' alt='sales' />
                </figure>
                <div className="card-body mx-auto mt-6">
                    <h2 className="card-title text-center 2xl:text-3xl xl:text-2xl  text-white font-bold poppins opacity-90">Verified, High-Quality Leads</h2>
                    <p className='text-center font-semibold inter text-white 2xl:text-lg xl:text-base opacity-90 px-4'>Our thorough 3-step verification process ensures reliable, premium-quality leads tailored to your specifications across the U.S. and Canada.</p>
                </div>
            </div>
            <div className="card card-compact shadow-xl py-4">
                <figure className='px-10 pt-4'>
                    <Image src={img3} className='2xl:w-[150px] xl:w-[120px] h-auto mx-auto' alt='sales' />
                </figure>
                <div className="card-body mx-auto mt-6">
                    <h2 className="card-title text-center 2xl:text-3xl xl:text-2xl  text-white font-bold poppins opacity-90">Exclusive Appointment Setting for Janitorial Services</h2>
                    <p className='text-center font-semibold inter text-white 2xl:text-lg xl:text-base opacity-90 px-4'>We specialize in securing appointments for cleaning services, connecting you directly with key contacts through targeted telemarketing and social outreach.</p>
                </div>
            </div>
        </div>
    );
};

export default Offers;