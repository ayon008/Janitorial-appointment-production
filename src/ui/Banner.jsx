'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';
import 'swiper/css/pagination';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='relative z-30 pt-20'>
            <Swiper
                navigation={true}
                autoplay={{
                    delay: 7000,
                }}
                pagination={{ clickable: true }}
                loop={true}
                effect="fade"
                style={{
                    '--swiper-pagination-color': '#16a34a', // Color of pagination dots
                    // Ensures it’s positioned absolutely
                    // '--swiper-pagination-bottom': '-40px', // Adjusts vertical position
                }}
                modules={[Navigation, Autoplay, Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className="banner-2 flex flex-col h-full">
                        <div className='absolute inset-0 bg-black opacity-60'></div>
                        <div className='m-auto z-30 w-3/4' data-aos="fade-down">
                            <h1 className='text-white text-center font-bold poppins 2xl:text-6xl xl:text-5xl text-3xl leading-[100px]'>Find <span className=''>Qualified, Exclusive Janitorial Leads</span> <br /> available in Your Area!</h1>
                            <p className='my-6 inter font-semibold text-center text-xl text-white opacity-80'>A reliable and stress-free appointment-setting service designed for janitors.<br />
                                Partner with the trusted provider of quality janitorial job opportunities.</p>
                            <div className='flex items-center justify-center gap-6'>
                                <button className='rounded-[70px] px-10 text-lg nunito font-bold bg-primary text-white btn border-none'>
                                    <Link className='flex items-center gap-2' href={'/search/exclusive-leads'}>
                                        <span>
                                            Explore Now
                                        </span>
                                        <FaArrowRight />
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-1 flex flex-col h-full">
                        <div className='my-auto 2xl:pl-40 xl:pl-40 z-30 w-1/2'>
                            <h1 className='text-white font-bold poppins 2xl:text-6xl xl:text-5xl text-3xl'>Unlock Cleaning <br /><span className='text-green-600 banner-text'>Opportunities</span> with Ease</h1>
                            <p className='my-6 inter text-xl font-semibold text-white opacity-60'>Connect with key decision-makers and receive valuable opportunities delivered straight to your inbox—automatically!</p>
                            <div className='flex items-center gap-6'>
                                <button className='rounded-[70px] px-10 text-lg nunito font-bold bg-primary text-white btn border-none'>
                                    <Link href={'/register'}>
                                        Sign Up
                                    </Link>
                                </button>
                                <p className='text-white opacity-60 inter font-bold'>No Credit Card Required</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-3 flex flex-col h-full">
                        <div className='absolute inset-0 bg-black opacity-60'></div>
                        <div className='m-auto z-30 w-3/4'>
                            <h1 className='text-white text-center font-bold poppins 2xl:text-6xl xl:text-5xl text-3xl leading-[100px]'>EXPANDING YOUR BUSINESS IS OUR GOAL!</h1>
                            <p className='my-6 text-xl inter font-semibold text-white opacity-90 text-center'>The Most Dependable Company for Cleaning & Janitorial Leads!
                                <br />
                                Our expert services, including
                                <span className="ml-2"> {/* Add margin left for spacing */}
                                    <TypeAnimation
                                        preRenderFirstString={true}
                                        sequence={[
                                            500,
                                            ' Janitorial Appointments',
                                            1000,
                                            ' Cold Calling Service',
                                            1000,
                                            ' Cleaning Websites',
                                            1000,
                                            ' SEO Services',
                                            500,
                                        ]}
                                        speed={40}
                                        style={{ fontSize: '1.25rem' }} // Change to your desired color (e.g., a shade of orange)
                                        repeat={Infinity}
                                    />
                                </span>
                            </p>
                            <div className='flex items-center justify-center gap-6'>
                                <button className='rounded-[70px] px-10 text-lg nunito font-bold bg-primary text-white btn border-none'>
                                    <Link className='flex items-center gap-2' href={'/contact'}>
                                        <span>
                                            Contact Us
                                        </span>
                                        <FaArrowRight />
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;