import { useState } from "react";
import PageTitle from "./PageTitle";

const DecisionMaker = ({ name }) => {
    
    const [color, setColor] = useState(false);
    const [color2, setColor2] = useState(false);
    const states = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
        'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
        'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
        'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    return (
        <div className="mt-20 px-20">
            <PageTitle name={name} />
            <p className="text-primary text-center text-xl mt-10">Search for a decision maker near you.</p>
            <p className="text-lg text-center">Verified emails have been double validated. Unverified emails are catch-all emails that may or may not work.</p>
            <p className="text-lg text-center text-red-600">(currently only works for AZ, CA, CO, FL, GA, IL, KY, MI, NC, NJ, NV, NY, OH, OK, PA, SC, TN, TX, UT, and VA. MA coming soon.)</p>
            <form className="w-full">
                <div className="mt-10 grid grid-cols-4 gap-3">
                    <select onClick={() => setColor(!color)} className={`p-2 border-2 border-gray-200 w-full max-w-xs ${color ? 'text-primary' : 'text-black'}`}>
                        <option disabled selected>Search By</option>
                        <option>Company Name</option>
                        <option>First Name</option>
                        <option>Last Name</option>
                    </select>
                    <input type="text" className="w-full max-w-xs p-[6px] border-2 border-gray-200" placeholder="Enter the company or deci" />
                    <input type="text" className="w-full max-w-xs p-[6px] border-2 border-gray-200" placeholder="City" />
                    <select onClick={() => setColor2(!color2)} className={`p-2 border-2 border-gray-200 w-full max-w-xs ${color2 ? 'text-primary' : 'text-black'}`}>
                        <option disabled selected>Pick a State</option>
                        {
                            states.map((state, i) => {
                                return (
                                    <option key={i}>{state}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="w-3/4 mt-10 mx-auto form-control">
                    <input type="submit" className="btn w-full bg-blue-400 text-white font-semibold rounded-md text-lg" value="Search" />
                </div>
            </form>
        </div>
    );
};

export default DecisionMaker;