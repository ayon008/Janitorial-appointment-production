'use client'
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { usStates } from '@/js/states';
import GetSingleLead from '@/lib/GetAllLeadsById';
import FormButton from '@/Shared/FormButton';
import InputField from '@/Shared/InputField';
import SelectField from '@/Shared/SelectField';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Modal = ({ id }) => {
    const { user } = useAuth();
    const { singleLeads, refetch } = GetSingleLead(id);
    console.log(singleLeads);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: singleLeads, // Set default values from singleLeads
    });

    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        if (singleLeads) {
            reset(singleLeads); // Update form values with lead data
        }
    }, [singleLeads, reset]);


    const onSubmit = async (data) => {
        // Show the loading Swal when the form is submitted
        Swal.fire({
            title: 'Submitting...',
            text: 'Please wait while we process your request.',
            icon: 'info',
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading(); // Start loading indicator
            }
        });
        await axiosSecure.patch(`/leads/${id}`, data)
            .then(response => {
                // If the request is successful, show success Swal
                Swal.fire({
                    title: 'Success!',
                    text: 'Lead has been updated successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                refetch();
            })
            .catch(error => {
                // If there is an error, show error Swal
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an issue submitting the lead. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    };

    return (
        <div className=''>
            <div className=''>
                <div className='2xl:mt-24 xl:mt-16 mt-10'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-10'>
                            <div>
                                <div className="form-control relative">
                                    <label className="label absolute bg-white left-[2%] -top-[50%]">
                                        <span className="label-text text-primary font-normal text-base poppins">Lead Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter lead name"
                                        {...register('leadName')}
                                        className={`input input-bordered rounded-[10px] bg-white border border-[#5C6272]`}
                                    />
                                </div>
                            </div>
                            <div>
                                <InputField
                                    label={'Business Name'}
                                    placeholder={'Enter decision maker business name'}
                                    type={'text'}
                                    register={register}
                                    name={'businessName'}
                                    errors={errors}
                                />
                            </div>
                            <div className='col-start-1 row-start-5'>
                                <InputField
                                    label={'Appointment Time'}
                                    placeholder={'8.45 Pm'}
                                    type={'time'}
                                    register={register}
                                    name={'time'}
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <SelectField
                                    label={'State'}
                                    placeholder={'Enter your state'}
                                    type={usStates}
                                    register={register}
                                    name={'states'}
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <InputField
                                    label={'City'}
                                    placeholder={'New York City'}
                                    type={'text'}
                                    register={register}
                                    name={'city'}
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <InputField
                                    label={'Location'}
                                    placeholder={'Oakley Avenue, Hammond, IN'}
                                    type={'text'}
                                    register={register}
                                    name={'location'}
                                    errors={errors}
                                />
                            </div>
                            <div className='col-start-1 row-start-2'>
                                <InputField
                                    placeholder={'Enter first name of decision maker'}
                                    label={'First Name'}
                                    type={'text'}
                                    register={register}
                                    name={'firstName'}
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <InputField
                                    label={'Total cleanable area (sq/ft)'}
                                    placeholder={'Enter cleanable area in sq/ft'}
                                    type={'number'}
                                    register={register}
                                    name={'area'}
                                    errors={errors}
                                />
                            </div>
                            <div className='col-start-1 row-start-3'>
                                <div className="form-control relative">
                                    <label className="label absolute bg-white left-[2%] -top-[50%]">
                                        <span className="label-text text-primary font-normal text-base poppins">Last Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your last name"
                                        {...register('lastName')}
                                        className={`input input-bordered rounded-[10px] bg-white border border-[#5C6272]`}
                                    />
                                </div>
                            </div>
                            <div className=''>
                                <div className="form-control relative">
                                    <label className="label absolute bg-white left-[2%] -top-[50%]">
                                        <span className="label-text text-primary font-normal text-base poppins">Phone Number</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        {...register('phoneNumber')}
                                        className={`input input-bordered rounded-[10px] bg-white border border-[#5C6272]`}
                                    />
                                </div>
                            </div>
                            <div>
                                <InputField
                                    label={'Opportunity Type'}
                                    placeholder={'Enter Opportunity Type (standard or non-standard'}
                                    type={'text'}
                                    register={register}
                                    name={'opportunityType'}
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <InputField
                                    label={'Type'}
                                    placeholder={'Office,Restaurant'}
                                    type={'text'}
                                    register={register}
                                    name={'type'}
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <div className="form-control relative">
                                    <label className="label absolute bg-white left-[2%] -top-[50%]">
                                        <span className="label-text text-primary font-normal text-base poppins">Scope</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="General Cleaning - Vacuum, dust, mop and clean bathrooms, etc."
                                        {...register('scope')}
                                        className={`input input-bordered rounded-[10px] bg-white border border-[#5C6272]`}
                                    />
                                </div>
                            </div>
                            <div>
                                <InputField
                                    label={'Frequency'}
                                    placeholder={'1 day/week (weekends)'}
                                    type={'text'}
                                    register={register}
                                    name={'frequency'}
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <InputField
                                    label={'Cleaning'}
                                    placeholder={'Outsourced'}
                                    type={'text'}
                                    register={register}
                                    name={'cleaning'}
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <SelectField
                                    label={'Category'}
                                    placeholder={'Pick Category'}
                                    type={['exclusive-leads', 'layUps', 'opportunities']}
                                    register={register}
                                    name={'category'}
                                    errors={errors}
                                />
                            </div>
                            <div className='row-span-4'>
                                <div className="form-control relative">
                                    <label className="label absolute bg-white left-[2%] -top-[8%]">
                                        <span className="label-text text-primary font-normal text-base poppins">Additional Details</span>
                                    </label>
                                    <textarea
                                        type='text'
                                        placeholder={'Please enter any additional necessary details'}
                                        rows={8}
                                        className="textarea textarea-bordered textarea-md w-full rounded-[10px] bg-white border border-[#5C6272] resize-none"
                                        {...register('additionalDetails')}
                                    ></textarea>
                                </div>
                            </div>
                            <div className='col-start-1 row-start-4'>
                                <InputField
                                    label={'Appointment Date'}
                                    placeholder={'28/10/2024'}
                                    type={'date'}
                                    register={register}
                                    name={'date'}
                                    errors={errors}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Listen Audio</span>
                                </label>
                                <audio src={singleLeads?.audio} controls />
                            </div>
                            <div className='2xl:block xl:block hidden'></div>
                            <div className='2xl:block xl:block hidden'></div>
                            <FormButton label={'Submit'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;