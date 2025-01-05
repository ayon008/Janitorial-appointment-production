import React from 'react';

const SelectField = ({ label, placeholder, type, register, name, errors }) => {
    return (
        <>
            <div className="form-control relative">
                <label className="label absolute bg-white left-[2%] -top-[50%]">
                    <span className="label-text text-primary font-normal text-base poppins">{label}</span>
                </label>
                <select
                    {...register(name, { required: `${label} is required` })}
                    className={`select select-bordered rounded-[10px] bg-white border ${errors[name] ? 'border-red-500' : 'border-[#5C6272]'}`}>
                    <option value={null} className="text-[#666968] poppins text-lg" selected disabled>{placeholder}</option>

                    {type.map(t => (
                        <option key={t} className="text-[#666968] poppins text-lg" value={t}>{t}</option>
                    ))}
                </select>
            </div>
            {errors[name] && <p className="text-red-500 text-sm">{errors[name]?.message}</p>}
        </>
    );
};

export default SelectField;
