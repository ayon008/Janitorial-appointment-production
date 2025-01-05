'use client'
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const SubscribeEmail = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const onSubmit = data => {
        Swal.fire({
            title: 'Processing...',
            text: 'Please wait while we submit your email',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        axiosPublic.post('/subscribedEmail', data)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Subscribed!',
                    text: 'You have subscribed to our newsletter'
                });
                reset();
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Something went wrong, please try again later.'
                });
            });
    };

    return (
        <fieldset className="form-control w-80 mt-7">
            <form className="join" onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                    name="email"
                    type="text"
                    placeholder="Email Address"
                    className="input input-bordered join-item rounded-none border-b-[rgba(29,30,37,0.1)] focus:border-b-black focus:border-b-2 focus:outline-none border-t-0 border-l-0 border-r-0 bg-[#EBF1EC]"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                <button type="submit" className="btn bg-primary text-white join-item rounded-none">Subscribe</button>
            </form>
        </fieldset>
    );
};

export default SubscribeEmail;
