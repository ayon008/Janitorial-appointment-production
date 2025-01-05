import Image from 'next/image';
import image1 from '@/../public/assets/ae5a9cbebaa6017dcdefa834a2cdea79.png'
import image2 from '@/../public/assets/001ce75081008461483bd9b9fad9a083.png'
import image4 from '@/../public/assets/a8f801866d7192f7cdc61bead854d566.png';
import ButtonPrimary from './ButtonPrimary';

const Utilities = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2 md:grid-rows-2 grid-rows-4 grid-cols-1 gap-20 w-fit mx-auto mt-20 mb-40">
                <div className='w-full h-full flex flex-col'>
                    <div className="bg-[#C7F2AB] w-full md:h-[420px] h-[325px] flex flex-col rounded-[20px]">
                        <Image src={image1} className='md:h-[300px] md:w-auto m-auto rounded-[12px] w-[90%] h-[250px]' alt="" />
                    </div>
                    <div className="mt-10 space-y-10">
                        <h3 className="inter font-bold text-2xl">Smart Scrubbers: Cleaning Estimators</h3>
                        <p className="inter text-base font-normal">Empower your bidding process with our intuitive Smart Scrubbers calculators, designed to simplify pricing complexities and help you efficiently generate competitive proposals that secure contracts</p>
                    </div>
                    <div className="mt-auto">
                        <ButtonPrimary href={'/my-subscription'} label={'Get start for free'} />
                    </div>
                </div>
                <div className='w-full h-full flex flex-col'>
                    <div className="bg-[#C7F2AB] w-full md:h-[420px] h-[325px] flex flex-col rounded-[20px]">
                        <Image src={image2} className='h-[241px] md:h-[264px] m-auto md:w-auto w-[90%] rounded-[12px]' alt="" />
                    </div>
                    <div className="mt-10 mb-10 space-y-10">
                        <h3 className="inter font-bold text-2xl">Opportunity Nexus: Cleaning Project Manager</h3>
                        <p className="inter text-base font-normal">Your all-in-one solution for effortlessly tracking every cleaning opportunity, whether new, nostalgic, or on the horizon, keeping your bids organized and your business thriving-all neatly organized in one intuitive platform</p>
                    </div>
                    <div className="mt-auto">
                        <ButtonPrimary href={'/my-subscription'} label={'Get start for free'} />
                    </div>
                </div>
                <div className='w-full h-full flex flex-col'>
                    <div className="bg-[#C7F2AB] w-full md:h-[420px] h-[325px] flex flex-col rounded-[20px]">
                        <Image src={image2} className='md:h-[264px] h-[240px] m-auto md:w-auto w-[90%] rounded-[12px]' alt="" />
                    </div>
                    <div className="mt-10 space-y-10">
                        <h3 className="inter font-bold text-2xl">Lead Forge: Custom Lead Generator</h3>
                        <p className="inter text-base font-normal">Organize and nurture your client prospects with Lead Lists. We seamlessly integrates with your email, automating outreach with customizable templates to engage a wide range of potential clients effortlessly</p>
                    </div>
                    <div className="mt-auto">
                        <ButtonPrimary href={'/my-subscription'} label={'Get start for free'} />
                    </div>
                </div>
                <div className='w-full h-full flex flex-col'>
                    <div className="bg-[#C7F2AB] w-full md:h-[420px] h-[325px] flex flex-col rounded-[20px]">
                        <Image src={image4} className='md:h-[312px] h-[250px] md:w-auto w-[90%] m-auto rounded-[12px]' alt="" />
                    </div>
                    <div className="mt-10 space-y-10">
                        <h3 className="inter font-bold text-2xl">Inbox Opportunities: Personalized Alerts</h3>
                        <p className="inter text-base font-normal">Stay updated with prompt email notifications sent directly to your inbox whenever new cleaning opportunities are posted on our platform, ensuring you never miss a chance to capitalize on the latest leads</p>
                    </div>
                    <div className="mt-auto">
                        <ButtonPrimary href={'/my-subscription'} label={'Get start for free'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Utilities;