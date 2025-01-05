import Link from 'next/link';
import TickCircle from './TickCircle';

const pricingPlans = [
    {
        title: "Free",
        description: "Free To Start",
        price: "$0",
        priceUnit: "/year",
        features: [
            "View 1 cleaning opportunity per 30 days.",
            "Find contact information for decision makers.",
            "Find contact information for local businesses.",
            "Make solicitations to find subcontractors.",
            "Cleaning opportunities sent to your inbox.",
            "Create 1 Lead List with up to 45 total leads.",
            "Store & manage up to 3 cleaning contracts",
            "Calculate your bid numbers with our cleaning calculators"
        ],
        buttonLabel: "Start Now",
        buttonClass: "btn-outline hover:bg-green-700 hover:text-white",
        containerClass: "bg-white",
        priceClass: "text-6xl font-bold",
        priceUnitClass: "text-gray-500 font-semibold text-base",
        descriptionClass: "nunito text-xs font-normal"
    },
    {
        title: "Professional Plan",
        description: "Advanced Features for Power Users",
        price: "$100",
        priceUnit: "/year",
        discount: "Saved 20%! Annual Billing",
        features: [
            "View unlimited cleaning opportunities.",
            "Contact information for decision makers and local businesses.",
            "Create unlimited Lead Lists with unlimited leads.",
            "Put lead lists on autopilot.",
            "Add Follow Up Flows to Lead Lists.",
            "Email Verifier.",
            "Store & manage unlimited cleaning opportunities/solicitations.",
            "Create unlimited solicitations.",
            "10% off all Exclusive Leads!",
            "Instant Notifications when an Exclusive Lead or LayUp is posted."
        ],
        buttonLabel: "Start Now",
        buttonClass: "text-black bg-white hover:bg-green-700 hover:text-white",
        containerClass: "bg-primary",
        priceClass: "text-6xl font-bold text-white",
        priceUnitClass: "font-semibold text-base text-white",
        descriptionClass: "nunito text-xs font-normal text-white"
    },
    {
        title: "Essential Plan",
        description: "Affordable and Reliable",
        price: "$60",
        priceUnit: "/bi-annually",
        discount: "Billed every 6 months",
        features: [
            "View unlimited cleaning opportunities.",
            "Contact information for decision makers and local businesses.",
            "Create unlimited Lead Lists with unlimited leads.",
            "Put lead lists on autopilot.",
            "Add Follow Up Flows to Lead Lists.",
            "Email Verifier.",
            "Store & manage unlimited cleaning opportunities/solicitations.",
            "Create unlimited solicitations.",
            "10% off all Exclusive Leads!",
            "Instant Notifications when an Exclusive Lead or LayUp is posted."
        ],
        buttonLabel: "Start Now",
        buttonClass: "btn-outline hover:bg-green-700 hover:text-white",
        containerClass: "bg-white",
        priceClass: "text-6xl font-bold",
        priceUnitClass: "text-gray-500 font-semibold text-base",
        descriptionClass: "nunito text-xs font-normal"
    }
];

const Pricing = () => {
    return (
        <div className='md:px-10 px-6 grid md:grid-cols-3 grid-cols-1 gap-6 md:mt-36 mt-16'>
            {pricingPlans.map((plan, index) => (
                <div key={index} className={`rounded-[30px] py-12 px-10 ${plan.containerClass}`}>
                    <h3 className={`text-2xl font-medium nunito ${plan.containerClass === 'bg-white' ? '' : 'text-white'}`}>{plan.title}</h3>
                    <small className={`nunito text-xs font-normal ${plan.containerClass === 'bg-white' ? '' : 'text-white'}`}>{plan.description}</small>
                    <div className='mt-10'>
                        <small className={`nunito text-xs font-normal ${plan.containerClass === 'bg-white' ? '' : 'text-white'}`}>Starting from</small>
                        <div>
                            <span className={` ${plan.priceClass} inter`}>{plan.price}</span>
                            <span className={` ${plan.priceUnitClass}`}>{plan.priceUnit}</span>
                        </div>
                        {plan.discount && <p className={`text-sm nunito ${plan.containerClass === 'bg-white' ? '' : 'text-white'}`}>{plan.discount}</p>}
                    </div>
                    <div className='mt-7 space-y-6'>
                        {plan.features.map((feature, index) => (
                            <div key={index} className='flex items-center gap-2'>
                                <TickCircle />
                                <p className={`text-base nunito font-normal ${plan.containerClass === 'bg-white' ? '' : 'text-white'}`}>{feature}</p>
                            </div>
                        ))}
                        <div>
                            <Link href={'/my-subscription'}>
                                <button className={`btn ${plan.buttonClass} font-semibold w-full`}>{plan.buttonLabel}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Pricing;
