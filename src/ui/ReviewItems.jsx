import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ReviewItems = ({ d }) => {
    return (
        <div className='space-y-6 p-6'>
            <div>
                <h3 className='text-xl font-semibold mb-2'>{d.companyName}</h3>
                <p className='text-base inter text-[#707070]'>{d.text}</p>
            </div>
            <div className='flex items-center gap-2'>
                <div>
                    <Image src={d?.image} alt="author" />
                </div>
                <div>
                    <h3 className='font-semibold text-lg'>
                        {d.author}
                    </h3>
                    <p className='text-primary text-sm'>{d.authorDesignation}</p>
                    <div className='mt-1'>
                        <Rating
                            readonly
                            fullSymbol={<FaStar className="text-blue-500" />}
                            emptySymbol={<FaStar className="text-gray-400" />}
                            initialRating={d.rating}
                            style={{ maxWidth: 120, margin: 'auto' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;