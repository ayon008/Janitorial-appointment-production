import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "./Logo";
import ButtonSecondary from "@/ui/ButtonSecondary";
import SubscribeEmail from "@/ui/SubscribeEmail";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#EBF1EC] text-base-content 2xl:px-10 xl:px-10 px-6 py-16 justify-between max-w-[1920px] mx-auto">
            <div className="flex 2xl:flex-row xl:flex-row flex-col 2xl:justify-between 2xl:items-start xl:justify-between xl:items-start justify-start items-start 2xl:gap-0 xl:gap-0 gap-10">
                <Logo />
                <div className="flex md:flex-row flex-col items-center md:gap-7 gap-4">
                    <p className="text-base font-medium inter">Ready to get started?</p>
                    <ButtonSecondary label={'Get Started'} href={'/register'} userHref={'/my-subscription'} />
                </div>
            </div>
            <div className="flex 2xl:flex-row xl:flex-row flex-col 2xl:justify-between xl:justify-between 2xl:items-end xl:items-end justify-center">
                <aside>
                    <div className="my-20">
                        <h3 className="text-2xl inter font-bold">
                            Subscribe to our <br />
                            newsletter
                        </h3>
                        <SubscribeEmail />
                    </div>
                    <div className="flex 2xl:flex-row xl:flex-row flex-col 2xl:items-center xl:items-center items-start 2xl:gap-14 xl:gap-14 gap-6">
                        <Link href={'/term&condition'} className="font-medium text-base inter">Terms & Conditions</Link>
                        <Link href={'/privacy'} className="font-medium text-base inter">Privacy Policy</Link>
                    </div>
                </aside>
                <aside className="w-fit 2xl:mt-0 xl:mt-0 mt-10">
                    <div className="flex items-center gap-10">
                        <Link href="/facebook">
                            <FaFacebook color="#246532" size={'1.5rem'} />
                        </Link>
                        <Link href="/twitter">
                            <FaTwitter color="#246532" size={'1.5rem'} />
                        </Link>
                        <Link href="/instagram">
                            <FaInstagram color="#246532" size={'1.5rem'} />
                        </Link>
                    </div>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;