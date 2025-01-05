'use client'
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import PaymentForm from "./PaymentForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Payment({ price, product_Id, closeModal }) {
    const [clientSecret, setClientSecret] = useState("");
    const [dpmCheckerLink, setDpmCheckerLink] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const axiosSecure = useAxiosSecure();


    // useEffect(() => {
    //     const x = new URLSearchParams(window.location.search).get(
    //         "payment_intent_client_secret"
    //     )
    //     setConfirmed(x);
    // });

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        axiosSecure.post("/create-payment-intent", { price: price })
            .then(response => {
                setClientSecret(response.data.clientSecret);
            })
    }, [axiosSecure, price]);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };


    return (
        <div>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <PaymentForm price={price} product_Id={product_Id} dpmCheckerLink={dpmCheckerLink} closeModal={closeModal} />
                </Elements>
            )}
        </div>
    );
}