import React from 'react';

const InputField = ({ label, type, placeholder, register, name, errors, disabled }) => {
    return (
        <>
            <div className="form-control relative">
                <label className="label absolute bg-white left-[2%] -top-[50%]">
                    <span className="label-text text-primary font-normal text-base poppins">{label}</span>
                </label>
                <input
                    type={type}
                    min={type === "number" && 1}
                    placeholder={placeholder}
                    disabled={disabled}
                    {...register(name, { required: `${label} is required` })}
                    className={`input input-bordered rounded-[10px] bg-white border ${errors[name] ? 'border-red-500' : 'border-[#5C6272]'}`}
                />
            </div>
            {errors[name] && <p className="text-red-500 text-sm">{errors[name]?.message}</p>}
        </>
    );
};

export default InputField;
