import { IoMdHand } from "react-icons/io";

const SectionDecision = () => {
    return (
        <div>
            <span className='flex items-center gap-3'>
                <IoMdHand size={'1.5rem'} className="text-yellow-700" /><h3 className="text-bold text-2xl">Hello, Janitorial Appointments</h3>
            </span>
            <p className="text-primary my-4">Your Master List is an accumulation of all the cleaning contracts you have, had, or are interested in having in the future. Any contract you add is for your eyes only.</p>
        </div>
    );
};

export default SectionDecision;