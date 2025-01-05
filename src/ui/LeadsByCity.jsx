'use client';

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Table from '@/Shared/Table';

const LeadsByCity = ({ data, states }) => {
    const [city, setCity] = useState('');

    const handleOnChange = (e) => {
        setCity(e.target.value);
    };

    const filteredData = city
        ? data.filter(d =>
            d?.city?.toLowerCase().includes(city?.toLowerCase())
        )
        : data;

    return (
        <div className='w-full'>
            <div className="2xl:w-1/2 xl:w-1/2 w-full mx-auto mt-9">
                <div className="flex justify-center items-start gap-2 w-full">
                    <input
                        onChange={handleOnChange}
                        id="search"
                        type="text"
                        placeholder="Search cities near you"
                        className="input input-bordered bg-white w-3/4 h-[60px] rounded-[10px] border border-[#D0D5DD] shadow-lg"
                    />
                    <button className="btn bg-primary text-white flex items-center h-[60px] w-[20%] rounded-[10px]">
                        <FaSearch className="text-xs xl:text-xl 2xl:text-2xl 2xl:block xl:block hidden" />
                        <span className="inter 2xl:text-base xl:text-base text-sm font-medium">Search</span>
                    </button>
                </div>
            </div>

            {
                data?.length > 0 ?
                    <Table
                        tableHead={['Leads', 'Location', 'Opportunity Type', 'Date', 'Status', 'View Details']}
                        states={states}
                        data={filteredData}
                    />
                    :
                    <div className='my-10'>
                        <h2 className='text-center poppins font-semibold text-2xl'>No leads available in {states}</h2>
                    </div>
            }

        </div>
    );
};

export default LeadsByCity;
