import Link from "next/link";

const DashboardCard = ({ Icon, title, description, iconMargin, size, href }) => (
    <div className='h-full'>
        <Link href={href || ''} className='bg-[#C7F2AB] cursor-pointer px-6 py-5 rounded-[20px] flex items-start gap-3 h-full'>
            <div className={`mt-[${iconMargin}]`}>
                <Icon size={size} />
            </div>
            <div>
                <h3 className='font-bold text-xs'>{title}</h3>
                <p className='poppins text-xs'>{description}</p>
            </div>
        </Link>
    </div>
);

export default DashboardCard;