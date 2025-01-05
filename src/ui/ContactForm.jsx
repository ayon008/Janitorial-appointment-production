'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import FormButton from '@/Shared/FormButton';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const ContactForm = () => {
    // Initialize React Hook Form
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    // Handle form submission
    const onSubmit = (data) => {
        // Show the loading spinner
        Swal.fire({
            title: 'Submitting...',
            text: 'Please wait while your details is being submitted',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        // Post the form data
        axiosPublic.post('/message', data)
            .then((response) => {
                // Hide the loading spinner and show success message
                Swal.fire({
                    icon: 'success',
                    title: 'Submission Successful',
                    text: 'Your details has been successfully submitted!',
                    showConfirmButton: false,
                    timer: 1500,
                });
                reset();
            })
            .catch((error) => {
                // Hide the loading spinner and show error message
                Swal.fire({
                    icon: 'error',
                    title: 'Submission Failed',
                    text: error.response?.data?.message || 'An error occurred during submission',
                });
            });
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='2xl:mt-10 xl:mt-8'>
            <div className='grid grid-cols-2 2xl:gap-6 xl:gap-6 gap-2 items-end'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#0D0D0D] 2xl:text-base xl:text-base">Full Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="input input-bordered rounded-[10px] border border-[#D6D6D6] w-full bg-white"
                        {...register('fullName', { required: true })}
                    />
                    {errors.firstName && <span className="text-red-500">First Name is required</span>}
                </div>
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text text-[#0D0D0D] 2xl:text-base xl:text-base">Company Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Write Company Name"
                        className="input input-bordered rounded-[10px] border border-[#D6D6D6] w-full bg-white"
                        {...register('companyName', { required: true })}
                    />
                    {errors.companyName && <span className="text-red-500">Company name is required</span>}
                </div>
            </div>
            <div className='grid grid-cols-2 2xl:gap-6 xl:gap-6 gap-2 items-end mt-4'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#0D0D0D] 2xl:text-base xl:text-base">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered rounded-[10px] border border-[#D6D6D6] w-full bg-white"
                        {...register('email', { required: true })}
                    />
                    {errors.email && <span className="text-red-500">Email is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#0D0D0D] 2xl:text-base xl:text-base">Phone number</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your phone number"
                        className="input input-bordered rounded-[10px] border border-[#D6D6D6] w-full bg-white"
                        {...register('phoneNumber', { required: true })}
                    />
                    {errors.phoneNumber && <span className="text-red-500">Phone number is required</span>}
                </div>
            </div>
            <div className="form-control mt-4">
                <label className="label">
                    <span className="label-text text-[#0D0D0D] 2xl:text-base xl:text-base">Subject</span>
                </label>
                <input
                    type="text"
                    placeholder="Write subject"
                    className="input input-bordered rounded-[10px] border border-[#D6D6D6] w-full bg-white"
                    {...register('subject', { required: true })}
                />
                {errors.subject && <span className="text-red-500">Subject is required</span>}
            </div>
            <div className="form-control mt-4">
                <label className="label">
                    <span className="label-text text-[#0D0D0D] 2xl:text-base xl:text-base">Your Message</span>
                </label>
                <textarea
                    placeholder="Write here"
                    className="textarea textarea-bordered rounded-[10px] border border-[#D6D6D6] w-full bg-white"
                    rows={4}
                    {...register('message', { required: true })}
                />
                {errors.message && <span className="text-red-500">Message is required</span>}
            </div>
            <div className="form-control 2xl:mt-10 xl:mt-8 mt-6">
                <FormButton label={'Send Message'} width={'w-fit'} />
            </div>
        </form>
    );
};

export default ContactForm;
