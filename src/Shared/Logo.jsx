import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/Janitorial.png'


const Logo = () => {
    return (
        <Link href="/" className="btn btn-ghost h-full">
            <Image src={logo} alt="logo" className="w-auto h-[70px]" />
        </Link>
    );
};

export default Logo;