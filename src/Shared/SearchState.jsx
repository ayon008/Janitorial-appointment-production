'use client';
import { usStates } from '@/js/states';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchState = ({ leads, data }) => {
    const router = useRouter();
    const [inputValue, setInputValue] = useState('');

    const filteredData = (state) => {
        return data?.filter(d => d.states === state)?.length;
    };

    // Memoize filtered states to avoid recalculating on every render
    const filteredStates = useMemo(() => {
        if (!inputValue) return [];
        return usStates.filter(state =>
            state.toLowerCase().includes(inputValue.toLowerCase())
        );
    }, [inputValue]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && filteredStates.length > 0) {
            router.push(`${leads}/${filteredStates[0]}`);
        }
    };

    const handleSearchClick = () => {
        if (filteredStates.length > 0) {
            router.push(`${leads}/${filteredStates[0]}`);
        }
    };

    return (
        <div className="2xl:w-1/2 xl:w-1/2 w-full mx-auto">
            <div className="flex items-start gap-2">
                <input
                    id="search"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder={`Find ${leads ? leads : 'leads'} by state`}
                    className="input input-bordered bg-white w-[75%] h-[60px] rounded-[10px] border border-[rgb(208,213,221)] shadow-lg"
                    aria-label={`Search ${leads ? leads : 'leads'} by state`}
                />
                <button
                    onClick={handleSearchClick}
                    className="btn bg-primary text-white flex items-center h-[60px] w-[20%] rounded-[10px]"
                    aria-label={`Search ${leads ? leads : 'leads'}`}
                >
                    <FaSearch size={'1rem'} className='2xl:block xl:block hidden' />
                    <span className="inter 2xl:text-base xl:text-base text-xs font-medium">Search</span>
                </button>
            </div>
            {inputValue.length > 1 && (
                <ul className="mt-6">
                    {filteredStates.length ? (
                        filteredStates.map((state) => (
                            <Link key={state} href={`${leads}/${state}`}>
                                <li className='p-3 border-b-2 hover:bg-[#F7F8F9] rounded'>
                                    <h3 className="poppins text-base font-medium">{state}</h3>
                                    <p className="text-[#64748B] font-semibold poppins text-xs mt-2">
                                        {filteredData(state) || 0}
                                    </p>
                                </li>
                            </Link>
                        ))
                    ) : (
                        <li className='p-3 text-gray-500'>No states found</li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default SearchState;
