import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "../../components/CheckoutForm";

const Payment = () => {
  const booking = useLoaderData();
  const { treatmentName, date, price, slot } = booking;

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
  return (
    <div>
      <h3 className="text-2xl">Payment for {treatmentName}</h3>
      <p className="text-xl">
        Please pay <strong>${price}</strong> for your appointment on {date} at{" "}
        {slot}
      </p>
      <div className="my-6 shadow-md md:w-96">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
