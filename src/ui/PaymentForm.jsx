import React, { useEffect, useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import useAuth from "@/Hooks/useAuth";
import Swal from "sweetalert2";
import { FaStripe } from "react-icons/fa";
import useAxiosSecure from "@/Hooks/useAxiosSecure";

export default function PaymentForm({ dpmCheckerLink, product_Id, closeModal }) {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [status, setStatus] = useState("default");
    const [intentId, setIntentId] = useState(null);
    const axiosSecure = useAxiosSecure();

    const close = () => {
        return closeModal();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return; // Stripe.js hasn't yet loaded.
        }
        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/',
                receipt_email: user?.email,
            },
            redirect: redirect ? "always" : 'if_required' // Prevent redirect for now, handle it manually.
        });

        if (error) {
            setMessage(error.message);
            setIsLoading(false);
        }
        else if (paymentIntent && paymentIntent.status === "succeeded") {
            setIsLoading(false);
            setMessage('Your payment has been processed successfully.');
            close();
            e.target.reset();
            Swal.fire({
                title: "Payment Successful!",
                text: "Your payment has been processed successfully.",
                icon: "success",
                confirmButtonText: "OK",
            });
            try {
                await axiosSecure.post('/purchasedData', {
                    paymentIntentId: paymentIntent.id,
                    userId: user?.uid,
                    email: user?.email,
                    product_Id,
                    amount: paymentIntent.amount,
                    status: paymentIntent.status,
                    time: new Date(),
                    currency: 'usd'
                })
                setRedirect(true);
            } catch (postError) {
                console.error("Error posting payment data:", postError);
            }
        } else {
            setMessage("Unexpected status: " + paymentIntent?.status);
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs"
    };

    useEffect(() => {
        if (!stripe) return;

        if (typeof window !== "undefined") {
            const clientSecret = new URLSearchParams(window.location.search).get(
                "payment_intent_client_secret"
            );

            if (!clientSecret) return;

            stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
                if (!paymentIntent) return;
                setIntentId(paymentIntent.id);
            });
        }

    }, [stripe]);

    return (
        <>
            <form id="payment-form" onSubmit={handleSubmit}>
                <p className="my-2 text-[8px] text-gray-400">
                    You are going to receive your invoice <span className="poppins font-semibold">{user?.email}</span>
                </p>
                <PaymentElement id="payment-element" options={paymentElementOptions} />
                <button className="rounded-lg btn bg-primary text-white my-3" disabled={isLoading || !stripe || !elements} id="submit">
                    <span id="button-text">
                        {isLoading ? <div className="spinner text-white" id="spinner">Processing...</div> : "Pay now"}
                    </span>
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message" className={`${message === 'Your payment has been processed successfully.' ? 'text-green-600' : 'text-red-500'}`}>{message}</div>}
            </form>
            <div id="dpm-annotation">
                <p className="w-fit ml-auto mt-2 flex items-center gap-2 poppins font-semibold text-gray-500">
                    <span>Powered By</span> <FaStripe size={'2rem'} />
                </p>
            </div>
        </>
    );
}
