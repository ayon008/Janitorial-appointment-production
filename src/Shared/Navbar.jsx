'use client'
import Facebook from '@/icons/Facebook';
import FaEmail from '@/icons/FaEmail';
import FaLinkedIn from '@/icons/FaLinkedIn';
import FaPhone from '@/icons/FaPhone';
import FaTwitter from '@/icons/FaTwitter';
import FaWhatsapp from '@/icons/FaWhatsapp';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../../public/assets/Janitorial.png';
import { MdArrowForwardIos, MdSearch } from 'react-icons/md';
import Link from 'next/link';
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaChevronDown, FaFacebookSquare, FaLinkedinIn, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import DropDown from '@/icons/DropDown';
import useAuth from '@/Hooks/useAuth';
import ButtonPrimary from '@/ui/ButtonPrimary';
import jsCookie from "js-cookie";
import { jwtDecode } from "jwt-decode";
const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const [clicked1, setClicked1] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    const [click, setClicked] = useState(false);
    const [open, setOpen] = useState(false);
    const [nav, setNav] = useState(false);

    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
            setScrolled(currentScrollTop < lastScrollTop && currentScrollTop > 80);
            lastScrollTop = currentScrollTop;
        };
        if (typeof window !== "undefined") {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const { user, logOut } = useAuth();
    const userName = user?.displayName;
    const firstLetter = user?.displayName[0];

    const cookies = jsCookie.get('userToken');
    const [decoded, setDecode] = useState({})
    useEffect(() => {
        if (cookies) {
            const decoded = jwtDecode(cookies);
            setDecode(decoded)
        }
    }, [cookies])

    const { isSeller, isAdmin } = decoded;

    const handleLogOut = () => {
        logOut();
    }


    useEffect(() => {
        if (typeof document !== "undefined") {
            // Disable scrolling on the body when the menu is open
            if (open || nav) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
            // Cleanup on unmount
            return () => {
                document.body.style.overflow = "";
            };
        }
    }, [open, nav]);
    const [render, setRender] = useState(false);
    const [mouse, setMouse] = useState(false);
    const [mouse1, setMouse1] = useState(false);
    const [mouse2, setMouse2] = useState(false);
    useEffect(() => {
        setRender(true);
        setNav(false);
        setMouse(false);
        setMouse1(false)
    }, [pathname]);


    const Services = [
        { name: 'Decision Maker', href: '/decision-maker' },
        { name: 'Single Decision Maker', href: '/single-decision-maker' },
        { name: 'Cleaning Calculator', href: '/cleaning-calculator' },
        { name: 'Pay Rate Checker', href: '/pay-rate-checker' },
        { name: 'Web & App Support', href: '/other-services' },
        { name: 'Help', href: '/help' },
    ]

    const Leads = [
        { name: 'Exclusive Leads', href: '/search/exclusive-leads' },
        { name: 'Opportunities', href: '/search/layups' },
        { name: 'Lay Ups', href: '/search/opportunities' },
    ];

    const UserDetails = [
        { name: 'Profile', href: '/profile' },
        { name: 'Dashboard', href: '/dashboard' },
        isSeller && { href: '/sellerDashboard', name: 'Seller dashboard' },
        isAdmin && { href: '/adminDashboard', name: 'Admin dashboard' },
    ].filter(Boolean);


    const Option = ({ children, arr, show, href }) => {
        return (
            <motion.div
                whileHover="show"
                initial="hidden"
                className="uppercase font-semibold 2xl:text-base xl:text-sm text-sm py-3 w-full"
            >
                <motion.span
                    variants={{
                        show: {
                            color: '#c6250c', // Change color on hover
                            x: 40, // Move 40px to the right
                            transition: { duration: 0.3, ease: 'easeInOut' }, // Smooth transition
                            pointerEvents: 'auto', //
                        },
                        hidden: {
                            color: '#000000', // Default color
                            x: 0, // Default position
                            transition: { duration: 0.3, ease: 'easeInOut' },
                            pointerEvents: 'none', //	
                        },
                    }}
                    className="relative"
                >
                    <span className='flex items-center justify-between'>
                        <span className='flex items-center parent-you'>
                            <span className="w-[0px] h-[4px] bg-orange line-option">

                            </span>
                            <span>
                                <Link href={`${href}`}>
                                    {children}
                                </Link>
                            </span>
                        </span>
                    </span>
                </motion.span>
            </motion.div>
        )
    }

    const navItems = <>
        <li className={`2xl:text-base xl:text-sm text-sm font-semibold hover:text-orange transition-all duration-100 ${pathname === '/' ? 'text-orange' : ''}`}>
            <Link href={'/'}>Home</Link>
        </li>
        <li className={`2xl:text-base xl:text-sm text-sm font-semibold hover:text-orange transition-all duration-100 ${pathname === '/about' ? 'text-orange' : ''}`}>
            <Link href="/about">About</Link>
        </li>
        <li className={`2xl:text-base xl:text-sm text-sm font-semibold hover:text-orange transition-all duration-100 ${pathname === '/blogs' ? 'text-orange' : ''}`}>
            <Link href="/blogs">Blogs</Link>
        </li>
        <li className='relative' onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)}>
            <div
            >
                <motion.div
                    whileHover='show'
                    initial='hidden'
                    className={`2xl:text-xl xl:text-base 2xl:h-[60px] xl:h-[60px] text-sm font-semibold h-full hover-color hover:text-orange transition-all duration-100 flex gap-[2px] ${pathname === '/services' ? 'text-orange' : ''}`}>
                    <span className='my-auto 2xl:text-base xl:text-sm text-sm'>Services</span>
                    <div className='h-fit my-auto'>
                        <DropDown />
                    </div>
                    <motion.div
                        animate={mouse ? {
                            opacity: 1,
                            y: 0,
                            pointerEvents: 'auto',
                            transition: {
                                duration: 0.4, // Animation duration when showing
                                delay: 0.2, // Add delay when showing
                            },
                        }
                            :
                            {
                                opacity: 0,
                                y: 40,
                                pointerEvents: 'none',
                                transition: {
                                    duration: 0.3, // Animation duration when hiding
                                    delay: 0.1, // Add delay when hiding
                                },
                            }
                        }
                        className={`w-[350px] ${mouse ? 'block' : 'hidden'} pt-10 px-10 pb-6 absolute top-[60px] bg-white left-0`}>
                        {
                            Services.map((s, i) => <li key={i} className='border-b-[0.60px] parent-option border-opacity-30 border-b-gray '>
                                <Option href={s.href}>{s.name}</Option>
                            </li>)
                        }
                    </motion.div>
                </motion.div>
            </div>
        </li>
        <li className='relative' onMouseEnter={() => setMouse1(true)} onMouseLeave={() => setMouse1(false)}>
            <div
            >
                <motion.div
                    whileHover='show'
                    initial='hidden'
                    className={`2xl:text-xl xl:text-base 2xl:h-[60px] xl:h-[60px] text-sm font-semibold h-full hover-color hover:text-orange transition-all duration-100 flex gap-[2px] ${pathname === '/services' ? 'text-orange' : ''}`}>
                    <span className='my-auto 2xl:text-base xl:text-sm text-sm'>Leads</span>
                    <div className='h-fit my-auto'>
                        <DropDown />
                    </div>
                    <motion.div
                        animate={mouse1 ? {
                            opacity: 1,
                            y: 0,
                            pointerEvents: 'auto',
                            transition: {
                                duration: 0.4, // Animation duration when showing
                                delay: 0.2, // Add delay when showing
                            },
                        }
                            :
                            {
                                opacity: 0,
                                y: 40,
                                pointerEvents: 'none',
                                transition: {
                                    duration: 0.3, // Animation duration when hiding
                                    delay: 0.1, // Add delay when hiding
                                },
                            }
                        }
                        className={`w-[350px] pt-10 px-10 pb-6 absolute top-[60px] bg-white left-0  ${mouse1 ? 'block' : 'hidden'}`}>
                        {
                            Leads.map((s, i) => <li key={i} className='border-b-[0.60px] parent-option border-opacity-30 border-b-gray '>
                                <Option href={s.href}>{s.name}</Option>
                            </li>)
                        }
                    </motion.div>
                </motion.div>
            </div>
        </li>
        <li className={`2xl:text-base xl:text-sm text-sm font-semibold hover:text-orange transition-all duration-100 ${pathname === '/contact' ? 'text-orange' : ''}`}>
            <Link href="/contact">Contact</Link>
        </li>
        <li className={`2xl:text-base xl:text-sm text-sm font-semibold hover:text-orange transition-all duration-100 ${pathname === '/contact' ? 'text-orange' : ''}`}>
            <Link href="/my-subscription">Subscription</Link>
        </li>
    </>


    const navMobile = [
        ...Services, ...Leads
    ]

    return (
        render && (
            <div className={`w-full relative z-50`}>
                {/* Nav Top Part */}
                <div className='w-full 2xl:h-[60px] shadow-xl xl:h-[60px] h-0 hidden 2xl:flex xl:flex items-center justify-between bg-sky-200'>
                    {/* Nav Start */}
                    <div className='flex gap-4 items-center px-11 py-[12px]'>
                        <h3 className='text-base'>Connect with us</h3>
                        <div className='nav-start flex gap-1'>
                            <Facebook />
                            <FaLinkedIn />
                            <FaTwitter />
                            <FaWhatsapp />
                        </div>
                    </div>
                    <div className='nav-end flex items-center gap-12 pe-6'>
                        <div className='flex items-center gap-2'>
                            <FaEmail />
                            <p className='font-normal text-sm hover:text-deep-blue transition-colors duration-500 cursor-pointer'>
                                <a href=''>contact@janitorialappointment.com</a>
                            </p>
                        </div>
                        <div className='bg-deep-blue flex items-center px-12 py-[18px]'>
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
                                <span class="letter text-base font-semibold text-white">1</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* NavBar */}
                <div className='absolute 2xl:top-[60px] xl:top-[60px] top-0 inset-0'>
                    <div className='bg-[#FBFCFF]'>
                        <div className='flex items-center justify-between  max-w-[1440px] mx-auto relative 2xl:h-[100px] xl:h-[100px] h-[80px] 2xl:py-10 xl:py-10 2xl:px-11 xl:px-11 px-4'>
                            <Link className='2xl:w-[140px] xl:w-[140px] w-[110px] 2xl:h-[110px] xl:h-[110px] h-auto' href={'/'}>
                                <div className='absolute top-0 2xl:left-11 xl:left-11 left-5'>
                                    <div className='nav-start bg-white shadow-xl'>
                                        <Image className='2xl:w-[140px] xl:w-[140px] w-[110px] 2xl:h-[110px] xl:h-[110px] h-auto object-contain' src={logo} alt='logo' />
                                    </div>
                                </div>
                            </Link>
                            <div class="w-fit 2xl:block xl:block hidden">
                                <ul class="flex navItems items-center justify-between 2xl:gap-8 xl:gap-6">
                                    {
                                        navItems
                                    }
                                </ul>
                            </div>
                            <div className="2xl:ml-0 xl:ml-0 ml-auto 2xl:hidden xl:hidden block">
                                <div className="btn btn-ghost btn-circle" onClick={() => setNav(true)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h7" />
                                    </svg>
                                </div>

                                <div
                                    className={`h-screen w-full bg-white overflow-y-auto overflow-x-hidden z-[60] transition-all duration-1000 ease-in-out fixed top-0 right-0 ${nav ? 'left-0' : '-left-full'
                                        }`}
                                >
                                    <span
                                        onClick={() => setNav(false)}
                                        className="absolute top-2 right-4 text-3xl cursor-pointer"
                                    >
                                        X
                                    </span>

                                    <div className="pt-10 px-10 pb-20 w-full">
                                        <Image src={logo} alt="" className="w-[100px] h-auto" />
                                        <div className='relative mt-4 mb-5'>
                                            <input className="w-full border border-black rounded-[30px] bg-[#F8F8F8] input input-border" placeholder="Search..." />
                                            <div className="absolute right-4 mt-2 top-1/2 -translate-y-1/2">
                                                <MdSearch size={24} color="#c6250c" className="" />
                                            </div>
                                        </div>
                                        <div className='mt-6'>
                                            <ul className='pb-10'>
                                                {
                                                    user &&
                                                    <li className={`2xl:text-base xl:text-sm text-sm font-semibold hover:text-orange transition-all duration-100`}>
                                                        <div className='flex items-center justify-between border-b-[0.60px] border-b-black border-opacity-20 py-3'>
                                                            <div className='flex items-center gap-2'>
                                                                <div className="md:w-[32px] relative md:h-[32px] w-[30px] h-[30px] rounded-full bg-primary text-white">
                                                                    <span className="absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 md:text-base text-xs font-normal">{firstLetter}</span>
                                                                </div>
                                                                <span className='my-auto'>{userName}...</span>
                                                            </div>
                                                            <div className='bg-slate-300 p-1 rounded bg-opacity-45' onClick={() => {
                                                                setClicked(!click)
                                                                setClicked1(false)
                                                                setClicked2(false)
                                                            }}>
                                                                <motion.div
                                                                    animate={{ rotate: clicked1 ? 180 : 0 }}
                                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                                    className="h-fit"
                                                                >
                                                                    <FaChevronDown size={14} />
                                                                </motion.div>
                                                            </div>
                                                        </div>
                                                        <>
                                                            <motion.div
                                                                animate={click ? { height: 'fit-content', pointerEvents: 'auto' } : { height: '0px', pointerEvents: 'none' }}
                                                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                                                className='w-full overflow-hidden pl-4'>
                                                                {
                                                                    UserDetails?.map((a, i) => (
                                                                        <p key={i} className='py-2 text-black hover:text-orange transition-all duration-300 ease-linear border-b-[0.60px] border-b-black border-opacity-20'>
                                                                            <Link href={a.href}>{a.name}</Link>
                                                                        </p>
                                                                    ))
                                                                }
                                                                <p onClick={() => handleLogOut()} className='py-2 text-black hover:text-orange transition-all duration-300 ease-linear border-b-[0.60px] border-b-black border-opacity-20'>
                                                                    Log Out
                                                                </p>
                                                            </motion.div>

                                                        </>
                                                    </li>
                                                }
                                                <li className={`2xl:text-base xl:text-sm text-sm hover:text-orange transition-all duration-100 font-bold py-3 border-b-[0.60px] border-b-black border-opacity-20 ${pathname === '/' ? 'text-orange' : ''}`}>
                                                    <Link href={'/'}>Home</Link>
                                                </li>
                                                <li className={`2xl:text-base xl:text-sm text-sm font-semibold hover:text-orange py-3 border-b-[0.60px] border-b-black border-opacity-20 transition-all duration-100 ${pathname === '/about' ? 'text-orange' : ''}`}>
                                                    <Link href="/about">About</Link>
                                                </li>
                                                <li className={`2xl:text-base xl:text-sm text-sm font-semibold hover:text-orange py-3 border-b-[0.60px] border-b-black border-opacity-20 transition-all duration-100 ${pathname === '/blogs' ? 'text-orange' : ''}`}>
                                                    <Link href="/blogs">Blogs</Link>
                                                </li>
                                                <li className={`2xl:text-base xl:text-sm text-sm font-semibold hover:text-orange transition-all duration-100`}>
                                                    <div className='flex items-center justify-between border-b-[0.60px] border-b-black border-opacity-20 py-3'>
                                                        <div>
                                                            Services
                                                        </div>
                                                        <div className='bg-slate-300 p-1 rounded bg-opacity-45' onClick={() => {
                                                            setClicked1(!clicked1)
                                                            setClicked2(false)
                                                            setClicked(false)
                                                        }}>
                                                            <motion.div
                                                                animate={{ rotate: clicked1 ? 180 : 0 }}
                                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                                className="h-fit"
                                                            >
                                                                <FaChevronDown size={14} />
                                                            </motion.div>
                                                        </div>
                                                    </div>
                                                    <>
                                                        <motion.div
                                                            animate={clicked1 ? { height: 'fit-content', pointerEvents: 'auto' } : { height: '0px', pointerEvents: 'none' }}
                                                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                                                            className='w-full overflow-hidden pl-4'>
                                                            {
                                                                Services?.map((a, i) => (
                                                                    <p key={i} className='py-2 text-black hover:text-orange transition-all duration-300 ease-linear border-b-[0.60px] border-b-black border-opacity-20'>
                                                                        <Link href={a.href}>{a.name}</Link>
                                                                    </p>
                                                                ))
                                                            }
                                                        </motion.div>

                                                    </>
                                                </li>
                                                <li className={`2xl:text-base xl:text-sm text-sm font-semibold hover:text-orange transition-all duration-100`}>
                                                    <div className='flex items-center justify-between border-b-[0.60px] border-b-black border-opacity-20 py-3'>
                                                        <div>
                                                            Leads
                                                        </div>
                                                        <div className='bg-slate-300 p-1 rounded bg-opacity-45' onClick={() => {
                                                            setClicked2(!clicked2)
                                                            setClicked1(false)
                                                            setClicked(false)
                                                        }}>
                                                            <motion.div
                                                                animate={{ rotate: clicked2 ? 180 : 0 }}
                                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                                className="h-fit"
                                                            >
                                                                <FaChevronDown size={14} />
                                                            </motion.div>
                                                        </div>
                                                    </div>
                                                    <>
                                                        <motion.div
                                                            animate={clicked2 ? { height: 'fit-content', pointerEvents: 'auto' } : { height: '0px', pointerEvents: 'none' }}
                                                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                                                            className='w-full overflow-hidden pl-4'>
                                                            {
                                                                Leads?.map((s, i) => {
                                                                    return (
                                                                        <p key={i} className='py-2 text-black hover:text-orange border-b-[0.60px] border-b-black border-opacity-20 transition-all duration-300 ease-linear'>
                                                                            <Link href={s.href}>{s.name}</Link>
                                                                        </p>
                                                                    )
                                                                })
                                                            }
                                                        </motion.div>

                                                    </>
                                                </li>
                                                <li className={`2xl:text-base xl:text-sm text-sm hover:text-orange transition-all text-black duration-100 font-bold py-3 border-b-[0.60px] border-b-black border-opacity-20 ${pathname === '/leads' ? 'text-orange' : ''}`}>
                                                    <Link href="/my-subscription">Subscription</Link>
                                                </li>
                                                <li className={`2xl:text-base xl:text-sm text-sm hover:text-orange transition-all text-black duration-100 font-bold py-3 ${pathname === '/contact' ? 'text-orange' : ''}`}>
                                                    <Link href="/contact">Contact</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='hidden items-center gap-6 2xl:flex xl:flex'>
                                {
                                    user ? <div className="flex items-center gap-2">
                                        <div className="md:w-[32px] relative md:h-[32px] w-[20px] h-[20px] rounded-full bg-primary text-white">
                                            <span className="absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 md:text-base text-xs font-normal">{firstLetter}</span>
                                        </div>
                                        <div className='relative' onMouseEnter={() => setMouse2(true)} onMouseLeave={() => setMouse2(false)}>
                                            <div
                                            >
                                                <motion.div
                                                    whileHover='show'
                                                    initial='hidden'
                                                    className={`2xl:text-xl xl:text-base 2xl:h-[60px] xl:h-[60px] text-sm font-semibold h-full hover-color hover:text-orange transition-all duration-100 flex gap-[2px]`}>
                                                    <span className='my-auto'>{userName?.length < 20 ? userName : userName?.slice(0, 16)}...</span>

                                                    <motion.div
                                                        animate={mouse2 ? {
                                                            opacity: 1,
                                                            y: 0,
                                                            pointerEvents: 'auto',
                                                            transition: {
                                                                duration: 0.4, // Animation duration when showing
                                                                delay: 0.2, // Add delay when showing
                                                            },
                                                        }
                                                            :
                                                            {
                                                                opacity: 0,
                                                                y: 40,
                                                                pointerEvents: 'none',
                                                                transition: {
                                                                    duration: 0.3, // Animation duration when hiding
                                                                    delay: 0.1, // Add delay when hiding
                                                                },
                                                            }
                                                        }
                                                        className={`w-[350px] pt-10 px-10 pb-6 absolute top-[60px] bg-white left-0  ${mouse2 ? 'block' : 'hidden'}`}>
                                                        <ul>
                                                            {
                                                                UserDetails.map((s, i) => <li key={i} className='border-b-[0.60px] parent-option border-opacity-30 border-b-gray '>
                                                                    <Option href={s.href}>{s.name}</Option>
                                                                </li>)
                                                            }
                                                            <li onClick={() => handleLogOut()} className='border-b-[0.60px] parent-option border-opacity-30 border-b-gray cursor-pointer text-black'>
                                                                <Option>Log Out</Option>
                                                            </li>
                                                        </ul>
                                                    </motion.div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                        :
                                        <>
                                            <Link href={'/login'}><button className="font-semibold text-xs md:text-base">Sign In</button></Link>
                                            <Link href={'/register'}>
                                                <ButtonPrimary label={'Get Started Free'} />
                                            </Link>
                                        </>
                                }
                                <div className='btn' onClick={() => setOpen(!open)}>
                                    <GiHamburgerMenu size={'1.5rem'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    open &&
                    <motion.div
                        initial={{ left: -1000 }}
                        animate={{ left: open ? 0 : -1000 }}
                        transition={{      // Specifies spring animation
                            stiffness: 120,        // Controls the spring's stiffness
                            damping: 20,           // Controls the spring's resistance
                            mass: 1,               // Controls the "weight" of the element
                            bounce: 0.3,           // Adds a bounce effect
                            duration: 0.5,         // Optional: duration if spring type isn't enough
                            ease: "easeInOut",     // Optional: ease for spring
                            delay: 0.0,            // Adds a delay
                        }}
                        className='h-screen flex items-stretch fixed top-0 overflow-auto z-[60] w-full'
                    >
                        <div className='w-[35%] h-full bg-[#FFFFFF] relative overflow-y-auto pb-10'>
                            <div className='w-fit h-fit absolute top-6 right-6 btn' onClick={() => setOpen(!open)}>
                                <IoCloseOutline size={'1.5rem'} />
                            </div>
                            <div className='mt-20 w-fit mx-auto flex items-center gap-3'>
                                <Image className='2xl:w-[140px] xl:w-[140px] w-[70px] 2xl:h-[110px] xl:h-[110px] h-auto object-contain' src={logo} alt='logo' />
                                <div>
                                    <h3 className='text-base text-orange'>100% verified Janitorial Leads</h3>
                                    <h1 className='text-deep-blue text-xl font-semibold'>Business Consultancy</h1>
                                </div>
                            </div>
                            <div className="mt-10 px-6">
                                <h3 className='text-center text-xl text-deep-blue font-semibold'>About Us</h3>
                                <p className='text-base mt-6 text-center'>
                                    <span className='text-deep-blue font-semibold text-base'>Janitorial Appointment</span> we specialize in delivering high-quality janitorial leads to help businesses grow. With a commitment to reliability, accuracy, and exceptional service, we connect you with the right opportunities to succeed. Your success is our priority.
                                </p>
                                <h2 className='text-2xl font-semibold text-center mt-8'>Contact Us</h2>
                                <p className='mt-3 text-center'>contact@janitorialappointment.com</p>
                                <p className='mt-3 text-center'>+880-195837780</p>
                                <div className='flex items-center justify-center gap-6 mt-6'>
                                    <FaFacebookSquare size={'1.5rem'} />
                                    <FaLinkedinIn size={'1.5rem'} />
                                    <FaWhatsappSquare size={'1.5rem'} />
                                    <FaTwitterSquare size={'1.5rem'} />
                                </div>
                            </div>
                        </div>
                        {
                            open && <div className='flex-1 h-full bg-black opacity-30' onClick={() => setOpen(!open)}></div>
                        }
                    </motion.div>
                }
                <motion.div
                    initial={{ top: -2000 }}
                    animate={{ top: scrolled ? 0 : -200 }}
                    exit={{ top: -2000, transition: { duration: 0, ease: "linear" } }}
                    transition={{ duration: 0.5, ease: "linear", delay: 0.01 }}
                    className={`bg-[#FBFCFF] ${scrolled ? 'pointer-events-auto' : 'pointer-events-none'} shadow-xl fixed right-0 left-0 z-50`}
                >
                    <div className='flex 2xl:h-[100px] xl:h-[100px] h-[80px] items-center justify-between  max-w-[1440px] mx-auto relative 2xl:py-10 xl:py-10 2xl:px-11 xl:px-11 px-4'>
                        <Link className='2xl:w-[140px] xl:w-[140px] w-[110px] 2xl:h-[110px] xl:h-[110px] h-auto' href={'/'}>
                            <div className='absolute top-0 2xl:left-11 xl:left-11 left-5'>
                                <div className='nav-start bg-white shadow-xl'>
                                    <Image className='2xl:w-[140px] xl:w-[140px] w-[110px] 2xl:h-[110px] xl:h-[110px] h-auto object-contain' src={logo} alt='logo' />
                                </div>
                            </div>
                        </Link>
                        <div class="w-fit 2xl:block xl:block hidden">
                            <ul class="flex navItems items-center justify-between 2xl:gap-8 xl:gap-6">
                                {
                                    scrolled && navItems
                                }
                            </ul>
                        </div>
                        {/* nav mobile */}
                        <div className="dropdown 2xl:ml-0 xl:ml-0 ml-auto 2xl:hidden xl:hidden block">
                            <div onClick={() => setNav(true)} className="btn btn-ghost btn-circle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                            <div
                                className={`h-screen w-full bg-white overflow-y-auto overflow-x-hidden z-[60] transition-all duration-1000 ease-in-out fixed top-0 right-0 ${nav ? 'left-0' : '-left-full'
                                    }`}
                            >
                                <span
                                    onClick={() => setNav(false)}
                                    className="absolute top-2 right-4 text-3xl cursor-pointer"
                                >
                                    X
                                </span>

                                <div className="pt-10 px-10 pb-20 w-full">
                                    <Image src={logo} alt="" className="w-[100px] h-auto" />
                                    <div className='relative mt-4 mb-5'>
                                        <input className="w-full border border-black rounded-[30px] bg-[#F8F8F8] input input-border" placeholder="Search..." />
                                        <div className="absolute right-4 mt-2 top-1/2 -translate-y-1/2">
                                            <MdSearch size={24} color="#c6250c" className="" />
                                        </div>
                                    </div>
                                    <div className='mt-6'>
                                        <ul className='pb-10'>
                                            <li className={`2xl:text-base xl:text-sm text-sm hover:text-orange transition-all duration-100 font-bold pb-3 border-b-[0.60px] border-b-black border-opacity-20 ${pathname === '/' ? 'text-orange' : ''}`}>
                                                <Link href={'/'}>Home</Link>
                                            </li>
                                            <li className={`2xl:text-base xl:text-sm text-sm font-semibold hover:text-orange py-3 border-b-[0.60px] border-b-black border-opacity-20 transition-all duration-100 ${pathname === '/about' ? 'text-orange' : ''}`}>
                                                <Link href="/about">About</Link>
                                            </li>
                                            <li className={`2xl:text-base xl:text-sm text-sm font-semibold hover:text-orange transition-all duration-100`}>
                                                <div className='flex items-center justify-between border-b-[0.60px] border-b-black border-opacity-20 py-3'>
                                                    <div>
                                                        Services
                                                    </div>
                                                    <div className='bg-slate-300 p-1 rounded bg-opacity-45' onClick={() => {
                                                        setClicked1(!clicked1)
                                                        setClicked2(false)
                                                    }}>
                                                        <motion.div
                                                            animate={{ rotate: clicked1 ? 180 : 0 }}
                                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                            className="h-fit"
                                                        >
                                                            <FaChevronDown size={14} />
                                                        </motion.div>
                                                    </div>
                                                </div>
                                                <>
                                                    <motion.div
                                                        animate={clicked1 ? { height: 'fit-content', pointerEvents: 'auto' } : { height: '0px', pointerEvents: 'none' }}
                                                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                                                        className='w-full overflow-hidden pl-4'>
                                                        {
                                                            Services?.map((a, i) => (
                                                                <p key={i} className='py-2 text-black hover:text-orange transition-all duration-300 ease-linear border-b-[0.60px] border-b-black border-opacity-20'>
                                                                    <Link href={a.href}>{a.name}</Link>
                                                                </p>
                                                            ))
                                                        }
                                                    </motion.div>

                                                </>
                                            </li>
                                            <li className={`2xl:text-base xl:text-sm text-sm font-semibold hover:text-orange transition-all duration-100`}>
                                                <div className='flex items-center justify-between border-b-[0.60px] border-b-black border-opacity-20 py-3'>
                                                    <div>
                                                        Leads
                                                    </div>
                                                    <div className='bg-slate-300 p-1 rounded bg-opacity-45' onClick={() => {
                                                        setClicked2(!clicked2)
                                                        setClicked1(false)
                                                    }}>
                                                        <motion.div
                                                            animate={{ rotate: clicked2 ? 180 : 0 }}
                                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                            className="h-fit"
                                                        >
                                                            <FaChevronDown size={14} />
                                                        </motion.div>
                                                    </div>
                                                </div>
                                                <>
                                                    <motion.div
                                                        animate={clicked2 ? { height: 'fit-content', pointerEvents: 'auto' } : { height: '0px', pointerEvents: 'none' }}
                                                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                                                        className='w-full overflow-hidden pl-4'>
                                                        {
                                                            Leads?.map((s, i) => {
                                                                return (
                                                                    <p key={i} className='py-2 text-black hover:text-orange border-b-[0.60px] border-b-black border-opacity-20 transition-all duration-300 ease-linear'>
                                                                        <Link href={s.href}>{s.name}</Link>
                                                                    </p>
                                                                )
                                                            })
                                                        }
                                                    </motion.div>

                                                </>
                                            </li>
                                            <li className={`2xl:text-base xl:text-sm text-sm hover:text-orange transition-all text-black duration-100 font-bold py-3 border-b-[0.60px] border-b-black border-opacity-20 ${pathname === '/leads' ? 'text-orange' : ''}`}>
                                                <Link href="/leads">Leads</Link>
                                            </li>
                                            <li className={`2xl:text-base xl:text-sm text-sm hover:text-orange transition-all text-black duration-100 font-bold py-3 ${pathname === '/contact' ? 'text-orange' : ''}`}>
                                                <Link href="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='hidden items-center gap-6 2xl:flex xl:flex'>
                            {
                                user ? <div className="flex items-center gap-2">
                                    <div className="md:w-[32px] relative md:h-[32px] w-[20px] h-[20px] rounded-full bg-primary text-white">
                                        <span className="absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 md:text-base text-xs font-normal">{firstLetter}</span>
                                    </div>
                                    {
                                        scrolled &&
                                        <div className='relative' onMouseEnter={() => setMouse2(true)} onMouseLeave={() => setMouse2(false)}>
                                            <div
                                            >
                                                <motion.div
                                                    whileHover='show'
                                                    initial='hidden'
                                                    className={`2xl:text-xl xl:text-base 2xl:h-[60px] xl:h-[60px] text-sm font-semibold h-full hover-color hover:text-orange transition-all duration-100 flex gap-[2px]`}>
                                                    <span className='my-auto'>{userName?.length < 20 ? userName : userName?.slice(0, 16)}...</span>

                                                    <motion.div
                                                        animate={mouse2 ? {
                                                            opacity: 1,
                                                            y: 0,
                                                            pointerEvents: 'auto',
                                                            transition: {
                                                                duration: 0.4, // Animation duration when showing
                                                                delay: 0.2, // Add delay when showing
                                                            },
                                                        }
                                                            :
                                                            {
                                                                opacity: 0,
                                                                y: 40,
                                                                pointerEvents: 'none',
                                                                transition: {
                                                                    duration: 0.3, // Animation duration when hiding
                                                                    delay: 0.1, // Add delay when hiding
                                                                },
                                                            }
                                                        }
                                                        className={`w-[350px] pt-10 px-10 pb-6 absolute top-[60px] bg-white left-0  ${mouse2 ? 'block' : 'hidden'}`}>
                                                        <ul>
                                                            {
                                                                UserDetails.map((s, i) => <li key={i} className='border-b-[0.60px] parent-option border-opacity-30 border-b-gray '>
                                                                    <Option href={s.href}>{s.name}</Option>
                                                                </li>)
                                                            }
                                                            <li onClick={() => handleLogOut()} className='border-b-[0.60px] parent-option border-opacity-30 border-b-gray cursor-pointer text-black'>
                                                                <Option>Log Out</Option>
                                                            </li>
                                                        </ul>
                                                    </motion.div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                    :
                                    <>
                                        <Link href={'/login'}><button className="font-semibold text-xs md:text-base">Sign In</button></Link>
                                        <Link href={'/register'}>
                                            <ButtonPrimary label={'Get Started Free'} />
                                        </Link>
                                    </>
                            }
                            <div className='btn' onClick={() => setOpen(!open)}>
                                <GiHamburgerMenu size={'1.5rem'} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        )
    );
};

export default NavBar;