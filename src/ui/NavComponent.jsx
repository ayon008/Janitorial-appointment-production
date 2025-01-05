import Facebook from '@/icons/Facebook';
import FaEmails from '@/icons/FaEmails';
import FaLinkedIn from '@/icons/FaLinkedIn';
import React from 'react';
import FaLocation from './FaLocation';
import FaPhone from '@/icons/FaPhone';
import FaTwitter from '@/icons/FaTwitter';
import FaWhatsapp from '@/icons/FaWhatsapp';

const NavComponent = () => {
    return (
        <div className='w-full p-0'>
            <div className='w-full flex items-center justify-between'>
                {/* Nav Start */}
                <div className='nav-start pt-0 pb-0 flex items-center pl-8 py-[12px] gap-2'>
                    <p className='text-black font-normal text-sm hover:text-deep-blue transition-colors duration-500 cursor-pointer'>Need Janitorial Leads?</p>
                    <Facebook />
                    <FaLinkedIn />
                    <FaTwitter />
                    <FaWhatsapp />
                </div>
                <div className='nav-end flex items-center gap-12'>
                    <div className='flex items-center gap-2'>
                        <FaEmails />
                        <p className='text-black font-normal text-sm hover:text-deep-blue transition-colors duration-500 cursor-pointer'>contact@janitorialappointment.com</p>
                    </div>
                    <div className='bg-deep-blue flex gap-1 items-center px-12 py-[12px]'>
                        <FaPhone />
                        <div class="phone-number">
                            <span class="letter text-base font-semibold text-white animate__backOutDown">+</span>
                            <span class="letter text-base font-semibold text-white">8</span>
                            <span class="letter text-base font-semibold text-white">8</span>
                            <span class="letter text-base font-semibold text-white">0</span>
                            <span class="letter text-base font-semibold text-white">-</span>
                            <span class="letter text-base font-semibold text-white">1</span>
                            <span class="letter text-base font-semibold text-white">9</span>
                            <span class="letter text-base font-semibold text-white">5</span>
                            <span class="letter text-base font-semibold text-white">8</span>
                            <span class="letter text-base font-semibold text-white">3</span>
                            <span class="letter text-base font-semibold text-white">7</span>
                            <span class="letter text-base font-semibold text-white">7</span>
                            <span class="letter text-base font-semibold text-white">8</span>
                            <span class="letter text-base font-semibold text-white">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavComponent;